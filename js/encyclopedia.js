document.addEventListener('DOMContentLoaded', function () {
    if (typeof UserManager !== 'undefined') {
        UserManager.init();
    }

    const container = document.getElementById('encyclopedia-container');
    const currentUser = UserManager.currentUser;
    let userStats = {};

    if (currentUser) {
        userStats = JSON.parse(localStorage.getItem('bucket_stats_' + currentUser) || "{}");
    }

    // 1. データを「カテゴリ > テーマ」の階層に自動整理する
    // 1. データを「カテゴリ > テーマ」の階層に整理する（HOME画面と同じ順番にする）
    const groupedData = {};

    // ① まず、theme_templates.js に定義されている「正しい順番」で空の箱（カテゴリとテーマ）を用意する
    if (typeof categories !== 'undefined') {
        for (const catName in categories) {
            groupedData[catName] = {};
            for (const themeName in categories[catName]) {
                groupedData[catName][themeName] = [];
            }
        }
    }

    // ② 用意した箱の中に、問題データ（short_questions）を振り分けて入れていく
    for (let i = 0; i < short_questions.length; i++) {
        let q = short_questions[i];
        // ※万が一、templatesに無い新カテゴリの問題があった時のための安全策
        if (!groupedData[q.category]) groupedData[q.category] = {};
        if (!groupedData[q.category][q.theme]) groupedData[q.category][q.theme] = [];

        groupedData[q.category][q.theme].push(q);
    }

    // 2. 整理されたデータからHTML（図鑑）を組み立てる
    let isFirstCategory = true; // 💡【追加】一番上だけを開くためのフラグ

    for (const category in groupedData) {
        // 💡【追加】カテゴリ内の総問題数と習得数（緑・金）を計算
        let catTotal = 0;
        let catMastered = 0;
        for (const theme in groupedData[category]) {
            const qs = groupedData[category][theme];
            catTotal += qs.length;
            qs.forEach(q => {
                let stat = userStats[UserManager.generateId(q)] || { correct: 0, incorrect: 0 };
                if (stat.correct >= 1) catMastered++;
            });
        }

        // 💡【変更】大見出し（カテゴリ）を <section> から <details> へ
        const catSection = document.createElement('details');
        catSection.className = 'encyclo-category';
        catSection.style.marginBottom = "15px";

        // 一番最初のカテゴリだけ初期状態で開いておく
        if (isFirstCategory) {
            catSection.open = true;
            isFirstCategory = false;
        }

        // 💡【変更】見出しを <summary> にする（クリック可能にする）
        catSection.innerHTML = `<summary class="cat-title" style="cursor: pointer; padding: 10px; background-color: #eee; font-weight: bold; border-left: 4px solid #333; outline: none;">
            ${category} <span style="font-size: 0.85em; font-weight: normal; margin-left: 10px; color: #555;">(習得 ${catMastered} / 全 ${catTotal} 問)</span>
        </summary>`;

        // カテゴリの中身（テーマ群）をまとめる枠
        const catContent = document.createElement('div');
        catContent.style.padding = "5px 0 5px 10px"; // 少し右にズラして階層を表現

        for (const theme in groupedData[category]) {
            // 💡【変更】中見出し（テーマ）も <details> にして入れ子にする
            let themeTotal = groupedData[category][theme].length;
            let themeMastered = 0;
            groupedData[category][theme].forEach(q => {
                let stat = userStats[UserManager.generateId(q)] || { correct: 0, incorrect: 0 };
                if (stat.correct >= 1) themeMastered++;
            });

            const themeSection = document.createElement('details');
            themeSection.className = 'encyclo-theme';
            themeSection.style.marginBottom = "10px";

            // 💡【変更】見出しに計算した問題数を表示
            themeSection.innerHTML = `<summary class="theme-title" style="cursor: pointer; font-weight: bold; border-bottom: 1px dashed #ccc; padding-bottom: 5px; outline: none;">
                ${theme} <span style="font-size: 0.85em; font-weight: normal; margin-left: 10px; color: #666;">(習得 ${themeMastered} / 全 ${themeTotal} 問)</span>
            </summary>`;

            // カードを並べるグリッド
            const cardGrid = document.createElement('div');
            cardGrid.className = 'card-grid';
            cardGrid.style.paddingTop = "15px";

            const questionsInTheme = groupedData[category][theme];

            for (let j = 0; j < questionsInTheme.length; j++) {
                let q = questionsInTheme[j];
                let qId = UserManager.generateId(q);
                let stat = userStats[qId] || { correct: 0, incorrect: 0 };

                let isUnattempted = (stat.correct === 0 && stat.incorrect === 0);
                let cardClass = "card-unattempted";
                let badgeText = "未着手";

                // 成績によるクラス分け（金・緑・赤）
                if (!isUnattempted) {
                    if (stat.correct >= 5) {
                        cardClass = "card-gold";
                        badgeText = "完全習得";
                    } else if (stat.correct >= 1) {
                        cardClass = "card-green";
                        badgeText = "習得中";
                    } else {
                        cardClass = "card-red";
                        badgeText = "要復習";
                    }
                }

                // カードの生成（ここは以前のまま）
                const card = document.createElement('div');
                card.className = `encyclo-card ${cardClass}`;
                // 💡【追加】後でフィルター機能に使うためのデータ属性を埋め込んでおく
                card.setAttribute('data-status', cardClass);
                card.innerHTML = `
                    <div class="card-header">
                        <span class="q-id">Q${q.id}</span>
                        <span class="badge ${cardClass}">${badgeText}</span>
                    </div>
                    <div class="card-stats">
                        <span style="color:#2e7d32;">⭕ ${stat.correct}</span> / 
                        <span style="color:#c62828;">❌ ${stat.incorrect}</span>
                    </div>
                    <div class="card-desc">${q.subtheme}</div>
                `;

                // （中略：モーダルを開くイベント部分は全く同じなのでそのまま残してください）
                card.addEventListener('click', function () {
                    const modal = document.getElementById('explanation_modal');
                    const title = document.getElementById('modal_title');
                    const body = document.getElementById('modal_body');

                    // 1. タイトルの設定
                    title.innerText = `Q${q.id}：${q.subtheme}`;

                    // 2. モーダルの中身（HTML）をストイックに組み立てる
                    // ※長文でも読めるように max-height と overflow-y を設定
                    let html = `
                        <div class="modal-scroll-area">
                            <div id="problem_side" style="border: none; padding: 0; width: 100%; margin-bottom: 30px;">
                                <pre class="question-text">${q.text}</pre>
                    `;

                    // 例（example）があれば追加
                    if (q.example) {
                        html += `
                            <div class="question-example">
                                ${q.example}
                            </div>
                        `;
                    }

                    // コードブロックと解説の追加
                    html += `
                                <div class="code_container">
                                    <div id="code_display" style="text-align:left">${q.code}</div>
                                </div>
                            </div>
                            
                            <div id="answer_side" style="width: 100%;">
                                <div class="explanation-content" style="margin-bottom: 0;">
                                    <h3 class="explanation-title">解説</h3>
                                    <div class="specific-box">
                                        ${q.specific_explanation}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    body.innerHTML = html;
                    modal.style.display = 'flex'; // アニメーションなしで即時表示
                });

                cardGrid.appendChild(card);
            }

            themeSection.appendChild(cardGrid);
            catContent.appendChild(themeSection); // カテゴリ枠の中にテーマ枠を入れる
        }
        catSection.appendChild(catContent);
        container.appendChild(catSection);
    }

    // 💡【追加】モーダルを閉じる処理
    const closeModalBtn = document.getElementById('close_modal_btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            document.getElementById('explanation_modal').style.display = 'none';
        });
    }

    // （おまけ）モーダルの黒い背景部分をクリックしても閉じるようにする
    const modalBackground = document.getElementById('explanation_modal');
    if (modalBackground) {
        modalBackground.addEventListener('click', function (event) {
            // モーダルのコンテンツ部分ではなく、外側の黒背景がクリックされた時だけ閉じる
            if (event.target === modalBackground) {
                modalBackground.style.display = 'none';
            }
        });
    }

    // 💡【変更】フィルター（絞り込み・並び替え）機能のロジック
    const filterBtns = document.querySelectorAll('.filter-btn');

    // 親コンテナで order (並び替え) を有効にするためのストイックな下準備
    const encycloContainer = document.getElementById('encyclopedia-container');
    encycloContainer.style.display = 'flex';
    encycloContainer.style.flexDirection = 'column';

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // 1. ボタンの白黒（アクティブ状態）を切り替え
            filterBtns.forEach(b => {
                b.style.backgroundColor = '#fff';
                b.style.color = '#333';
                b.style.fontWeight = 'normal';
            });
            this.style.backgroundColor = '#333';
            this.style.color = '#fff';
            this.style.fontWeight = 'bold';

            const targetStatus = this.getAttribute('data-filter');

            // 2. カテゴリごとに判定と並び替えを行う
            document.querySelectorAll('.encyclo-category').forEach(cat => {
                let catHasMatch = false;

                // カテゴリ内の枠も flex にして並び替え可能にする
                const catContent = cat.querySelector('div');
                if (catContent) {
                    catContent.style.display = 'flex';
                    catContent.style.flexDirection = 'column';
                }

                cat.querySelectorAll('.encyclo-theme').forEach(theme => {
                    let themeHasMatch = false;

                    // テーマ内のカードグリッドも並び替え可能にする
                    const cardGrid = theme.querySelector('.card-grid');
                    if (cardGrid) {
                        cardGrid.style.display = 'flex';
                        cardGrid.style.flexWrap = 'wrap';
                    }

                    // ① カードの透過と並び替え
                    theme.querySelectorAll('.encyclo-card').forEach(card => {
                        if (targetStatus === 'all' || card.classList.contains(targetStatus)) {
                            card.style.order = "1";       // 上に持ってくる
                            card.style.opacity = "1";     // くっきり表示
                            themeHasMatch = true;
                            catHasMatch = true;
                        } else {
                            card.style.order = "2";       // 下に追いやる
                            card.style.opacity = "0.25";  // 💡薄くする（25%の濃さ）
                        }
                    });

                    // ② テーマ（中見出し）の透過と並び替え
                    if (themeHasMatch || targetStatus === 'all') {
                        theme.style.order = "1";
                        theme.style.opacity = "1";
                        if (targetStatus !== 'all') theme.open = true; // 該当があれば自動で開く
                    } else {
                        theme.style.order = "2";
                        theme.style.opacity = "0.4"; // 該当しないテーマ枠全体を薄くする
                        theme.open = false; // 該当しないものは自動で閉じる
                    }
                });

                // ③ カテゴリ（大見出し）の透過と並び替え
                if (catHasMatch || targetStatus === 'all') {
                    cat.style.order = "1";
                    cat.style.opacity = "1";
                    if (targetStatus !== 'all') cat.open = true; // 該当があれば自動で開く
                } else {
                    cat.style.order = "2";
                    cat.style.opacity = "0.5"; // 該当しないカテゴリ枠全体を薄くする
                    cat.open = false; // 該当しないものは自動で閉じる
                }
            });
        });
    });
}); // ← DOMContentLoaded の最後の閉じカッコ
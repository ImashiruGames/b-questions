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
    const groupedData = {};
    for (let i = 0; i < short_questions.length; i++) {
        let q = short_questions[i];
        if (!groupedData[q.category]) {
            groupedData[q.category] = {};
        }
        if (!groupedData[q.category][q.theme]) {
            groupedData[q.category][q.theme] = [];
        }
        groupedData[q.category][q.theme].push(q);
    }

    // 2. 整理されたデータからHTML（図鑑）を組み立てる
    for (const category in groupedData) {
        // 大見出し（カテゴリ）
        const catSection = document.createElement('section');
        catSection.className = 'encyclo-category';
        catSection.innerHTML = `<h3 class="cat-title">${category}</h3>`;

        for (const theme in groupedData[category]) {
            // 中見出し（テーマ）
            const themeSection = document.createElement('div');
            themeSection.className = 'encyclo-theme';
            themeSection.innerHTML = `<h4 class="theme-title">${theme}</h4>`;

            // カードを並べるグリッド
            const cardGrid = document.createElement('div');
            cardGrid.className = 'card-grid';

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

                // カードの生成
                const card = document.createElement('div');
                card.className = `encyclo-card ${cardClass}`;
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

                // ※次回ここで「クリックしたら解説モーダルを開く」イベントを追加します
                card.addEventListener('click', function() {
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
            catSection.appendChild(themeSection);
        }
        container.appendChild(catSection);
    }

    // 💡【追加】モーダルを閉じる処理
    const closeModalBtn = document.getElementById('close_modal_btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            document.getElementById('explanation_modal').style.display = 'none';
        });
    }

    // （おまけ）モーダルの黒い背景部分をクリックしても閉じるようにする
    const modalBackground = document.getElementById('explanation_modal');
    if (modalBackground) {
        modalBackground.addEventListener('click', function(event) {
            // モーダルのコンテンツ部分ではなく、外側の黒背景がクリックされた時だけ閉じる
            if (event.target === modalBackground) {
                modalBackground.style.display = 'none';
            }
        });
    }
}); // ← DOMContentLoaded の最後の閉じカッコ
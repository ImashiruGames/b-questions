/**
 * Imashiru Project - ショート問題集 制御スクリプト
 */

// --- 状態管理変数 ---
var activeQuestions = []; // 現在選択されている問題リスト
var currentIndex = 0;     // インデックス
var currentPallet = 0;    // パレット用
var streak = 0;           // 連続正解数
var totalSolved = 0;      // 解いた問題数
var isFirstAnswer = true; // 最初の一回目かどうかの判定
var isAnswered = false;   // 二重回答防止
var limitQuestions = 10;  // 出題数制限 (デフォルト10)
var correctCountInRound = 0; // ラウンド内の正解数
var isDevMode = false;    // 開発モードフラグ
const startmodal = document.getElementById('start_modal');
var categoryAndThemeNumDictionary = {};

// --- 初期化処理 ---
window.onload = function () {
    countUpCategories();
    initNavigation();
    if (typeof UserManager !== 'undefined') {
        UserManager.init();   // ユーザー管理初期化
    }
    showStartModal();           //スタートモーダルの起動
};

// theme_templatesに存在するcategoryとthemeを全て拾い出す。

function countUpCategories(){
    // やりたいこと。0から順番に、question.jsのcategoryを見ていく。
    for(let category in categories){
        categoryAndThemeNumDictionary[category] = {"categoryNum":0}
        for(let theme in categories[category]){
            categoryAndThemeNumDictionary[category][theme] = 0
        }
    }

    // 一個ずつ数えていく。
    for(let i=0;i<short_questions.length;i++){
        let category = short_questions[i].category;
        let theme = short_questions[i].theme;

        categoryAndThemeNumDictionary[category]["categoryNum"] += 1;
        categoryAndThemeNumDictionary[category][theme] += 1;
    }
}

function showStartModal() {
    console.log("showStartModal()");
    startmodal.classList.add("show");
    startmodal.style.display = "flex";
}

function startGame() {
    console.log("startGame()");
    var first_selectvalue = document.getElementById('start_question_limit').value;
    console.log(first_selectvalue)
    selectvalue = first_selectvalue.replace(/[０-９]/g,function(s){
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    }).replace(/\D/g,"");
    console.log(selectvalue)
    if(selectvalue == ""){
        document.getElementById("caution").innerText = "⚠️数値を入力してください";
        return;
    }
    if(first_selectvalue != selectvalue){
        document.getElementById("caution").innerText = "⚠️使用できない文字が含まれています！"
        return;
    }

    // モーダルを閉じる
    startmodal.classList.remove('show');
    startmodal.style.display = 'none';

    updateQuestionLimit(selectvalue);// 設定値の読み込み
    initPalette();        // パレット生成 
    initNavigation();     // カテゴリナビの初期化

}

/**
 * 出題数の設定を読み込む
 */
function updateQuestionLimit(value) {
    console.log("updateQuestionLimit()");
    const select = document.getElementById('question_limit_select');
    if (value) {
        console.log(parseInt(value,10))
        if (value === 'all') {
            limitQuestions = 9999;
        } else {
            limitQuestions = parseInt(value, 10);
        }
    } else if (select) {
        console.log("失敗")
        const val = select.value;
        if (val === 'all') {
            limitQuestions = 9999;
        } else {
            limitQuestions = parseInt(val, 10);
        }
    }
}

/**
 * 配列をシャッフルする（P32の知識を利用）
 */
function shuffleArray(array) {
    console.log("shuffleArray()");
    let clone = [];
    for (let i = 0; i < array.length; i++) {
        clone.push(array[i]); // スプレッド構文を使わずループでコピー 
    }
    // P32: Math.random() - 0.5 を使用したランダムソート 
    clone.sort(function () {
        return Math.random() - 0.5;
    });
    return clone;
}

/**
 * パレットの初期生成（P32: createElementを使用）
 */
function initPalette() {
    console.log("initPalette()");
    const paletteContainer = document.getElementById('progress_palette');
    if (!paletteContainer) return;

    paletteContainer.innerHTML = '';
    // 設定された出題数分だけボックスを作る（ただし最大数は全問題数を超えないように制御されるが、
    // ここではlimitQuestionsに従う。allの場合は問題ロード後に再生成が必要かもしれないが、
    // ひとまず簡易的に現在のアクティブ問題数か、デフォルト上限を使う）

    // まだ問題がロードされていない初期状態では limitQuestions 分だけ作る
    let count = limitQuestions;
    if (activeQuestions.length > 0 && activeQuestions.length < limitQuestions) {
        count = activeQuestions.length;
    }
    // allの場合の見た目制御（多すぎると溢れるので、activeQuestions決まってからの方が良い）
    if (count > 100) count = 100; // 安全弁

    for (let i = 0; i < count; i++) {
        let box = document.createElement('div'); // 要素の作成 
        box.className = 'palette_box';
        box.id = 'palette_' + i;
        paletteContainer.appendChild(box);
    }
}

/**
 * ナビゲーションの動的生成
 */
function initNavigation() {
    console.log("initNavigation()");
    var parentContainer = document.getElementById('parent_categories'); // P29: 要素取得 
    if (!parentContainer) return;

    parentContainer.innerHTML = ''; // 既存の「反応しないボタン」を消去

    // categoriesオブジェクト（P27: オブジェクトの性質 ）をループ
    var isFirst = true;
    for (var categoryName in categories) {
        var pBtn = document.createElement('button'); // P32: 要素作成 
        pBtn.className = 'parent_btn';

        pBtn.innerText = categoryName + ":"+ String(categoryAndThemeNumDictionary[categoryName].categoryNum);

        // 最初のカテゴリをデフォルトでアクティブにする
        if (isFirst) {
            pBtn.classList.add('active');
            renderChildThemes(categoryName); // 最初の子テーマを表示
            isFirst = false;
        }

        pBtn.onclick = function () {
            console.log("ボタンが押されたよ")
            var allParentBtns = document.querySelectorAll('.parent_btn'); // P34: querySelectorAll 
            for (var i = 0; i < allParentBtns.length; i++) {
                allParentBtns[i].classList.remove('active');
            }
            this.classList.add('active'); // P32: thisキーワード（クリックされたボタン自身） 

            // カテゴリ名を取得して子テーマを再描画
            renderChildThemes(this.innerText);
        };
        parentContainer.appendChild(pBtn);
    }
}

/**
 * テーマ（子）ボタンの生成
 */
function renderChildThemes(categoryName) {
    console.log("renderChildThemes()");
    categoryName = categoryName.replace(/\:\d+/g, "");

    var childContainer = document.getElementById('child_categories');
    if (!childContainer) return;

    childContainer.innerHTML = '';

    categoryName = categoryName.replace(/\:\d+/g, "");
    var themes = categories[categoryName];
    var isFirst = true;
    for (var themeName in themes) {
        var cBtn = document.createElement('button');
        cBtn.className = 'child_btn';
        // console.log(categoryAndThemeNumDictionary[categoryName])
        cBtn.innerText = themeName +"("+ String(categoryAndThemeNumDictionary[categoryName][themeName])+")";

        // 最初のテーマをデフォルトでアクティブにして問題をロード
        if (isFirst) {
            cBtn.classList.add('active');
            filterQuestions(categoryName, themeName); // ここで最初の問題を読み込む
            isFirst = false;
        }

        cBtn.onclick = function () {
            var allChildBtns = document.querySelectorAll('.child_btn');
            for (var i = 0; i < allChildBtns.length; i++) {
                allChildBtns[i].classList.remove('active');
            }
            this.classList.add('active');

            // 親カテゴリ名を探してフィルタリング
            var activeParent = document.querySelector('.parent_btn.active').innerText;

            console.log(227,activeParent,this.innerText);
            filterQuestions(activeParent, this.innerText);
        };
        childContainer.appendChild(cBtn);
    }
}

/**
 * 問題の絞り込み
 */
function filterQuestions(categoryName, themeName) {
    console.log("filterQuestions()")
    activeQuestions = [];

    var categoryName = categoryName.replace(/\:\d+/g,"");
    var themeName = themeName.replace(/\(\d+\)/g,"");
    // P35: for文による配列走査 
    for (var i = 0; i < short_questions.length; i++) {
        var q = short_questions[i];

        console.log(categoryName,themeName)
        if (q.category === categoryName && q.theme === themeName) {
            activeQuestions.push(q); // P32: pushによる追加 
        }
    }

    // シャッフルして、出題数分だけ切り出す
    activeQuestions = shuffleArray(activeQuestions);

    if (activeQuestions.length > limitQuestions) {
        activeQuestions = activeQuestions.slice(0, limitQuestions);
    }

    // パレット再生成（問題数が確定したので）
    initPalette();

    currentIndex = 0; // カテゴリが変わったら最初から
    currentPallet = 0; // パレットもリセット
    correctCountInRound = 0; // 正解数リセット
    for (let i = 0; i < 2; i++) {
        next_btn = document.getElementsByClassName("next_btn");
        next_btn[i].innerText = "次の問題へ ▶";
    } //ボタンの文字もリセット

    if (activeQuestions.length > 0) {
        loadQuestion(0);
    } else {
        // 問題がない場合の処理
        document.getElementById('text').innerText = "該当する問題がまだありません。";
        document.getElementById('code_display').innerHTML = "";
    }
}

/**
 * 問題データの描画
 */
function loadQuestion(index) {
    console.log("loadQuestion()");
    if (index >= activeQuestions.length) {
        showCompletionModal();
        return;
    }

    const q = activeQuestions[index];
    let subthemeSteps = [];

    // categoriesデータからステップを取得
    if (categories[q.category] && categories[q.category][q.theme]) {
        subthemeSteps = categories[q.category][q.theme][q.subtheme];
    }

    if (!subthemeSteps) {
        subthemeSteps = [["データ未定義", "設定を確認してください"]];
    }

    // 毎回毎の描画
    console.log("currentIndex="+currentIndex);
    isFirstAnswer = true;
    isAnswered = false;
    document.getElementById('explainbox').style.display = 'none';
    document.getElementById('result_display').style.display = 'none';
    document.getElementById('id').innerText = q.id;
    document.getElementById('Q_num').innerText = 'Q' + (index + 1);
    document.getElementById('text').innerText = q.text;
    document.getElementById('example').innerText = q.example;
    document.getElementById('code_display').innerHTML = q.code;

    document.getElementById('counter').innerText = String(currentIndex+1)+"/"+String(activeQuestions.length);
    document.getElementById('theme_template').innerHTML = '<strong>【テーマ】</strong> ' + q.category + '：' + q.theme;

    let common_logic_html = '<p id="common_title">' + q.subtheme + '</p>';

    // P35: foreach文の形式に合わせたループ 
    subthemeSteps.forEach(function (step, i) {
        common_logic_html += '<div class="step_item">' +
            '<div style="color: #0056b3; font-weight: bold;">' + (i + 1) + '. ' + step[0] + '</div>' +
            '<div style="font-size: 0.95em; color: #444; margin-left: 0.5em;">' + step[1] + '</div>' +
            '</div>';
    });

    document.getElementById('common_logic').innerHTML = common_logic_html;

    // 解説の反映と装飾
    let rawExplanation = q.specific_explanation;
    let formattedExplanation = rawExplanation.replace(/^(\d+\..+)$/gm, '<span class="explanation-header">$1</span>');
    document.getElementById('specific_explanation').innerHTML = formattedExplanation;

    // 選択肢の生成
    const correctAnswer = q.choices[0];
    const displayChoices = shuffleArray(q.choices);
    const choiceContainer = document.querySelector('.choice_container');

    // 選択肢を描画する場所
    // したいこと→選択肢に花丸か丸をつけて見た目をよくしたい

    choiceContainer.innerHTML = '';
    displayChoices.forEach(function (choiceText) {
        let btn = document.createElement('button');
        btn.className = 'choice_btn';
        btn.innerText = choiceText;

        btn.onclick = function () {
            if (isAnswered) return; // P32: returnによる強制終了 

            isCorrect = choiceText === correctAnswer
            checkAnswer(isCorrect);
            if (isCorrect) { this.classList.add("OTAMESHI"); }
            else { this.classList.add("incorrectBtn") }
        };
        choiceContainer.appendChild(btn);
    });
}

/**
 * 正誤判定
 */
function checkAnswer(isCorrect) {
    const resultDiv = document.getElementById('result_display');
    const explainBox = document.getElementById('explainbox');

    resultDiv.style.display = 'block';
    explainBox.style.display = 'block';

    if (isCorrect) {
        resultDiv.textContent = '正解！';
        resultDiv.className = 'correct';
        streak = streak + 1;
        correctCountInRound++;
        isAnswered = true;
    } else {
        resultDiv.textContent = '不正解...';
        resultDiv.className = 'incorrect';
        streak = 0;
    }


    document.getElementById('streak_count').innerText = streak;
    document.getElementById('total_count').innerText = totalSolved;

    updatePalette(currentPallet, isCorrect);

    // 最初の一回目の解答でのみ変えたいもの
    // ※パレットのカウント、問題回答数
    if (isFirstAnswer) {
        currentPallet = currentPallet + 1
        totalSolved = totalSolved + 1;

        if (currentIndex + 1 >= activeQuestions.length) {
            for (let i = 0; i < 2; i++) {
                next_btn = document.getElementsByClassName("next_btn");
                next_btn[i].innerText = "結果へ ▶";
            }
        }

        // ユーザー履歴の更新
        if (typeof UserManager !== 'undefined') {
            const currentQ = activeQuestions[currentIndex];
            UserManager.recordResult(currentQ,isCorrect);
            UserManager.updateUI();
        }
    };

    isFirstAnswer = false;
    document.getElementById('answer_side').scrollTop = 0;
}

function updatePalette(index, isCorrect) {
    console.log(updatePalette);
    const box = document.getElementById('palette_' + index);
    if (!box || !isFirstAnswer) return;

    if (isCorrect) {
        box.classList.add('is_correct');
    } else {
        box.classList.add('is_incorrect');
    }
}

function nextQuestion() {
    console.log("nextQuestion()");
    currentIndex = currentIndex + 1;
    loadQuestion(currentIndex);
}

/**
 * 完了モーダルを表示
 */
function showCompletionModal() {
    console.log("showCompletionModal()");
    const modal = document.getElementById('completion_modal');
    document.getElementById('modal_correct').innerText = correctCountInRound;
    document.getElementById('modal_total').innerText = activeQuestions.length;

    modal.classList.add('show');
    modal.style.display = "flex"; // style.cssで制御しているが念のため
}


/**
 * ゲームのリスタート
*/
function restartGame() {
    console.log("restartGame()")
    // モーダルを閉じる
    document.getElementById('completion_modal').classList.remove('show');
    document.getElementById('completion_modal').style.display = 'none';

    startGame();
    // // 設定を再読み込み
    // updateQuestionLimit();

    // // カテゴリは維持したまま、問題を再取得（シャッフル・スライス含む）
    // // 現在アクティブなカテゴリ・テーマを取得する必要があるが、
    // // 簡易的に activeQuestions の情報を使うか、UIから取得する

    // const activeParent = document.querySelector('.parent_btn.active');
    // const activeChild = document.querySelector('.child_btn.active');

    // if (activeParent && activeChild) {
    //     filterQuestions(activeParent.innerText, activeChild.innerText);
    // } else {
    //     // 万が一選択状態がなければリロード
    //     location.reload();
    // }
}

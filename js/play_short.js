/**
 * Imashiru Project - ショート問題集 統合スクリプト
 */

// ==========================================
// 1. 状態管理変数
// ==========================================
let activeQuestions = [];
let currentIndex = 0;
let currentPallet = 0;
let streak = 0;
let totalSolved = 0;
let isFirstAnswer = true;
let isAnswered = false;
let limitQuestions = 10;
let correctCountInRound = 0;
let categoryAndThemeNumDictionary = {};
let wrongQuestionsInRound = [];

// [レガシーUI/機能で参照される変数]
let isDevMode = false;
const startmodal = document.getElementById('start_modal');


// ==========================================
// 2. ユーティリティ（共通処理）
// ==========================================

// [現役] 配列のシャッフル
function shuffleArray(array) {
    let clone = [];
    for (let i = 0; i < array.length; i++) {
        clone.push(array[i]);
    }
    clone.sort(function () {
        return Math.random() - 0.5;
    });
    return clone;
}

// [現役] 重み付けソート
function weightedSort(questions) {
    let statsKey = 'bucket_stats_' + UserManager.currentUser;
    let stats = JSON.parse(localStorage.getItem(statsKey) || "{}");

    let clone = [];
    for (let i = 0; i < questions.length; i++) {
        clone.push(questions[i]);
    }

    for (let i = 0; i < clone.length; i++) {
        let q = clone[i];
        let qId = UserManager.generateId(q);
        let s = stats[qId];
        let weight = 1;

        if (!s || (s.correct == 0 && s.incorrect == 0)) {
            weight = 1000;
        }
        else if (s.incorrect > 0) {
            weight += (s.incorrect * 2);
        }
        else if (s.correct >= 2) {
            weight -= 0.1 * (s.correct * s.correct - 1);
        }

        q.weight = weight; //検証用
        q._randomScore = Math.random() * weight;
    }
    clone.sort(function (a, b) {
        return b._randomScore - a._randomScore;
    })

    console.log(clone)
    return clone;
}

/* // --- レガシー関数（ユーティリティ） ---
// ※ weightedSortへ移行した旧処理
function decideWeight(questions) {
    let statsKey = 'bucket_stats_' + UserManager.currentUser;
    let stats = JSON.parse(localStorage.getItem(statsKey) || "{}");

    let clone = [];
    for (let i = 0; i < questions.length; i++) {
        clone.push(questions[i]);
    }

    for (let i = 0; i < clone.length; i++) {
        let q = clone[i];
        let qId = UserManager.generateId(q);
        let s = stats[qId];
        let weight = 1;

        if (!s || (s.correct == 0 && s.incorrect == 0)) {
            weight = 3;
        }
        else if (s.incorrect > 0) {
            weight = 1 + (s.incorrect * 2);
        }
        else if (s.correct > 0) {
            weight = 0.1;
        }

        q._randomScore = Math.random() * weight;

        clone.sort(function (a, b) {
            return b._randomScore - a._randomScore;
        })

        return clone;
    }
}
*/

// ==========================================
// 3. 初期化・ルーティング処理
// ==========================================

// [現役] 初期化処理（ID指定プレイ・通常プレイの振り分け）
function initPlayScreen() {
    // 1. まずURLにIDの指定があるかチェックする
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('id');

    activeQuestions = [];

    if (targetId) {
        // 【A】ID指定がある場合（デバッグ・お気に入り復習モード）
        const specificQuestion = short_questions.find(q => q.id == targetId);
        if (specificQuestion) {
            activeQuestions = [specificQuestion];
            limitQuestions = 1; // 1問だけ出題する
        } else {
            alert("指定されたIDの問題は見つかりませんでした。");
            return;
        }
    } else {
        // 【B】通常のプレイ（HOME画面から遷移してきた場合）
        let limitStr = sessionStorage.getItem("imashiru_question_limit");
        let targetsStr = sessionStorage.getItem("imashiru_target_subthemes");

        if (!limitStr || !targetsStr) {
            alert("問題データが渡されませんでした。HOME画面に戻ります。");
            window.location.href = "index.html";
            return;
        }

        limitQuestions = parseInt(limitStr, 10);
        let targetSubthemes = JSON.parse(targetsStr);

        // HOME画面で選ばれた問題だけを抽き出す
        for (let i = 0; i < short_questions.length; i++) {
            let q = short_questions[i];
            let isMatch = false;
            for (let j = 0; j < targetSubthemes.length; j++) {
                let t = targetSubthemes[j];
                if (q.category === t.category && q.theme === t.theme && q.subtheme === t.subtheme) {
                    isMatch = true;
                    break;
                }
            }
            if (isMatch) {
                activeQuestions.push(q);
            }
        }

        activeQuestions = weightedSort(activeQuestions);

        if (activeQuestions.length > limitQuestions) {
            activeQuestions = activeQuestions.slice(0, limitQuestions);
        }
    }

    // --- ここから下は共通の初期化処理 ---
    wrongQuestionsInRound = [];
    initPalette();
    currentIndex = 0;
    currentPallet = 0;
    correctCountInRound = 0;

    let next_btns = document.getElementsByClassName("next_btn");
    for (let i = 0; i < next_btns.length; i++) {
        if (next_btns[i].innerText.indexOf("次の問題へ") !== -1 || next_btns[i].innerText.indexOf("結果へ") !== -1) {
            next_btns[i].innerText = "次の問題へ ▶";
        }
    }

    if (activeQuestions.length > 0) {
        loadQuestion(0);
    } else {
        document.getElementById('text').innerText = "該当する問題がありませんでした。";
        document.getElementById('code_display').innerHTML = "";
    }
}

// [現役] デバッグジャンプ用イベント
const debugJumpBtn = document.getElementById('debug_jump_btn');
if (debugJumpBtn) {
    debugJumpBtn.addEventListener('click', function () {
        const inputId = document.getElementById('debug_id_input').value;
        if (inputId) {
            // 指定したIDをURLに付与して画面を再読み込みする
            window.location.href = `play_short.html?id=${inputId}`;
        }
    });
}

// [現役] パレットの初期生成
function initPalette() {
    let paletteContainer = document.getElementById('progress_palette');
    if (!paletteContainer) return;

    paletteContainer.innerHTML = '';
    let count = limitQuestions;
    if (activeQuestions.length > 0 && activeQuestions.length < limitQuestions) {
        count = activeQuestions.length;
    }
    if (count > 100) count = 100;

    for (let i = 0; i < count; i++) {
        let box = document.createElement('div');
        box.className = 'palette_box';
        box.id = 'palette_' + i;
        paletteContainer.appendChild(box);
    }
}


/* // --- レガシー関数（初期化・ルーティング系） ---
// ※ index.html側（別画面）でのカテゴリ選択へ移行したため不要

function countUpCategories(){
    for(let category in categories){
        categoryAndThemeNumDictionary[category] = {"categoryNum":0}
        for(let theme in categories[category]){
            categoryAndThemeNumDictionary[category][theme] = 0
        }
    }
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

    startmodal.classList.remove('show');
    startmodal.style.display = 'none';

    updateQuestionLimit(selectvalue);
    initPalette();        
    initNavigation();     

}

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

function initNavigation() {
    console.log("initNavigation()");
    var parentContainer = document.getElementById('parent_categories'); 
    if (!parentContainer) return;

    parentContainer.innerHTML = ''; 

    var isFirst = true;
    for (var categoryName in categories) {
        var pBtn = document.createElement('button'); 
        pBtn.className = 'parent_btn';

        pBtn.innerText = categoryName + ":"+ String(categoryAndThemeNumDictionary[categoryName].categoryNum);

        if (isFirst) {
            pBtn.classList.add('active');
            renderChildThemes(categoryName); 
            isFirst = false;
        }

        pBtn.onclick = function () {
            console.log("ボタンが押されたよ")
            var allParentBtns = document.querySelectorAll('.parent_btn'); 
            for (var i = 0; i < allParentBtns.length; i++) {
                allParentBtns[i].classList.remove('active');
            }
            this.classList.add('active'); 

            renderChildThemes(this.innerText);
        };
        parentContainer.appendChild(pBtn);
    }
}

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
        cBtn.innerText = themeName +"("+ String(categoryAndThemeNumDictionary[categoryName][themeName])+")";

        if (isFirst) {
            cBtn.classList.add('active');
            filterQuestions(categoryName, themeName); 
            isFirst = false;
        }

        cBtn.onclick = function () {
            var allChildBtns = document.querySelectorAll('.child_btn');
            for (var i = 0; i < allChildBtns.length; i++) {
                allChildBtns[i].classList.remove('active');
            }
            this.classList.add('active');

            var activeParent = document.querySelector('.parent_btn.active').innerText;

            console.log(227,activeParent,this.innerText);
            filterQuestions(activeParent, this.innerText);
        };
        childContainer.appendChild(cBtn);
    }
}

function filterQuestions(categoryName, themeName) {
    console.log("filterQuestions()")
    activeQuestions = [];

    var categoryName = categoryName.replace(/\:\d+/g,"");
    var themeName = themeName.replace(/\(\d+\)/g,"");
    for (var i = 0; i < short_questions.length; i++) {
        var q = short_questions[i];

        console.log(categoryName,themeName)
        if (q.category === categoryName && q.theme === themeName) {
            activeQuestions.push(q);  
        }
    }

    activeQuestions = shuffleArray(activeQuestions);

    if (activeQuestions.length > limitQuestions) {
        activeQuestions = activeQuestions.slice(0, limitQuestions);
    }

    initPalette();

    currentIndex = 0; 
    currentPallet = 0; 
    correctCountInRound = 0; 
    for (let i = 0; i < 2; i++) {
        next_btn = document.getElementsByClassName("next_btn");
        next_btn[i].innerText = "次の問題へ ▶";
    } 

    if (activeQuestions.length > 0) {
        loadQuestion(0);
    } else {
        document.getElementById('text').innerText = "該当する問題がまだありません。";
        document.getElementById('code_display').innerHTML = "";
    }
}
*/

// ==========================================
// 4. 描画・ゲーム進行ロジック
// ==========================================

// [現役] 問題の読み込みと描画
function loadQuestion(index) {
    if (index >= activeQuestions.length) {
        showCompletionModal();
        return;
    }
    let instructionElement = document.getElementById("instruction");

    if (instructionElement) {
        instructionElement.innerHTML = '正解だと思うものを選んでください：';
        instructionElement.style.color = '#333';
        instructionElement.style.fontWeight = 'normal';
        instructionElement.style.fontSize = '1rem';
    }

    window.scrollTo(0, document.getElementById("Q_num").getBoundingClientRect().top)
    console.log(document.getElementById("Q_num").getBoundingClientRect().top)

    let q = activeQuestions[index];
    let subthemeSteps = [];

    if (categories[q.category] && categories[q.category][q.theme]) {
        subthemeSteps = categories[q.category][q.theme][q.subtheme];
    }
    if (!subthemeSteps) {
        subthemeSteps = [["データ未定義", "設定を確認してください"]];
    }

    isFirstAnswer = true;
    isAnswered = false;
    document.getElementById('explainbox').style.display = 'none';
    document.getElementById('result_display').style.display = 'none';
    document.getElementById('text').innerText = q.text;
    document.getElementById('example').innerText = q.example;
    document.getElementById('code_display').innerHTML = q.code;
    document.getElementById('counter').innerText = String(currentIndex + 1) + "/" + String(activeQuestions.length);
    document.getElementById('theme_template').innerHTML = '<strong>【テーマ】</strong> ' + q.category + '：' + q.theme;

    let common_logic_html = '<p id="common_title">' + q.subtheme + '</p>';
    for (let i = 0; i < subthemeSteps.length; i++) {
        let step = subthemeSteps[i];
        common_logic_html += '<div class="step_item">' +
            '<div style="color: #0056b3; font-weight: bold;">' + (i + 1) + '. ' + step[0] + '</div>' +
            '<div style="font-size: 0.95em; color: #444; margin-left: 0.5em;">' + step[1] + '</div>' +
            '</div>';
    }
    document.getElementById('common_logic').innerHTML = common_logic_html;

    let rawExplanation = q.specific_explanation;
    let formattedExplanation = rawExplanation.replace(/^(\d+\..+)$/gm, '<span class="explanation-header">$1</span>');
    document.getElementById('specific_explanation').innerHTML = formattedExplanation;

    let correctAnswer = q.choices[0];
    let displayChoices = shuffleArray(q.choices);
    let choiceContainer = document.querySelector('.choice_container');
    choiceContainer.innerHTML = '';

    for (let i = 0; i < displayChoices.length; i++) {
        let choiceText = displayChoices[i];
        let btn = document.createElement('button');
        btn.className = 'choice_btn';
        btn.innerText = choiceText;

        btn.onclick = function () {
            if (isAnswered) return;
            let isCorrect = (choiceText === correctAnswer);
            checkAnswer(isCorrect);
            if (isCorrect) { this.classList.add("OTAMESHI"); }
            else { this.classList.add("incorrectBtn"); }
        };
        choiceContainer.appendChild(btn);
    }

    let statsKey = 'bucket_stats_' + UserManager.currentUser;
    let stats = JSON.parse(localStorage.getItem(statsKey) || "{}");
    let qId = UserManager.generateId(q);
    let s = stats[qId];

    let HistoryHTML = "";
    if (!s) {
        HistoryHTML = `　<p style="color:red; font-size:0.7rem">NEW!</p>`
    }
    else if (s.incorrect > 0) {
        HistoryHTML = `　${s.incorrect},${s.correct}`
    }
    document.getElementById('Q_num').innerHTML = '<p>Q' + (index + 1) + '</p>' + HistoryHTML;
}

/* // --- レガシー関数（描画系） ---
function loadQuestion(index) {
    console.log("loadQuestion()");
    if (index >= activeQuestions.length) {
        showCompletionModal();
        return;
    }

    const q = activeQuestions[index];
    let subthemeSteps = [];

    if (categories[q.category] && categories[q.category][q.theme]) {
        subthemeSteps = categories[q.category][q.theme][q.subtheme];
    }

    if (!subthemeSteps) {
        subthemeSteps = [["データ未定義", "設定を確認してください"]];
    }

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

    subthemeSteps.forEach(function (step, i) {
        common_logic_html += '<div class="step_item">' +
            '<div style="color: #0056b3; font-weight: bold;">' + (i + 1) + '. ' + step[0] + '</div>' +
            '<div style="font-size: 0.95em; color: #444; margin-left: 0.5em;">' + step[1] + '</div>' +
            '</div>';
    });

    document.getElementById('common_logic').innerHTML = common_logic_html;

    let rawExplanation = q.specific_explanation;
    let formattedExplanation = rawExplanation.replace(/^(\d+\..+)$/gm, '<span class="explanation-header">$1</span>');
    document.getElementById('specific_explanation').innerHTML = formattedExplanation;

    const correctAnswer = q.choices[0];
    const displayChoices = shuffleArray(q.choices);
    const choiceContainer = document.querySelector('.choice_container');

    choiceContainer.innerHTML = '';
    displayChoices.forEach(function (choiceText) {
        let btn = document.createElement('button');
        btn.className = 'choice_btn';
        btn.innerText = choiceText;

        btn.onclick = function () {
            if (isAnswered) return; 

            isCorrect = choiceText === correctAnswer
            checkAnswer(isCorrect);
            if (isCorrect) { this.classList.add("OTAMESHI"); }
            else { this.classList.add("incorrectBtn") }
        };
        choiceContainer.appendChild(btn);
    });
}
*/


// [現役] 正誤判定
function checkAnswer(isCorrect) {
    let resultDiv = document.getElementById('result_display');
    let explainBox = document.getElementById('explainbox');
    let instructionElement = document.querySelector('#instruction');

    resultDiv.style.display = 'block';
    explainBox.style.display = 'block';

    if (isCorrect) {
        streak = streak + 1;

        isAnswered = true;

        if (instructionElement) {
            instructionElement.innerHTML = '⭕ 正解！お見事！';
            instructionElement.style.color = '#2e7d32';
            instructionElement.style.fontWeight = 'bold';
            instructionElement.style.fontSize = '1.2rem';
        }
    } else {
        streak = 0;
        if (instructionElement) {
            instructionElement.innerHTML = '❌ 不正解！別の選択肢をタップして再挑戦！';
            instructionElement.style.color = '#c62828';
            instructionElement.style.fontWeight = 'bold';
        }
    }

    updatePalette(currentPallet, isCorrect);

    if (isFirstAnswer) {

        if (isCorrect) {
            resultDiv.textContent = '正解！';
            resultDiv.className = ' result-bar correct';
            correctCountInRound++;
        }
        else {
            resultDiv.textContent = '不正解';
            resultDiv.className = ' result-bar incorrect';
        }

        wrongQuestionsInRound.push(activeQuestions[currentIndex])
        currentPallet = currentPallet + 1;
        totalSolved = totalSolved + 1;

        if (currentIndex + 1 >= activeQuestions.length) {
            let next_btns = document.getElementsByClassName("next_btn");
            for (let i = 0; i < next_btns.length; i++) {
                if (next_btns[i].innerText.indexOf("次の問題へ") !== -1) {
                    next_btns[i].innerText = "結果へ ▶";
                }
            }
        }

        if (typeof UserManager !== 'undefined') {
            let currentQ = activeQuestions[currentIndex];
            UserManager.recordResult(currentQ, isCorrect);
            UserManager.updateUI();
        }
    }
    isFirstAnswer = false;
    document.getElementById('answer_side').scrollTop = 0;
}

// [現役] パレット更新
function updatePalette(index, isCorrect) {
    let box = document.getElementById('palette_' + index);
    if (!box || !isFirstAnswer) return;
    if (isCorrect) {
        box.classList.add('is_correct');
    } else {
        box.classList.add('is_incorrect');
    }
}

// [現役] 次の問題へ
function nextQuestion() {
    currentIndex = currentIndex + 1;
    loadQuestion(currentIndex);
}


// [現役] 完了モーダル表示
function showCompletionModal() {
    let modal = document.getElementById('completion_modal');
    document.getElementById('modal_correct').innerText = correctCountInRound;
    document.getElementById('modal_total').innerText = activeQuestions.length;
    modal.classList.add('show');
    modal.style.display = "flex";
}

// [現役] ゲーム再スタート
function restartGame() {
    document.getElementById('completion_modal').classList.remove('show');
    document.getElementById('completion_modal').style.display = 'none';

    window.scrollTo(0, document.getElementById("Q_num").getBoundingClientRect().top)

    location.reload();
}

// --- レガシー関数（初期起動イベント） ---
window.onload = function () {
    countUpCategories();
    initNavigation();
    if (typeof UserManager !== 'undefined') {
        UserManager.init();   
    }
    showStartModal();           
};
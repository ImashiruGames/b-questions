/**
 * play_short.js
 * ショート問題集の純粋なロジック（処理・生成工場）
 */

// --- 状態管理変数 ---
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
        // 複数回正解している問題は出題頻度減らす（1回目:0, 2:0.3, 3:0.8, 4:1.5減らす）
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

// --- 【新規追加】新しい初期化関数（これだけで全準備が整います） ---
function initPlayScreen() {
    let limitStr = sessionStorage.getItem("imashiru_question_limit");
    let targetsStr = sessionStorage.getItem("imashiru_target_subthemes");

    if (!limitStr || !targetsStr) {
        alert("問題データが渡されませんでした。HOME画面に戻ります。");
        window.location.href = "index.html";
        return;
    }

    limitQuestions = parseInt(limitStr, 10);
    let targetSubthemes = JSON.parse(targetsStr);

    activeQuestions = [];

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

    wrongQuestionsInRound = [];
    if (activeQuestions.length > limitQuestions) {
        activeQuestions = activeQuestions.slice(0, limitQuestions);
    }

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

// 💡 リスタート機能も超シンプルになります。以下の形に上書きしてください。
function restartGame() {
    document.getElementById('completion_modal').classList.remove('show');
    document.getElementById('completion_modal').style.display = 'none';

    // データはsessionStorageに残っているので、画面をリロードするだけで同じ設定で再開されます
    location.reload();
}

function loadQuestion(index) {
    if (index >= activeQuestions.length) {
        showCompletionModal();
        return;
    }

    console.log(document.getElementById("progress_dashboard").getBoundingClientRect().top)
    window.scrollTo(0,document.getElementById("progress_dashboard").getBoundingClientRect().top)

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
    document.getElementById('Q_num').innerHTML = '<p>Q' + (index + 1) +'</p>' + HistoryHTML;

    // //スキップボタンの作成
    // let next_btns = document.getElementsByClassName("next_btn");
    // next_btns[0].innerText = "スキップする ▶"
}

function checkAnswer(isCorrect) {
    let resultDiv = document.getElementById('result_display');
    let explainBox = document.getElementById('explainbox');

    resultDiv.style.display = 'block';
    explainBox.style.display = 'block';

    if (isCorrect) {
        streak = streak + 1;
        correctCountInRound++;
        isAnswered = true;
    } else {
        streak = 0;
    }

    updatePalette(currentPallet, isCorrect);

    if (isFirstAnswer) {

        if (isCorrect) {
            resultDiv.textContent = '正解！';
            resultDiv.className = ' result-bar correct';
        }
        else{
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

function updatePalette(index, isCorrect) {
    let box = document.getElementById('palette_' + index);
    if (!box || !isFirstAnswer) return;
    if (isCorrect) {
        box.classList.add('is_correct');
    } else {
        box.classList.add('is_incorrect');
    }
}

function nextQuestion() {
    currentIndex = currentIndex + 1;
    loadQuestion(currentIndex);
}

function showCompletionModal() {
    let modal = document.getElementById('completion_modal');
    document.getElementById('modal_correct').innerText = correctCountInRound;
    document.getElementById('modal_total').innerText = activeQuestions.length;
    modal.classList.add('show');
    modal.style.display = "flex";
}
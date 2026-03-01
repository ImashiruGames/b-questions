/**
 * analysis.js
 * ユーザーの学習進捗を分析・可視化するスクリプト（純粋な関数群）
 */
var myThemeChart = null;

// 1. 全問題の数（母数）を集計
function aggregateTotalQuestions() {
    var stats = { categories: {}, themes: {} };

    for (var i = 0; i < short_questions.length; i++) {
        var q = short_questions[i];

        // カテゴリー集計
        if (!stats.categories[q.category]) {
            stats.categories[q.category] = { total: 0, solved: 0 };
        }
        stats.categories[q.category].total++;

        // テーマ集計
        if (!stats.themes[q.theme]) {
            stats.themes[q.theme] = { total: 0, solved: 0, category: q.category };
        }
        stats.themes[q.theme].total++;
    }
    return stats;
}

// 2. ユーザー履歴の合算（アロー関数を排除）
function aggregateUserProgress(statsIds, stats) {
    for (var i = 0; i < short_questions.length; i++) {
        var q = short_questions[i];
        var id = UserManager.generateId(q);

        // includesの代わりに、より基礎的なindexOfを使用
        if (statsIds.indexOf(id) !== -1) {
            if (stats.categories[q.category]) {
                stats.categories[q.category].solved++;
            }
            if (stats.themes[q.theme]) {
                stats.themes[q.theme].solved++;
            }
        }
    }
    return stats;
}

// 3. ローカルストレージからのデータ集計
function makeData() {
    var currentUser = UserManager.currentUser;
    if (!currentUser) return {};

    var statsKey = 'bucket_stats_' + currentUser;
    var stats = JSON.parse(localStorage.getItem(statsKey) || "{}");
    var processedData = {};
    var GOLD_THRESHOLD = 5;

    for (var qId in stats) {
        var parts = qId.split('_');
        if (parts.length < 3) continue;
        var themeName = parts[1];
        var s = stats[qId];
        var totalCorrect = s.correct;

        if (!processedData[themeName]) {
            processedData[themeName] = [0, 0, 0]; // [赤, 緑, 金]
        }

        var assignIndex = 0;
        if (totalCorrect == 0) { assignIndex = 0; }
        else if (totalCorrect < GOLD_THRESHOLD) { assignIndex = 1; }
        else { assignIndex = 2; }

        processedData[themeName][assignIndex] += 1;
    }
    return processedData;
}

// 4. 指定カテゴリーの分析データの作成
function analyzeCategoryProgress(masterStats, processedData, targetCategory) {
    var res = {
        labels: [], redData: [], greenData: [], goldData: [],
        redRaw: [], greenRaw: [], goldRaw: [],
        totalThemes: 0, completedThemes: 0, unstartedThemes: [], overallRate: 0
    };
    var totalSolved = 0;
    var totalProblems = 0;

    for (var themeName in masterStats.themes) {
        var themeInfo = masterStats.themes[themeName];
        if (themeInfo.category !== targetCategory) continue;

        res.totalThemes++;
        var totalCount = themeInfo.total;
        var counts = processedData[themeName] || [0, 0, 0];

        res.labels.push(themeName);
        res.redData.push(Math.round((counts[0] / totalCount) * 100));
        res.greenData.push(Math.round((counts[1] / totalCount) * 100));
        res.goldData.push(Math.round((counts[2] / totalCount) * 100));

        res.redRaw.push(counts[0]);
        res.greenRaw.push(counts[1]);
        res.goldRaw.push(counts[2]);

        if (counts[2] >= totalCount && totalCount > 0) {
            res.completedThemes++;
        } else if (counts[0] === 0 && counts[1] === 0 && counts[2] === 0) {
            res.unstartedThemes.push(themeName);
        }

        totalProblems += totalCount;
        totalSolved += counts[1] + counts[2];
    }
    res.overallRate = totalProblems > 0 ? (totalSolved / totalProblems) : 0;
    return res;
}

// 5. 描画処理：カテゴリー全体のレーダーチャート
function renderCategoryChart(totalStats) {
    var ctx = document.getElementById('categoryChart').getContext('2d');
    var labels = [];
    var data = [];
    var rawSolved = [];
    var rawTotal = [];

    // for..inループで配列に変換
    for (var cat in totalStats.categories) {
        labels.push(cat);
        var s = totalStats.categories[cat];
        var rate = s.total > 0 ? Math.round((s.solved / s.total) * 100) : 0;
        data.push(rate);
        rawSolved.push(s.solved);
        rawTotal.push(s.total);
    }

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '習得率 (%)',
                data: data,
                rawSolved: rawSolved,
                rawTotal: rawTotal,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            }]
        },
        options: {
            scales: { r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 100, ticks: { stepSize: 20 } } },
            responsive: true, maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var idx = context.dataIndex;
                            var solved = context.dataset.rawSolved[idx];
                            var total = context.dataset.rawTotal[idx];
                            return '習得: ' + solved + ' / ' + total + ' 問 (' + context.raw + '%)';
                        }
                    }
                }
            }
        }
    });
}

// 6. 描画処理：テーマ別グラフ（データを受け取って描画するだけ）
function renderThemeChart(analysisData) {
    var canvas = document.getElementById('themeChart');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    if (myThemeChart !== null) {
        myThemeChart.destroy();
    }

    myThemeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: analysisData.labels,
            datasets: [
                { label: '苦手', data: analysisData.redData,rawData: analysisData.redRaw, backgroundColor: '#E57373', stack: 'stack0', barThickness: 20, borderRadius: 0 },
                { label: '習得中', data: analysisData.greenData, rawData: analysisData.greenRaw, backgroundColor: '#81C784', stack: 'stack0', barThickness: 20, borderRadius: 0 },
                { label: '完全習得', data: analysisData.goldData, rawData: analysisData.goldRaw, backgroundColor: '#FFF176', stack: 'stack0', barThickness: 20, borderRadius: 0 }
            ]
        },
        options: {
            indexAxis: 'y', animation: false, responsive: true, maintainAspectRatio: false,
            scales: { x: { stacked: true, max: 100 }, y: { stacked: true } },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.dataset.label || '';
                            // 忍ばせておいた rawData から、今ホバーしている場所の数値を取り出す
                            var rawValue = context.dataset.rawData[context.dataIndex];
                            return label + ': ' + rawValue + ' 問';
                        }
                    }
                }
            }
        }
    });
}

// 7. 描画処理：コメントエリア（データを受け取って置換するだけ）
function renderComment(analysisData, selectedCategory) {
    var commentIndex = 0;
    var targetThemeName = "";

    if (analysisData.totalThemes > 0 && analysisData.completedThemes === analysisData.totalThemes) {
        commentIndex = 3;
    } else if (analysisData.completedThemes >= analysisData.totalThemes / 2 && analysisData.totalThemes > 0) {
        commentIndex = 4;
    } else if (analysisData.overallRate > 0) {
        commentIndex = 1;
        targetThemeName = analysisData.unstartedThemes.length > 0 ? analysisData.unstartedThemes[0] : "さらなる高み";
    } else if (analysisData.labels.length > 0) {
        commentIndex = 0;
    } else {
        commentIndex = 2;
    }

    var rawText = firstcomment[commentIndex] + secondcomment[commentIndex] + thirdcomment[commentIndex];
    var processedText = rawText.split("{{category}}").join(selectedCategory);

    if (targetThemeName !== "") {
        processedText = processedText.split("{{theme}}").join(targetThemeName);
    }

    commentReader(processedText,0,"");

    // var finalHtml = '<span style="font-size:1.3rem">' + processedText.charAt(0) + '</span>' + processedText.slice(1);
    // commentArea.innerHTML = finalHtml;
}

function commentReader(comment,i,com) {
    var commentArea = document.getElementById('comment-area');
    if(i<=comment.length) {
        com += comment.charAt(i);
        commentArea.innerHTML = com;
        setTimeout(function(){commentReader(comment,++i,com)},1)
    }
}
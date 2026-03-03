// achievement_checker.js
// イベント駆動型アチーブメント判定 ＆ 通知表示ロジック

var AchievementChecker = {
    // --------------------------------------------------
    // 1. 共通：通知（トースト）を表示する関数
    // --------------------------------------------------
    showToast: function (achievementId) {
        // マスターデータから該当のアチーブメント情報を探す
        var achv = null;
        for (var i = 0; i < achievementsMaster.length; i++) {
            if (achievementsMaster[i].id === achievementId) {
                achv = achievementsMaster[i];
                break;
            }
        }
        if (!achv) return;

        // コンテナがなければ作成
        var container = document.getElementById('achievement_toast_container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'achievement_toast_container';
            document.body.appendChild(container);
        }

        // トースト要素の作成
        var toast = document.createElement('div');
        toast.className = 'achievement-toast';
        toast.innerHTML = '<span class="toast-title">🏆 アチーブメント獲得！</span>' + 
                          '<span>' + achv.title + '</span>';
        
        container.appendChild(toast);

        // 少し遅らせてshowクラスを付け、直線的にスライドインさせる
        setTimeout(function () {
            toast.classList.add('show');
        }, 10);

        // 4秒後にパキッと消す（スライドアウト）
        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 200); // スライドアウト完了後にDOM削除
        }, 4000);
    },

    // 内部処理：条件を満たしていればアンロックし、新規獲得なら通知を出す
    tryUnlock: function (achievementId) {
        if (UserManager && UserManager.unlockAchievement(achievementId)) {
            this.showToast(achievementId);
        }
    },


    // --------------------------------------------------
    // 2. 即時判定（アクションが起きた瞬間に呼ぶ）
    // --------------------------------------------------
    checkInstant: function () {
        if (!UserManager || !UserManager.currentUser) return;

        var statsKey = 'bucket_stats_' + UserManager.currentUser;
        var stats = JSON.parse(localStorage.getItem(statsKey) || "{}");

        var totalAttempted = 0;
        var totalCorrect = 0;

        // 成績データの集計
        for (var qId in stats) {
            var s = stats[qId];
            if (s.correct > 0 || s.incorrect > 0) totalAttempted++;
            if (s.correct > 0) totalCorrect++;
        }

        // --- マイルストーン系（累計） ---
        if (totalAttempted >= 1) this.tryUnlock("ms_first_step");
        if (totalCorrect >= 1) this.tryUnlock("ms_first_win");
        if (totalAttempted >= 10) this.tryUnlock("ms_seeker_10");
        if (totalCorrect >= 10) this.tryUnlock("ms_base_10");
        if (totalAttempted >= 50) this.tryUnlock("ms_seeker_50");
        if (totalCorrect >= 50) this.tryUnlock("ms_footprint_50");
        if (totalAttempted >= 100) this.tryUnlock("ms_veteran_100");
        if (totalCorrect >= 100) this.tryUnlock("ms_understand_100");
        if (totalAttempted >= 1000) this.tryUnlock("ms_thousand");

        // --- お気に入り系 ---
        var favs = UserManager.getFavorites();
        if (favs.length >= 1) this.tryUnlock("fn_fav_1");
        if (favs.length >= 10) this.tryUnlock("fn_fav_10");

        // ※ トロフィー系（カテゴリー制覇など）の即時判定は少し計算が重いため、
        // 別の専用関数を作るか、演習終了時（Session Check）に回すのが安全です。
        // 今回はまず基本的なマイルストーンとお気に入りを即時判定します。
    },


    // --------------------------------------------------
    // 3. セッション判定（演習セットが終了した瞬間に呼ぶ）
    // --------------------------------------------------
    checkSessionEnd: function (sessionData) {
        // sessionDataには { totalQuestions: 10, correctCount: 10, maxStreak: 10, filterUsed: "new", ... } 
        // などの演習のプレイ内容が渡される想定です。

        // --- プレイスタイル系 ---
        if (sessionData.maxStreak >= 5) {
            this.tryUnlock("ps_streak_5");
        }
        if (sessionData.maxStreak >= 10) {
            this.tryUnlock("ps_streak_10");
        }
        if (sessionData.totalQuestions >= 10 && sessionData.correctCount === sessionData.totalQuestions) {
            this.tryUnlock("ps_perfect");
        }

        // --- フィルター使用系 ---
        if (sessionData.filterUsed === "incorrect") {
            this.tryUnlock("fn_flt_incorrect");
        } else if (sessionData.filterUsed === "new") {
            this.tryUnlock("fn_flt_new");
        } else if (sessionData.filterUsed === "favorite") {
            this.tryUnlock("fn_flt_fav");
        }
        
        // 演習が終わったタイミングで、累計系も念のため再チェック
        this.checkInstant();
    }
};
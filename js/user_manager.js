/**
 * ユーザー管理クラス (Shared Logic)
 * play_short.html と analysis.html で共有
 */

var UserManager = {
    currentUser: null,
    isDemoMode: false,

    // 初期化
    init: function () {
        let savedUser = localStorage.getItem('bucket_current_user');
        if (savedUser) {
            this.login(savedUser);
        } else {
            this.showLoginModal();
        }
        this.updateUI();

        this.setupAuthEvents();
    },

    // ログイン処理
    login: function (username) {
        if (!username) return;
        this.currentUser = username;
        localStorage.setItem('bucket_current_user', username);

        // 履歴ストレージの初期化（なければ作成）
        let statsKey = 'bucket_stats_' + username;
        if (!localStorage.getItem(statsKey)) {
            localStorage.setItem(statsKey, JSON.stringify({})); // "{}" で初期化
        }

        this.updateUI();
        // モーダルを閉じる
        let modal = document.getElementById('login_modal');
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
        }
    },

    // ログアウト処理
    logout: function () {
        this.currentUser = null;
        localStorage.removeItem('bucket_current_user');
        this.updateUI();
        this.showLoginModal();
    },

    // 結果をローカルストレージに保存
    recordResult: function (question, isCorrect) {
        if (!this.currentUser) return;

        let qId = this.generateId(question);
        let statsKey = 'bucket_stats_' + this.currentUser;

        let stats = JSON.parse(localStorage.getItem(statsKey) || "{}");

        if (!stats[qId]) {
            console.log("初めての問題！", qId);
            stats[qId] = { correct: 0, incorrect: 0 };
        }

        if (isCorrect) {
            stats[qId].correct++;
        } else {
            stats[qId].incorrect++;
        }

        localStorage.setItem(statsKey, JSON.stringify(stats));
        if (typeof AchievementChecker !== 'undefined') AchievementChecker.checkInstant();
    },

    // ID生成ロジック "制御構文_if文_1"が出力
    generateId: function (question) {
        return question.category + '_' + question.theme + '_' + String(question.id);
    },

    // 正解履歴の取得（アロー関数を排除）
    getHistory: function () {
        if (!this.currentUser) return [];
        let statsKey = 'bucket_stats_' + this.currentUser;
        let stats = JSON.parse(localStorage.getItem(statsKey) || "{}");

        // function() を使った記述に修正
        return Object.keys(stats).filter(function (key) {
            return stats[key].correct > 0;
        });
    },

    // --- 追加：お気に入り管理機能 ---

    // 1. お気に入り状態の確認
    isFavorite: function (question) {
        if (!this.currentUser) return false;
        let qId = this.generateId(question);
        let favKey = 'bucket_favorites_' + this.currentUser;
        let favorites = JSON.parse(localStorage.getItem(favKey) || "{}");
        
        // 存在すれば true、しなければ false を返す
        return !!favorites[qId];
    },

    // 2. お気に入りの切り替え（登録・解除）
    toggleFavorite: function (question) {
        if (!this.currentUser) return false;
        let qId = this.generateId(question);
        let favKey = 'bucket_favorites_' + this.currentUser;
        let favorites = JSON.parse(localStorage.getItem(favKey) || "{}");

        if (favorites[qId]) {
            // 既に登録されていれば削除（解除）
            delete favorites[qId];
        } else {
            // 未登録なら true として追加（登録）
            favorites[qId] = true;
        }

        // ストレージに保存し直す
        localStorage.setItem(favKey, JSON.stringify(favorites));
        
        if (typeof AchievementChecker !== 'undefined') AchievementChecker.checkInstant();
        // 変更後の状態を返す（画面の表示切り替え用）
        return !!favorites[qId];
    },

    // 3. お気に入り登録されている問題IDの配列を取得（フィルター用）
    getFavorites: function () {
        if (!this.currentUser) return [];
        let favKey = 'bucket_favorites_' + this.currentUser;
        let favorites = JSON.parse(localStorage.getItem(favKey) || "{}");
        
        return Object.keys(favorites);
    },

    hasAchievement: function (achievementId) {
        if (!this.currentUser) return false;
        let achvKey = 'bucket_achievements_' + this.currentUser;
        let achievements = JSON.parse(localStorage.getItem(achvKey) || "{}");
        
        return !!achievements[achievementId];
    },

    // 2. 新しいアチーブメントを獲得（保存）する
    // ※ 既に獲得済みの場合は false を返し、新規獲得時のみ true を返す
    unlockAchievement: function (achievementId) {
        if (!this.currentUser) return false;
        let achvKey = 'bucket_achievements_' + this.currentUser;
        let achievements = JSON.parse(localStorage.getItem(achvKey) || "{}");

        if (achievements[achievementId]) {
            return false; // 獲得済み
        } else {
            // 現在の日時と共に保存（一覧画面で獲得日を表示するため）
            achievements[achievementId] = new Date().toISOString();
            localStorage.setItem(achvKey, JSON.stringify(achievements));
            return true; // 新規獲得成功
        }
    },

    // 3. 獲得済みのアチーブメントID配列を取得する（一覧画面用）
    getUnlockedAchievements: function () {
        if (!this.currentUser) return [];
        let achvKey = 'bucket_achievements_' + this.currentUser;
        let achievements = JSON.parse(localStorage.getItem(achvKey) || "{}");
        
        return Object.keys(achievements);
    },

    // モーダル表示（アロー関数を排除）
    showLoginModal: function () {
        let modal = document.getElementById('login_modal');
        console.log("showLoginModalメソッド")
        if (modal) {
            modal.style.display = 'flex';
            setTimeout(function () {
                modal.classList.add('show');
            }, 10);
        }
    },

    updateUI: function () {
        // ユーザー名表示
        let nameDisplay = document.getElementById('current_username_display');
        if (nameDisplay) {
            nameDisplay.textContent = this.currentUser ? this.currentUser + 'さん' : 'ゲスト';
        }

        // ユニーク正解数表示
        let statDisplay = document.getElementById('user_unique_solved_count');
        if (statDisplay && this.currentUser) {
            let statsKey = 'bucket_stats_' + this.currentUser;
            let stats = JSON.parse(localStorage.getItem(statsKey) || "{}");

            // アロー関数を排除
            let solvedCount = Object.keys(stats).filter(function (key) {
                return stats[key].correct > 0;
            }).length;

            statDisplay.textContent = solvedCount;
        }

        // ログアウトボタン表示制御
        let logoutBtn = document.getElementById('logout_btn');
        let loginTriggerBtn = document.getElementById('login_trigger_btn');

        if (this.isDemoMode && this.currentUser) {
            if (logoutBtn) logoutBtn.style.display = 'inline-block';
            if (loginTriggerBtn) loginTriggerBtn.style.display = 'none';
        } else {
            if (logoutBtn) logoutBtn.style.display = 'none';
            if (loginTriggerBtn) loginTriggerBtn.style.display = 'inline-block';
        }
    },

    setupAuthEvents: function () {
        let self = this; // function() の中で UserManager 自身を参照できるようにする

        // ログイン（名前登録）ボタンの処理
        let loginBtn = document.getElementById('login_btn');
        if (loginBtn && !loginBtn.hasAttribute('data-bound')) {
            loginBtn.addEventListener('click', function () {
                let nameInput = document.getElementById('login_username');
                let inputName = nameInput ? nameInput.value.trim() : "";

                if (inputName !== "") {
                    // 💡【追加】名前変更不可の最終確認ダイアログを出す
                    if (confirm("「" + inputName + "」で登録します。\n一度決めた名前は変更できませんが、よろしいですか？")) {
                        self.login(inputName);
                        // 登録成功時は画面を再読み込みして道場へ
                        window.location.reload();
                    }
                } else {
                    alert("名前を入力してください");
                }
            });
            loginBtn.setAttribute('data-bound', 'true'); // 二重登録防止
        }

        // ログアウトボタンの処理
        let logoutBtn = document.getElementById('logout_btn');
        if (logoutBtn && !logoutBtn.hasAttribute('data-bound')) {
            logoutBtn.addEventListener('click', function () {
                if (UserManager.isDemoMode) {
                    if (confirm("ログアウトしますか？")) {
                        self.logout();
                        // ログアウト時はHOME画面（index.html）へ強制遷移
                        window.location.href = "index.html";
                    }
                }
            });
            logoutBtn.setAttribute('data-bound', 'true'); // 二重登録防止
        }
    }
};
/**
 * ユーザー管理クラス (Shared Logic)
 * play_short.html と analysis.html で共有
 */

var UserManager = {
    currentUser: null,

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

        if (this.currentUser) {
            if (logoutBtn) logoutBtn.style.display = 'inline-block';
            if (loginTriggerBtn) loginTriggerBtn.style.display = 'none';
        } else {
            if (logoutBtn) logoutBtn.style.display = 'none';
            if (loginTriggerBtn) loginTriggerBtn.style.display = 'inline-block';
        }
    },

    setupAuthEvents: function() {
        let self = this; // function() の中で UserManager 自身を参照できるようにする

        // ログインボタンの処理
        let loginBtn = document.getElementById('login_btn');
        if (loginBtn && !loginBtn.hasAttribute('data-bound')) {
            loginBtn.addEventListener('click', function () {
                let nameInput = document.getElementById('login_username');
                if (nameInput && nameInput.value.trim() !== "") {
                    self.login(nameInput.value.trim());
                    // ログイン成功時は画面を再読み込み（リロード）して最新状態にする
                    window.location.reload(); 
                } else {
                    alert("ユーザー名を入力してください");
                }
            });
            loginBtn.setAttribute('data-bound', 'true'); // 二重登録防止
        }

        // ログアウトボタンの処理
        let logoutBtn = document.getElementById('logout_btn');
        if (logoutBtn && !logoutBtn.hasAttribute('data-bound')) {
            logoutBtn.addEventListener('click', function () {
                if (confirm("ログアウトしますか？")) {
                    self.logout();
                    // ログアウト時はHOME画面（index.html）へ強制遷移
                    window.location.href = "index.html"; 
                }
            });
            logoutBtn.setAttribute('data-bound', 'true'); // 二重登録防止
        }
    }
};
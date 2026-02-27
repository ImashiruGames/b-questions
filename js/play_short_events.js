/**
 * play_short.html用のイベントハンドラ
 */

document.addEventListener('DOMContentLoaded', function () {
    // 次の問題へボタンのイベントリスナー設定
    const nextBtns = document.querySelectorAll('.next_btn');
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (typeof nextQuestion === 'function') {
                nextQuestion();
            }
        });
    });

    // 選択肢ボタンのイベントリスナーは、js/short_questions.js で動的に生成されるため
    // ここでは設定不要（静的なHTML上のボタンは上書きされる）

    // 出題数変更時の処理
    const limitSelect = document.getElementById('question_limit_select');
    if (limitSelect) {
        limitSelect.addEventListener('change', function () {
            if (typeof restartGame === 'function') {
                restartGame();
            }
        });
    }

    // モーダル内のリスタートボタン
    const modalRestartBtn = document.getElementById('modal_restart_btn');
    if (modalRestartBtn) {
        modalRestartBtn.addEventListener('click', function () {
            if (typeof restartGame === 'function') {
                restartGame();
            }
        });
    }

    // --- 開発者モード関連 ---

    // --- ユーザー管理イベント ---
    const loginBtn = document.getElementById('login_btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            const nameInput = document.getElementById('login_username');
            if (nameInput && nameInput.value.trim() !== "") {
                if (typeof UserManager !== 'undefined') {
                    UserManager.login(nameInput.value.trim());
                }
            } else {
                alert("ユーザー名を入力してください");
            }
        });
    }

    const logoutBtn = document.getElementById('logout_btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            if (confirm("ログアウトしますか？")) {
                if (typeof UserManager !== 'undefined') {
                    UserManager.logout();
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // 1. 初期化処理（ページを開いた瞬間に1回だけ実行）
    if (typeof UserManager !== 'undefined') {
        UserManager.init();
    }
});
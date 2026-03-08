const header = document.getElementById("header-placeholder");

header.innerHTML = `
<header>
    <div class="title">
        <h1>アルゴリズム道場 -基本情報B問題特化-</h1>
        <div id="mobile_menu_toggle" class="mobile-only">⚙️</div>
    </div>
    
    <div class="menu" id="global_menu">
        <ul>
            <a href="index.html">
                <li class="menuLink">HOME</li>
            </a>
            <a href="analysis.html">
                <li class="menuLink">分析</li>
            </a>
            <a href="encyclopedia.html">
                <li class="menuLink">プログラミング図鑑</li>
            </a>
            <a href="achievement.html">
                <li class="menuLink">アチーブメント</li>
            </a>
            <a href="news.html">
                <li class="menuLink">ニュース</li>
            </a>
        </ul>
    </div>
</header>
`;

// 2. スマホ用：歯車ボタンを押した時の開閉（トグル）処理
const menuToggle = document.getElementById("mobile_menu_toggle");
const globalMenu = document.getElementById("global_menu");

if (menuToggle && globalMenu) {
    menuToggle.addEventListener("click", function () {

    });
}

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        if (this.classList.contains('is-spinning')) return;

        // 1. 回転クラスを付与してアニメーション開始
        this.classList.add('is-spinning');
        globalMenu.classList.toggle("is-open");

        setTimeout(() => {
            this.classList.remove('is-spinning');
        }, 400);
    });
}
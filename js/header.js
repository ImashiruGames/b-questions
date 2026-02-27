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
            <a href="play_short.html">
                <li class="menuLink">実験用</li>
            </a>
            <a href="analysis.html">
                <li class="menuLink">分析</li>
            </a>
            <a href="encyclopedia.html">
                <li class="menuLink">用語集</li>
            </a>
        </ul>
    </div>
</header>
`;

// 2. スマホ用：歯車ボタンを押した時の開閉（トグル）処理
const menuToggleBtn = document.getElementById("mobile_menu_toggle");
const globalMenu = document.getElementById("global_menu");

if (menuToggleBtn && globalMenu) {
    menuToggleBtn.addEventListener("click", function() {
        globalMenu.classList.toggle("is-open");
    });
}
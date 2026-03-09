user_info_bar = document.getElementById("user_info_bar");
user_info_bar.innerHTML = `
        <a href="analysis.html" font-size: 0.9em;">📊
        <span id="current_username_display">ゲスト</span>
        <span style="font-size: 0.8em; margin-left: 5px">(総正解数: <span id="user_unique_solved_count">0</span>問)</span>
        <span style=" margin-left: 5px; color: #00f">分析画面へ</span></a>
`
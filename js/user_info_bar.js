user_info_bar = document.getElementById("user_info_bar");
user_info_bar.innerHTML = `
        <span id="current_username_display">ゲスト</span>
        <span style="font-size: 0.8em; margin-left: 10px;">(総正解数: <span id="user_unique_solved_count">0</span>問)</span>
        <button id="logout_btn"
            style="display: none; margin-left: 10px; padding: 2px 8px; font-size: 0.8rem;">ログアウト</button>
`
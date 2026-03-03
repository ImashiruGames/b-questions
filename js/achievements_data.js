// achievements_data.js
// アチーブメントのマスターデータ（全32種）

var achievementsMaster = [
    // ① マイルストーン系（累計の努力）
    { id: "ms_first_step", category: "milestone", title: "最初の一歩", condition: "初めて問題を解く" },
    { id: "ms_first_win", category: "milestone", title: "初陣の勝利", condition: "初めて問題に正解する" },
    { id: "ms_seeker_10", category: "milestone", title: "歩み始めた探求者", condition: "累計10問解答する" },
    { id: "ms_base_10", category: "milestone", title: "基礎の芽生え", condition: "累計10問正解する" },
    { id: "ms_seeker_50", category: "milestone", title: "知識の探求者", condition: "累計50問解答する" },
    { id: "ms_footprint_50", category: "milestone", title: "確かな足跡", condition: "累計50問正解する" },
    { id: "ms_veteran_100", category: "milestone", title: "百戦錬磨の入り口", condition: "累計100問解答する" },
    { id: "ms_understand_100", category: "milestone", title: "アルゴリズムの理解者", condition: "累計100問正解する" },
    { id: "ms_thousand", category: "milestone", title: "千日手を超えて", condition: "累計1000問解答する" },

    // ② トロフィー系（テーマ・カテゴリー制覇）
    { id: "tr_bronze_1", category: "trophy", title: "はじめての銅メダル", condition: "1つのテーマで全ての問題に触れる" },
    { id: "tr_silver_1", category: "trophy", title: "はじめての銀メダル", condition: "1つのテーマで全ての問題に正解する" },
    { id: "tr_gold_1", category: "trophy", title: "はじめての金メダル", condition: "1つのテーマを完全習得（3回正解）する" },
    { id: "tr_bronze_3", category: "trophy", title: "広がる視界", condition: "3つのテーマで銅メダルを獲得する" },
    { id: "tr_silver_3", category: "trophy", title: "実力の証明", condition: "3つのテーマで銀メダルを獲得する" },
    { id: "tr_gold_3", category: "trophy", title: "完璧主義者の片鱗", condition: "3つのテーマで金メダルを獲得する" },
    { id: "tr_cat_bronze", category: "trophy", title: "カテゴリー踏破", condition: "1つのカテゴリー内の全テーマで銅メダルを獲得する" },
    { id: "tr_cat_silver", category: "trophy", title: "カテゴリーマスター", condition: "1つのカテゴリー内の全テーマで銀メダルを獲得する" },
    { id: "tr_cat_gold", category: "trophy", title: "カテゴリーの覇者", condition: "1つのカテゴリー内の全テーマで金メダルを獲得する" },
    { id: "tr_grandmaster", category: "trophy", title: "グランドマスター", condition: "全てのカテゴリーで金メダルを獲得する" },

    // ③ プレイスタイル系（精度・試行錯誤）
    { id: "ps_streak_5", category: "playstyle", title: "絶好調！", condition: "1回の演習で5問連続ストレート正解する" },
    { id: "ps_streak_10", category: "playstyle", title: "止まらない知的好奇心", condition: "1回の演習で10問連続ストレート正解する" },
    { id: "ps_perfect", category: "playstyle", title: "パーフェクトゲーム", condition: "10問以上の設定で演習を開始し、全問正解でクリアする" },
    { id: "ps_resilience", category: "playstyle", title: "不屈の精神", condition: "過去に間違えた問題を、再度出題されて正解する" },
    { id: "ps_review_demon", category: "playstyle", title: "復習の鬼", condition: "過去に間違えた問題を、累計10回正解して克服する" },
    { id: "ps_one_shot", category: "playstyle", title: "一発勝負に強い", condition: "累計20問以上解いた時点で、1回も間違えずに正解した問題の割合が80%以上" },

    // ④ 機能探索・アクション系（Imashiru独自の機能）
    { id: "fn_fav_1", category: "function", title: "お気に入り登録", condition: "初めて問題に「★（お気に入り）」をつける" },
    { id: "fn_fav_10", category: "function", title: "厳選された問い", condition: "お気に入りに累計10問登録する" },
    { id: "fn_flt_incorrect", category: "function", title: "弱点と向き合う", condition: "「間違えた問題のみ表示」フィルターを使って演習をクリアする" },
    { id: "fn_flt_new", category: "function", title: "未知との遭遇", condition: "「new!のみ表示」フィルターを使って演習をクリアする" },
    { id: "fn_flt_fav", category: "function", title: "こだわりのコレクション", condition: "「お気に入りのみ表示」フィルターを使って演習をクリアする" },
    { id: "fn_focus", category: "function", title: "一点集中", condition: "1つのサブテーマのみにチェックを入れて演習をクリアする" },
    { id: "fn_scatter", category: "function", title: "好奇心分散", condition: "3つ以上の異なるカテゴリーにチェックを入れて演習をクリアする" },

    { id: "fn_encyclopedia", category: "function", title: "知識の書庫", condition: "初めてプログラミング図鑑＆復習録を開く", secret: true },
    { id: "fn_analysis", category:"function", title: "分析ラボ", condition: "初めて分析ページを開く", secret: false}
];
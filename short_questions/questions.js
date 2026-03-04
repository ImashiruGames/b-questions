const short_questions = [
  // 一問目
  // --- テーマ1：配列の操作とループ ---
  {
    "id": 1,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "次のプログラムは、配列 array の left 番目の要素と right 番目の要素を入れ替える（スワップする）処理の一部です。空欄 [ b ] に入る最も適切な字句を選んでください。ここで、tmp は一時的な値を保持するための変数です。",
    "example": "array[right] を array[left] で上書きする前に、元の値を退避させる必要があります。",
    "code": "01  整数型の配列: array\n02  整数型: tmp, left, right\n03  tmp ← array[right]\n04  array[right] ← array[left]\n05  [      b      ] ← tmp",
    "choices": [
      "array[left]",
      "array[right]",
      "tmp",
      "array[1]"
    ],
    "specific_explanation": "1. 退避用変数の利用\n   値を上書きすると元のデータが消えてしまうため、あらかじめ tmp（一時変数）に array[right] の値を保存しておきます。\n\n2. 三段階の代入\n   右側の要素を左側の値で上書きした後、最後に左側の要素へ、退避させておいた元の右側の値を戻します。\n   <div class=\"important\">array[left] ← tmp</div>"
  },
  {
    "id": 2,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "要素数 n の配列 array を逆順に並べ替えるプログラムにおいて、ループの終了条件を「n ÷ 2 の商」までとしている理由として最も適切なものはどれですか。",
    "example": "要素数が 5 のとき、2回（1番目と5番目、2番目と4番目）の入れ替えで完了します。",
    "code": "01  reverse(整数型の配列: array)\n02  整数型: n, left\n03  n ← arrayの要素数\n04  <span class=\"for\">for (left を 1 から (n ÷ 2 の商) まで 1 ずつ増やす)</span>\n05     // 入れ替え処理（スワップ）を実行\n06  <span class=\"for\">endfor</span>",
    "choices": [
      "中央まで到達した時点で、全ての要素のペアが入れ替わっているから",
      "「n ÷ 2 の商」が、配列の最後の要素の添字を表しているから",
      "配列の中央にある要素は、位置を動かす必要がないから",
      "計算量を削減し、実行速度を2倍にするためだけの工夫である"
    ],
    "specific_explanation": "1. 開始と終了の数値\n   逆順の並べ替えは、配列の左端と右端をペアにして交換していく処理です。そのため、全体の半分にあたる中央（n ÷ 2 の商）までループを回せば、すべての要素の入れ替えが完了します。もし配列の最後までループを回してしまうと、既に入れ替えたペアを再度入れ替えることになり、結果として元の順序に戻ってしまいます。\n   <div class=\"important\">要素の半数まで回せば、すべてのペアの交換が1回ずつ行われる</div>"
  },
  {
    "id": 3,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "添え字が 1 から始まる要素数 n の配列 array において、左側の添え字 left に対応する「右側のペアの添え字」を求める式として正しいものを選んでください。",
    "example": "n = 5 のとき：left = 1 に対するのは 5、left = 2 に対するのは 4 です。",
    "code": "01  整数型の配列: array\n02  整数型: n, left, right\n03  n ← arrayの要素数\n04  <span class=\"for\">for (left を 1 から (n ÷ 2 の商) まで 1 ずつ増やす)</span>\n05     right ← [      a      ]\n06     // スワップ処理\n07  <span class=\"for\">endfor</span>",
    "choices": [
      "n - left + 1",
      "n - left",
      "n - left - 1",
      "left + (n ÷ 2)"
    ],
    "specific_explanation": "1. 規則性の発見\n   left が増えるにつれて、ペアとなる right は同じ分だけ減るという逆相関の関係にあります。このとき、どのペアにおいても「left + right」の合計値が常に一定（n + 1）になるという規則性が見つかります。\n   例：n = 5 のとき\n   ・left = 1, right = 5</span> → 合計 6\n   ・left = 2, right = 4 → 合計 6\n   つまり、常に left + right = n + 1 という等式が成り立ちます。\n\n2. ずれの調整\n   上記の等式を right について解く（left を右辺に移行する）ことで、正しい式が導き出せます。添え字が 1 始まりの場合、単純な n - left では数値が 1 少なくなるため、この移行によって得られる「+1」の調整が不可欠です。\n   <div class=\"important\">right ← n - left + 1</div>"
  },

  // --- テーマ2：条件判定と再帰処理 ---
  {
    "id": 4,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "年齢 age に応じた料金を判定するプログラムにおいて、「4歳から9歳までは300円」というルールを適用するための条件式を、空欄 [  ] に入れて完成させてください。",
    "example": "age = 9 のとき、戻り値が 300 になる必要があります。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age ≤ 3)</span>\n03     ret ← 100\n04  <span class=\"if\">elseif ([      ])</span>\n05     ret ← 300",
    "choices": [
      "age ≤ 9",
      "age < 9",
      "age < 10",
      "age ≥ 4"
    ],
    "specific_explanation": "1. 境界の特定\n   基準となる数値を確認します。今回の料金プランが切り替わる境界の上限値は「9」歳です。\n\n2. 含むか含まないか\n   以上以下、またはより大きい・未満かを見極めて演算子を決定します。「9歳まで」というルールは 9歳を「含む」ため、以下（≤）を選択するのが適切です。既に 2行目の条件によって「3歳以下」のケースは除外されているため、この elseif では 9歳以下（≤ 9）であることのみを判定すれば、自動的に「4歳以上かつ9歳以下」という範囲を正しくカバーできます。\n   <div class=\"important\">elseif (age ≤ 9)</div>"
  },
  {
    "id": 5,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "料金計算のプログラムにおける多分岐（if-elseif-else）構造の判定優先順位について、正しい説明を選んでください。age は年齢、ret は料金を表す変数です。",
    "example": "3歳の子供に対して、100円の条件（age ≤ 3）と300円の条件（age ≤ 9）が共に真となりますが、実際には100円が適用されます。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age ≤ 3)</span>\n03     ret ← 100\n04  <span class=\"if\">elseif (age ≤ 9)</span>\n05     ret ← 300",
    "choices": [
      "条件式を上から評価し、最初に「真」となったブロックだけが実行される",
      "より範囲の狭い条件式が自動的に優先される",
      "else に近い条件式ほど優先度が高くなる",
      "全ての条件式を評価し、最後に「真」だったものが適用される"
    ],
    "specific_explanation": "1. 優先順位の確認\n   if 文は上から順に判定されます。一度条件に合致すると、それ以降の elseif や else は無視されます。\n\n2. 排他性チェック\n   したがって、より「厳しい条件」や「特殊なケース」（例：3歳以下）を先に書かないと、より広い条件（例：9歳以下）に吸収されてしまい、正しい判定ができなくなります。\n   <div class=\"important\">上から順に判定され、一つでも合致すれば以降は実行されない</div>"
  },
  {
    "id": 6,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "ベースケース",
    "text": "階乗を計算する再帰関数 Fact(m) において、計算を停止して値を確定させる「ベースケース」として最も適切な条件（空欄 [  b  ]）を選んでください。なお、数学的に 0! = 1 と定義されています。",
    "example": "m = 1 のとき、処理は 1 × Fact(0) を呼び出します。この Fact(0) が正しく 1 を返す必要があります。",
    "code": "01  整数型: m\n02  Fact(整数型: m)\n03  <span class=\"if\">if (m > 0)</span>\n04     return m × Fact(m - 1)\n05  <span class=\"if\">elseif ([      b      ])</span>\n06     return 1",
    "choices": [
      "m が 0 と等しい",
      "m が 1 と等しい",
      "m が 0 より小さい",
      "m が 1 以下"
    ],
    "specific_explanation": "1. 最小単位の特定\n   階乗の再帰的な定義では、m! = m × (m - 1)! と表されます。この連鎖は (m - 1)! が 0 になるまで、つまり m が 1 のときまでは再帰処理が続きます。問題文に「0! = 1」とある通り、計算の最終地点である m = 0 をベースケース（停止条件）として定義します。\n\n2. 戻り値の確定\n   引数に 0 が渡されたときに正しく 1 を返せるように、Fact(0) を判定できる条件が必要です。\n   <div class=\"important\">elseif (m = 0)</div>"
  },
  // 2問目
  // --- テーマ1：配列の操作とループの仕組み ---
  {
    "id": 7,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "配列 array の要素 array[i] と array[j] の値を入れ替える際、一方が消えないようにするための正しい手順を選んでください。空欄 [  b  ] に入る適切な式はどれですか。ここで、tmp は一時的な値を保持するための変数です。",
    "example": "array[i] = 10, array[j] = 20 のとき、最終的に array[i] = 20, array[j] = 10 にしたい。",
    "code": "01  整数型の配列: array\n02  整数型: tmp, i, j\n03  tmp ← array[i]\n04  array[i] ← array[j]\n05  [      b      ] ← tmp",
    "choices": [
      "array[j]",
      "array[i]",
      "tmp",
      "array[0]"
    ],
    "specific_explanation": "1. 退避用変数の利用\n   上書きで値が消えてしまわないよう、まず片方の値（array[i]）を一時変数 tmp に保存しておきます。\n\n2. 三段階の代入\n   次に array[i] に array[j] の値を代入して上書きします。この時点で元の array[i] は消えますが、tmp に残っているため安心です。最後に、空いた（上書き可能な状態の）array[j] へ退避していた tmp の値を戻します。\n   <div class=\"important\">array[j] ← tmp</div>"
  },
  {
    "id": 8,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "要素数 n の配列 array を逆順に並べ替えるとき、入れ替え処理を繰り返す回数として最も適切なものはどれですか。ここで、n は配列の要素数を表します。",
    "example": "n = 6 のとき、3回（1番目と6番目、2番目と5番目、3番目と4番目）入れ替えれば完了します。",
    "code": "01  整数型の配列: array\n02  整数型: n, i\n03  n ← arrayの要素数\n04  <span class=\"for\">for (i を 1 から [   回数   ] まで 1 ずつ増やす)</span>\n05     // 入れ替え処理（スワップ）を実行\n06  <span class=\"for\">endfor</span>",
    "choices": [
      "n ÷ 2 の商",
      "n",
      "n - 1",
      "n ÷ 2 の余り"
    ],
    "specific_explanation": "1. 開始と終了の数値\n   逆順の並べ替えは、配列の「端と端」をペアにして交換する作業です。1回の交換で2つの要素の位置が確定するため、全体の半分（n ÷ 2 の商）まで繰り返せば、すべての要素が正しく並び替わります。\n\n2. 繰り返し回数の性質\n   もし n 回（要素数分）繰り返してしまうと、一度入れ替わって逆順になった要素を再び入れ替えることになり、結果として元の順序に戻ってしまいます。そのため、中央で止める計算式が必要となります。\n   <div class=\"important\">n ÷ 2 の商</div>"
  },
  {
    "id": 9,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "添え字が 1 から始まる要素数 n の配列 array において、左側の添え字 i に対応する「右側のペアの添え字」を求める式（空欄 [  a  ]）を選んでください。",
    "example": "n = 10 のとき、i = 1 ならペアとなる右端は 10、i = 2 なら右端は 9 です。",
    "code": "01  整数型の配列: array\n02  整数型: n, i, right\n03  n ← arrayの要素数\n04  <span class=\"for\">for (i を 1 から (n ÷ 2 の商) まで 1 ずつ増やす)</span>\n05     right ← [      a      ]\n06     // array[i] と array[right] を入れ替える\n07  <span class=\"for\">endfor</span>",
    "choices": [
      "n - i + 1",
      "n - i",
      "n - i - 1",
      "i + (n ÷ 2)"
    ],
    "specific_explanation": "1. 規則性の発見\n   ペアになる添え字の法則性を探ります。例にある通り、n = 10 のとき「1 と 10」「2 と 9」がペアになります。これらの合計値（i + right）に注目すると、どのペアも常に 11（つまり n + 1）になることがわかります。\n\n2. ずれの調整\n   「i + right = n + 1」という等式から、求めたい right について式を整理すると、right = n + 1 - i となります。添え字が 1 始まりの場合、単純な n - i では数値が 1 足りなくなるため、この「+1」が重要な調整役となります。\n   <div class=\"important\">right ← n - i + 1</div>"
  },

  // --- テーマ2：条件分岐と再帰のロジック ---
  {
    "id": 10,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "年齢 age が「10歳以上18歳未満」という範囲に該当するかを正しく判定する複合条件式を選んでください。",
    "example": "age = 10 は対象、age = 18 は対象外です。",
    "code": "01  整数型: age\n02  <span class=\"if\">if ([      条件式      ])</span>\n03     return \"対象\"\n04  <span class=\"if\">endif</span>",
    "choices": [
      "(age ≥ 10) and (age < 18)",
      "(age > 10) and (age < 18)",
      "(age ≥ 10) or (age < 18)",
      "(age ≥ 10) and (age ≤ 18)"
    ],
    "specific_explanation": "1. 境界の特定\n   判定の基準となる数値は「10」と「18」です。問題文の「10歳以上」は 10 を含みますが、「18歳未満」は 18 を含みません。このため、演算子はそれぞれ ≥ と < を使用するのが適切です。\n\n2. 含むか含まないか\n   「10歳以上」と「18歳未満」の2つの条件を、同時に（共に真であるときに）満たす必要があるため、論理演算子 and を用いて結合します。もし or を使ってしまうと、「10歳以上であるか、または18歳未満であるか」という意味になり、すべての年齢が条件に合致してしまうため注意が必要です。\n   <div class=\"important\">(age ≥ 10) and (age < 18)</div>"
  },
  {
    "id": 11,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "多分岐処理（if-elseif-else）を用いて年齢 age に応じた料金 ret を計算するアルゴリズムです。3歳の子供（age = 3）の料金が確実に「100円」と判定されるために、条件式の記述順序として注意すべき点はどれですか。",
    "example": "3歳の子供（age = 3）のとき、100円の条件（≤ 3）と300円の条件（≤ 9）のどちらにも合致する可能性があることに注目しましょう。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age ≤ 3)</span>\n03     ret ← 100\n04  <span class=\"if\">elseif (age ≤ 9)</span>\n05     ret ← 300\n06  <span class=\"if\">else</span>\n07     ret ← 500\n08  <span class=\"if\">endif</span>",
    "choices": [
      "より限定的な条件（範囲の狭い条件）を先に記述すること",
      "すべての条件式を and 演算子で結合して記述すること",
      "数値の大きい順（降順）に条件式を並べること",
      "どのような順序で記述しても、最終的な判定結果は変わらない"
    ],
    "specific_explanation": "1. 優先順位の確認\n   if 文は上から順に判定されます。一度条件に合致すると、それ以降の elseif や else は無視されます。\n\n2. 排他性チェック\n   ある条件に合致すると以降の判定は行われないため、「より厳しい条件（範囲の狭い条件）」を先に書くのがセオリーです。今回の例では「3歳以下」は「9歳以下」という広い範囲にも含まれてしまうため、先に「3歳以下」を判定しないと、300円として処理されてしまうミスが起こります。\n   <div class=\"important\">厳しい（範囲の狭い）条件を上に書く</div>"
  },
  {
    "id": 12,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "ベースケース",
    "text": "再帰関数において、自分自身を呼び出すのを停止して具体的な値を返し、計算を確定させる役割を持つ部分の名称として、最も適切なものを選んでください。",
    "example": "Fact(3) は内部で 3 × Fact(2) を呼び出しますが、この連鎖が無限に続かないようにするための「ストッパー」となる役割のことです。",
    "code": "01  整数型: m\n02  Fact(整数型: m)\n03  <span class=\"if\">if (m > 0)</span>\n04     return m × Fact(m - 1)\n05  <span class=\"if\">elseif (m = 0)</span>\n06     return 1\n07  <span class=\"if\">endif</span>",
    "choices": [
      "ベースケース",
      "再帰ステップ",
      "無限ループ",
      "例外処理"
    ],
    "specific_explanation": "1. 最小単位の特定\n   再帰処理において、これ以上問題を分割できない最小の状態（例：m = 0）を「ベースケース」と呼びます。\n\n2. 戻り値の確定\n   ベースケースに到達した際に具体的な数値（この例では 1）を返すことで、それまで積み上がっていた計算の連鎖が逆順に解決され、最終的な解が導き出されます。もしこれが存在しないと、処理は無限に自分自身を呼び出し続け、エラーとなってしまいます。\n   <div class=\"important\">ベースケース</div>"
  },
  // 3問目
  // --- テーマ1：配列操作と累積計算の基本 ---
  {
    "id": 13,
    "category": "数値計算系",
    "theme": "n進法",
    "subtheme": "重み付けの累積",
    "text": "n進数の各桁が格納された配列 t を10進数に変換するプログラムです。上位桁から順に処理を行う場合、空欄 [  b  ] に入る累積計算の式を選んでください。ここで、m は配列の要素数、n は基数、ret は累積された10進数値を表します。",
    "example": "3進数「120」を変換する場合、上位桁から順に処理すると、累積値 ret は 1 → 5 → 15 と変化して最終的な値が確定します。",
    "code": "01  cardinal(整数型の配列: t, 整数型: m, 整数型: n)\n02  整数型: i, ret\n03  ret ← 0\n04  <span class=\"for\">for (i を 1 から m まで 1 ずつ増やす)</span>\n05     ret ← [      b      ]\n06  <span class=\"for\">endfor</span>\n07  return ret",
    "choices": [
      "ret * n + t[i]",
      "ret + t[i] * n",
      "ret * t[i] + n",
      "(ret + t[i]) * n"
    ],
    "specific_explanation": "1. 桁の重み付け（シフト）\n   上位桁から順に処理する場合、次の桁へ進むたびに現在までの合計値 ret を基数 n 倍することで、位（くらい）を一つずつ左へずらしていきます。例えば10進数で「12」に「3」を加えて「123」にするには、12を10倍してから3を足すのと同じ原理です。\n\n2. 新しい桁の加算\n   n 倍して空いた一の位に、現在注目している桁の数字 t[i] を加えることで、累積的に10進数への変換が行われます。この手法はホーナー法（Horner's method）とも呼ばれます。\n   <div class=\"important\">ret ← ret * n + t[i]</div>"
  },
  {
    "id": 14,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "配列 array の要素を逆順に並べ替える処理の一部です。左側の要素 array[left] と右側の要素 array[right] を入れ替える際、空欄 [  b  ] に入る適切な字句を選んでください。ここで、tmp は一時的な値を保持するための変数です。",
    "example": "array[left] = 10, array[right] = 20 のとき、tmp を使って値を回し、最終的に array[left] = 20, array[right] = 10 にします。",
    "code": "01  整数型の配列: array\n02  整数型: tmp, left, right\n03  tmp ← array[right]\n04  array[right] ← array[left]\n05  [      b      ] ← tmp",
    "choices": [
      "array[left]",
      "array[right]",
      "tmp",
      "array[1]"
    ],
    "specific_explanation": "1. 退避用変数の利用\n   2つのコップ（array[left] と array[right]）の中身を入れ替えるとき、そのまま片方をもう一方に注ぐと中身が混ざって（上書きされて）消えてしまいます。そのため、まず「空のコップ」である tmp に片方の値を退避させます。\n\n2. 三段階の代入\n   次に、空いたコップ（array[right]）に、もう一方の値（array[left]）を移します。最後に、最初に tmp へ退避させておいた元の値を、まだ入れ替わっていないコップ（array[left]）に戻すことで交換が完了します。この「三角形を描くような値の移動」がスワップの鉄則です。\n   <div class=\"important\">array[left] ← tmp</div>"
  },
  {
    "id": 15,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "添え字が 1 から始まる要素数 n の配列 array において、左側の添え字 left とペアになる「右側の添え字」を求める式（空欄 [  a  ]）を選んでください。",
    "example": "n = 4 のとき：left = 1 なら右端は 4、left = 2 なら右端は 3 です。",
    "code": "01  整数型の配列: array\n02  整数型: n, left, right\n03  n ← arrayの要素数\n04  <span class=\"for\">for (left を 1 から (n ÷ 2 の商) まで 1 ずつ増やす)</span>\n05     right ← [      a      ]\n06     // array[left] と array[right] を入れ替える\n07  <span class=\"for\">endfor</span>",
    "choices": [
      "n - left + 1",
      "n - left",
      "n - left - 1",
      "left + (n ÷ 2)"
    ],
    "specific_explanation": "1. 規則性の発見\n   ペアになる添え字の関係性を数値で確認します。例にある n = 4< の場合、「1 と 4」「2 と 3」がペアです。このとき、どのペアも合計値（left + right）が常に <5（つまり n + 1）になるという規則性が見つかります。\n\n2. ずれの調整\n   「left + right = n + 1」という不変の等式から、求めたい right を導き出すと、right = n + 1 - left となります。添え字が 1 始まりの場合、単純に n から引くだけでは値が 1 小さくなってしまうため、この「+1」による調整が不可欠です。\n   <div class=\"important\">right ← n - left + 1</div>"
  },

  // --- テーマ2：条件分岐とプログラムの堅牢性 ---
  {
    "id": 16,
    "category": "数値計算系",
    "theme": "n進法",
    "subtheme": "各桁のバリデーション",
    "text": "n進数の計算において、配列 t の i 番目の要素 t[i] が基数 n 未満であることを確認し、正しければ計算を続行するプログラムです。空欄 [ a ] に入る適切な比較演算子を選んでください。",
    "example": "10進数の場合、各桁の数字は 0 から 9 の範囲（10未満）である必要があります。t[i] が 10 以上の場合は不適切な値としてエラー（-1）を返します。",
    "code": "01  整数型の配列: t\n02  整数型: n, i, ret\n03  <span class=\"if\">if (t[i] [  a  ] n)</span>\n04     ret ← ret * n + t[i]\n05  <span class=\"if\">else</span>\n06     ret ← -1\n07  <span class=\"if\">endif</span>",
    "choices": [
      "<",
      "<=",
      ">=",
      ">"
    ],
    "specific_explanation": "1. 境界の特定\nn進法において、各桁に使用できる数字は 0 から「n - 1」までです。したがって、境界となる数値は 基数 n となります。\n\n2. 含むか含まないか\n問題のプログラムは if ブロックで正常な計算を行い、else ブロックでエラー処理（-1）を行っています。そのため、if の条件式には「t[i] が n より小さい（nを含まない）」ことを示す未満（<）を入れるのが正解です。\n<div class=\"important\">if (t[i] < n)</div>"
  },
  {
    "id": 17,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "n進数変換プログラムで、エラー（ret = -1）が発生した場合、または全桁の処理が完了した場合にループを終了させます。空欄 [  1  ] に入る適切な論理演算子を選んでください。ここで、i は現在処理中の桁の位置、m は総桁数を表します。",
    "example": "m = 3 のとき、i = 2 で ret = -1 ならば、3 桁目の処理を待たずにループを抜ける。",
    "code": "01  整数型: i, m, ret\n02  i ← 1\n03  <span class=\"while\">while ((ret ≠ -1) [  1  ] (i ≤ m))</span>\n04     // 処理と i の更新\n05  <span class=\"while\">endwhile</span>",
    "choices": [
      "and",
      "or",
      "xor",
      "not"
    ],
    "specific_explanation": "1. 変数の変化\ni は m まで増加し、ret はエラー発生時に -1 へ更新される。\n\n2. 異常系の考慮\n「正常（ret ≠ -1）」かつ「未処理（i ≤ m）」の両方が満たされる間のみ反復するため、and を用いる。\n<div class=\"important\">while ((ret ≠ -1) and (i ≤ m))</div>"
  },
  {
    "id": 18,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "年齢 age に応じて入場料 ret を決定する多分岐プログラムです。6行目の else ブロックが実行されるのは、どのような条件が満たされた場合ですか。",
    "example": "age = 10 の場合、10 ≤ 3 と 10 ≤ 9 が共に偽となり else へ進む。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age ≤ 3)</span>\n03     ret ← 100\n04  <span class=\"if\">elseif (age ≤ 9)</span>\n05     ret ← 300\n06  <span class=\"if\">else</span>\n07     ret ← 500\n08  <span class=\"if\">endif</span>",
    "choices": [
      "前にある全ての条件（if と elseif）が「偽」と判定された場合",
      "いずれか一方の条件が「真」と判定された場合",
      "「3歳以下」に該当しなかった全ての場合",
      "age が 10 である場合のみ"
    ],
    "specific_explanation": "1. 優先順位の確認\nif文は上から順に判定される。3歳以下は2行目、4〜9歳は4行目で既に処理される。\n\n2. 排他性チェック\nelse は前の条件が全て「偽」のときのみ実行される。この例では「10歳以上」が対象。\n<div class=\"important\">全ての先行条件が「偽」のときに else が実行される</div>"
  },

  // 4問目
  // --- テーマ1：再帰の終了条件と制御フロー ---
  {
    "id": 19,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "ベースケース",
    "text": "階乗を計算する再帰関数 Fact(m) において、再帰の連鎖を止めるためのベースケース（空欄 [  b  ]）を選んでください。なお、0! = 1 と定義します。",
    "example": "m = 0 のとき Fact(0) が 1 を返せば、再帰の連鎖が止まり計算が確定する。",
    "code": "01  整数型: m\n02  Fact(整数型: m)\n03  <span class=\"if\">if (m > 0)</span>\n04     return m × Fact(m - 1)\n05  <span class=\"if\">elseif ([    b    ])</span>\n06     return 1\n07  <span class=\"if\">else</span>\n08     return -1\n09  <span class=\"if\">endif</span>",
    "choices": [
      "m が 0 と等しい",
      "m が 1 と等しい",
      "m が 0 より小さい",
      "m が 1 以下"
    ],
    "specific_explanation": "1. 最小単位の特定\n階乗の定義における計算の終着点 0! = 1 をベースケースとする。\n\n2. 戻り値の確定\nm = 0 のときに再帰を停止し、具体的な値 1 を返すことで全体の計算を完結させる。\n<div class=\"important\">elseif (m が 0 と等しい)</div>"
  },
  {
    "id": 20,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "ベースケース",
    "text": "Fact(m) において、再帰継続の条件（3行目）を m > 1 に、停止条件（5行目）を m = 1 に変更した場合、m が 1 以上の範囲で正しく動作するか。",
    "example": "m = 2 のとき、2 × Fact(1) という呼び出しが発生します。Fact(1) が elseif に到達できるかどうか確認してみましょう。",
    "code": "01  整数型: m\n02  Fact(整数型: m)\n03  <span class=\"if\">if (m > 1)</span>\n04     return m × Fact(m - 1)\n05  <span class=\"if\">elseif (m = 1)</span>\n06     return 1\n07  <span class=\"if\">endif</span>",
    "choices": [
      "正しく動作する",
      "Fact(0) が呼び出され無限再帰になる",
      "常に 0 を返すようになる",
      "1 以外の値で実行するとエラーになる"
    ],
    "specific_explanation": "1. 最小単位の特定\n   m ≥ 1 の範囲であれば、終着点を 1!（m = 1）としても階乗の計算結果に影響はありません。\n\n2. 戻り値の確定\n   1! = 1 であるため、m = 1 のときに 1 を返せば、正の整数の階乗として数学的に正しい結果が得られます。\n   <div class=\"important\">正の整数の範囲なら m = 1 停止でも問題ない</div>"
  },

  // --- テーマ2：再帰的処理と計算ロジック ---
  {
    "id": 21,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "階乗 n! = n × (n-1)! を再帰関数 Fact(m) で実装する。空欄 [ a ] に入る式を選べ。",
    "example": "m = 3 のとき、3 × Fact(?) という形になるはずです。? に何が入るか考えてみましょう。",
    "code": "01  整数型: m\n02  Fact(整数型: m)\n03  <span class=\"if\">if (m > 0)</span>\n04     return [    a    ]\n05  <span class=\"if\">endif</span>",
    "choices": [
      "m × Fact(m - 1)",
      "(m - 1) × Fact(m)",
      "m + Fact(m - 1)",
      "Fact(m - 1)"
    ],
    "specific_explanation": "1. 一回り小さい形への変換\n   「現在の値 m」に「一つ小さい値 m - 1 の計算結果」を掛け合わせることで、階乗の定義をプログラムに落とし込みます。\n\n2. 再帰呼び出し\n   自分自身（Fact）を引数 m - 1 で呼び出し、より小さな問題を解かせることで最終的な解を得ます。\n   <div class=\"important\">return m × Fact(m - 1)</div>"
  },
  {
    "id": 22,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "階乗を計算する再帰関数 Fact(m) において、Fact(3) を呼び出したとき、関数内部で Fact 関数は合計で何回呼び出されますか。※最初の呼び出し Fact(3) も含めます。",
    "example": "Fact(3) が Fact(2) を呼び出し、Fact(2) がさらに Fact(1) を呼び出す…という連鎖を手でたどってみましょう。どこで止まりますか。",
    "code": "Fact(3) = 3 × Fact(2)\nFact(2) = 2 × Fact(1)\nFact(1) = 1 × Fact(0)\nFact(0) = 1 （停止）",
    "choices": [
      "4回",
      "3回",
      "2回",
      "5回"
    ],
    "specific_explanation": "1. 一回り小さい形への変換\n   m = 3, 2, 1 のあいだは if (m > 0) に入り、次の Fact を呼び出します。\n\n2. 最小単位の特定\n   m = 0 になったとき elseif (m = 0) に入り 1 を返して再帰が止まります。呼び出しは Fact(3), Fact(2), Fact(1), Fact(0) の計 4 回です。\n   <div class=\"important\">Fact(3), Fact(2), Fact(1), Fact(0) の計4回</div>"
  },
  {
    "id": 23,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "階乗を計算する再帰関数 Fact(m) において、もし 4行目を return m × Fact(m) と記述してしまった場合、どのような問題が発生しますか。",
    "example": "m = 3 のとき、3 × Fact(3) が呼ばれます。次に Fact(3) の中ではまた何が呼ばれるか追ってみましょう。",
    "code": "01  整数型: m\n02  Fact(整数型: m)\n03  <span class=\"if\">if (m > 0)</span>\n04     return m × Fact(m)  /* ← 誤り */\n05  <span class=\"if\">elseif (m = 0)</span>\n06     return 1\n07  <span class=\"if\">endif</span>",
    "choices": [
      "無限に自分を呼び出し続け、メモリ不足（スタックオーバーフロー）で停止する",
      "計算結果が常に 0 になる",
      "1回だけ呼び出して終了する",
      "コンパイル時にエラーが出る"
    ],
    "specific_explanation": "1. 一回り小さい形への変換\n   再帰関数は、呼び出しのたびに引数を「終了条件に近づける」必要があります。正しくは Fact(m - 1) のように引数を 1 減らします。\n\n2. 最小単位の特定\n   引数が m のまま変化しない場合、終了条件 m = 0 に決して到達できないため、無限に再帰が続いてしまいます。\n   <div class=\"important\">終了条件に近づかない再帰は無限ループになる</div>"
  },

  // 5問目
  // --- テーマ1：論理演算の基本とXORの性質 ---
  {
    "id": 24,
    "category": "数値計算系",
    "theme": "論理演算",
    "subtheme": "真理値の組み合わせ",
    "text": "2つのビット bin1[i] と bin2[i] の排他的論理和（XOR）を計算するプログラムにおいて、空欄に入る最も適切な条件式を選んでください。ここで、retBin[i] は結果のビットを格納する配列です。",
    "example": "入力: bin1[i]=0, bin2[i]=1 → 出力: retBin[i]=1。入力: bin1[i]=1, bin2[i]=1 → 出力: retBin[i]=0。",
    "code": "01  <span class=\"if\">if ([      条件式      ])</span>\n02     retBin[i] ← 1\n03  <span class=\"if\">else</span>\n04     retBin[i] ← 0\n05  <span class=\"if\">endif</span>",
    "choices": [
      "(bin1[i] + bin2[i]) が 1 と等しい",
      "(bin1[i] × bin2[i]) が 1 と等しい",
      "bin1[i] が bin2[i] と等しい",
      "(bin1[i] が 1 と等しい) and (bin2[i] が 1 と等しい)"
    ],
    "specific_explanation": "1. AND/OR/XORの基本\n   XORは、2つの値が「異なるとき」に 1 になります。0と1のペアなら足して1になり、0と0なら0、1と1なら2（ビットとしては0）になる性質を利用します。\n\n2. 真理値の組み合わせ\n   「違う」ときだけ 1 になるというルールを、加算結果が 1 になるかどうかで判定しています。\n   <div class=\"important\">(bin1[i] + bin2[i]) = 1</div>"
  },

  // --- テーマ2：配列によるビット列処理 ---
  {
    "id": 25,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "最大・最小の探索",
    "text": "8ビットの配列 bin1 と bin2 を走査し、ビットごとの計算結果を配列 retBin に格納する際、ループ変数 i の範囲として適切なものを選んでください。なお、配列の添え字は 1 から始まるとします。",
    "example": "8ビット配列の全要素を処理するため、添え字が1から8までループする必要がある。",
    "code": "01  整数型の配列: bin1, bin2, retBin\n02  整数型: i\n03  <span class=\"for\">for (i を [  開始  ] から [  終了  ] まで 1 ずつ増やす)</span>\n04     retBin[i] ← bin1[i] XOR bin2[i]  /* ビットごとの演算 */\n05  <span class=\"for\">endfor</span>",
    "choices": [
      "1 から 8 まで",
      "0 から 7 まで",
      "1 から 7 まで",
      "0 から 8 まで"
    ],
    "specific_explanation": "1. 開始と終了の数値\n   画像の問題文に「配列の要素番号は 1 から始まる」とあり、ビット列が 8ビット であるため、1番目から 8番目までを処理する必要があります。\n\n2. 範囲と終端判定\n   添え字の開始が 1 か 0 かで終了条件が変わるため、問題文の前提を正確に読み取ることが重要です。\n   <div class=\"important\">for (i を 1 から 8 まで)</div>"
  },
  {
    "id": 26,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "ビット列の処理を行うこのプログラムを for 文ではなく while 文で書き換える場合、ループ変数 i の更新処理としてループ内で忘れてはいけない処理はどれですか。",
    "example": "while (i ≤ 8) の条件がいつか偽(false)になるためには、ループ内で i をどう変化させる必要があるか考えてみましょう。",
    "code": "01  整数型: i\n02  i ← 1\n03  <span class=\"while\">while (i ≤ 8)</span>\n04     /* 計算処理 */\n05     [      ?      ]\n06  <span class=\"while\">endwhile</span>",
    "choices": [
      "i ← i + 1",
      "i ← 0",
      "i ← i - 1",
      "return retBin"
    ],
    "specific_explanation": "1. 変数の変化\n   while 文では、ループ内で条件に使っている変数（ここでは i）を更新しないと、条件がいつまでも真のままになり無限ループに陥ります。\n\n2. 無限ループ回避\n   for 文が自動で行ってくれる「カウントアップ」を手動で記述する必要があります。\n   <div class=\"important\">i ← i + 1</div>"
  },
  // 6問目
  // --- テーマ1：論理シフトの仕組みと範囲判定 ---
  {
    "id": 27,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のシフト（ずらし）",
    "text": "ビット配列 bin (要素数8) を左に n ビット論理シフトします。データを上書きしないよう、移動元のビットを移動先へコピーする処理を for ループで実装するとき、ループを開始すべき添え字 i の初期値を求める式はどれですか。",
    "example": "入力: n=2 の場合、bin[8] ← bin[6] が最後の有効なコピー処理となる。そのため、ループは i=6 から始める必要がある。",
    "code": "01  整数型の配列: bin\n02  整数型: i, n\n03  /* n ビット左シフト：上書きを避けるため末尾側から処理する */\n04  <span class=\"for\">for (i を [  a  ] から 1 まで 1 ずつ減らす)</span>\n05     bin[i + n] ← bin[i]\n06  <span class=\"for\">endfor</span>",
    "choices": [
      "binの要素数 - n",
      "binの要素数",
      "binの要素数 + n",
      "n"
    ],
    "specific_explanation": "1. 移動方向の確認\n   ビットを左（添え字が大きくなる方向）へ n だけずらす際、移動先 i + n が「配列の最大サイズ」を超えないようにする必要があります。\n\n2. 端の処理\n   移動先の最大値が binの要素数 であるため、i + n = binの要素数 となる i = binの要素数 - n が移動元の最大値となります。\n   <div class=\"important\">i = binの要素数 - n</div>"
  },
  {
    "id": 28,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "要素数 8 の配列 bin を 3 ビット左シフトし、空いた下位（添え字小）のビットを 0 で埋める。i の範囲（空欄 a）を選べ。",
    "example": "添え字は 1 から開始。左シフトにより 1 から 3 番目が空きとなる。",
    "code": "01  整数型の配列: bin\n02  整数型: i\n03  // 空いた下位ビットを 0 で埋める\n04  <span class=\"for\">for (i を [    a    ])</span>\n05     bin[i] ← 0\n06  <span class=\"for\">endfor</span>",
    "choices": [
      "1 から 3 まで",
      "1 から 8 まで",
      "6 から 8 まで",
      "4 から 8 まで"
    ],
    "specific_explanation": "1. 開始と終了の数値\n左シフトによりデータが上位（添え字大）へ移動するため、下位（添え字小）に空きが生じる。3 ビットのシフトなら 1 から 3 番目が空の状態になる。\n\n2. 規則性の発見\n埋めるべき範囲は「空いた箇所そのもの」である。開始 1 から終了 3 までの反復により、対象の全ビットを 0 にリセットできる。\n<div class=\"important\">for (i を 1 から 3 まで 1 ずつ増やす)</div>"
  },

  // --- テーマ2：ループの順序とデータの保全 ---
  {
    "id": 29,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "変数の変化",
    "text": "ビット配列 bin の要素を移動させるループ（i を bin の要素数-n から 1 まで 1 ずつ減らす）を while 文で実装する場合、ループ変数 i の更新処理としてループ内の最後に記述すべき処理はどれですか。",
    "example": "while (i ≥ 1) の条件がいつか偽(false)になるためには、i をどちらの方向へ変化させる必要があるか考えてみましょう。",
    "code": "01  整数型の配列: bin\n02  整数型: i, n\n03  i ← binの要素数 - n\n04  <span class=\"while\">while (i ≥ 1)</span>\n05     bin[i + n] ← bin[i]\n06     [      ?      ]\n07  <span class=\"while\">endwhile</span>",
    "choices": [
      "i ← i - 1",
      "i ← i + 1",
      "i ← 0",
      "i ← binの要素数"
    ],
    "specific_explanation": "1. 無限ループ回避\n   このループは「1 まで減らす」処理であるため、ループのたびに変数 i を 1 ずつ小さくする必要があります。\n\n2. 変数の変化\n   i を減らさないと条件 i ≥ 1 が常に真のままとなり、プログラムが停止しなくなります。\n   <div class=\"important\">i ← i - 1</div>"
  },
  // 7問目
  // --- テーマ1：剰余演算とループの継続条件 ---
  {
    "id": 30,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "変数 num の値を 2 ずつ減らしながら加算を繰り返す while 文において、正しく合計値 sum を出し切るための「継続条件（空欄 a）」を選んでください。",
    "example": "num = 7 のとき、7, 5, 3, 1 の順に加算され、num が -1 になった時点でループを終了させたいとすると、継続条件はどう書けばよいでしょうか。",
    "code": "01  整数型: num, sum ← 0\n02  <span class=\"while\">while ([      a      ])</span>\n03     sum ← sum + num\n04     num ← num - 2\n05  <span class=\"while\">endwhile</span>",
    "choices": [
      "num ≥ 1",
      "num > 1",
      "num mod 2 == 0",
      "num ≠ 0"
    ],
    "specific_explanation": "1. 変数の変化\n   num は 2 ずつ減っていくため、最後は 1（奇数の場合）または 2（偶数の場合）になります。\n\n2. 無限ループ回避\n   数値が 1 以上の間は加算を続け、0 以下になったら終了するよう num ≥ 1 と設定するのが適切です。\n   <div class=\"important\">while (num ≥ 1)</div>"
  },
  {
    "id": 31,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "引数として渡された変数 num が 0 以下の数値だった場合、このプログラムはどのような挙動になりますか。",
    "example": "num = -5 のとき、if 文の条件式 (num > 0) の判定結果がどうなるか追ってみましょう。",
    "code": "01  整数型: num\n02  <span class=\"if\">if (num > 0)</span>\n03     /* while ループ処理 */\n04  <span class=\"if\">else</span>\n05     return -1\n06  <span class=\"if\">endif</span>",
    "choices": [
      "-1 を返して終了する",
      "無限ループになる",
      "0 を返す",
      "エラーでプログラムが強制終了する"
    ],
    "specific_explanation": "1. 異常系の考慮\n   最初の if 文で num > 0（正の整数であること）をチェックしています。\n\n2. 変数の変化\n   条件を満たさない場合は直ちに else 句へ進み、エラーを示す -1 を返します。これにより不正なデータによる無限ループや誤作動を防いでいます。\n   <div class=\"important\">return -1</div>"
  },

  // --- テーマ2：変数の更新と数列の集計 ---
  {
    "id": 32,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "合計値 sum を計算する際、次の加算対象を「1つ飛ばし（奇数なら次の奇数、偶数なら次の偶数）」にするための更新式（空欄 b）を選んでください。ここで、num は加算対象の数です。",
    "example": "num = 7 のとき、次に足すべき数は 5 です。",
    "code": "01  整数型: num, sum\n02  sum ← 0\n03  <span class=\"while\">while (num ≥ 1)</span>\n04     sum ← sum + num\n05     num ← [      b      ]\n06  <span class=\"while\">endwhile</span>",
    "choices": [
      "num - 2",
      "num - 1",
      "num / 2",
      "num mod 2"
    ],
    "specific_explanation": "1. 規則性の発見\n   奇数の次は「奇数-2」、偶数の次は「偶数-2」という規則性があります。\n\n2. 変数の変化\n   2 ずつ減らすことで、引数の性質（奇・偶）を維持したまま、1 または 2 に向かって数値を更新できます。\n   <div class=\"important\">num ← num - 2</div>"
  },
  {
    "id": 33,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグの初期化",
    "text": "ループ処理で合計値を計算する前に、変数を sum ← 0 と初期化（リセット）している理由として最も適切なものはどれですか。",
    "example": "sum が初期化されないまま 3行目の sum ← sum + num が初めて実行されると、どんな問題が起きるか考えてみましょう。",
    "code": "01  整数型: num, sum\n02  sum ← 0\n03  <span class=\"while\">while (num ≥ 1)</span>\n04     sum ← sum + num\n05     num ← num - 2\n06  <span class=\"while\">endwhile</span>",
    "choices": [
      "以前の計算結果やゴミデータが残らないようにし、正しく加算を始めるため",
      "while文の継続条件に使用するため",
      "戻り値の型を整数型に確定させるため",
      "num の値が 0 のときでもエラーを出さないようにするため"
    ],
    "specific_explanation": "1. フラグの初期化\n   集計処理（累積加算）を行う変数は、必ず処理の直前に「空の状態」にしておく必要があります。\n\n2. 変数の変化\n   0 から始めないと、意図しない数値が足し込まれる原因になります。\n   <div class=\"important\">累積変数は 0 で初期化する</div>"
  },
  // 8問目
  // --- テーマ1：2進法加算の論理と繰り上がり ---
  {
    "id": 34,
    "category": "数値計算系",
    "theme": "論理演算",
    "subtheme": "真理値の組み合わせ",
    "text": "2進数の同じ位のビット bin1[i] と bin2[i] が「等しい」場合（0+0 または 1+1）の加算処理です。その位の結果ビットとして追加すべき値（空欄 a）を選んでください。なお、c は前の位からの繰り上がり（0 または 1）とします。",
    "example": "c=1 のとき：1+1 なら結果は 1 (繰り上がり発生)、0+0 なら結果は 1 (繰り上がりなし)",
    "code": "01  <span class=\"if\">if (bin1[i] == bin2[i])</span>\n02     sumの末尾に [  a  ] を追加する\n03     <span class=\"if\">if (bin1[i] == 1)</span>\n04        c = 1\n05     <span class=\"else\">else</span>\n06        c = 0\n07     <span class=\"endif\">endif</span>\n08  <span class=\"endif\">endif</span>",
    "choices": [
      "c",
      "1",
      "0",
      "bin1[i]"
    ],
    "specific_explanation": "1. 真理値の組み合わせ\n   bin1[i] と bin2[i] が等しいとき、0+0 なら合計は 0+c、1+1 なら合計は 2+c となります。どちらの場合も、その桁に書き込む値は繰り上がり変数 c と一致します。\n\n2. AND/OR/XORの基本\n   1+1+c の場合、合計は 3（2進数で11）または 2（10）となり、1の位には c の値が残ります。0+0+c の場合も合計は c となり、同様の結果になります。\n   <div class=\"important\">sumの末尾に c を追加する</div>"
  },
  {
    "id": 35,
    "category": "数値計算系",
    "theme": "論理演算",
    "subtheme": "真理値の組み合わせ",
    "text": "2進数のビットが「異なる」場合（1+0 または 0+1）の加算処理です。空欄 [ b ] に入る適切な条件判定を選んでください。なお、c は前の位からの繰り上がりとします。",
    "example": "1+0 の加算で、前の位からの繰り上がり c=1 がある場合、1+0+1 = 2 となり、その位の結果は 0 になります。",
    "code": "01  <span class=\"if\">else</span>\n02     <span class=\"if\">if ([  b  ])</span>\n03        sumの末尾に 1 を追加する\n04     <span class=\"else\">else</span>\n05        sumの末尾に 0 を追加する\n06     <span class=\"endif\">endif</span>\n07  <span class=\"endif\">endif</span>",
    "choices": [
      "c == 0",
      "c == 1",
      "bin1[i] == 1",
      "c != 0"
    ],
    "specific_explanation": "1. 真理値の組み合わせ\n   ビットが異なる場合、その桁の計算は 1 + 0 + c となります。\n\n2. スイッチの切り替え\n   c が 0 なら合計は 1（ビットは1）、c が 1 なら合計は 2（ビットは0で繰り上がり継続）となります。したがって、1 を追加するのは c が 0 のときです。\n   <div class=\"important\">if (c == 0)</div>"
  },
  {
    "id": 36,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "異常系の考慮",
    "text": "2進数加算のループ終了後、最上位桁からの「最後の繰り上がり」を処理します。空欄 [  条件  ] に入る適切なコードはどれですか。",
    "example": "全ての桁の計算が終わった後、c に 1 が残っている場合と残っていない場合で処理を変えるには、c の値を何と比較すればよいか考えてみましょう。",
    "code": "01  整数型: c\n02  /* for ループ終了後 */\n03  <span class=\"if\">if ([  条件  ])</span>\n04     sum の末尾に 1 を追加する\n05  <span class=\"if\">endif</span>",
    "choices": [
      "c = 1",
      "c = 0",
      "bin1[i] = 1",
      "sum の要素数 > 0"
    ],
    "specific_explanation": "1. 異常系の考慮\n   全ての桁を計算し終えた後、最後に繰り上がり c が 1 として残っている場合があります。これを処理しないと計算結果が不正になります。\n\n2. フラグによる終了判定\n   c が 1 であれば新しい桁として 1 を追加することで、正しい加算結果（オーバーフロー分の桁上げ）を保証します。\n   <div class=\"important\">if (c = 1)</div>"
  },
  // 9問目
  // --- テーマ1：繰り返し減算による除算のロジック ---

  // --- テーマ2：制御フローと配列による状態管理 ---
  {
    "id": 37,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "インデックスの役割固定",
    "text": "配列の要素番号が 1 から始まる言語において、計算結果を格納する配列 result の 1番目の要素に「割られる数 x」を初期値として代入する処理を選んでください。",
    "example": "この問題における配列は「0番目」からではなく「1番目」からデータを格納していく仕様であることに注意してコードを読み解きましょう。",
    "code": "01  整数型: x, y\n02  整数型の配列: result ← {0, 0}\n03  <span class=\"if\">if ((x > 0) and (y > 0))</span>\n04     [      a      ]\n05  <span class=\"if\">endif</span>",
    "choices": [
      "result[1] ← x",
      "result[0] ← x",
      "result[2] ← x",
      "x ← result[1]"
    ],
    "specific_explanation": "1. インデックスの役割固定\n   このアルゴリズムでは、result[1] を「現在の余り（最初は割られる数そのもの）」として管理する役割を与えています。\n\n2. ずれの調整\n   要素番号が 1 から始まるというルールに基づき、最初の要素である result[1] に x を代入します。\n   <div class=\"important\">result[1] ← x</div>"
  },

  // 10問目
  // 11問目
  // 12問目
  // --- テーマ1：期間集計の初期化と同一月の判定 ---
  {
    "id": 38,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "2つの日付（from, to）の経過日数を求めるプログラムです。開始月と終了月が同じ場合に、日数の差を正しく計算する式を選んでください。ここで、from.month は開始月、to.month は終了月、from.day は開始日、to.day は終了日を表します。",
    "example": "1月2日から1月5日の場合、経過日数は 5 - 2 = 3日となります。",
    "code": "01  countDays(Date: from, Date: to)\n02  整数型の配列: mDay ← {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}\n03  整数型: i, days\n04  <span class=\"if\">if (from.month = to.month)</span>\n05     days ← [      1      ]\n06  <span class=\"if\">else</span>\n07     // 月をまたぐ処理（省略）\n08  <span class=\"if\">endif</span>\n09  return days",
    "choices": [
      "to.day - from.day",
      "from.day - to.day",
      "to.day",
      "mDay[from.month] - from.day"
    ],
    "specific_explanation": "1. 境界の特定\n   「同じ月」という境界条件では、月の合計日数を気にする必要はありません。単純に「日」の数値の差分を求めるだけで経過日数が算出できます。\n\n2. 含むか含まないか\n   問題文の例（2日と5日なら3日）に従い、「終了日」から「開始日」を引く単純な減算が適切です。\n   <div class=\"important\">days ← to.day - from.day</div>"
  },
  {
    "id": 39,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "存在チェック",
    "text": "月をまたぐ日数計算において、最初に「開始月の残り日数」を求めます。空欄 [  a  ] に入る適切な式を選んでください。ここで、mDay は各月の日数を格納した配列、from.month は開始月、from.day は開始日を表します。",
    "example": "1月10日から始まる場合、1月の残り日数は 31 - 10 = 21日です。",
    "code": "01  countDays(Date: from, Date: to)\n02  整数型の配列: mDay ← {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}\n03  整数型: i, days\n04  days ← [      a      ]   /* 開始月の残り日数 */\n05  i ← from.month + 1\n06  <span class=\"while\">while (i < to.month)</span>\n07     days ← days + mDay[i]\n08     i ← i + 1\n09  <span class=\"while\">endwhile</span>\n10  days ← days + to.day\n11  return days",
    "choices": [
      "mDay[from.month] - from.day",
      "from.day",
      "mDay[from.month]",
      "0"
    ],
    "specific_explanation": "1. 初期状態の設定\n   月が異なる場合、まずは「最初の月」があと何日残っているかを計算して合計の土台にします。\n\n2. 状態の更新\n   その月の総日数（mDay[from.month]）から、既に過ぎた日数（from.day）を差し引くことで、翌月までの日数が求まります。\n   <div class=\"important\">days ← mDay[from.month] - from.day</div>"
  },
  {
    "id": 40,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグの初期化",
    "text": "月をまたぐ計算で、中間の月をループで足し合わせる準備をします。ループ変数 i の初期値として適切なものを選んでください。ここで、from.month は開始月を表します。",
    "example": "開始月が 1月なら、ループで「丸ごと1ヶ月分」加算するのは何月から始まりますか。",
    "code": "01  countDays(Date: from, Date: to)\n02  整数型: i\n03  days ← mDay[from.month] - from.day  /* 開始月の残り日数 */\n04  i ← [      a      ]\n05  <span class=\"while\">while (i < to.month)</span>\n06     days ← days + mDay[i]\n07     i ← i + 1\n08  <span class=\"while\">endwhile</span>",
    "choices": [
      "from.month + 1",
      "from.month",
      "1",
      "to.month - 1"
    ],
    "specific_explanation": "1. フラグの初期化\n   開始月の日数は 3行目で既に計算されています。次に処理すべきは「その翌月」からです。\n\n2. 変数の変化\n   開始月の月番号に 1 を足すことで、集計対象を正しく次の月にスライドさせます。\n   <div class=\"important\">i ← from.month + 1</div>"
  },

  // --- テーマ2：ループによる月またぎ処理と最終調整 ---
  {
    "id": 41,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "中間の月（丸ごと1ヶ月ある月）を全て足し合わせるループにおいて、終了条件として適切なものを選んでください。ここで、i はループ変数、to.month は終了月を表します。",
    "example": "1月から4月の計算なら、ループで足すのは何月と何月だけか考えてみましょう。to.month 自体はループ内で処理すべきでしょうか。",
    "code": "01  整数型: i\n02  i ← from.month + 1\n03  <span class=\"while\">while ([      1      ])</span>\n04     days ← days + mDay[i]\n05     i ← i + 1\n06  <span class=\"while\">endwhile</span>\n07  days ← days + to.day",
    "choices": [
      "i < to.month",
      "i ≤ to.month",
      "i < 12",
      "i ≠ to.month"
    ],
    "specific_explanation": "1. 変数の変化\n   終了月（to.month）は丸ごと1ヶ月ではなく特定の日（to.day）までを足す必要があります。\n\n2. 無限ループ回避\n   そのためループでは終了月の「手前（未満）」で処理を止め、終了月の計算はループの外で行うのが日付計算の定石です。\n   <div class=\"important\">while (i < to.month)</div>"
  },
  {
    "id": 42,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "全件比較と更新",
    "text": "期間内の「中間の月」の総日数を、ループを使って累計日数 days に加算していく処理です。各月の日数が格納された配列 mDay から、ループ変数 i を使って正しい日数を参照する式を選んでください。",
    "example": "ループ変数 i は「現在処理している月」を表しています。その月の日数が格納されている配列 mDay の要素をどうやって取り出すか考えます。",
    "code": "01  i ← from.month + 1\n02  <span class=\"while\">while (i < to.month)</span>\n03     days ← days + [      a      ]\n04     i ← i + 1\n05  <span class=\"while\">endwhile</span>",
    "choices": [
      "mDay[i]",
      "mDay[from.month]",
      "mDay[to.month]",
      "mDay[i + 1]"
    ],
    "specific_explanation": "1. 規則性の発見\n   ループ変数 i は現在処理している「月」を指しています。配列 mDay には各月の総日数が格納されています。\n\n2. 全件比較と更新\n   現在注目している月 i の日数を mDay[i] で取得し、累積変数 days に追加し続けることで、期間内の日数を集計します。\n   <div class=\"important\">days ← days + mDay[i]</div>"
  },
  {
    "id": 43,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "中間の月の集計が完了した後、最後に全体の合計日数を確定させます。空欄 [  b  ] に入る適切な式を選んでください。ここで、days は現在の累積日数、to.day は終了日を表します。",
    "example": "ここまでで累計 100日あり、終了日が 5日の場合、最終的な合計を 105日にします。",
    "code": "01  countDays(Date: from, Date: to)\n02  整数型の配列: mDay ← {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}\n03  整数型: i, days\n04  days ← mDay[from.month] - from.day   /* 開始月の残り日数 */\n05  i ← from.month + 1\n06  <span class=\"while\">while (i < to.month)</span>\n07     days ← days + mDay[i]\n08     i ← i + 1\n09  <span class=\"while\">endwhile</span>\n10  days ← [      b      ]   /* 終了月の日数を加算 */\n11  return days",
    "choices": [
      "days + to.day",
      "days - to.day",
      "to.day",
      "days + mDay[to.month]"
    ],
    "specific_explanation": "1. 条件ヒットで加算\n   これまでの days には「開始月の残り」と「中間の月」の合計が入っています。\n\n2. 規則性の発見\n   最後に、終了月で経過した「○日（to.day）」という端数を足すことで、全期間の計算が完了します。\n   <div class=\"important\">days ← days + to.day</div>"
  },
  // 13問目
  // --- テーマ1：集計と在庫の更新（投入時） ---
  {
    "id": 44,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "客が投入した貨幣の合計金額を求めるための正しい処理を選んでください。空欄 [  1  ] に入る適切な式を答えてください。ここで、payment[i] は投入枚数、money[i] は金種、pay は合計投入金額、stock[i] は在庫数を表します。",
    "example": "payment[2]=3（100円玉3枚）のとき、pay に 300円 を加算します。",
    "code": "01  pay ← 0\n02  <span class=\"for\">for (i を 1 から moneyの要素数 まで 1 ずつ増やす)</span>\n03     pay ← [      1      ]\n04     stock[i] ← stock[i] + payment[i]\n05  <span class=\"for\">endfor</span>",
    "choices": [
      "pay + payment[i] × money[i]",
      "pay + payment[i]",
      "payment[i] × money[i]",
      "pay + money[i]"
    ],
    "specific_explanation": "1. 規則性の発見\n   各金種の「投入枚数（payment[i]）」に「金額（money[i]）」を掛けることで、その金種での投入額が求まります。\n\n2. 条件ヒットで加算\n   これを累積変数 pay に足し合わせることで、最終的な合計投入金額を算出します。\n   <div class=\"important\">pay ← pay + payment[i] × money[i]</div>"
  },
  {
    "id": 45,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のシフト（ずらし）",
    "text": "貨幣が投入された際に、自動販売機内の在庫数（stock）を更新する処理です。空欄 [  1  ] に入る適切な式を選んでください。ここで、payment[i] は金種 i の投入枚数、stock[i] は金種 i の現在の在庫数を表します。",
    "example": "100円玉を 2枚 投入したとき、100円玉の在庫数を 2 増やします。",
    "code": "01  整数型: pay ← 0, i\n02  整数型の配列: payment, money, stock\n03  <span class=\"for\">for (i を 1 から moneyの要素数 まで 1 ずつ増やす)</span>\n04     pay ← pay + payment[i] × money[i]\n05     [      1      ]\n06  <span class=\"for\">endfor</span>",
    "choices": [
      "stock[i] ← stock[i] + payment[i]",
      "stock[i] ← payment[i]",
      "stock[i] ← stock[i] - payment[i]",
      "payment[i] ← stock[i]"
    ],
    "specific_explanation": "1. 全件比較と更新\n   投入された貨幣は自動販売機の在庫に追加されます。\n\n2. 移動方向の確認\n   現在の在庫 stock[i] に、新しく投入された枚数 payment[i] を加算して上書きすることで、在庫状況を最新の状態に保ちます。\n   <div class=\"important\">stock[i] ← stock[i] + payment[i]</div>"
  },
  {
    "id": 46,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "単位の調整",
    "text": "投入金額の集計が完了した後、払い出すべき釣銭の総額を求める式を選んでください。ここで、pay は合計投入金額、price は商品の価格、change は払い出すべき釣銭の総額を表します。",
    "example": "1000円投入し、160円の商品を購入した場合、釣銭は 840円 です。",
    "code": "01  整数型: pay, price, change\n02  /* 各金種 × 枚数の合計が pay に格納済み */\n03  change ← [      1      ]",
    "choices": [
      "pay - price",
      "price - pay",
      "pay + price",
      "pay mod price"
    ],
    "specific_explanation": "1. 単位の調整\n   釣銭は、客が支払った総額から商品の代金を差し引いた残額です。\n\n2. 切り捨てと整数型変換\n   単純な減算によって、これから払い出すべき目標金額 change を確定させます。どの変数がどの役割を持っているか、しっかりと確認しましょう。\n   <div class=\"important\">change ← pay - price</div>"
  },

  // --- テーマ2：釣銭の算出ロジック（払い出し時） ---
  {
    "id": 47,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "払い出す枚数 cnt が在庫数 stock[i] を上回る場合に、在庫の全数を払い出すための処理 [  a  ] を選んでください。",
    "example": "100円玉が 5 枚必要なのに在庫が 3 枚しかないとき、最終的に払い出せる枚数は何枚になるか考えてみましょう。",
    "code": "01  整数型: change, money[i], stock[i], cnt\n02  cnt ← change ÷ money[i]\n03  <span class=\"if\">if (stock[i] < cnt)</span>\n04     [      a      ]\n05  <span class=\"if\">endif</span>",
    "choices": [
      "cnt ← stock[i]",
      "stock[i] ← cnt",
      "cnt ← cnt - 1",
      "cnt ← 0"
    ],
    "specific_explanation": "1. 境界の特定\n   算出した必要枚数 cnt と実際の在庫数 stock[i] を比較します。在庫が不足している（stock[i] < cnt）状態を判定の基準とします。\n\n2. 含むか含まないか\n   在庫が足りない場合は、払い出す枚数 cnt を在庫数 stock[i] で上書きし、可能な限りの枚数を払い出します。\n   <div class=\"important\">cnt ← stock[i]</div>"
  },
  {
    "id": 48,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "釣銭として貨幣を払い出した後、その金種の在庫数を正しく更新する処理を選んでください。ここで、stock[i] は金種 i の現在の在庫数、cnt は払い出し枚数を表します。",
    "example": "10円玉を 4枚 払い出したとき、10円玉の在庫を 4 減らします。",
    "code": "01  整数型: change, cnt, i\n02  整数型の配列: money, stock\n03  cnt ← change ÷ money[i]\n04  <span class=\"if\">if (stock[i] < cnt)</span>\n05     cnt ← stock[i]  /* 在庫が不足する場合は在庫数を上限とする */\n06  <span class=\"if\">endif</span>\n07  /* 払い出し枚数 cnt が確定した後 */\n08  stock[i] ← [      1      ]",
    "choices": [
      "stock[i] - cnt",
      "cnt - stock[i]",
      "stock[i] + cnt",
      "money[i] - cnt"
    ],
    "specific_explanation": "1. 退避用変数の利用\n   決定した払い出し枚数 cnt 分だけ、その金種の在庫を減らす必要があります。\n\n2. 三段階の代入\n   現在の在庫 stock[i] から cnt を引き、その結果で stock[i] を更新します。\n   <div class=\"important\">stock[i] ← stock[i] - cnt</div>"
  },
  {
    "id": 49,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "範囲内に収める",
    "text": "特定の金種で釣銭を払い出した後、残りの釣銭額を更新します。空欄 [  b  ] に入る適切な式を選んでください。ここで、change は残りの釣銭額、cnt は払い出し枚数、money[i] は金種の金額を表します。",
    "example": "残りの釣銭が 840円 で、500円玉を 1枚 払い出した場合、残りの釣銭額は 340円 になります。",
    "code": "01  整数型: change, cnt, i\n02  整数型の配列: money, stock\n03  cnt ← change ÷ money[i]\n04  <span class=\"if\">if (stock[i] < cnt)</span>\n05     cnt ← stock[i]\n06  <span class=\"if\">endif</span>\n07  stock[i] ← stock[i] - cnt\n08  change ← [      b      ]",
    "choices": [
      "change - cnt × money[i]",
      "change - cnt",
      "change mod cnt",
      "change - money[i]"
    ],
    "specific_explanation": "1. 周期的なインデックス\n   払い出した「枚数 × 金額」の分だけ、まだ返すべき総額（change）から差し引きます。\n\n2. 範囲内に収める\n   これにより、次のループ（より小さな金種）で計算すべき「残りの金額」が正しく維持されます。\n   <div class=\"important\">change ← change - cnt × money[i]</div>"
  },
  // 14問目
  // --- テーマ1：評価点の集計と順位の計算 ---
  {
    "id": 50,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "各商品の評価点（1〜5）がそれぞれ何回現れたかをカウントする処理です。空欄 [  1  ] に入る適切な式を選んでください。ここで、freq は評価点ごとの出現数を格納する配列（freq[1]〜freq[5]）、products[i].score は i 番目の商品の評価点を表します。",
    "example": "評価点「3点」の商品が見つかるたびに、freq[3] の値を 1 増やします。",
    "code": "01  整数型の配列: freq ← {0, 0, 0, 0, 0, 0}  /* 添字 1〜5 を使用 */\n02  整数型: i\n03  <span class=\"for\">for (i を 1 から productsの要素数 まで 1 ずつ増やす)</span>\n04     [      1      ]\n05  <span class=\"for\">endfor</span>",
    "choices": [
      "freq[products[i].score] ← freq[products[i].score] + 1",
      "freq[i] ← freq[i] + 1",
      "freq[products[i].score] ← i",
      "freq[score] ← freq[score] + 1"
    ],
    "specific_explanation": "1. カウンタの用意\n   配列 freq は、評価点を添え字としてその出現回数を記録するための専用変数です。\n\n2. 条件ヒットで加算\n   現在注目している商品の評価点（products[i].score）を添え字にして、対応する freq の要素を 1 ずつ増やしていくことで、度数分布表を作成します。\n   <div class=\"important\">freq[products[i].score] ← freq[products[i].score] + 1</div>"
  },
  {
    "id": 51,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "評価点ごとの「開始順位」を計算する処理です。前の順位の商品の数だけ順位を飛ばす（例：1位が2人なら次は3位）ための正しい更新式を選んでください。ここで、rank は順位を格納する配列、freq は評価点ごとの出現数を格納する配列です。",
    "example": "評価点1の人が 2人いた場合、評価点2の人の開始順位は 1 + 2 = 3位になります。",
    "code": "1  rank[1] ← 1\n2  <span class=\"for\">for (i を 2 から 5 まで 1 ずつ増やす)</span>\n3     rank[i] ← [      a      ]\n4  <span class=\"for\">endfor</span>",
    "choices": ["rank[i - 1] + freq[i - 1]", "rank[i - 1] + 1", "rank[i] + freq[i]", "freq[i - 1] + 1"],
    "specific_explanation": "1. 規則性の発見\n   ある点数 i の開始順位は、「一つ上の点数 i-1 の開始順位」に「その点数 i-1 を持っていた人数」を足すことで求まります。\n\n2. ずれの調整\n   これにより、同順位が複数人いる場合に、その人数分だけ次の順位をスキップするランキング形式が実現されます。\n   <div class=\"important\">rank[i] ← rank[i - 1] + freq[i - 1]</div>"
  },
  {
    "id": 52,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "評価点（1～5点）ごとの順位を計算する際、変数 i を 2 から開始している理由を選べ。",
    "example": "i に具体的な値を代入してみよう。",
    "code": "   01  整数型の配列: rank, freq\n   02  整数型: i\n   03  rank[1] ← 1\n   04  <span class=\"for\">for (i を 2 から 5 まで 1 ずつ増やす)</span>\n   05     rank[i] ← rank[i - 1] + freq[i - 1]\n   06  <span class=\"for\">endfor</span>",
    "choices": [
      "最初の値は既知であり、計算に直前（i - 1）の要素が必要だから",
      "配列の添え字は 0 から始めるのが一般的だから",
      "評価点 5点 の順位を計算対象外とするため",
      "ループ回数を減らして実行効率を向上させるため"
    ],
    "specific_explanation": "1. 開始と終了の数値\nrank[1] は初期値（1位）として設定済みである。計算式で「一つ前の要素（i - 1）」を参照するため、添え字が 0 にならないよう 2 から開始する必要がある。\n\n<div class=\"important\">rank[1] は既知のため、計算は 2 番目から開始する</div>"
  },

  // --- テーマ2：順位の割り当てとデータ参照 ---
  {
    "id": 53,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "全件比較と更新",
    "text": "計算された順位データ rank を、各商品の ranking メンバに書き戻す処理です。空欄 [  1  ] に入る適切な式を答えてください。ここで、products[i].score は i 番目の商品の評価点、products[i].ranking は i 番目の商品のランキングを表します。",
    "example": "商品の評価点が 3点 であれば、rank[3] に格納されている順位をその商品のランキングに代入します。",
    "code": "1  <span class=\"for\">for (i を 1 から productsの要素数 まで 1 ずつ増やす)</span>\n2     products[i].ranking ← [      1      ]\n3  <span class=\"for\">endfor</span>",
    "choices": ["rank[products[i].score]", "rank[i]", "products[i].score", "freq[products[i].score]"],
    "specific_explanation": "1. 規則性の発見\n   商品のメンバ score は「評価点」であり、これは配列 rank の「添え字」と対応しています。\n\n2. 全件比較と更新\n   商品の評価点 products[i].score をキーにして rank 配列から該当する順位を引き出し、その商品の ranking メンバに設定します。\n   <div class=\"important\">products[i].ranking ← rank[products[i].score]</div>"
  },
  {
    "id": 54,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "インデックスの役割固定",
    "text": "順位計算アルゴリズムにおける配列 `rank` の役割について、添え字と格納されている値の関係を正しく説明しているものを選んでください。",
    "example": "コードの `rank[products[i].score]` という記述から、rank 配列の `[ ]`（添え字）にはどのような種類のデータが入るかを読み解きます。",
    "code": "1  // rank配列の利用イメージ\n2  // products[i].ranking ← rank[products[i].score]",
    "choices": [
      "評価点（1〜5）を添え字とし、その評価点に対応する順位を保持する役割",
      "商品の通し番号（1〜10）を添え字とし、各商品の順位を保持する役割",
      "商品の評価が高い順に、商品名を並べ替えて保持する役割",
      "評価点の出現回数（頻度）を保持する役割"
    ],
    "specific_explanation": "1. インデックスの役割固定\n   rank 配列は rank[評価点] = 順位 という形式でデータを管理しています。\n\n2. 参照順序の特定\n   個々の商品の順位を直接管理するのではなく、「何点なら何位か」という対応表としての役割を担っています。\n   <div class=\"important\">「評価点」を添え字、「順位」を値として管理</div>"
  },
  {
    "id": 55,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "パターンの一致判定",
    "text": "画像内の「表1」において、商品 D（評価点 4点）の順位が「9位」となる理由をプログラムのロジックから正しく説明しているものはどれですか。ここで、rank は順位を格納する配列、freq は評価点ごとの出現数を格納する配列です。",
    "example": "評価点 1～3点までの商品の合計人数が 8人いる場合、次の点数の人は何位？",
    "choices": [
      "評価点 1～3点までの商品の出現回数(freq)の合計が 8 であるため",
      "商品 D は 10個の商品の中で後ろから 2番目だから",
      "評価点 4点の商品が 2つ存在しているから",
      "プログラム内で D という文字列を検索して 9 を割り当てているから"
    ],
    "specific_explanation": "1. 規則性の発見\n   順位計算式 rank[4] = rank[3] + freq[3] を繰り返すと、結局 rank[4] は「1点〜3点までの合計人数 + 1」を計算していることになります。\n\n2. 状態の更新\n   表より、1点（2人）、2点（4人）、3点（2人）の合計が 8人なので、4点の順位は 8 + 1 = 9 位となります。\n   <div class=\"important\">自分より評価点が低い（良い）人の総数によって順位が決まる</div>"
  },
  // 15問目
  // --- テーマ1：数値の抽出と重み付き合計 ---
  {
    "id": 56,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "特定の桁を取り出す",
    "text": "3桁の数値 code から、1の位、10の位、100の位を順に取り出す処理です。現在の数値 tmp の一番右側の桁（1の位）を抽出する正しい式を選んでください。ここで、N は抽出された桁の数字を表します。",
    "example": "tmp = 457 のとき、N = 7 を取り出します。",
    "code": "1  checkDigit(整数型: code)\n2  整数型: i, tmp, N\n3  tmp ← code\n4  <span class=\"for\">for (i を 1 から 3 まで 1 ずつ増やす)</span>\n5     N ← [      1      ]\n6     // 以降の計算処理（省略）\n7  <span class=\"for\">endfor</span>",
    "choices": ["tmp mod 10", "tmp ÷ 10", "tmp mod 7", "tmp - 10"],
    "specific_explanation": "1. 特定の桁を取り出す\n   10進数の数値において、10で割った「余り（mod）」を計算することで、その数値の最も右側の1桁を抽出することができます。\n\n2. 結果の分類\n   457を10で割ると商が45で余りが7となるため、これによって「現在の1の位」である7を特定できます。\n   <div class=\"important\">N ← tmp mod 10</div>"
  },
  {
    "id": 57,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "切り捨てと整数型変換",
    "text": "1の位の処理が終わった後、次のループで「10の位」を「1の位」として扱うために、数値 tmp を右にシフトする処理です。空欄に入る適切な式を選んでください。",
    "example": "tmp = 457 のとき、次のループのために tmp = 45 にします。",
    "code": "1  checkDigit(整数型: code)\n2  整数型: tmp, N\n3  tmp ← code\n4  <span class=\"for\">for (i を 1 から 3 まで 1 ずつ増やす)</span>\n5     N ← tmp mod 10\n6     // 合計計算（省略）\n7     tmp ← [      1      ]\n8  <span class=\"for\">endfor</span>",
    "choices": ["tmp ÷ 10", "tmp mod 10", "tmp - 10", "tmp × 0.1"],
    "specific_explanation": "1. 切り捨てと整数型変換\n   数値を10で割り、小数点以下を切り捨てる（整数型変換）ことで、一番右側の桁を消去し、全体を右に1つずらすことができます。\n\n2. 単位の調整\n   457を10で割ると45.7になりますが、整数型として扱うことで45となり、次のループで「5」が mod 10 によって取り出せるようになります。\n   <div class=\"important\">tmp ← tmp ÷ 10</div>"
  },
  {
    "id": 58,
    "category": "数値計算系",
    "theme": "n進法",
    "subtheme": "重み付けの累積",
    "text": "各桁の数値 N に対して特定の「重み」を掛けて合計する処理です。重みを管理する変数 cnt を用いた正しい累積式を選んでください。ここで、C は累積合計、N は現在の桁の数字を表します。",
    "example": "N_1 に 1倍、N_2 に 2倍、N_3 に 4倍 して足し合わせます。",
    "code": "1  C ← 0\n2  cnt ← 1\n3  <span class=\"for\">for (i を 1 から 3 まで 1 ずつ増やす)</span>\n4     N ← tmp mod 10\n5     C ← [      1      ]\n6     cnt ← cnt × 2\n7  <span class=\"for\">endfor</span>",
    "choices": ["C + (N × cnt)", "C + N", "C × cnt + N", "N × cnt"],
    "specific_explanation": "1. 重み付けの累積\n   チェックディジットの計算では、単純な和ではなく各桁の位置に応じた「重み（weight）」を掛けてから足す手法が一般的です。\n\n2. 条件ヒットで加算\n   現在の合計値 C に、新しく取り出した桁 N と現在の重み cnt を掛けた値を加算し、累積していきます。\n   <div class=\"important\">C ← C + (N × cnt)</div>"
  },

  // --- テーマ2：変数の更新と最終コードの生成 ---
  {
    "id": 59,
    "category": "数値計算系",
    "theme": "ビット演算",
    "subtheme": "2のべき乗計算",
    "text": "チェックディジットの計算において、重み cnt を 1, 2, 4 \dots と2のべき乗で増やしていくための更新式（空欄 a）を選んでください。",
    "example": "i=1（1の位）の重みは 1、i=2（10の位）の重みは 2 です。",
    "code": "1  cnt ← 1\n2  <span class=\"for\">for (i を 1 から 3 まで 1 ずつ増やす)</span>\n3     C ← C + (N × cnt)\n4     [      a      ]\n5  <span class=\"for\">endfor</span>",
    "choices": ["cnt ← cnt × 2", "cnt ← cnt + 1", "cnt ← cnt + 2", "cnt ← cnt × i"],
    "specific_explanation": "1. 2のべき乗計算\n   初期値 1 に対して、ループのたびに 2倍することで、1 \rightarrow 2 \rightarrow 4 \dots という数列を生成できます。\n\n2. 変数の変化\n   これは左ビットシフト（<< 1）と同じ効果を持ち、重み付きの計算において非常に頻出するパターンです。\n   <div class=\"important\">cnt ← cnt × 2</div>"
  },
  {
    "id": 60,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "単位の調整",
    "text": "元の3桁のコード code の末尾に、算出した1桁のチェックディジット C を連結して「4桁の数値」として完成させる正しい式（空欄 b）を選んでください。",
    "example": "code = 457, C = 5 のとき、戻り値を 4575 にします。",
    "code": "1  // Cの計算と mod 7 処理完了後\n2  return [      b      ]",
    "choices": ["code × 10 + C", "code + C", "code × 100 + C", "code + C × 1000"],
    "specific_explanation": "1. 単位の調整\n   数値を連結して桁を増やすには、元の数値を「10倍」して1の位を空ける（0にする）必要があります。\n\n2. 切り捨てと整数型変換\n   空いた場所に C を加算することで、元のコードの末尾に検査数字がくっついた状態の数値が完成します。\n   <div class=\"important\">code × 10 + C</div>"
  },
  {
    "id": 61,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "範囲内に収める",
    "text": "重み付きの合計値 C から、最終的なチェックディジット（0〜6の範囲）を決定する処理として正しいものを選んでください。",
    "example": "合計が 33 のとき、33 ÷ 7 = 4 余り 5 なので、5 を採用します。",
    "code": "1  // 合計計算完了後\n2  C ← [      1      ]",
    "choices": ["C mod 7", "C ÷ 7", "C mod 10", "C - 7"],
    "specific_explanation": "1. 範囲内に収める\n   特定の法（この場合は 7）で割った余りを用いることで、どんなに大きな合計値であっても指定された範囲（0〜6）の数値に変換できます。\n\n2. 周期的なインデックス\n   この「剰余を取る」操作が、チェックディジットにおける最終的な算出ルールとなります。\n   <div class=\"important\">C ← C mod 7</div>"
  },
  // 16問目
  {
    "id": 62,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "座標計算と転置",
    "text": "2×2の配列 A の内容を行と列を入れ替えて（転置して）配列 B に転記するプログラムです。空欄に入る適切な組み合わせを選んでください。配列の要素番号は1から始まります。",
    "example": "A[1][2] の値が B[2][1] に移動する",
    "code": "1  transpose(文字型の2次元配列: A)\n2  文字型の2次元配列: B ← {{' ', ' '}, {' ', ' '}}\n3  整数型: i, j\n4  <span class=\"for\">for (i を 1 から 2 まで 1 ずつ増やす)</span>\n5     <span class=\"for\">for (j を 1 から 2 まで 1 ずつ増やす)</span>\n6        B[ [  a  ] ][ [  b  ] ] ← A[i][j]\n7     <span class=\"for\">endfor</span>\n8  <span class=\"for\">endfor</span>",
    "choices": [
      "a: j, b: i",
      "a: i, b: j",
      "a: 1, b: 1",
      "a: 2, b: 2"
    ],
    "specific_explanation": "1. 入れ替えの規則性\n   「転置」とは、行列の「行」と「列」を入れ替える操作です。元のインデックスが A[i][j] であれば、転記先は行と列を反転させた B[j][i] となります。\n\n2. 端の処理\n   正方形の配列（2×2）であれば、ループ範囲を変えずに添え字を入れ替えるだけで全ての要素を正しく転記できます。\n   <div class=\"important\">B[j][i] ← A[i][j]</div>"
  },
  {
    "id": 63,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "座標計算と転置",
    "text": "配列 A の内容を左右反転させて配列 B に格納するプログラムです。空欄を埋めてください。要素番号は1から2までとします。",
    "example": "A[1][1] (左上) が B[1][2] (右上) に移動する",
    "code": "1  flipHorizontal(文字型の2次元配列: A)\n2  文字型の2次元配列: B ← {{' ', ' '}, {' ', ' '}}\n3  整数型: i, j\n4  <span class=\"for\">for (i を 1 から 2 まで 1 ずつ増やす)</span>\n5     <span class=\"for\">for (j を 1 から 2 まで 1 ずつ増やす)</span>\n6        B[ i ][ [  1  ] ] ← A[i][j]\n7     <span class=\"for\">endfor</span>\n8  <span class=\"for\">endfor</span>",
    "choices": [
      "3 - j",
      "j - 1",
      "i",
      "j + 1"
    ],
    "specific_explanation": "1. 入れ替えの規則性\n   左右反転（水平反転）させる場合、行番号 i はそのままに、列番号 j だけを「右端からの距離」に変換します。\n\n2. 端の処理\n   列の最大数が2の場合、j=1 のときは 2 へ、j=2 のときは 1 へ移動させる必要があるため、(最大数 + 1) - j、つまり 3 - j という計算式が導かれます。\n   <div class=\"important\">B[i][3 - j] ← A[i][j]</div>"
  },
  {
    "id": 64,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "座標計算と転置",
    "text": "配列 A を180度回転させて配列 B に転記するプログラムです。空欄を埋めてください。",
    "example": "A[1][1] (左上) が B[2][2] (右下) に移動する",
    "code": "1  rotate180(文字型の2次元配列: A)\n2  文字型の2次元配列: B ← {{' ', ' '}, {' ', ' '}}\n3  整数型: i, j\n4  <span class=\"for\">for (i を 1 から 2 まで 1 ずつ増やす)</span>\n5     <span class=\"for\">for (j を 1 から 2 まで 1 ずつ増やす)</span>\n6        B[ [  1  ] ][ [  2  ] ] ← A[i][j]\n7     <span class=\"for\">endfor</span>\n8  <span class=\"for\">endfor</span>",
    "choices": [
      "1: 3 - i, 2: 3 - j",
      "1: i, 2: j",
      "1: j, 2: i",
      "1: 3 - j, 2: 3 - i"
    ],
    "specific_explanation": "1. 入れ替えの規則性\n   180度回転は「上下反転」かつ「左右反転」を行う操作です。したがって、行と列の両方を逆順に計算する必要があります。\n\n2. 端の処理\n   要素数が2の場合、逆順のインデックスはどちらも 3 - 現在の添え字 で求められます。\n   <div class=\"important\">B[3 - i][3 - j] ← A[i][j]</div>"
  },
  {
    "id": 65,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "配列 A の内容を、1列ごとに交互に別の行へ転記する（1列目は2行目へ、2列目は1行目へ）ロジックを検討しています。空欄を埋めてください。",
    "example": "j=1 のとき 行番号: 2, j=2 のとき 行番号: 1",
    "code": "1  shiftRow(文字型の2次元配列: A)\n2  文字型の2次元配列: B ← {{' ', ' '}, {' ', ' '}}\n3  整数型: i, j\n4  <span class=\"for\">for (i を 1 から 2 まで 1 ずつ増やす)</span>\n5     <span class=\"for\">for (j を 1 から 2 まで 1 ずつ増やす)</span>\n6        B[ [  1  ] ][ j ] ← A[i][j]\n7     <span class=\"for\">endfor</span>\n8  <span class=\"for\">endfor</span>",
    "choices": [
      "(j mod 2) + 1",
      "(i mod 2) + 1",
      "j mod 2",
      "(j + 1) mod 2"
    ],
    "specific_explanation": "1. 範囲内に収める\n   剰余演算（mod）を使うと、数値を一定の範囲で循環させることができます。j mod 2 の結果は必ず 0 か 1 になります。\n\n2. リセット処理\n   1から始まる要素番号に合わせるため、結果に +1 をします。j=1 のときは 1 mod 2 + 1 = 2、j=2 のときは 2 mod 2 + 1 = 1 となり、交互に入れ替わる動きが実現できます。\n   <div class=\"important\">B[(j mod 2) + 1][j]</div>"
  },
  {
    "id": 66,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "2×2の配列を走査し、市松模様（チェック柄）のように要素を特定の値で埋めるロジックです。空欄に入る条件式を選んでください。ここで、grid は2次元配列を表します。",
    "example": "i=1, j=1 のとき 0, i=1, j=2 のとき 1",
    "code": "1  checkerPattern()\n2  整数型: i, j, grid[2][2]\n3  <span class=\"for\">for (i を 1 から 2 まで 1 ずつ増やす)</span>\n4     <span class=\"for\">for (j を 1 から 2 まで 1 ずつ増やす)</span>\n5        grid[i][j] ← [  1  ]\n6     <span class=\"for\">endfor</span>\n7  <span class=\"for\">endfor</span>",
    "choices": [
      "(i + j) mod 2",
      "(i * j) mod 2",
      "i mod 2",
      "j mod 2"
    ],
    "specific_explanation": "1. 範囲内に収める\n   市松模様のように「隣り合う要素と異なる状態」を作るには、行番号と列番号の和の偶奇を利用するのが定石です。\n\n2. リセット処理\n   (i + j) mod 2 を計算すると、合計が偶数のマスは 0、奇数のマスは 1 となり、0と1が交互に並ぶパターンが作れます。\n   <div class=\"important\">(i + j) mod 2</div>"
  },
  {
    "id": 67,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "画像の問題に基づいた類題です。2×2の配列 A を、特定の規則に従って配列 B に転記します。実行例：A[2][2]の値 'd' を B[1][1] へ転記する。",
    "example": "A[2][2] のとき j=2 なので、(2 mod 2) + 1 = 1",
    "code": "1  // i, j は 1 から 2 までループする\n2  // 配列Bのインデックス a は ((i + j) mod 2) + 1 とする\n3  B[ a , [  b  ] ] ← A[i, j]",
    "choices": [
      "(j mod 2) + 1",
      "(i mod 2) + 1",
      "((j + 1) mod 2) + 1",
      "((i + j) mod 2) + 1"
    ],
    "specific_explanation": "1. 範囲内に収める\n   実行例の A[2, 2] → B[1, 1] に注目します。j=2 のときに転記先の列番号が 1 になる計算式を探します。\n\n2. リセット処理\n   j=1 のときは 1 mod 2 + 1 = 2、j=2 のときは 2 mod 2 + 1 = 1</span> となります。これは選択肢アの計算式と一致し、2つの状態を交互に繰り返す周期的な動きを作っています。\n   <div class=\"important\">b = (j mod 2) + 1</div>"
  },
  // 17問目
  {
    "id": 68,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "二重ループ",
    "text": "プログラム sumNum のα部分が実行される回数を答えよ。j = 5 の時を考える。なお、num は整数型の二次元配列とする。",
    "example": "k が 1 から始まり j 未満の間繰り返される。k に 1, 2... と順に代入して、条件を満たす個数を数えてみよう。",
    "code": "   01  整数型の二次元配列: num\n   02  整数型: i, j, k\n   03  sumNum(num)\n   04  <span class=\"for\">for (i を numの行数 から 1 まで 1 ずつ減らす)</span>\n   05     <span class=\"for\">for (j を numの列数 から 1 まで 1 ずつ減らす)</span>\n   06        k ← 1\n   07        <span class=\"while\">while (k < j)</span>\n   08           num[i, k] ← num[i, k] + num[i, k + 1]  /* α */\n   09           k ← k + 1\n   10        <span class=\"while\">endwhile</span>\n   11     <span class=\"for\">endfor</span>\n   12  <span class=\"for\">endfor</span>",
    "choices": [
      "4回",
      "5回",
      "0回",
      "1回"
    ],
    "specific_explanation": "1. 外側と内側の役割の把握\ni は行、j は列、k は列内の累積計算を制御する。while 文の反復回数は変数 j の値に依存する。\n\n2. 内側の終了条件\nj = 5 のとき、条件 k < 5 を満たす整数 k は 1, 2, 3, 4 の計 4 つ。k = 5 に達した時点で条件が偽となり終了する。\n<div class=\"important\">j = 5 のとき、αは 4 回実行される</div>"
  },
  {
    "id": 69,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "二重ループ",
    "text": "列数 5 の配列において、α の処理が実行される合計回数を求めよ。",
    "example": "j が 5, 4, 3, 2, 1 と変化するごとに while 文が何回動くか、順に書き出して合計してみよう。",
    "code": "   01  整数型の二次元配列: num\n   02  整数型: j, k\n   03  <span class=\"for\">for (j を 5 から 1 まで 1 ずつ増やす)</span>\n   04     k ← 1\n   05     <span class=\"while\">while (k < j)</span>\n   06        /* αの処理 */\n   07        k ← k + 1\n   08     <span class=\"while\">endwhile</span>\n   09  <span class=\"for\">endfor</span>",
    "choices": [
      "10回",
      "15回",
      "5回",
      "25回"
    ],
    "specific_explanation": "1. 外側と内側の役割の把握\nj が 5 から 1 まで変化する間、各ステップで while 文が実行される。反復回数は外側の変数 j に依存する。\n\n2. 内側の終了条件\nwhile 文は k = 1 から j 未満まで繰り返されるため、各ステップの回数は j - 1 回となる。4 + 3 + 2 + 1 + 0 を合計する。\n<div class=\"important\">合計回数 = 10回</div>"
  },
  {
    "id": 70,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "二重ループ",
    "text": "二重ループ内にある while 文の条件が「k < j」から「k <= j」に変更されました。j = 5 のとき、αの処理の実行回数はどう変化しますか。",
    "example": "k が 1 から始まる場合、k < 5 ではいくつまで、k <= 5 ではいくつまでループに入るかを数えてみましょう。",
    "code": "   01  整数型: j, k\n   02  j ← 5, k ← 1\n   03  <span class=\"while\">while (k <= j)</span>\n   04     /* αの処理 */\n   05     k ← k + 1\n   06  <span class=\"while\">endwhile</span>",
    "choices": [
      "1回増える",
      "1回減る",
      "変わらない",
      "j回増える"
    ],
    "specific_explanation": "1. 外側と内側の役割の把握\nこの while 文の実行回数は、外側にある変数 j の値に依存しています。j = 5 のときに条件式がどのように変化するかを比較しましょう。\n\n2. 内側の終了条件\n条件が「未満（<）」から「以下（<=）」に変わると、k が j と等しいときもループが実行されます。j = 5 の場合は実行される k の値に 5 が加わるため、回数は 1 回増えることになります。\n<div class=\"important\">境界値が含まれるようになるため、実行回数は 1 増えます</div>"
  },
  {
    "id": 71,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "row = 3, col = 5 のデータを処理する際、αの総実行回数 a と、任意の row, col における計算式 b の組み合わせを選んでください。",
    "example": "i が固定された 1 行分において、j が 5, 4, 3, 2, 1 と変化する間の while 文の回数を合計してみましょう。",
    "code": "   01  calcTotal(整数型: row, 整数型: col)\n   02  整数型: i, j, k\n   03  <span class=\"for\">for (i を row から 1 まで 1 ずつ減らす)</span>\n   04     <span class=\"for\">for (j を col から 1 まで 1 ずつ減らす)</span>\n   05        k ← 1\n   06        <span class=\"while\">while (k < j)</span>\n   07           /* αの処理 */\n   08           k ← k + 1\n   09        <span class=\"while\">endwhile</span>\n   10     <span class=\"for\">endfor</span>\n   11  <span class=\"for\">endfor</span>",
    "choices": [
      "a: 30\nb: row × col × (col - 1) ÷ 2",
      "a: 30\nb: row × col × (row - 1) ÷ 2",
      "a: 45\nb: row × col × (col + 1) ÷ 2",
      "a: 45\nb: col × row × (row + 1) ÷ 2"
    ],
    "specific_explanation": "1. 規則性の発見\nj が col から 1 まで減る間、内側のループは (j - 1) 回ずつ実行されます。1 行分の合計は (col - 1) + (col - 2) + ... + 0 となり、等差数列の公式により col × (col - 1) ÷ 2 で求められます。\n\n2. ずれの調整\nこの 1 行分の処理が row 行分繰り返されるため、全体の実行回数は行数を掛けた row × col × (col - 1) ÷ 2 となります。数値を代入すると 3 × 5 × 4 ÷ 2 = 30 です。\n<div class=\"important\">a: 30, b: row × col × (col - 1) ÷ 2</div>"
  },
  {
    "id": 72,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "α部分で行っている処理の性質について考えます。プログラム終了後、二次元配列 num の num[1, 1] に格納されている値として適切なものを選んでください。",
    "example": "i = 1, j = 2 のときの挙動を確認してみましょう。左隣の要素に、右隣の要素の値が足し込まれていきます。",
    "code": "   01  整数型の二次元配列: num\n   02  整数型: i, j, k\n   03  <span class=\"for\">for (i を 1 から numの行数 まで 1 ずつ増やす)</span>\n   04     <span class=\"for\">for (j を 2 から numの列数 まで 1 ずつ増やす)</span>\n   05        k ← 1\n   06        <span class=\"while\">while (k < j)</span>\n   07           num[i, k] ← num[i, k] + num[i, k + 1]  /* α */\n   08           k ← k + 1\n   09        <span class=\"while\">endwhile</span>\n   10     <span class=\"for\">endfor</span>\n   11  <span class=\"for\">endfor</span>",
    "choices": [
      "1行目の要素の累積和の一部",
      "配列全体の合計値",
      "1行目の最大値",
      "1列目の要素の平均値"
    ],
    "specific_explanation": "1. 規則性の発見\n処理 α は、現在の要素 num[i, k] に右隣の num[i, k + 1] を加算しています。この操作を繰り返すことで、配列内の値が累積されていく動きになります。\n\n2. ずれの調整\nループの範囲や方向により、計算結果は特定の場所（この場合は左端の列など）に集約されます。右隣の値を順次加算し続けるため、最終的には累積的な値が算出されます。\n<div class=\"important\">右隣の値を加算し続けるため、累積的な値となります</div>"
  },
  {
    "id": 73,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "row = 4, col = 3 の二次元配列を処理する際、αの総実行回数を求めなさい。",
    "example": "前問で導いた公式（row × col × (col - 1) ÷ 2）に値を当てはめてみましょう。",
    "code": "   01  整数型の二次元配列: num\n   02  整数型: row ← 4, col ← 3, count ← 0, i, j, k\n   03  <span class=\"for\">for (i を row から 1 まで 1 ずつ減らす)</span>\n   04     <span class=\"for\">for (j を col から 1 まで 1 ずつ減らす)</span>\n   05        k ← 1\n   06        <span class=\"while\">while (k < j)</span>\n   07           count ← count + 1  // αの処理\n   08           k ← k + 1\n   09        <span class=\"while\">endwhile</span>\n   10     <span class=\"for\">endfor</span>\n   11  <span class=\"for\">endfor</span>",
    "choices": [
      "12回",
      "24回",
      "18回",
      "6回"
    ],
    "specific_explanation": "1. 規則性の発見\n1行あたりの実行回数は col × (col - 1) ÷ 2 で計算できます。col = 3 を代入すると、1行につき 3 回実行されることがわかります。\n\n2. ずれの調整\nこの行ごとの処理が row = 4 回繰り返されるため、総回数は 4 × 3 = 12 回となります。\n<div class=\"important\">a = 12</div>"
  },
  // 18問目

  // 19問目
  {
    "id": 74,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "パターンの一致判定",
    "text": "シーザー暗号を用いて、引数として渡された配列 text (\"BOX\") を暗号化するプログラムです。関数を実行したときの戻り値 a と、暗号化後の文字列 b の正しい組み合わせを選んでください。なお、アルファベットの総数は26文字です。",
    "example": "text = {\"B\", \"O\", \"X\"} のとき\n戻り値: 3, 暗号文: \"YLU\"",
    "code": "1  caesarCipher(文字型の配列: text)\n2  String: alphabet ← \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"\n3  整数型: i, n, caesarNum\n4  caesarNum ← textの要素数\n5  <span class=\"for\">for (i を 1 から caesarNum まで 1 ずつ増やす)</span>\n6     n ← alphabet.getIdx(text[i]) - caesarNum\n7     <span class=\"if\">if (n が 1 より小さい)</span>\n8        n ← n + 26\n9     <span class=\"if\">endif</span>\n10    text[i] ← alphabet.getChar(n)\n11 <span class=\"for\">endfor</span>\n12 return caesarNum",
    "choices": [
      "a: 3\nb: \"YLU\"",
      "a: 2\nb: \"ZMV\"",
      "a: 3\nb: \"ERA\"",
      "a: 2\nb: \"DQZ\""
    ],
    "specific_explanation": "1. 1文字目の合致\n   元の文字「B」は alphabet の 2番目です。文字列長が 3 なので、シフト後の位置は <span class=\"italic\">2 - 3 = -1</span> となります。\n\n2. 続きを確認\n   位置が 1 未満のため 26 を足すと <span class=\"italic\">-1 + 26 = 25</span> となり、25番目の文字「Y」に置換されます。同様に O(15)→L(12)、X(24)→U(21) と変換されます。\n   <div class=\"important\">戻り値は要素数の 3、暗号文は \"YLU\" となります。</div>"
  },
  {
    "id": 75,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "パターンの一致判定",
    "text": "暗号化プログラムにおいて、文字をずらすための「鍵」となる変数 caesarNum に代入すべき適切な値を選んでください。",
    "example": "配列 text の中身が {\"A\", \"B\", \"C\", \"D\"} なら、4文字分ずらす",
    "code": "1  caesarCipher(文字型の配列: text)\n2  整数型: caesarNum\n3  // 空欄 [  1  ] に入る処理\n4  caesarNum ← [  1  ]",
    "choices": [
      "textの要素数",
      "alphabetの要素数",
      "alphabet.getIdx(text[1])",
      "26"
    ],
    "specific_explanation": "1. 1文字目の合致\n   問題文の記述によれば、元の英文を「特定の文字数だけずらして」暗号化しますが、そのずらす量は「引数として渡された配列 text に格納された平文」の長さに依存しています。\n\n2. 続きを確認\n   プログラムの 4行目において、ループの回数やシフト量として利用するために、入力された配列の長さを取得する必要があります。\n   <div class=\"important\">caesarNum ← textの要素数</div>"
  },
  {
    "id": 76,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "パターンの一致判定",
    "text": "シーザー暗号のアルゴリズムにおいて、文字の位置を取得する getIdx と、位置から文字を特定する getChar の使い方が正しいものを選んでください。",
    "example": "text[i] の文字が何番目か調べ、計算後の n番目の文字を書き戻す",
    "code": "1  // text[i] の元の位置を n に代入し、ずらした後の文字を代入する\n2  n ← [  a  ]\n3  n ← n - caesarNum\n4  /* (nの範囲調整処理) */\n5  text[i] ← [  b  ]",
    "choices": [
      "a: alphabet.getIdx(text[i])\nb: alphabet.getChar(n)",
      "a: alphabet.getChar(text[i])\nb: alphabet.getIdx(n)",
      "a: text.getIdx(i)\nb: text.getChar(n)",
      "a: alphabet.getIdx(n)\nb: alphabet.getChar(text[i])"
    ],
    "specific_explanation": "1. 1文字目の合致\n   getIdx メソッドは引数で与えた文字が文字列の先頭から何番目にあるかを返します。まずは元の文字 text[i] がアルファベットの何番目かを知る必要があります。\n\n2. 続きを確認\n   計算によって求まった新しい位置 n に対応する文字を取得するには、getChar(n) を使用します。\n   <div class=\"important\">n ← alphabet.getIdx(text[i])<br>text[i] ← alphabet.getChar(n)</div>"
  },
  {
    "id": 77,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "アルファベットの「回り込み」を処理する if文のブロックを、剰余演算（mod）を用いて書き換えたいと考えています。空欄に入る適切な式を選んでください。",
    "example": "n = -1 のとき、( -1 + 26 ) mod 26 ではなく、1〜26の範囲に収める",
    "code": "1  // 元の処理：\n2  <span class=\"if\">if (n が 1 より小さい)</span>\n3     n ← n + 26\n4  <span class=\"if\">endif</span>\n5  \n6  // 書き換え後：\n7  n ← ( (n - 1 + 26) [  1  ] 26 ) + 1",
    "choices": [
      "mod",
      "+",
      "÷",
      "*"
    ],
    "specific_explanation": "1. 範囲内に収める\n   インデックスが 1 から始まる場合、単純に n mod 26 とすると結果が 0 になる可能性があります。そのため (n-1) をしてから 26 で割った余りを出し、最後に +1 することで 1〜26 の範囲に固定します。\n\n2. リセット処理\n   負の数への対応としてあらかじめ 26 を足しておくことで、周期的なインデックス計算を一行で表現できます。\n   <div class=\"important\">n ← ((n - 1 + 26) mod 26) + 1</div>"
  },
  {
    "id": 78,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "平文 \"BOX\"（3文字）を暗号化する際、3文字目の 'X'（24番目）の位置計算について考えます。ずらした後の位置 n はどのようになりますか。",
    "example": "n = (元の位置) - (ずらす量)",
    "code": "1  caesarNum ← 3\n2  n ← alphabet.getIdx(\"X\")  // alphabet内での'X'は24番目\n3  n ← n - caesarNum\n4  <span class=\"if\">if (n が 1 より小さい)</span>\n5     n ← n + 26\n6  <span class=\"if\">endif</span>",
    "choices": [
      "21",
      "27",
      "24",
      "3"
    ],
    "specific_explanation": "1. 範囲内に収める\n   'X' の元のインデックスは 24 です。ここから caesarNum である 3 を引くと、<span class=\"italic\">24 - 3 = 21</span> となります。\n\n2. リセット処理\n   21 は 1 以上であるため、if 文の中の n + 26 は実行されず、そのまま 21番目の文字（U）が選択されます。\n   <div class=\"important\">n = 21</div>"
  },
  {
    "id": 79,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "暗号化された文字を元の文字に戻す（復号する）ロジックを作る場合、シフト計算の部分をどのように書き換えるべきでしょうか。",
    "example": "暗号化で 3 引いたなら、復号では 3 足す",
    "code": "1  // 暗号化：n ← alphabet.getIdx(text[i]) - caesarNum\n2  // 復号：\n3  n ← alphabet.getIdx(text[i]) [  1  ] caesarNum\n4  <span class=\"if\">if (n > 26)</span>\n5     n ← n - 26\n6  <span class=\"if\">endif</span>",
    "choices": [
      "+",
      "-",
      "mod",
      "*"
    ],
    "specific_explanation": "1. 範囲内に収める\n   シーザー暗号は文字を一定数ずらす方式のため、逆の操作を行うには演算子を反転させます。引き算で暗号化したのであれば、足し算で元に戻ります。\n\n2. リセット処理\n   足した結果がアルファベットの総数 26 を超えた場合は、26 を引くことで 1〜26 の有効な範囲に戻します。\n   <div class=\"important\">n ← alphabet.getIdx(text[i]) + caesarNum</div>"
  },
  // 20問目
  {
    "id": 80,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "与えられた整数 n を素因数分解し、n が 1 になるまで繰り返すプログラムです。n = 7（素数）の場合、while 文の条件式が「最後に判定（ループ終了の判定）」される際の i と n の値の組み合わせを選んでください。",
    "example": "n = 7 のとき、i = 2 から始めて順に割り切れるか試していくと、どの i で初めて割り切れますか。その直後に n はいくつになりますか。",
    "code": "01  primeNum(整数型: n)\n02  整数型: i ← 2\n03  <span class=\"while\">while (i ≤ n)</span>\n04     <span class=\"if\">if (n mod i = 0)</span>\n05        n ← n ÷ i\n06     <span class=\"if\">else</span>\n07        i ← i + 1\n08     <span class=\"if\">endif</span>\n09  <span class=\"while\">endwhile</span>",
    "choices": ["i: 7, n: 1", "i: 2, n: 7", "i: 7, n: 7", "i: 8, n: 1"],
    "specific_explanation": "1. 変数の変化\n   n = 7 の場合、i が 2 から 6 までは割り切れず else 側を通って i が増え続けます。i = 7 になったとき 7 mod 7 = 0 となり、n ← n ÷ 7 により n は 1 に更新されます。\n\n2. 異常系の考慮\n   n が 1 になった直後、ループ先頭で while (7 ≤ 1) を判定します。この比較が「最後の判定」となり、偽のためループが終了します。\n   <div class=\"important\">終了直前の判定時：i = 7, n = 1</div>"
  },
  {
    "id": 81,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "素因数分解のプログラムにおいて、変数 i（割る数）を増やす処理が else 側（割り切れなかった時）にのみ記述されている理由として、最も適切なものを選んでください。",
    "example": "n = 12 のとき、i = 2 で割り切れた直後、i をすぐ 3 に増やしてしまうと何が起きるか考えてみましょう。",
    "code": "01  整数型: i ← 2\n02  <span class=\"while\">while (i ≤ n)</span>\n03     <span class=\"if\">if (n mod i = 0)</span>\n04        n ← n ÷ i\n05     <span class=\"if\">else</span>\n06        i ← i + 1\n07     <span class=\"if\">endif</span>\n08  <span class=\"while\">endwhile</span>",
    "choices": [
      "同じ因数で複数回割り切れる可能性があるため",
      "i を増やすと n を超えてしまうため",
      "割り切れたときは i をリセットする必要があるため",
      "n が偶数のときだけ i を増やせばよいため"
    ],
    "specific_explanation": "1. 変数の変化\n   n = 12 の場合、i = 2 で割り切れます。このときすぐに i を 3 に増やすと、もう一度 2 で割る（12 = 2 × 2 × 3）ことができなくなります。\n\n2. 異常系の考慮\n   割り切れる間は同じ i で割り続け、割り切れなくなった（else）ときに初めて i を更新します。これにより同じ素因数を複数持つケースにも対応できます。\n   <div class=\"important\">同じ素因数を複数持つ場合に対応するため、else でのみインクリメントする</div>"
  },
  {
    "id": 82,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "n = 4 のとき、この素因数分解プログラムが終了するまでの「i と n」の推移を正しく追っているものはどれですか。",
    "example": "初期状態：n = 4, i = 2 から出発して、それぞれの変化を 1 ステップずつ手でたどってみましょう。",
    "code": "01  整数型: i ← 2\n02  <span class=\"while\">while (i ≤ n)</span>\n03     <span class=\"if\">if (n mod i = 0)</span>\n04        n ← n ÷ i\n05     <span class=\"if\">else</span>\n06        i ← i + 1\n07     <span class=\"if\">endif</span>\n08  <span class=\"while\">endwhile</span>",
    "choices": [
      "i=2で割る(n=2) → i=2で割る(n=1) → 終了判定",
      "i=2で割る(n=2) → i=3へ進む → 終了判定",
      "i=2, 3, 4と進む → i=4で割る(n=1) → 終了判定",
      "i=2で割る(n=2) → i=2で割る(n=1) → i=2, 3, 4と進む → 終了判定"
    ],
    "specific_explanation": "1. 変数の変化\n   i = 2 で n = 4 は割り切れるため、n は 2 に更新されます。このとき i は増やさず再度ループ条件 (2 ≤ 2) を判定します。これも真なので再度 i = 2 で割り、n は 1 になります。\n\n2. 異常系の考慮\n   n が 1 になった時点でループ先頭の判定 while (2 ≤ 1) が偽となり、i を増やすことなく即座にループを抜けます。\n   <div class=\"important\">n が 1 になった瞬間に判定が終了し、ループを抜ける</div>"
  },
  {
    "id": 83,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "結果の分類",
    "text": "プログラムの空欄 a に入れる、n が i で割り切れるかどうかを判定する正しい式を選んでください。",
    "example": "n = 10, i = 2 のとき、10 ÷ 2 = 5 余り 0 なので「真」",
    "code": "1  <span class=\"while\">while (i が n 以下)</span>\n2     <span class=\"if\">if ( [  a  ] )</span>\n3        n ← n ÷ i\n4        /* (出力処理) */\n5     <span class=\"if\">else</span>\n6        i ← i + 1\n7     <span class=\"if\">endif</span>\n8  <span class=\"while\">endwhile</span>",
    "choices": [
      "(n mod i) が 0 と等しい",
      "(n ÷ i) が 0 と等しい",
      "(n mod i) が 1 と等しい",
      "(i mod n) が 0 と等しい"
    ],
    "specific_explanation": "1. 2で割った余り\n   ある数が別の数で割り切れるかどうかは、剰余演算子 <span class=\"italic\">mod</span> を用いて余りが <span class=\"italic\">0</span> であるかを確認することで判定します。\n\n2. 結果の分類\n   余りが 0 であれば「因数である」と分類し、割り算と出力の処理へ進みます。\n   <div class=\"important\">(n mod i) == 0</div>"
  },
  {
    "id": 84,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "結果の分類",
    "text": "プログラムの空欄 b に入れる、現在の因数が「最後の要素であるか」を判定する条件式として正しいものを選んでください。",
    "example": "330 = 2 * 3 * 5 * 11 において、11 が出力されるときの状態",
    "code": "1  n ← n ÷ i\n2  <span class=\"if\">if ( [  b  ] )</span>\n3     (iの値) を出力して改行する\n4  <span class=\"if\">else</span>\n5     (iの値 + \" * \") を改行しないで出力する\n6  <span class=\"if\">endif</span>",
    "choices": [
      "n が 1 と等しい",
      "n が 0 と等しい",
      "i が n と等しい",
      "n が i より小さい"
    ],
    "specific_explanation": "1. 結果の分類\n   素因数分解において、<span class=\"italic\">n</span> を因数 <span class=\"italic\">i</span> で割り、その結果が <span class=\"italic\">1</span> になったということは、もう他に割るべき因数が残っていないことを意味します。\n\n2. 周期的なインデックス\n   最後の要素のときは「 * 」を付けずに改行を行うため、<span class=\"italic\">n = 1</span> かどうかで出力形式を切り替えています。\n   <div class=\"important\">n が 1 と等しい</div>"
  },
  {
    "id": 85,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "結果の分類",
    "text": "n = 12 のとき、画面に出力される文字列として正しいものを選んでください。なお、最初の出力命令である「(n + \" = \")」は実行済みとします。",
    "example": "12 = 2 * 2 * 3",
    "code": "1  // i = 2, n = 12 でスタート\n2  // n ÷ i を行い、n = 1 でなければ \" * \" を付与する",
    "choices": [
      "2 * 2 * 3",
      "2 * 2 * 3 * ",
      "2 * 6",
      "3 * 2 * 2"
    ],
    "specific_explanation": "1. 2で割った余り\n   まず <span class=\"italic\">12 mod 2 = 0</span>。12を2で割り <span class=\"italic\">n=6</span>。1でないので <span class=\"italic\">2 *</span> を出力。\n   次に <span class=\"italic\">6 mod 2 = 0</span>。6を2で割り <span class=\"italic\">n=3</span>。1でないので <span class=\"italic\">2 *</span> を出力。\n\n2. 結果の分類\n   最後に <span class=\"italic\">3 mod 3 = 0</span>。3を3で割り <span class=\"italic\">n=1</span>。1になったので <span class=\"italic\">3</span> を出力して改行します。\n   <div class=\"important\">出力結果：2 * 2 * 3</div>"
  },
  // 21問目
  {
    "id": 86,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のシフト（ずらし）",
    "text": "配列の要素を右に1つずつずらし、末尾の要素を先頭に移動させるプログラムです。空欄に入る適切な処理を選んでください。",
    "example": "tango[1]:\"Cat\", tango[2]:\"Dog\" のとき、tango[2] に \"Cat\" を上書きする",
    "code": "1  shiftRight(文字列型の配列: tango)\n2  整数型: i, n\n3  文字列型: work\n4  n ← tangoの要素数\n5  <span class=\"if\">if (n が 1 より大きい)</span>\n6     work ← tango[n]\n7     <span class=\"for\">for (i を (n - 1) から 1 まで 1 ずつ減らす)</span>\n8        [      ]\n9     <span class=\"for\">endfor</span>\n10    tango[1] ← work\n11 <span class=\"if\">endif</span>",
    "choices": [
      "tango[i + 1] ← tango[i]",
      "tango[i] ← tango[i + 1]",
      "tango[i] ← tango[i - 1]",
      "tango[i + 1] ← tango[i + 1]"
    ],
    "specific_explanation": "1. 移動方向の確認\n   今回は「右にずらす（要素番号を1つ増やす方向）」処理です。現在の位置 <span class=\"italic\">i</span> にあるデータを、1つ右の <span class=\"italic\">i + 1</span> へコピーする必要があります。\n\n2. 上書き防止のループ順\n   データを消さないよう、右側（移動先）が空いている状態を作る必要があります。末尾を退避させた後、後ろから順にずらしていくことで、各要素を正しく隣へ移動できます。\n   <div class=\"important\">tango[i + 1] ← tango[i]</div>"
  },
  {
    "id": 87,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のシフト（ずらし）",
    "text": "このプログラムにおいて、ループの向きを「1 から (n - 1) まで 1 ずつ増やす」に変更し、空欄を「tango[i + 1] ← tango[i]」のままにした場合の結果として正しいものを選んでください。",
    "example": "tango = {\"A\", \"B\", \"C\"} のとき",
    "code": "1  // 誤ったループ順序の例\n2  <span class=\"for\">for (i を 1 から (n - 1) まで 1 ずつ増やす)</span>\n3     tango[i + 1] ← tango[i]\n4  <span class=\"for\">endfor</span>",
    "choices": [
      "tango[2] 以降の全ての要素が tango[1] と同じ値になる",
      "要素が左に1つずつずれる",
      "実行例と同じく正しく右にずれる",
      "配列の順番がちょうど逆順になる"
    ],
    "specific_explanation": "1. 移動方向の確認\n   右にずらす際、前から（1番目から）処理を始めると、<span class=\"italic\">tango[2]</span> に <span class=\"italic\">tango[1]</span> が上書きされ、次のループではその上書きされた値がさらに右へコピーされてしまいます。\n\n2. 上書き防止のループ順\n   データが消えないよう、「移動先が空いている方」から順に動かす必要があります。右シフトなら後ろから、左シフトなら前からループさせるのが鉄則です。\n   <div class=\"important\">前から回すと、最初の要素が全域にコピーされてしまう</div>"
  },
  {
    "id": 88,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のシフト（ずらし）",
    "text": "配列の要素をずらす処理において、変数 work を使用している理由として最も適切なものを選んでください。",
    "example": "tango[5] の \"Wolf\" を一時的に保存する",
    "code": "1  work ← tango[n]\n2  /* ループによるシフト処理 */\n3  tango[1] ← work",
    "choices": [
      "末尾の要素が隣の要素に上書きされる前に値を保存し、最後に先頭へ戻すため",
      "ループ変数の最大値を保持しておくため",
      "配列の要素数を一時的にカウントするため",
      "文字列の長さを比較して、並べ替えの判定に使うため"
    ],
    "specific_explanation": "1. 移動方向の確認\n   右シフトを行うと、最終的に <span class=\"italic\">tango[n]</span> には <span class=\"italic\">tango[n-1]</span> の値が上書きされます。そのため、本来の末尾の値を消さないよう、処理の前に退避させる必要があります。\n\n2. 上書き防止のループ順\n   退避させた値（work）を、空いた先頭（tango[1]）に代入することで、円環状の移動（ローテーション）が完成します。\n   <div class=\"important\">work ← tango[n] で値を保護する</div>"
  },
  {
    "id": 89,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "n = 5 の配列を右シフトする際、ループ変数 i が取る値の「順序」として正しいものを選んでください。",
    "example": "末尾のデータから順に右へずらす必要があります。i の開始点と終着点を追ってみましょう。",
    "code": "   01  文字列型の配列: tango\n   02  整数型: n ← 5, i, work\n   03  work ← tango[n]\n   04  <span class=\"for\">for (i を (n - 1) から 1 まで 1 ずつ減らす)</span>\n   05     tango[i + 1] ← tango[i]\n   06  <span class=\"for\">endfor</span>\n   07  tango[1] ← work",
    "choices": [
      "4, 3, 2, 1",
      "5, 4, 3, 2, 1",
      "1, 2, 3, 4",
      "4, 3, 2"
    ],
    "specific_explanation": "1. 開始と終了の数値\n右シフトではデータが上書きされないよう、後ろ（添え字の大きい方）から順に動かします。n = 5 のとき、i は n - 1 である 4 から開始し、1 まで 1 ずつ減少します。\n\n<div class=\"important\">i は 4, 3, 2, 1 の順に変化します</div>"
  },
  {
    "id": 90,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "右シフト処理の冒頭にある if 文の条件「n > 1」の役割として適切な組み合わせを選んでください。n は配列の要素数です。",
    "example": "要素が 1 つしかない場合にシフトが必要か、また n = 0 のときに n - 1 を計算するとどうなるかを考えてみましょう。",
    "code": "   01  整数型の配列: tango\n   02  整数型: n\n   03  n ← tangoの要素数\n   04  <span class=\"if\">if (n > 1)</span>\n   05     // ここで右シフト処理（i を n - 1 から開始など）を実行\n   06  <span class=\"if\">endif</span>",
    "choices": [
      "a: 要素が 1 つ以下の場合は移動の必要がないため\nb: n = 0 のときに n - 1 が負になりエラーになるのを防ぐため",
      "a: 要素が偶数のときだけ処理するため\nb: 文字列の長さを一定にするため",
      "a: 配列の添字を 0 から始めるように調整するため\nb: work 変数のメモリを節約するため",
      "a: 配率の末尾が空文字でないことを確認するため\nb: i が 1 から始まるようにするため"
    ],
    "specific_explanation": "1. 開始と終了の数値\n要素が 1 つのみの場合、移動元と移動先が同じになるため処理は不要です。また、n = 0 の場合に n - 1（開始値）を計算してループを作ろうとすると、不正なインデックス参照の原因となります。\n\n2. ガード条件\nこのように、処理が成立しないケースを事前に除外してプログラムの安定性を高める手法を「ガード条件」と呼びます。\n<div class=\"important\">n > 1 のときのみ実行することで異常系を回避しています</div>"
  },
  {
    "id": 91,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "tango = {\"A\", \"B\", \"C\"} のとき、ループの 1 周目（i = 2）が終了した直後の配列の状態を選んでください。",
    "example": "i = 2 のとき、代入式 tango[i + 1] ← tango[i] の両辺に具体的な数値を当てはめて、どの要素が上書きされるか追ってみましょう。",
    "code": "   01  文字列型の配列: tango ← {\"A\", \"B\", \"C\"}\n   02  整数型: n ← 3, i\n   03  文字列型: work\n   04  work ← tango[3]\n   05  <span class=\"for\">for (i を 2 から 1 まで 1 ずつ減らす)</span>\n   06     tango[i + 1] ← tango[i]\n   07  <span class=\"for\">endfor</span>",
    "choices": [
      "{\"A\", \"B\", \"B\"}",
      "{\"A\", \"A\", \"C\"}",
      "{\"C\", \"B\", \"C\"}",
      "{\"A\", \"B\", \"C\"}"
    ],
    "specific_explanation": "1. 開始と終了の数値\nループ 1 周目の i は開始値である 2 です。このとき実行される命令は tango[2 + 1] ← tango[2]、つまり tango[3] ← tango[2] となります。\n\n2. データの変化\ntango[3] の位置に tango[2] の \"B\" がコピーされます。その結果、配列の状態は {\"A\", \"B\", \"B\"} に変化します。その後、i = 1 の周で \"A\" が右にずれます。\n<div class=\"important\">1周目終了時の状態は {\"A\", \"B\", \"B\"} です</div>"
  },
  // 22問目
  {
    "id": 92,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "3桁ごとにコンマを挿入するプログラムにおいて、現在処理している桁の数字（1の位）を抽出するための適切な式を選んでください。",
    "example": "num = 1234 のとき、1周目で \"4\" を取り出す",
    "code": "1  // 正の整数 num から 1 桁ずつ文字を取り出す処理\n2  文字列型の配列: char ← {\"0\", \"1\", ..., \"9\", \",\"}\n3  <span class=\"while\">do</span>\n4     str ← str + char[ [  1  ] ]\n5     num ← num ÷ 10\n6     cnt ← cnt + 1\n7     /* コンマ挿入判定 */\n8  <span class=\"while\">while (num が 0 と等しくない)</span>",
    "choices": [
      "num mod 10",
      "num ÷ 10",
      "cnt mod 3",
      "num mod 3"
    ],
    "specific_explanation": "1. 範囲内に収める\n   整数 <span class=\"italic\">num</span> を 10 で割った余り（<span class=\"italic\">mod 10</span>）を計算することで、常に 0〜9 の範囲の数値、つまり「1の位」を取り出すことができます。\n\n2. リセット処理\n   この演算を繰り返すことで、元の数値の各桁を右側（下位桁）から順に 1 つずつ特定し、文字配列のインデックスとして利用可能になります。\n   <div class=\"important\">str ← str + char[num mod 10]</div>"
  },
  {
    "id": 93,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "プログラムの空欄 b に入る、3桁ごとにコンマを挿入するための正しい条件式を選んでください。なお、配列の要素番号は 0 から始まります。",
    "example": "cnt = 3, num = 1 (まだ上の桁がある) のときコンマを打つ",
    "code": "1  cnt ← cnt + 1\n2  <span class=\"if\">if ( [  b  ] )</span>\n3     str ← str + char[10]  // char[10] は \",\"\n4  <span class=\"if\">endif</span>",
    "choices": [
      "(cnt mod 3) が 0 と等しい \nand (num が 0 と等しくない)",
      "(cnt mod 3) が 0 と等しい \nand (num が 0 と等しい)",
      "(num mod 3) が 0 と等しい \nand (cnt が 0 と等しくない)",
      "(cnt ÷ 3) が 0 より大きい \nand (num が 0 と等しくない)"
    ],
    "specific_explanation": "1. 範囲内に収める\n   <span class=\"italic\">cnt mod 3</span> を利用することで、処理した桁数が 3, 6, 9... と 3 の倍数になった瞬間を周期的に特定できます。\n\n2. リセット処理\n   ただし、数値の先頭（例：123 の 1 の前）にコンマを打たないよう、まだ処理すべき上の桁が残っていること（<span class=\"italic\">num != 0</span>）を条件に加える必要があります。\n   <div class=\"important\">((cnt mod 3) == 0) and (num != 0)</div>"
  },
  {
    "id": 94,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "num = 1234567 を処理する場合、コンマ（char[10]）が追加される直前の cnt と num の値の組み合わせとして、適切なものを選んでください。",
    "example": "1周目で 7 を取り出し、3周目が終わった直後の判定",
    "code": "1  // ループ内での判定箇所\n2  cnt ← cnt + 1\n3  <span class=\"if\">if ((cnt mod 3) が 0 と等しい) and (num が 0 と等しくない)</span>\n4     str ← str + \",\"",
    "choices": [
      "cnt: 3, num: 1234",
      "cnt: 3, num: 123",
      "cnt: 6, num: 0",
      "cnt: 1, num: 123456"
    ],
    "specific_explanation": "1. 範囲内に収める\n   最初のコンマは 3 桁目（7, 6, 5）を処理した後に打たれます。このとき <span class=\"italic\">cnt</span> は 3 です。\n\n2. リセット処理\n   <span class=\"italic\">num</span> は 10 で割る処理を 3 回受けているため、<span class=\"italic\">1234567 → 123456 → 12345 → 1234</span> と変化しています。まだ 0 ではないため、コンマ挿入の条件を満たします。\n   <div class=\"important\">cnt = 3, num = 1234</div>"
  },
  {
    "id": 95,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "文字列の逆順変換",
    "text": "関数 convert(1234) を実行したとき、最終行の reverse(str) が呼び出される直前の変数 str の中身として正しいものを選んでください。",
    "example": "下位桁から順に文字列を連結している点に注意",
    "code": "1  <span class=\"while\">do</span>\n2     str ← str + char[num mod 10]\n3     /* (中略：num更新とコンマ挿入) */\n4  <span class=\"while\">while (num が 0 と等しくない)</span>\n5  return reverse(str)",
    "choices": [
      "\"432,1\"",
      "\"1,234\"",
      "\"4,321\"",
      "\"1234,\""
    ],
    "specific_explanation": "1. 後ろから拾う\n   ループ内では <span class=\"italic\">num mod 10</span> により「4 → 3 → 2 → (コンマ) → 1」の順で文字が後ろに連結されます。\n\n2. 真ん中で折り返す\n   このままでは逆さまの文字列 \"432,1\" になるため、最後に <span class=\"italic\">reverse</span> 関数で正解の順序に並べ替える必要があります。\n   <div class=\"important\">str の中身は \"432,1\" となる</div>"
  },
  {
    "id": 96,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "文字列の逆順変換",
    "text": "関数 reverse の仕様に基づき、reverse(\"CBA,321\") を実行した結果として正しいものを選んでください。",
    "example": "引数の文字列を逆順に変換して返す",
    "code": "1  // 関数reverseの仕様\n2  // 例：引数str \"ABCDEFG\" ⇒ 戻り値 \"GFEDCBA\"",
    "choices": [
      "\"123,ABC\"",
      "\"123,CBA\"",
      "\"ABC,123\"",
      "\"CBA,321\""
    ],
    "specific_explanation": "1. 後ろから拾う\n   <span class=\"italic\">reverse</span> 関数は、文字列の末尾から 1 文字ずつ拾い直すことで順序を反転させます。\n\n2. 真ん中で折り返す\n   \"CBA,321\" の最後尾は \"1\"、その次は \"2\"...と続くため、結果は \"123,ABC\" となります。\n   <div class=\"important\">戻り値は \"123,ABC\"</div>"
  },
  {
    "id": 97,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "文字列の逆順変換",
    "text": "3桁区切り形式の文字列を生成するプログラムの設計として、reverse 関数を使用せずに正しい結果を得るための「str への連結方法」を選んでください。",
    "example": "最初から \"1,234\" となるように文字を配置したい",
    "code": "1  // 変更前：str ← str + 新しい文字\n2  // 変更後：\n3  str ← [      ] + str",
    "choices": [
      "新しい文字",
      "reverse(新しい文字)",
      "str",
      "char[10]"
    ],
    "specific_explanation": "1. 後ろから拾う\n   下位桁から順に処理されるため、新しい文字を現在の <span class=\"italic\">str</span> の「前（左側）」に連結していけば、最終的に正しい並び順になります。\n\n2. 真ん中で折り返す\n   この手法（前置連結）を用いれば、ループ終了時に文字列を反転させる手間を省くことができますが、連結のたびに文字列全体の移動が発生する計算コストとのトレードオフになります。\n   <div class=\"important\">str ← 新しい文字 + str</div>"
  },
  // 23問目
  {
    "id": 98,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "パターンの一致判定",
    "text": "配列の先頭から <span class=\"italic\">i</span> 番目の要素に対応する「末尾から <span class=\"italic\">i</span> 番目」の要素を指し示すインデックスを求める式を選んでください。配列の要素番号は 1 から始まります。",
    "example": "num = 7 のとき、i = 1 (先頭) なら 7、i = 2 なら 6 となる式",
    "code": "1  palindrome(文字型の配列: text)\n2  整数型: i, num\n3  num ← textの要素数\n4  <span class=\"for\">for (i を 1 から (num ÷ 2 の商) まで 1 ずつ増やす)</span>\n5     <span class=\"if\">if (text[i] が text[ [  1  ] ] と等しくない)</span>\n6        // 不一致の処理\n7     <span class=\"if\">endif</span>\n8  <span class=\"for\">endfor</span>",
    "choices": [
      "num - i + 1",
      "num - i",
      "num + i - 1",
      "i + (num ÷ 2)"
    ],
    "specific_explanation": "1. 1文字目の合致\n   配列が 1 から始まる場合、先頭（1番目）と対応するのは末尾（<span class=\"italic\">num</span>番目）です。これを一般化すると、<span class=\"italic\">i</span> 番目のペアは <span class=\"italic\">num - i + 1</span> で計算できます。\n\n2. 続きを確認\n   例えば <span class=\"italic\">num = 7, i = 2</span> のとき、<span class=\"italic\">7 - 2 + 1 = 6</span> となり、前から2番目と後ろから2番目が正しく比較されます。\n   <div class=\"important\">対応するインデックス = num - i + 1</div>"
  },
  {
    "id": 99,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "パターンの一致判定",
    "text": "回文判定において、比較を繰り返すループの終了条件として適切なものを選んでください。全要素数を <span class=\"italic\">num</span> とします。",
    "example": "num = 7 のとき 3回、num = 6 のとき 3回比較すれば十分である",
    "code": "1  num ← textの要素数\n2  <span class=\"for\">for (i を 1 から [  1  ] まで 1 ずつ増やす)</span>\n3     <span class=\"if\">if (text[i] と末尾側が不一致)</span>\n4        flg ← false\n5     <span class=\"if\">endif</span>\n6  <span class=\"for\">endfor</span>",
    "choices": [
      "num ÷ 2 の商",
      "num",
      "num - 1",
      "num ÷ 2 の余り"
    ],
    "specific_explanation": "1. 1文字目の合致\n   回文判定は「前半と後半が鏡合わせになっているか」を確認する作業です。したがって、配列の全件を調べる必要はなく、中心までの半分を調べれば十分です。\n\n2. 続きを確認\n   奇数個（例：7個）の場合は中央の文字を比較する必要がないため、整数除算の商（<span class=\"italic\">7 ÷ 2 = 3</span>）までループを回せば全てのペアを網羅できます。\n   <div class=\"important\">ループ範囲 = 1 から (num ÷ 2 の商) まで</div>"
  },
  {
    "id": 100,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "パターンの一致判定",
    "text": "回文判定のロジックにおいて、空欄 a に入る「回文の条件を満たさない（＝不一致）」ことを判定する適切な条件式を選んでください。",
    "example": "text[1]:\"た\", text[7]:\"た\" なら一致。一箇所でも不一致なら回文ではない。",
    "code": "1  <span class=\"for\">for (i を 1 から (num ÷ 2 の商) まで 1 ずつ増やす)</span>\n2     <span class=\"if\">if ( [  a  ] )</span>\n3        flg ← false\n4     <span class=\"if\">endif</span>\n5  <span class=\"for\">endfor</span>",
    "choices": [
      "text[i] が text[num - i + 1] と等しくない",
      "text[i] が text[num - i + 1] と等しい",
      "text[i] が text[num - i] と等しくない",
      "text[i] が text[i + 1] と等しくない"
    ],
    "specific_explanation": "1. 1文字目の合致\n   回文判定の目的は、対称となる位置にある文字が「同じ」であることを確認することです。\n\n2. 続きを確認\n   プログラムでは、不一致が見つかったときに <span class=\"italic\">flg</span> を <span class=\"italic\">false</span> にしているため、「<span class=\"italic\">text[i]</span> と末尾側の文字が等しくない」という条件で分岐させるのが正解です。\n   <div class=\"important\">if (text[i] が text[num - i + 1] と等しくない)</div>"
  },
  {
    "id": 101,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "存在チェック",
    "text": "回文判定プログラムにおいて、フラグ変数 <span class=\"italic\">flg</span> の「初期状態の設定」として適切なものを選んでください。",
    "example": "「最初は回文であると仮定し、不一致が見つかったら取り消す」という考え方",
    "code": "1  論理型: flg\n2  [      ]\n3  <span class=\"for\">for (i を 1 から (num ÷ 2 の商) まで 1 ずつ増やす)</span>\n4     <span class=\"if\">if (不一致)</span>\n5        flg ← false\n6     <span class=\"if\">endif</span>\n7  <span class=\"for\">endfor</span>",
    "choices": [
      "flg ← true",
      "flg ← false",
      "flg ← 0",
      "flg ← num"
    ],
    "specific_explanation": "1. 初期状態の設定\n   このプログラムでは、一度でも不一致が見つかると <span class=\"italic\">flg</span> が <span class=\"italic\">false</span> に変わります。そのため、ループに入る前は「まだ不一致が見つかっていない（＝回文である）」ことを表す <span class=\"italic\">true</span> で初期化する必要があります。\n\n2. 状態の更新\n   不一致があった瞬間に <span class=\"italic\">false</span> へ書き換えることで、最終的な <span class=\"italic\">flg</span> の値によって回文かどうかが判定されます。\n   <div class=\"important\">flg ← true</div>"
  },
  {
    "id": 102,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "存在チェック",
    "text": "ループ終了後に判定結果（0: 回文、1: 回文でない）を返すための分岐処理です。空欄 b に入る適切な値を選んでください。",
    "example": "flg が初期値 (true) のままなら、一度も不一致がなかったことを意味する",
    "code": "1  <span class=\"if\">if (flg が [  b  ] と等しい)</span>\n2     return 0  // 回文である\n3  <span class=\"if\">else</span>\n4     return 1  // 回文でない\n5  <span class=\"if\">endif</span>",
    "choices": [
      "true",
      "false",
      "0",
      "1"
    ],
    "specific_explanation": "1. 初期状態の設定\n   <span class=\"italic\">flg</span> は初期値が <span class=\"italic\">true</span> で、不一致が見つかると <span class=\"italic\">false</span> になります。\n\n2. 状態の更新\n   戻り値が <span class=\"italic\">0</span>（回文である）になるのは、<span class=\"italic\">flg</span> が一度も書き換えられずに <span class=\"italic\">true</span> のままだった場合です。したがって、条件式は <span class=\"italic\">flg == true</span> となります。\n   <div class=\"important\">if (flg が true と等しい)</div>"
  },
  {
    "id": 103,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "存在チェック",
    "text": "text = {\"A\", \"B\", \"C\", \"A\"} （要素数 4）を引数としたとき、このプログラムが返す値 a と、ループ内での flg の最終的な状態 b の組み合わせとして正しいものを選んでください。",
    "example": "i = 1 のとき：'A' と 'A' を比較\ni = 2 のとき：'B' と 'C' を比較",
    "code": "1  // トレース：\n2  // num = 4, ループは i = 1 から 2 まで\n3  // i = 1: text[1]('A') == text[4]('A') → 変化なし\n4  // i = 2: text[2]('B') != text[3]('C') → [  flgを更新  ]",
    "choices": [
      "a: 1\nb: false",
      "a: 0\nb: true",
      "a: 1\nb: true",
      "a: 0\nb: false"
    ],
    "specific_explanation": "1. 初期状態の設定\n   <span class=\"italic\">flg</span> は最初 <span class=\"italic\">true</span> です。\n\n2. 状態の更新\n   <span class=\"italic\">i = 2</span> のとき、<span class=\"italic\">'B'</span> と <span class=\"italic\">'C'</span> が比較され「等しくない」ため、<span class=\"italic\">flg</span> は <span class=\"italic\">false</span> に更新されます。ループ終了後、<span class=\"italic\">flg</span> が <span class=\"italic\">true</span> ではないため <span class=\"italic\">else</span> 側へ進み、<span class=\"italic\">1</span>（回文でない）を返します。\n   <div class=\"important\">a: 1 (回文でない), b: false</div>"
  },
  // 24問目
  {
    "id": 104,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "切り捨てと整数型変換",
    "text": "秒単位の合計時間 t を「時」に変換する処理を考えます。空欄に入る適切な式を選んでください。",
    "example": "t = 3661 秒のとき、3661 ÷ 3600 = 1.01... となり「1時」が得られる",
    "code": "1  // t は経過時間の総秒数\n2  // time.setHH(整数型: hh) は「時」を設定するメソッド\n3  time.setHH( [  1  ] )",
    "choices": [
      "t ÷ 3600",
      "t mod 3600",
      "t ÷ 60",
      "t mod 60"
    ],
    "specific_explanation": "1. 切り捨てと整数型変換\n   1時間は3600秒（60分 × 60秒）です。総秒数を3600で割り、小数点以下を切り捨てる（整数部分のみを取り出す）ことで「時」を算出できます。\n\n2. 単位の調整\n   プログラム言語の整数同士の除算「÷」は、自動的に小数点以下を切り捨てることが多いため、この性質を利用します。\n   <div class=\"important\">time.setHH(t ÷ 3600)</div>"
  },
  {
    "id": 105,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "切り捨てと整数型変換",
    "text": "総秒数 t から「分」を算出する処理です。適切な式の組み合わせを選んでください。",
    "example": "t = 3720 秒のとき、(3720 mod 3600) = 120 秒。\n120 ÷ 60 = 2分 となる",
    "code": "1  // b は「時」を除いた残りの秒数から「分」を求める式\n2  time.setMM( [  b  ] )",
    "choices": [
      "(t mod 3600) ÷ 60",
      "t ÷ 60",
      "(t ÷ 3600) mod 60",
      "t mod 3600"
    ],
    "specific_explanation": "1. 切り捨てと整数型変換\n   まず「時」に満たない余りの秒数を <span class=\"italic\">t mod 3600</span> で求めます。その余った秒数をさらに 60 で割ることで「分」が求められます。\n\n2. 単位の調整\n   1分は60秒であるため、60で割った商の整数部分を採用します。\n   <div class=\"important\">time.setMM((t mod 3600) ÷ 60)</div>"
  },
  {
    "id": 106,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "切り捨てと整数型変換",
    "text": "総秒数 t から「秒」の部分だけを抽出する処理です。空欄に入る適切な式を選んでください。",
    "example": "t = 61 秒のとき、61 mod 60 = 1秒 となる",
    "code": "1  // c は「時」と「分」を除いた余りの「秒」を求める式\n2  time.setSS( [  c  ] )",
    "choices": [
      "t mod 60",
      "t ÷ 60",
      "t mod 3600",
      "(t mod 3600) ÷ 60"
    ],
    "specific_explanation": "1. 切り捨てと整数型変換\n   「分」に変換しきれなかった余りの値が、最終的な「秒」となります。\n\n2. 単位の調整\n   60秒で1分に繰り上がるため、60で割った「余り（mod）」を求めることで、0〜59秒の範囲の値を取り出すことができます。\n   <div class=\"important\">time.setSS(t mod 60)</div>"
  },
  {
    "id": 107,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "t1 と t2 から経過時間 t を求めたい。「t1 23:59:59」から「t2 00:00:01」のように、日付をまたぐ場合の処理を考えます。空欄 a に入る適切な条件式を選んでください。",
    "example": "t1 = 86399、t2 = 1 のとき、そのまま t2 - t1 を計算すると何が起きるか考えてみましょう。",
    "code": "   01  整数型: t1, t2, t\n   02  <span class=\"if\">if ( [  a  ] )</span>\n   03     t2 ← t2 + 86400\n   04  <span class=\"if\">endif</span>\n   05  t ← t2 - t1",
    "choices": [
      "t1 が t2 より大きい",
      "t1 が t2 より小さい",
      "t1 が 86400 より大きい",
      "t2 が 0 と等しい"
    ],
    "specific_explanation": "1. 境界の特定\n   通常、経過時間は t2 - t1 で求めますが、終了時刻（t2）が開始時刻（t1）よりも数値として小さい場合は「日付をまたいだ」と判断します。\n\n2. 含むか含まないか\n   t1 > t2 のときに補正を行うことで、負の数になるのを防ぎ、正しい経過時間を計算できるようにします。\n   <div class=\"important\">if (t1 > t2)</div>"
  },
  {
    "id": 108,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "日付をまたぐ際に加算している数値「86400」が表すものとして、正しい説明を選んでください。",
    "example": "1時間は何秒か、そこから順番に計算してみましょう。",
    "code": "01  整数型: t1, t2\n02  <span class=\"if\">if (t1 > t2)</span>\n03     t2 ← t2 + 86400\n04  <span class=\"if\">endif</span>",
    "choices": [
      "1日分の総秒数",
      "1時間分の総秒数",
      "半日（12時間）の総秒数",
      "1分間の総秒数"
    ],
    "specific_explanation": "1. 境界の特定\n   時刻計算において、日付をまたぐ場合は終了時刻 t2 に「24時間分」を加える補正が必要です。\n\n2. 含むか含まないか\n   24 × 60 × 60 を計算すると 86400 秒となり、これが 1 日分の総秒数に相当します。この値を t2 に加算することで、翌日の時刻を「前日からの通算秒数」として扱えます。\n   <div class=\"important\">86400 = 24 × 60 × 60（1日分の総秒数）</div>"
  },
  {
    "id": 109,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "24時間が00:00:00の形式で与えられます。開始時刻 t1 と終了時刻 t2 の関係と、最終的な経過秒数 t を求める式の組み合わせとして、正しいものを選んでください。",
    "example": "t1=86399（23:59:59）、t2=1（00:00:01）のとき、if 文による補正後の t2 はいくつになるか確認してみましょう。",
    "code": "01  整数型: t1, t2, t\n02  <span class=\"if\">if (t1 > t2)</span>\n03     t2 ← t2 + 86400\n04  <span class=\"if\">endif</span>\n05  t ← [  1  ]",
    "choices": [
      "t2 - t1",
      "t1 - t2",
      "t1 + t2",
      "86400 - t1"
    ],
    "specific_explanation": "1. 境界の特定\n   日付をまたぐ補正（t2 + 86400）が済んだ後は、終了時刻から開始時刻を引くことで経過時間が求まります。\n\n2. 含むか含まないか\n   日付をまたがない通常ケース（t1 < t2）でも補正なしの t2 - t1 で正しく計算できます。どちらのケースも同じ式で対応できます。\n   <div class=\"important\">t ← t2 - t1</div>"
  },
  // 25問目
  {
    "id": 110,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "二つの駅間の運賃と特急料金を求めるプログラムです。引数で与えられた二つの駅番号が「同じ駅」を指している場合、計算ができないためエラー処理を行います。空欄 a に入る適切な条件式を選んでください。",
    "example": "i = 3, j = 3 のとき、このプログラムはどのような動作をすべきか考えてみましょう。",
    "code": "01  calcFare(整数型: i, 整数型: j)\n02  整数型の配列: fare\n03  <span class=\"if\">if ((i < 1) or (i > N) or (j < 1) or (j > N) or ( [  a  ] ))</span>\n04     fare[1] ← -1\n05     fare[2] ← -1\n06  <span class=\"if\">elseif (i > j)</span>\n07     /* (運賃計算処理) */\n08  <span class=\"if\">endif</span>",
    "choices": [
      "i が j と等しい",
      "i が j と等しくない",
      "fareList[i, j] が 0 より大きい",
      "i + j が N と等しい"
    ],
    "specific_explanation": "1. 優先順位の確認\n   正常な計算の前に、まずは「計算が不可能なケース（例外）」を最初に判定して除外します。\n\n2. 排他性チェック\n   駅番号が範囲外であることに加え、出発駅と到着駅が同一（i = j）の場合も料金表の対角線上（値が 0）を参照することになり、仕様上エラーとして扱います。\n   <div class=\"important\">if (... or (i = j))</div>"
  },
  {
    "id": 111,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "駅番号が正しくない場合や、同一駅が指定された場合、このプログラムが返す「エラーを示す値」として適切なものを選んでください。",
    "example": "fare[1] と fare[2] にどんな値が入っていれば、呼び出し側は「エラーが起きた」と判断できるか考えてみましょう。",
    "code": "01  整数型の配列: fare\n02  <span class=\"if\">if (駅番号が不正 または 同一駅)</span>\n03     fare[1] ← [  1  ]\n04     fare[2] ← [  1  ]\n05  <span class=\"if\">else</span>\n06     /* (正常な料金代入) */\n07  <span class=\"if\">endif</span>\n08  return fare",
    "choices": [
      "-1",
      "0",
      "N",
      "null"
    ],
    "specific_explanation": "1. 優先順位の確認\n   仕様により、駅番号が無効または同一駅の場合は特定のエラー値を返すことが決められています。\n\n2. 排他性チェック\n   「0」は料金表の対角線上の値として使われているため、エラーとの区別ができません。負の数「-1」を使うことで、呼び出し側に確実にエラーを伝えられます。\n   <div class=\"important\">fare[1] ← -1, fare[2] ← -1</div>"
  },
  {
    "id": 112,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "駅番号の有効範囲を確認する条件式を検討しています。駅番号が 1 から N までであるとき、駅番号 i が「範囲外」であることを判定する正しい論理式を選んでください。",
    "example": "N = 10 のとき、i = 0 はどちら方向へはみ出した値ですか。i = 11 の場合と合わせて考えてみましょう。",
    "code": "01  整数型: i, N\n02  <span class=\"if\">if ( [  1  ] )</span>\n03     return \"エラー: 駅が存在しません\"\n04  <span class=\"if\">endif</span>",
    "choices": [
      "(i < 1) or (i > N)",
      "(i <= 1) or (i >= N)",
      "(i > 1) and (i < N)",
      "(i < 0) or (i > N + 1)"
    ],
    "specific_explanation": "1. 境界の特定\n   有効な駅番号の下限は「1」、上限は「N」です。\n\n2. 含むか含まないか\n   範囲内が 1 <= i <= N なので、その否定は「1 より小さい（< 1）」または「N より大きい（> N）」となります。境界値の 1 と N は正常値として含めます。\n   <div class=\"important\">(i < 1) or (i > N)</div>"
  },
  {
    "id": 113,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "座標計算と転置",
    "text": "料金表 fareList において、左下部分（i > j）には運賃が、右上部分（j > i）には特急料金が格納されています。i > j のときに「運賃」と「特急料金」を正しく取得する組み合わせを選んでください。",
    "example": "i = 3, j = 1 (3行1列) が運賃のとき、対応する特急料金は 1行3列 にある",
    "code": "1  <span class=\"if\">elseif (i > j)</span>\n2     fare[1] ← fareList[ [  a  ] ]  // 運賃\n3     fare[2] ← fareList[ [  b  ] ]  // 特急料金",
    "choices": [
      "a: i, j\nb: j, i",
      "a: j, i\nb: i, j",
      "a: i, i\nb: j, j",
      "a: i, 1\nb: 1, j"
    ],
    "specific_explanation": "1. 入れ替えの規則性\n   図1の料金表を見ると、行番号 <span class=\"italic\">i</span> が列番号 <span class=\"italic\">j</span> より大きい領域（左下）が「運賃」です。したがって <span class=\"italic\">fareList[i, j]</span> で運賃を取得します。\n\n2. 端の処理\n   特急料金は対角線を挟んで反対側の領域（右上）にあります。行と列を反転させた <span class=\"italic\">fareList[j, i]</span> を参照することで、同じ駅区間の特急料金を特定できます。\n   <div class=\"important\">運賃: [i, j], 特急料金: [j, i]</div>"
  },
  {
    "id": 114,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "座標計算と転置",
    "text": "引数で与えられた駅番号の大小関係が j > i （出発駅より到着駅の番号が大きい）の場合、運賃と特急料金を格納する処理として正しいものを選んでください。",
    "example": "j > i は料金表の「右上半分」を指す",
    "code": "1  <span class=\"if\">else</span>  // j > i の場合\n2     fare[1] ← [  a  ]  // 運賃\n3     fare[2] ← [  b  ]  // 特急料金\n4  <span class=\"if\">endif</span>",
    "choices": [
      "a: fareList[j, i]\nb: fareList[i, j]",
      "a: fareList[i, j]\nb: fareList[j, i]",
      "a: fareList[i, i]\nb: fareList[j, j]",
      "a: -1\nb: -1"
    ],
    "specific_explanation": "1. 入れ替えの規則性\n   <span class=\"italic\">j > i</span> のとき、<span class=\"italic\">fareList[i, j]</span> は表の右上領域を指すため、ここには「特急料金」が入っています。一方、運賃は左下領域にあるため、添字を入れ替えた <span class=\"italic\">fareList[j, i]</span> を参照します。\n\n2. 端の処理\n   問題の戻り値の形式（fare[1]が運賃、fare[2]が特急料金）に合わせて、どの座標にどちらのデータがあるかを正確にマッピングする必要があります。\n   <div class=\"important\">fare[1] ← fareList[j, i], fare[2] ← fareList[i, j]</div>"
  },
  {
    "id": 115,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "座標計算と転置",
    "text": "料金表 fareList の対角線上（i = j）の要素がすべて 0 である理由として、最も適切な説明を選んでください。",
    "example": "fareList[1, 1], fareList[2, 2], ... が 0",
    "code": "1  // 料金表の構造\n2  // 1行1列: 0, 1行2列: 特急料金, ...\n3  // 2行1列: 運賃, 2行2列: 0, ...",
    "choices": [
      "同一駅間の移動には運賃も特急料金も発生しないため",
      "駅番号 0 は存在しないため",
      "特急が停車しない駅であることを示すため",
      "配列の初期化ミスを防ぐためのダミーデータであるため"
    ],
    "specific_explanation": "1. 入れ替えの規則性\n   対角線（行番号と列番号が等しい場所）は、「駅 A から駅 A への移動」を意味します。\n\n2. 端の処理\n   移動が発生しないため、当然料金は 0 となります。プログラムではこの 0 を参照しないよう、事前に <span class=\"italic\">i = j</span> のチェックを行ってエラー（-1）を返すように設計されています。\n   <div class=\"important\">対角線上の 0 は移動なし（同一駅）を意味する</div>"
  },
  // 26問目
  {
    "id": 116,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "複合条件",
    "text": "引数 iRank が「0」のときは全ての階級を対象とし、それ以外のときは指定された階級と一致する部屋を探します。空欄 [ a ] に入る適切な条件式を選んでください。",
    "example": "iRank = 0 のとき、OR の左側の条件だけで条件全体を真にするには、どんな式を置けばよいか考えてみましょう。",
    "code": "01  searchRoom(整数型: iRank, 整数型: iUsrn)\n02  <span class=\"for\">for (i を 1 から rm の要素数 まで 1 ずつ増やす)</span>\n03     <span class=\"if\">if ((rm[i].status が true) and (iUsrn <= rm[i].uMax))</span>\n04        <span class=\"if\">if ([  a  ] or (iRank が rm[i].rank と等しい))</span>\n05           /* 部屋番号を格納する処理 */\n06        <span class=\"if\">endif</span>\n07     <span class=\"if\">endif</span>\n08  <span class=\"for\">endfor</span>",
    "choices": [
      "iRank が 0 と等しい",
      "iRank が 0 と等しくない",
      "rm[i].rank が 0 と等しい",
      "rm[i].rank が 0 と等しくない"
    ],
    "specific_explanation": "1. ANDとOR\n   「iRank が 0 の場合は階級を問わない」という仕様を実現するため、OR の左側に「iRank = 0」の判定を置きます。\n\n2. 短絡評価の意識\n   左側の条件「iRank = 0」が真であれば、OR の右側（階級の一致確認）を評価せずに条件全体が真となります。これにより「0 のときは何でもOK」というロジックが成立します。\n   <div class=\"important\">(iRank = 0) or (iRank = rm[i].rank)</div>"
  },
  {
    "id": 117,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "複合条件",
    "text": "利用人数 iUsrn が、部屋の最大利用可能人数 uMax を超えていないか判定する条件式を考えます。空欄 [  1  ] に入る適切な演算子を選んでください。",
    "example": "iUsrn = 2, uMax = 2 のとき（定員ちょうど）、その部屋は利用できるはずです。この場合の条件式の結果を確認してみましょう。",
    "code": "01  searchRoom(整数型: iRank, 整数型: iUsrn)\n02  <span class=\"for\">for (i を 1 から rm の要素数 まで 1 ずつ増やす)</span>\n03     <span class=\"if\">if ((rm[i].status が true) and (iUsrn [  1  ] rm[i].uMax))</span>\n04        /* 階級チェックと格納処理 */\n05     <span class=\"if\">endif</span>\n06  <span class=\"for\">endfor</span>",
    "choices": [
      "<=",
      "<",
      ">=",
      ">"
    ],
    "specific_explanation": "1. ANDとOR\n   この if 文は「空き状態（status が true）」かつ「人数が定員内」という 2 条件を and で結んでいます。どちらか一方が偽になるだけで条件全体が偽となります。\n\n2. 短絡評価の意識\n   「以下（<=）」と「未満（<）」の違いが重要です。定員ちょうど（iUsrn = uMax）の場合も利用可能なため、等号を含む <= が適切です。\n   <div class=\"important\">iUsrn <= rm[i].uMax</div>"
  },
  {
    "id": 118,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "複合条件",
    "text": "「空き部屋である（statusがtrue）」かつ「人数が定員内」かつ「階級が一致（または0指定）」という3つの条件をすべて満たす部屋を抽出します。論理構造として適切なものを選んでください。",
    "example": "status が false の部屋がなぜ最初の if を通過できないか、外側から順に条件を追ってみましょう。",
    "code": "01  <span class=\"if\">if (rm[i].status が true と等しい)</span>\n02     <span class=\"if\">if (iUsrn が rm[i].uMax 以下)</span>\n03        <span class=\"if\">if (条件 [  1  ])</span>\n04           /* 抽出処理 */\n05        <span class=\"if\">endif</span>\n06     <span class=\"if\">endif</span>\n07  <span class=\"if\">endif</span>",
    "choices": [
      "(iRank が 0 と等しい) or (iRank が rm[i].rank と等しい)",
      "(iRank が 0 と等しい) and (iRank が rm[i].rank と等しい)",
      "(iRank が 0 と等しくない) or (iRank が rm[i].rank と等しい)",
      "(iRank が 0 と等しくない) and (iRank が rm[i].rank と等しい)"
    ],
    "specific_explanation": "1. ANDとOR\n   「iRank が 0」または「rm[i].rank と一致する」のどちらかが真であればよいため、OR を使います。\n\n2. 短絡評価の意識\n   左側の「iRank = 0」が真の時点で右側を評価せずに条件が確定します。これにより「0 指定なら全階級 OK」というロジックが成立します。\n   <div class=\"important\">(iRank = 0) or (iRank = rm[i].rank)</div>"
  },
  {
    "id": 119,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "見つかった空き部屋の番号を配列 ormNo に順番に格納する処理です。空欄 [ b ] に入る適切な処理を選んでください。なお、配列の要素番号は 1 から始まります。",
    "example": "1件目が見つかったとき：ormNo[1] に部屋番号を代入",
    "code": "   1  cnt <- 0\n   2  <span class=\"for\">for (i を 1 から rm の要素数 まで 1 ずつ増やす)</span>\n   3     <span class=\"if\">if (条件合致)</span>\n   4        cnt <- cnt + 1\n   5        [  b  ]\n   6     <span class=\"if\">endif</span>\n   7  <span class=\"for\">endfor</span>",
    "choices": [
      "ormNo[cnt] <- rm[i].no",
      "ormNo[i] <- rm[i].no",
      "ormNo[cnt] <- i",
      "ormNo[i] <- cnt"
    ],
    "specific_explanation": "1. カウンタの用意\n   変数 <span class=\"italic\">cnt</span> は、条件に合う部屋が見つかるたびに 1 増える「見つかった個数」を表します。\n\n2. 条件ヒットで加算\n   <span class=\"italic\">cnt</span> を増やした直後にその値を添え字として使うことで、結果用配列の先頭から隙間なくデータを詰められます。\n   <div class=\"important\">ormNo[cnt] <- rm[i].no</div>"
  },
  {
    "id": 120,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "プログラムの最後で、条件に一致した部屋番号の配列 ormNo を返します。この関数が返す値として適切なものを選んでください。",
    "example": "3部屋見つかった場合、3つの要素が入った配列を返す",
    "code": "   1  整数型の配列: ormNo\n   2  cnt <- 0\n   3  <span class=\"for\">for (i を 1 から rm の要素数 まで 1 ずつ増やす)</span>\n   4     /* 検索・格納処理 */\n   5  <span class=\"for\">endfor</span>\n   6  return [  1  ]",
    "choices": [
      "ormNo",
      "cnt",
      "rm[i].no",
      "rm"
    ],
    "specific_explanation": "1. 初期状態の設定\n   関数の目的は「利用可能な部屋番号を配列に格納して返す」ことです。\n\n2. 状態の更新\n   ループ内で ormNo に部屋番号を蓄積してきたため、最後にその配列自体を呼び出し元に返却します。\n   <div class=\"important\">return ormNo</div>"
  },
  {
    "id": 121,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "条件に合う要素のカウント",
    "text": "ループ変数 i と、見つかった件数 cnt の関係について正しく述べているものを選んでください。",
    "example": "ホテルの10番目の部屋(i=10)が、2件目の空き部屋(cnt=2)として見つかる場合",
    "code": "   1  cnt <- 0\n   2  <span class=\"for\">for (i を 1 から 100 まで 1 ずつ増やす)</span>\n   3     <span class=\"if\">if (部屋[i] が空いている)</span>\n   4        cnt <- cnt + 1\n   5        ormNo[cnt] <- 部屋[i].no\n   6     <span class=\"if\">endif</span>\n   7  <span class=\"for\">endfor</span>",
    "choices": [
      "cnt は常に i 以下の値になる",
      "cnt は常に i と等しい値になる",
      "cnt は常に i より大きい値になる",
      "cnt と i に相関関係はない"
    ],
    "specific_explanation": "1. 規則性の発見\n   <span class=\"italic\">i</span> は全ての部屋を調べるためのカウンタであり、<span class=\"italic\">cnt</span> はその中で条件を満たしたものだけを数えるカウンタです。\n\n2. ずれの調整\n   全件が条件を満たす場合は <span class=\"italic\">i = cnt</span> となりますが、通常は条件に合わない部屋があるため、<span class=\"italic\">cnt</span> は <span class=\"italic\">i</span> を超えることはありません。\n   <div class=\"important\">cnt <= i</div>"
  },
  // 27問目
  {
    "id": 122,
    "category": "数値計算系",
    "theme": "n進法",
    "subtheme": "重み付けの累積",
    "text": "文字列から取り出した数字 tmp を、実数型の変数 real に累積していく処理です。空欄 [ b ] に入る適切な式を選んでください。",
    "example": "real = 21, tmp = 8 のとき：新しい real は 218 になる",
    "code": "   1  parseRealNum()\n   2  real <- 0.0\n   3  <span class=\"for\">for (i を 1 から num まで 1 ずつ増やす)</span>\n   4     tmp <- getDec(i)\n   5     <span class=\"if\">if (tmp が -1 と等しい)</span>\n   6        /* 小数点の処理 */\n   7     <span class=\"if\">else</span>\n   8        [  b  ]\n   9        /* 桁数の更新処理 */\n  10     <span class=\"if\">endif</span>\n  11  <span class=\"for\">endfor</span>",
    "choices": [
      "real <- real * 10 + tmp",
      "real <- real + tmp",
      "real <- real * cnt + tmp",
      "real <- (real + tmp) * 10"
    ],
    "specific_explanation": "1. 桁のシフト\n   新しい数字を追加する前に、現在の合計値を「10倍」して桁を一つ左にずらします。\n\n2. 新しい桁の加算\n   空いた1の位に、取り出した数字 <span class=\"italic\">tmp</span> を足し合わせることで、数値を累積していきます。\n   <div class=\"important\">real <- real * 10 + tmp</div>"
  },
  {
    "id": 123,
    "category": "数値計算系",
    "theme": "n進法",
    "subtheme": "重み付けの累積",
    "text": "小数部分の桁数を管理するため、小数点の出現後に cnt の値を更新します。最終的に正しい小数位置にするための、空欄 [  1  ] に入る式を選んでください。",
    "example": "小数第2位までの場合：最後に 100 で割る必要がある",
    "code": "   1  cnt <- 1\n   2  <span class=\"for\">for (i を 1 から num まで 1 ずつ増やす)</span>\n   3     <span class=\"if\">if (小数点を通過後)</span>\n   4        cnt <- cnt * 10\n   5     <span class=\"if\">endif</span>\n   6  <span class=\"for\">endfor</span>\n   7  real <- real [  1  ] cnt",
    "choices": [
      "÷",
      "×",
      "+",
      "-"
    ],
    "specific_explanation": "1. 重み付けの累積\n   ループ内では全ての数字を「整数」として蓄積しています。\n\n2. 新しい桁の加算\n   最後に、カウントした小数桁分（<span class=\"italic\">cnt</span>）で割ることで、元の実数の形に戻します。\n   <div class=\"important\">real <- real ÷ cnt</div>"
  },
  {
    "id": 124,
    "category": "数値計算系",
    "theme": "n進法",
    "subtheme": "桁のシフト",
    "text": "このプログラムが「10進法」の実数を扱っていることを示す処理はどれか、適切なものを選んでください。",
    "example": "2進法であれば 2倍、16進法であれば 16倍する箇所に注目する",
    "code": "   1  <span class=\"if\">if (tmp が -1 と等しい)</span>\n   2     /* 小数点発見時の処理 */\n   3  <span class=\"if\">else</span>\n   4     real <- real * 10 + tmp\n   5     <span class=\"if\">if (小数点を通過済みなら)</span>\n   6        cnt <- cnt * 10\n   7     <span class=\"if\">endif</span>\n   8  <span class=\"if\">endif</span>",
    "choices": [
      "各所で使われている「10」という定数",
      "tmp が -1 かどうかを判定する条件式",
      "i を 1 ずつ増やすループ処理",
      "変数 real を 0.0 で初期化する処理"
    ],
    "specific_explanation": "1. 桁のシフト\n   数値を1桁左にずらす際に「10倍」しているのは、基数が10であるためです。\n\n2. 新しい桁の加算\n   小数桁の重み（<span class=\"italic\">cnt</span>）を「10倍」ずつ増やしていく処理も、10進法の位取りに基づいています。\n   <div class=\"important\">10倍する操作が10進法を決定づけている</div>"
  },
  {
    "id": 125,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "文字列形式の数字を実数に変換するプログラムです。途中で「小数点（'.'）」を検出した際、それ以降の数字を小数第一位から順に計算していくための準備として、空欄 [  a  ] に入れるべき処理を選んでください。",
    "example": "「12.3」を変換するとき、小数点を検出した直後、次に来る '3' にかけるべき重みは何になるでしょうか。",
    "code": "01  parseReal(文字型の配列: char, 整数型: num)\n02  実数型: real ← 0.0, cnt ← 1.0\n03  <span class=\"for\">for (i を 1 から num まで 1 ずつ増やす)</span>\n04     整数型: tmp ← getDec(i)  /* 数字なら0-9、小数点なら-1を返す */\n05     <span class=\"if\">if (tmp == -1)</span>\n06        [  a  ]\n07     <span class=\"if\">else</span>\n08        /* 数字の場合の加算処理 */\n09        real ← real + tmp * cnt\n10        cnt ← cnt * 0.1\n11     <span class=\"if\">endif</span>\n12  <span class=\"for\">endfor</span>",
    "choices": ["cnt ← 0.1", "cnt ← 1.0", "cnt ← cnt + 1.0", "real ← 0.0"],
    "specific_explanation": "1. 優先順位の確認\n   通常の数字（0-9）の処理を行う前に、「小数点（-1）」という特殊な記号を if 文で先に判定し、計算モードを切り替えます。\n\n2. 排他性チェック\n   小数点が見つかった瞬間に cnt を 0.1（小数第一位の重み）に設定します。これにより後続の数字が正しく小数として累積されます。\n   <div class=\"important\">cnt ← 0.1</div>"
  },
  {
    "id": 126,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "文字配列の中から「小数点」を検出し、その後の数字を小数として扱いたいです。小数点を通過した「後」の数字に対してのみ、桁数カウント（cnt）を更新したい場合のロジックとして適切なものを選んでください。",
    "example": "218.05 を処理するとき、整数部と小数部のどちらの桁を処理している間だけ cnt が更新されるべきか考えてみましょう。",
    "code": "01  実数型: cnt ← 1.0\n02  整数型: tmp\n03  <span class=\"if\">if (tmp が -1 と等しい)</span>\n04     cnt ← 0.1\n05  <span class=\"if\">else</span>\n06     real ← real * 10 + tmp\n07     <span class=\"if\">if ([  1  ])</span>\n08        cnt ← cnt * 10\n09     <span class=\"if\">endif</span>\n10  <span class=\"if\">endif</span>",
    "choices": [
      "cnt < 1",
      "cnt >= 1",
      "tmp > 0",
      "i == num"
    ],
    "specific_explanation": "1. 優先順位の確認\n   小数点を通過する前は cnt は 1.0 ですが、通過時に 0.1 に書き換わります。\n\n2. 排他性チェック\n   「cnt が 1 より小さい」という条件が真であれば、既に小数点を通過した後の数字であることを意味します。\n   <div class=\"important\">if (cnt < 1)</div>"
  },
  // 28問目
  {
    "id": 127,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "約数を探すループの範囲を指定します。問題文にある「約数は num を除いて全て num ÷ 2 以下である」という性質を利用する場合、空欄 [ a ] に入る適切な条件を選んでください。",
    "example": "num = 12 のとき、f をいくつまで調べればすべての約数が見つかるか確認してみましょう。",
    "code": "01  calcMeasure(整数型: num)\n02  整数型の配列: measure ← {}\n03  整数型: f ← 1\n04  <span class=\"while\">while ([  a  ])</span>\n05     /* 約数の判定と追加処理 */\n06     f ← f + 1\n07  <span class=\"while\">endwhile</span>\n08  measure の末尾に num の値を追加する",
    "choices": [
      "(f × 2) が num 以下",
      "(f × 2) が num より大きい",
      "f が num 以下",
      "f が num と等しくない"
    ],
    "specific_explanation": "1. 変数の変化\n   ループ内で f は 1 ずつ増えていきます。約数の候補を効率的に探すため、num ÷ 2（つまり f × 2 ≤ num）の範囲まで調査を続けます。\n\n2. 異常系の考慮\n   この条件により、無駄な計算（例えば 12 の約数探しで 7〜11 を調べること）を省きつつ、正しくループを終了させることができます。\n   <div class=\"important\">while (f × 2 ≤ num)</div>"
  },
  {
    "id": 128,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "while 文の中で、次の約数候補を調べるための処理として、空欄 [  1  ] に入る適切な式を選んでください。",
    "example": "f = 1 の処理が終わったら次は f = 2 を調べます。ループが終了条件に向かって確実に進むにはどう更新すればよいでしょうか。",
    "code": "01  整数型: f ← 1\n02  <span class=\"while\">while (条件式)</span>\n03     <span class=\"if\">if (num mod f が 0 と等しい)</span>\n04        measure の末尾に f を追加\n05     <span class=\"if\">endif</span>\n06     [  1  ]\n07  <span class=\"while\">endwhile</span>",
    "choices": [
      "f ← f + 1",
      "f ← f × 2",
      "f ← num ÷ 2",
      "f ← f + num"
    ],
    "specific_explanation": "1. 変数の変化\n   while 文は、ループ内で条件に使っている変数が必ず「終了」に向かって変化しなければなりません。\n\n2. 異常系の考慮\n   f を 1 ずつ増やすことで、すべての整数を漏れなくチェックし、最終的に継続条件（f × 2 ≤ num）を満たさなくなる地点まで到達させます。\n   <div class=\"important\">f ← f + 1</div>"
  },
  {
    "id": 129,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "while 文の開始前に変数を準備する処理です。1番目の約数である「1」から調べ始めるための初期化として、空欄 [  1  ] に入る値を選んでください。",
    "example": "f = 0 から始めると最初のループで 0 除算が発生します。最小の正の約数から調べ始めるには何を設定すればよいでしょうか。",
    "code": "01  calcMeasure(整数型: num)\n02  整数型の配列: measure ← {}\n03  整数型: f ← [  1  ]\n04  <span class=\"while\">while (f × 2 ≤ num)</span>\n05     /* 判定処理 */\n06  <span class=\"while\">endwhile</span>",
    "choices": [
      "1",
      "0",
      "num",
      "num ÷ 2"
    ],
    "specific_explanation": "1. フラグの初期化\n   while 文を制御する変数 f は、ループの外であらかじめ定義しておく必要があります。\n\n2. 変数の変化\n   最小の正の約数は必ず「1」であるため、1 から調査を開始するのが適切です。\n   <div class=\"important\">f ← 1</div>"
  },
  {
    "id": 130,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "結果の分類",
    "text": "変数 f が num の約数であるかどうかを判定する条件式を考えます。空欄 [ b ] に入る適切な式を選んでください。",
    "example": "num = 12, f = 3 のとき：12 ÷ 3 = 4 余り 0 なので「約数」",
    "code": "   1  <span class=\"while\">while ((f * 2) <= num)</span>\n   2     <span class=\"if\">if ([  b  ])</span>\n   3        measure の末尾に f の値を追加する\n   4     <span class=\"if\">endif</span>\n   5     f <- f + 1\n   6  <span class=\"while\">endwhile</span>",
    "choices": [
      "(num mod f) が 0 と等しい",
      "(num mod f) が 0 と等しくない",
      "(num ÷ f) が 0 と等しい",
      "(f mod num) が 0 と等しい"
    ],
    "specific_explanation": "1. 2で割った余り\n   （応用）約数とは「割り切れる数」のことです。割り切れるかどうかを判定するには、剰余演算子（mod）を使用します。\n\n2. 結果の分類\n   <span class=\"italic\">num</span> を <span class=\"italic\">f</span> で割った余りが 0 であれば、<span class=\"italic\">f</span> は <span class=\"italic\">num</span> の約数であると分類できます。\n   <div class=\"important\">if ((num mod f) == 0)</div>"
  },
  {
    "id": 131,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "結果の分類",
    "text": "num = 10 のとき、ループ内で約数として判定され、配列 measure に追加される数値の組み合わせとして正しいものを選んでください。",
    "example": "10 mod 1 = 0, 10 mod 2 = 0, 10 mod 5 = 0",
    "code": "   1  <span class=\"while\">while ((f * 2) <= 10)</span>\n   2     <span class=\"if\">if (10 mod f が 0 と等しい)</span>\n   3        measure の末尾に f を追加\n   4     <span class=\"if\">endif</span>\n   5     f <- f + 1\n   6  <span class=\"while\">endwhile</span>",
    "choices": [
      "1, 2, 5",
      "1, 2, 3, 4, 5",
      "2, 4",
      "1, 3, 5"
    ],
    "specific_explanation": "1. 2で割った余り\n   （応用）1, 2, 3, 4, 5 の各数字で 10 を割り、余りを確認します。\n\n2. 結果の分類\n   余りが 0 になるのは、10÷1=10(余0)、10÷2=5(余0)、10÷5=2(余0) の 3 パターンです。3 と 4 は余りが出るため除外されます。\n   <div class=\"important\">10 mod f == 0 となる f を抽出する</div>"
  },
  {
    "id": 132,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "結果の分類",
    "text": "プログラム全体の整合性を保つための、空欄 [ a ] と [ b ] の正しい組み合わせを選んでください。",
    "example": "a はループの継続条件、b は約数の判定条件",
    "code": "   1  <span class=\"while\">while ([  a  ])</span>\n   2     <span class=\"if\">if ([  b  ])</span>\n   3        /* 追加処理 */\n   4     <span class=\"if\">endif</span>\n   5     f <- f + 1\n   6  <span class=\"while\">endwhile</span>",
    "choices": [
      "a: (f * 2) が num 以下\nb: (num mod f) が 0 と等しい",
      "a: f が num 以下\nb: (num ÷ f) が 0 と等しい",
      "a: (f * 2) が num と等しくない\nb: (num mod f) が 0 と等しくない",
      "a: f が num と等しくない\nb: (num mod f) が 0 と等しい"
    ],
    "specific_explanation": "1. 結果の分類\n   約数の判定には必ず「余りが 0」であることを示す <span class=\"italic\">mod</span> 演算が必要です。\n\n2. 範囲内に収める\n   効率化のため、<span class=\"italic\">num ÷ 2</span> （<span class=\"italic\">f * 2 <= num</span>）までを調査範囲とするのがこのアルゴリズムの特徴です。\n   <div class=\"important\">a: (f * 2) <= num\nb: (num mod f) == 0</div>"
  },
  // 29問目
  {
    "id": 133,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "変数 flg を使って素数かどうかを判定するロジックです。割り切れる数（約数）が見つかった際、ループを抜けるためのフラグ操作として適切なものを選んでください。",
    "example": "i = 9, j = 3 のとき 9 mod 3 = 0 なので素数ではないと判定します。この時点でループを即座に抜けるには flg をどう更新すればよいでしょうか。",
    "code": "01  整数型: i, j\n02  論理型: flg\n03  flg ← 1\n04  j ← 3\n05  <span class=\"while\">while ((flg が 1 と等しい) and (j が (i ÷ 2) より小さい))</span>\n06     <span class=\"if\">if (i mod j が 0 と等しい)</span>\n07        [  1  ]\n08     <span class=\"if\">endif</span>\n09     j ← j + 2\n10  <span class=\"while\">endwhile</span>",
    "choices": [
      "flg ← 0",
      "flg ← 1",
      "flg ← i",
      "flg ← j"
    ],
    "specific_explanation": "1. フラグの初期化\n   ループ開始前に flg = 1（素数であると仮定）に設定します。\n\n2. 状態の更新\n   途中で割り切れる数が見つかった場合、それは素数ではないため flg = 0 に書き換えます。これにより while 文の継続条件が偽となり、無駄な計算をせずにループを終了できます。\n   <div class=\"important\">flg ← 0</div>"
  },
  {
    "id": 134,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "内側の while 文で、調査対象の数 i を割るための変数 j の範囲を制限します。効率的に判定を行うための空欄 [ a ] に入る条件を選んでください。",
    "example": "i = 25 のとき、j が 12 を超えてから先を調べる必要があるかどうか考えてみましょう。",
    "code": "01  整数型: i, j\n02  論理型: flg ← 1\n03  j ← 3\n04  <span class=\"while\">while ((flg が 1 と等しい) and ([  a  ]))</span>\n05     <span class=\"if\">if (i mod j が 0 と等しい)</span>\n06        flg ← 0\n07     <span class=\"if\">endif</span>\n08     j ← j + 2\n09  <span class=\"while\">endwhile</span>",
    "choices": [
      "j が (i ÷ 2) より小さい",
      "j が i と等しい",
      "j が num より大きい",
      "j が 0 と等しくない"
    ],
    "specific_explanation": "1. 無限ループ回避\n   j を無限に増やすのではなく、判定に必要な最小限の範囲で止める必要があります。\n\n2. 変数の変化\n   ある数 i の約数は（自分自身を除けば）必ず i ÷ 2 以下に存在するため、これを超える範囲を調べる必要はありません。\n   <div class=\"important\">j が (i ÷ 2) より小さい</div>"
  },
  {
    "id": 135,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "while 文を終了した後、最終的にその数 i が素数だった場合のみ配列 prime に追加します。空欄 [  1  ] に入る条件式を選んでください。",
    "example": "一度も割り切れなかった場合、ループ終了時の flg の値はどうなっているでしょうか。",
    "code": "01  整数型の配列: prime ← {}\n02  /* while 文による判定終了後 */\n03  <span class=\"if\">if ([  1  ])</span>\n04     prime の末尾に i の値を追加する\n05  <span class=\"if\">endif</span>",
    "choices": [
      "flg が 1 と等しい",
      "flg が 0 と等しい",
      "i が j と等しい",
      "i mod 2 が 0 と等しい"
    ],
    "specific_explanation": "1. 状態の更新\n   ループ内で一度も約数が見つからなければ、flg は初期値の 1 のまま保持されます。\n\n2. 異常系の考慮\n   flg が 0 になっている場合は「合成数（素数ではない）」と判断されたことを意味するため、追加処理は行いません。\n   <div class=\"important\">if (flg が 1 と等しい)</div>"
  },
  {
    "id": 136,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "偶数・奇数の判定",
    "text": "2 以外の偶数は素数ではないため、あらかじめ奇数のみを判定対象とします。空欄 [  1  ] に入る、i が奇数であることを確認する式を選んでください。",
    "example": "i = 7 のとき：7 mod 2 = 1 なので、0 と等しくない（真）",
    "code": "   1  <span class=\"for\">for (i を 3 から num まで 1 ずつ増やす)</span>\n   2     <span class=\"if\">if ([  1  ])</span>\n   3        /* 素数判定ロジックへ */\n   4     <span class=\"if\">endif</span>\n   5  <span class=\"for\">endfor</span>",
    "choices": [
      "(i mod 2) が 0 と等しくない",
      "(i mod 2) が 0 と等しい",
      "(i ÷ 2) が 1 と等しい",
      "(i mod 10) が 1 と等しい"
    ],
    "specific_explanation": "1. 2で割った余り\n   ある数を 2 で割った余りが 0 であれば偶数、0 でなければ奇数です。\n\n2. 結果の分類\n   素数の候補から偶数を除外するため、余りが 0 ではない（割り切れない）ことを判定条件にします。\n   <div class=\"important\">(i mod 2) != 0</div>"
  },
  {
    "id": 137,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "奇数 i が、別の奇数 j で割り切れるかどうかを調べるため、空欄 [  1  ] に適切な演算子を入れてください。",
    "example": "i = 15, j = 3 のとき：15 ÷ 3 = 5 余り 0 なので、15 は素数ではない",
    "code": "   1  <span class=\"while\">while (判定継続)</span>\n   2     <span class=\"if\">if (i [  1  ] j が 0 と等しい)</span>\n   3        flg <- 0\n   4     <span class=\"if\">endif</span>\n   5     j <- j + 2\n   6  <span class=\"while\">endwhile</span>",
    "choices": [
      "mod",
      "÷",
      "+",
      "×"
    ],
    "specific_explanation": "1. 2で割った余り\n   （応用）約数（割り切れる数）かどうかを判定するには、商を求める「÷」ではなく、余りを求める「mod」演算子を使用します。\n\n2. 結果の分類\n   余りが 0 になった時点で「割り切れた」と判断し、素数ではないことを確定させます。\n   <div class=\"important\">i mod j == 0</div>"
  },
  {
    "id": 138,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "規則性の発見",
    "text": "i が奇数であるとき、偶数で割る必要はありません。効率よく次の調査対象の数（奇数）へ進むための、空欄 [ b ] に入る更新式を選んでください。",
    "example": "j = 3 の次は 5, その次は 7 と、奇数だけをチェックする",
    "code": "   1  j <- 3\n   2  <span class=\"while\">while (判定継続)</span>\n   3     /* 割り切れるかどうかの判定 */\n   4     [  b  ]\n   5  <span class=\"while\">endwhile</span>",
    "choices": [
      "j <- j + 2",
      "j <- j + 1",
      "j <- j * 2",
      "j <- j + i"
    ],
    "specific_explanation": "1. 規則性の発見\n   判定対象 <span class=\"italic\">i</span> が奇数の場合、偶数（4, 6, 8...）で割り切れることは絶対にありません。\n\n2. ずれの調整\n   そのため、<span class=\"italic\">j</span> を 1 ずつ増やすのではなく、2 ずつ増やすことで奇数のみを効率的にチェックします。\n   <div class=\"important\">j <- j + 2</div>"
  },
  // 30問目
  {
    "id": 139,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "フラグ変数 flg を用いて、最大公約数が見つかるまで処理を繰り返すループを構成します。ループの開始条件と、flg の初期化の組み合わせとして正しいものを選んでください。ここで、num1 と num2 は最大公約数を求める対象の整数です。",
    "example": "flg が true になった瞬間にループを抜ける設計にするとき、ループ開始前の flg はどちらであるべきか考えてみましょう。",
    "code": "01  gcd(整数型: num1, 整数型: num2)\n02  論理型: flg\n03  [  a  ]\n04  <span class=\"while\">while ([  b  ])</span>\n05     /* 数値の比較と減算処理 */\n06  <span class=\"while\">endwhile</span>",
    "choices": [
      "a: flg ← false\nb: flg が true と等しくない",
      "a: flg ← true\nb: flg が true と等しい",
      "a: flg ← false\nb: flg が false と等しくない",
      "a: flg ← true\nb: flg が false と等しい"
    ],
    "specific_explanation": "1. フラグの初期化\n   ループに入る前はまだ計算が終わっていないため、flg を false（偽）で初期化します。\n\n2. フラグによる終了判定\n   「計算が完了（true）していない間」繰り返す必要があるため、継続条件は flg ≠ true となります。\n   <div class=\"important\">flg ← false\nwhile (flg が true と等しくない)</div>"
  },
  {
    "id": 140,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "2つの整数の最大公約数を求めるプログラムです。num1 と num2 の値を比較して大きい方から小さい方を引き、両者が等しくなった時点で計算を終了させます。空欄 [  1  ] に入る適切な処理を選んでください。",
    "example": "num1 = 12, num2 = 8 のとき、どのように変化して終了に至るか手でたどってみましょう。終了判定には flg をどう使いますか。",
    "code": "01  getGCD(整数型: num1, 整数型: num2)\n02  論理型: flg ← false\n03  <span class=\"while\">while (flg = false)</span>\n04     <span class=\"if\">if (num1 = num2)</span>\n05        [  1  ]\n06     <span class=\"if\">elseif (num1 > num2)</span>\n07        num1 ← num1 - num2\n08     <span class=\"if\">else</span>\n09        num2 ← num2 - num1\n10     <span class=\"if\">endif</span>\n11  <span class=\"while\">endwhile</span>\n12  return num1",
    "choices": ["flg ← true", "flg ← false", "num1 ← 0", "num2 ← num1"],
    "specific_explanation": "1. 変数の変化\n   while 文の継続条件が「flg = false である間」となっています。num1 と num2 が等しくなり計算が完了したとき、ループを止めるために flg を true に変更します。\n\n2. 異常系の考慮\n   このフラグ更新を忘れると、数値が一致した後も永遠にループを繰り返す「無限ループ」に陥ります。条件成立時に終了の合図を送ることが重要です。\n   <div class=\"important\">flg ← true</div>"
  },
  {
    "id": 141,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "関数 gcd(num1, num2) を呼び出した場合、gcd(8, 2) の実行において while 文の中の処理は合計で何回繰り返されるか、正しいものを選んでください。ここで、num1 と num2 は最大公約数を求める対象の整数です。",
    "example": "num1=8, num2=2 から出発して、num1 と num2 の変化を 1 ステップずつ手でたどりながら回数を数えてみましょう。",
    "code": "01  /* num1=8, num2=2 で開始 */\n02  <span class=\"while\">while (flg が true と等しくない)</span>\n03     /* 1回目: 8 > 2 なので num1 ← 6 */\n04     /* 2回目: 6 > 2 なので num1 ← 4 */\n05     /* 3回目: 4 > 2 なので num1 ← 2 */\n06     /* 4回目: 2 = 2 なので flg ← true */\n07  <span class=\"while\">endwhile</span>",
    "choices": [
      "4回",
      "3回",
      "5回",
      "2回"
    ],
    "specific_explanation": "1. 変数の変化\n   1回目(8,2)→(6,2)、2回目(6,2)→(4,2)、3回目(4,2)→(2,2) と減算が続きます。\n\n2. 無限ループ回避\n   4回目で num1 = num2 が成立し、フラグが更新されて終了します。合計 4 回の繰り返しが発生します。\n   <div class=\"important\">8→6→4→2 の減算3回 + 一致判定1回 = 4回</div>"
  },
  {
    "id": 142,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "最大公約数を求めるプログラムにおいて、num1 が num2 よりも大きいとき、大きい方の数値から小さい方を引いて更新します。空欄 [ a ] に入る適切な処理を選んでください。",
    "example": "num1 = 10, num2 = 4 のとき、大きい方から小さい方を引くとどうなるか確認してみましょう。",
    "code": "01  整数型: num1, num2\n02  論理型: flg ← false\n03  <span class=\"if\">if (num1 が num2 と等しい)</span>\n04     flg ← true\n05  <span class=\"if\">elseif (num1 > num2)</span>\n06     [  a  ]\n07  <span class=\"if\">else</span>\n08     num2 ← num2 - num1\n09  <span class=\"if\">endif</span>",
    "choices": [
      "num1 ← num1 - num2",
      "num1 ← num2 - num1",
      "num1 ← num1 ÷ num2",
      "num1 ← num2"
    ],
    "specific_explanation": "1. 優先順位の確認\n   ユークリッドの互除法（減算版）では、「大きい方から小さい方を引く」操作を繰り返します。\n\n2. 排他性チェック\n   elseif の条件が num1 > num2 であるため、このブロックでは num1 の値を更新するのが適切です。\n   <div class=\"important\">num1 ← num1 - num2</div>"
  },
  {
    "id": 143,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "最大公約数を求めるプログラムの if-elseif-else 文において、num2 の方が大きい場合に実行される [  1  ] の処理として適切なものを選んでください。ここで、num1 と num2 は最大公約数を求める対象の整数です。",
    "example": "等しくなく、かつ num1 の方が大きくもない場合にここへ到達します。その時点での num1 と num2 の大小関係を考えてみましょう。",
    "code": "01  整数型: num1, num2\n02  論理型: flg ← false\n03  <span class=\"if\">if (num1 が num2 と等しい)</span>\n04     flg ← true\n05  <span class=\"if\">elseif (num1 が num2 より大きい)</span>\n06     num1 ← num1 - num2\n07  <span class=\"if\">else</span>\n08     [  1  ]\n09  <span class=\"if\">endif</span>",
    "choices": [
      "num2 ← num2 - num1",
      "num2 ← num1 - num2",
      "num2 ← num1",
      "flg ← true"
    ],
    "specific_explanation": "1. 優先順位の確認\n   if と elseif の条件を通過しなかった場合、残りの可能性は「num2 が大きい」の一択に絞られます。\n\n2. 排他性チェック\n   その場合は大きい方の num2 から num1 を引き、値を更新します。elseif と対称な処理になっています。\n   <div class=\"important\">num2 ← num2 - num1</div>"
  },
  {
    "id": 144,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "最大公約数を求める関数 gcd(num1, num2) のループ終了後、最終的な最大公約数を返します。関数 gcd が返す戻り値として適切なものを選んでください。ここで、num1 と num2 は最大公約数を求める対象の整数です。",
    "example": "ループを抜けた時点で num1 と num2 はどのような関係になっているか確認した上で、返すべき値を考えてみましょう。",
    "code": "01  整数型: num1, num2\n02  論理型: flg ← false\n03  <span class=\"while\">while (flg が true と等しくない)</span>\n04     /* 数値の減算・更新処理 */\n05  <span class=\"while\">endwhile</span>\n06  return [  1  ]",
    "choices": [
      "num1",
      "flg",
      "num1 - num2",
      "0"
    ],
    "specific_explanation": "1. 優先順位の確認\n   ループを抜けたのは num1 = num2 が成立したときです。その共通の値が最大公約数となります。\n\n2. 排他性チェック\n   num1 と num2 は等しいためどちらを返しても結果は同じですが、引数として受け取り加工してきた num1 を返すのが自然です。\n   <div class=\"important\">return num1</div>"
  },
  // 31問目
  {
    "id": 145,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "ノードの挿入と削除",
    "text": "連結リストにおいて、リストの先頭から指定された値 qVal を持つノードを削除する処理です。空欄 [ a ] に入る適切な条件を選んでください。ここで、listHead はリストの先頭ノードを指すポインタ、qVal は削除対象の値を表します。",
    "example": "listHead が「未定義」のとき、リストは空であると判断します。",
    "code": "   1  append(文字型: qVal)\n   2  ListElement: prev, curr\n   3  curr <- ListElement(qVal)\n   4  <span class=\"if\">if (listHead が [  a  ])</span>\n   5     listHead <- curr\n   6  <span class=\"if\">else</span>\n   7     /* リストを辿る処理 */\n   8  <span class=\"if\">endif</span>",
    "choices": [
      "未定義",
      "未定義でない",
      "curr",
      "qVal"
    ],
    "specific_explanation": "1. ポインタ（Next）の書き換え\n   リストが空の場合、先頭を指すポインタ <span class=\"italic\">listHead</span> は何も指していない状態（未定義）です。\n\n2. 代入の順番\n   空であることを確認してから、新しく作成したノード <span class=\"italic\">curr</span> を先頭にセットします。\n   <div class=\"important\">if (listHead が 未定義)</div>"
  },
  {
    "id": 146,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "ノードの挿入と削除",
    "text": "連結リストにおいて、既存のリストの末尾に、新しいノード curr を繋ぐ処理です。空欄 [ b ] に入る適切な変数を選んでください。ここで、prev は現在のノード、curr は新しく作成されたノードを表します。",
    "example": "末尾ノード prev の次（next）に curr を繋ぐことで、リストが延長されます。",
    "code": "   1  append(文字型: qVal)\n   2  /* currの作成と空判定は終了済み */\n   3  prev <- listHead\n   4  <span class=\"while\">while (prev.next が 未定義でない)</span>\n   5     prev <- prev.next\n   6  <span class=\"while\">endwhile</span>\n   7  prev.next <- [  b  ]",
    "choices": [
      "curr",
      "listHead",
      "qVal",
      "prev"
    ],
    "specific_explanation": "1. ポインタ（Next）の書き換え\n   ループによって探し出した末尾ノード <span class=\"italic\">prev</span> の <span class=\"italic\">next</span> （鎖の継ぎ目）を、新しいノードに向けます。\n\n2. 代入の順番\n   新ノード <span class=\"italic\">curr</span> を代入することで、既存のリストと新ノードが連結されます。\n   <div class=\"important\">prev.next <- curr</div>"
  },
  {
    "id": 147,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "ノードの挿入と削除",
    "text": "空欄 a と b に入る適切な組み合わせを選んでください。リストが空の場合の処理と、末尾への連結処理を完成させます。",
    "example": "リストが空なら先頭を更新し、そうでなければ末尾の次に繋ぎます。",
    "code": "   1  <span class=\"if\">if (listHead が [  a  ])</span>\n   2     listHead <- curr\n   3  <span class=\"if\">else</span>\n   4     /* 末尾まで移動 */\n   5     prev.next <- [  b  ]\n   6  <span class=\"if\">endif</span>",
    "choices": [
      "a: 未定義\nb: curr",
      "a: 未定義でない\nb: curr",
      "a: 未定義\nb: listHead",
      "a: 未定義でない\nb: listHead"
    ],
    "specific_explanation": "1. ポインタ（Next）の書き換え\n   先頭が <span class=\"italic\">未定義</span> かどうかで「最初の1件目」かどうかを判定します。\n\n2. 代入の順番\n   2件目以降であれば、末尾ノードの <span class=\"italic\">next</span> を新しいノードである <span class=\"italic\">curr</span> に書き換えます。\n   <div class=\"important\">a: 未定義\nb: curr</div>"
  },
  {
    "id": 148,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "リストの走査（辿り）",
    "text": "リストの末尾ノード（nextが何も指していないノード）を見つけるためのループ条件として、空欄 [  1  ] に入る適切な表現を選んでください。",
    "example": "現在のノード prev の「次」が存在する間、ループを続けます。",
    "code": "   1  prev <- listHead\n   2  <span class=\"while\">while (prev.next が [  1  ])</span>\n   3     prev <- prev.next\n   4  <span class=\"while\">endwhile</span>",
    "choices": [
      "未定義でない",
      "未定義",
      "curr と等しい",
      "listHead と等しい"
    ],
    "specific_explanation": "1. 先頭（Head）からのスタート\n   <span class=\"italic\">listHead</span> から開始し、次々にノードを辿ります。\n\n2. ループの終了条件\n   <span class=\"italic\">prev.next</span> が <span class=\"italic\">未定義</span> になったとき、その <span class=\"italic\">prev</span> こそが現在の末尾です。よって、「未定義でない」間、次へと進みます。\n   <div class=\"important\">while (prev.next が 未定義でない)</div>"
  },
  {
    "id": 149,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "リストの走査（辿り）",
    "text": "ポインタを次のノードへ進める処理です。空欄 [  1  ] に入る適切な代入式を選んでください。",
    "example": "prev を「現在の prev の次にあるノード」に更新します。",
    "code": "   1  <span class=\"while\">while (prev.next が 未定義でない)</span>\n   2     [  1  ]\n   3  <span class=\"while\">endwhile</span>",
    "choices": [
      "prev <- prev.next",
      "prev <- listHead",
      "prev <- curr",
      "prev.next <- prev"
    ],
    "specific_explanation": "1. 先頭（Head）からのスタート\n   連結リストを辿るには、現在のノードが持っている「次のノードのアドレス」を自分自身の変数に上書きします。\n\n2. ループの終了条件\n   この更新を繰り返すことで、芋づる式に末尾まで到達することが可能になります。\n   <div class=\"important\">prev <- prev.next</div>"
  },
  {
    "id": 150,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "リストの走査（辿り）",
    "text": "リストの探索を開始する場所を設定します。空欄 [  1  ] に入る変数を選んでください。",
    "example": "必ずリストの「一番最初」から順番に辿らなければなりません。",
    "code": "   1  <span class=\"if\">if (listHead が 未定義でない)</span>\n   2     prev <- [  1  ]\n   3     <span class=\"while\">while (prev.next が 未定義でない)</span>\n   4        prev <- prev.next\n   5     <span class=\"while\">endwhile</span>\n   6  <span class=\"if\">endif</span>",
    "choices": [
      "listHead",
      "curr",
      "qVal",
      "undefined"
    ],
    "specific_explanation": "1. 先頭（Head）からのスタート\n   単方向リストでは、末尾を探すために必ず先頭ポインタである <span class=\"italic\">listHead</span> から探索を開始する必要があります。\n\n2. ループの終了条件\n   最初の一歩を <span class=\"italic\">listHead</span> に固定することで、リスト全体を走査できるようになります。\n   <div class=\"important\">prev <- listHead</div>"
  },
  // 32問目
  {
    "id": 151,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "全件比較と更新",
    "text": "降順に並んだ2つの配列を比較し、より大きい方の値を新しい配列 arrayC に格納する処理です。空欄 [ a ] に入る適切な条件式を選んでください。",
    "example": "arrayA[idxA] = 71, arrayB[idxB] = 94 のとき：94 を優先して格納する",
    "code": "   1  <span class=\"while\">while (idxC <= (numA + numB))</span>\n   2     <span class=\"if\">if ((idxA <= numA) and (idxB <= numB))</span>\n   3        <span class=\"if\">if ([  a  ])</span>\n   4           arrayC[idxC] <- arrayA[idxA]\n   5           idxA <- idxA + 1\n   6        <span class=\"if\">else</span>\n   7           arrayC[idxC] <- arrayB[idxB]\n   8           idxB <- idxB + 1\n   9        <span class=\"if\">endif</span>\n  10     <span class=\"if\">endif</span>\n  11  <span class=\"while\">endwhile</span>",
    "choices": [
      "arrayA[idxA] > arrayB[idxB]",
      "arrayA[idxA] < arrayB[idxB]",
      "idxA > idxB",
      "numA > numB"
    ],
    "specific_explanation": "1. 全件比較と更新\n   マージ後の配列を「降順」にするためには、比較している2つの要素のうち「大きい方」を先に格納する必要があります。\n\n2. 規則性の発見\n   <div class=\"important\">arrayA[idxA] > arrayB[idxB]</div>\n   が真であれば A の方が大きいため、A の値を採用します。偽（B の方が大きいか等しい）であれば <span class=\"if\">else</span> 側の B を採用するロジックになります。"
  },
  {
    "id": 152,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "全件比較と更新",
    "text": "比較の結果、配列Bの要素を arrayC に格納した際、次に行うべき添え字の更新処理として適切なものを選んでください。",
    "example": "arrayB[1] を使い終わったら、次は arrayB[2] を比較対象にする",
    "code": "   1  <span class=\"if\">if (arrayA[idxA] > arrayB[idxB])</span>\n   2     arrayC[idxC] <- arrayA[idxA]\n   3     idxA <- idxA + 1\n   4  <span class=\"if\">else</span>\n   5     arrayC[idxC] <- arrayB[idxB]\n   6     [  1  ]\n   7  <span class=\"if\">endif</span>",
    "choices": [
      "idxB <- idxB + 1",
      "idxB <- idxB - 1",
      "idxA <- idxA + 1",
      "idxC <- idxC - 1"
    ],
    "specific_explanation": "1. 全件比較と更新\n   値を一つ取り出した配列は、次の比較に備えて参照位置を一つ進める必要があります。\n\n2. ずれの調整\n   ここでは配列Bの値を採用しているため、B用のインデックスである <span class=\"italic\">idxB</span> を加算します。\n   <div class=\"important\">idxB <- idxB + 1</div>"
  },
  {
    "id": 153,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "全件比較と更新",
    "text": "マージ処理において、2つの配列から選ばれた値を新配列 arrayC の正しい位置に格納し、次の位置へ進める処理です。空欄 a と b に入る組み合わせを選んでください。",
    "example": "idxC は 1 から始まり、値を1つ入れるごとに 1 ずつ増える",
    "code": "   1  /* 値の選択処理（省略） */\n   2  [  a  ] <- 選択された値\n   3  /* 選択された側の添え字更新（省略） */\n   4  [  b  ]",
    "choices": [
      "a: arrayC[idxC]\nb: idxC <- idxC + 1",
      "a: arrayC[idxA]\nb: idxC <- idxC + 1",
      "a: arrayC[idxC]\nb: idxC <- idxA + idxB",
      "a: arrayC[idxB]\nb: idxC <- idxC + 1"
    ],
    "specific_explanation": "1. 初期値の暫定設定\n   マージ先の配列 <span class=\"italic\">arrayC</span> は、現在の書き込み位置を示す専用の添え字 <span class=\"italic\">idxC</span> を使用します。\n\n2. 全件比較と更新\n   値を格納した後は、必ず <span class=\"italic\">idxC</span> を更新して次の格納に備えます。\n   <div class=\"important\">a: arrayC[idxC]\nb: idxC <- idxC + 1</div>"
  },
  {
    "id": 154,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "2つの配列（要素数 numA, numB）をすべてマージし終わるまでループを継続します。空欄 [  1  ] に入る条件式を選んでください。",
    "example": "numA=4, numB=5 のとき、マージ後の配列には合計何個の要素が入りますか。idxC はいくつまで進むべきでしょうか。",
    "code": "01  整数型: numA, numB, idxC ← 1\n02  <span class=\"while\">while ([  1  ])</span>\n03     /* 比較とマージ処理 */\n04     idxC ← idxC + 1\n05  <span class=\"while\">endwhile</span>",
    "choices": [
      "idxC ≤ (numA + numB)",
      "idxC < (numA + numB)",
      "idxC ≤ numA",
      "idxC ≤ numB"
    ],
    "specific_explanation": "1. 変数の変化\n   ループ内で idxC は 1 ずつ増えていきます。マージ後の配列の総要素数は、元の 2 つの配列の要素数の合計（numA + numB）となります。\n\n2. 無限ループ回避\n   idxC がこの合計値に達するまで処理を続ける必要があります。\n   <div class=\"important\">idxC ≤ (numA + numB)</div>"
  },
  {
    "id": 155,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "異常系の考慮",
    "text": "片方の配列を使い切った後、もう片方の配列に残っている要素をそのままコピーする処理です。空欄 [ b ] に入る、配列Aに残りがあるかを確認する条件式を選んでください。",
    "example": "arrayB を使い切った（idxB > numB）後、arrayA の残りを処理する場面です。その条件式が elseif に来るとき、何を確認すればよいか考えてみましょう。",
    "code": "01  <span class=\"while\">while (idxC ≤ (numA + numB))</span>\n02     <span class=\"if\">if ((idxA ≤ numA) and (idxB ≤ numB))</span>\n03        /* 比較処理 */\n04     <span class=\"if\">elseif ([  b  ])</span>\n05        arrayC[idxC] ← arrayA[idxA]\n06        idxA ← idxA + 1\n07     <span class=\"if\">else</span>\n08        arrayC[idxC] ← arrayB[idxB]\n09        idxB ← idxB + 1\n10     <span class=\"if\">endif</span>\n11     idxC ← idxC + 1\n12  <span class=\"while\">endwhile</span>",
    "choices": [
      "idxA ≤ numA",
      "idxA > numA",
      "idxB ≤ numB",
      "idxA = idxB"
    ],
    "specific_explanation": "1. 異常系の考慮\n   2行目の if で「両方に残りがある場合」を処理しているため、4行目の elseif に到達するのは「どちらかが空」になったときです。\n\n2. 変数の変化\n   ここで配列Aから値を取り出すためには、Aにまだ要素が残っている（現在の添え字が要素数以下）ことを確認しなければなりません。\n   <div class=\"important\">idxA ≤ numA</div>"
  },
  {
    "id": 156,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "マージプログラム全体の制御構造として適切な組み合わせを選んでください。",
    "example": "外側の while 条件は「全体の処理が終わるまで」、内側の elseif 条件は「配列 A の残りがある場合」に対応します。それぞれ何を見ればよいか考えてみましょう。",
    "code": "01  整数型: idxC, idxA, idxB\n02  <span class=\"while\">while ([  a  ])</span>\n03     <span class=\"if\">if (両方の配列に要素あり)</span>\n04        /* 比較処理 */\n05     <span class=\"if\">elseif ([  b  ])</span>\n06        /* A の残りをコピー */\n07     <span class=\"if\">else</span>\n08        /* B の残りをコピー */\n09     <span class=\"if\">endif</span>\n10  <span class=\"while\">endwhile</span>",
    "choices": [
      "a: idxC ≤ (numA + numB)\nb: idxA ≤ numA",
      "a: idxC < (numA + numB)\nb: idxA < numA",
      "a: idxA ≤ numA\nb: idxC ≤ (numA + numB)",
      "a: idxB ≤ numB\nb: idxA ≤ numA"
    ],
    "specific_explanation": "1. 無限ループ回避\n   外側の while 文は、全要素数分だけ繰り返すよう idxC で制御します。\n\n2. 異常系の考慮\n   内側の分岐では、インデックスが範囲内（≤ 要素数）にあるかどうかで、取り出すべき配列を決定します。\n   <div class=\"important\">a: idxC ≤ (numA + numB)\nb: idxA ≤ numA</div>"
  },
  // 33問目
  {
    "id": 157,
    "category": "定番アルゴリズム系",
    "theme": "探索",
    "subtheme": "線形探索",
    "text": "番兵法を用いた探索において、配列の範囲外チェック（i <= n）を省略して高速化を図るための、ループ継続条件を選んでください。",
    "example": "array[i] が 探している値 num と一致した瞬間にループを終了します。",
    "code": "01  sentinelSearch(整数型の配列: array, 整数型: n, 整数型: num)\n02  array[n + 1] = num  /* 番兵の設置 */\n03  整数型: i = 1\n04  <span class=\"while\">while ([  1  ])</span>\n05     i = i + 1\n06  <span class=\"while\">endwhile</span>",
    "choices": ["array[i] != num", "array[i] == num", "i <= n", "i != n + 1"],
    "specific_explanation": "1. 先頭からチェック\n   配列の先頭から1つずつ num と比較します。番兵法では末尾に必ず num が存在するため、インデックスが範囲を超えないかの判定（i <= n）を省略できます。\n\n2. 見つかったら即終了\n   「目的の値が見つからない間」は次へ進むという論理にするため、一致しない（!=）を継続条件にします。\n   <div class=\"important\">while (array[i] != num)</div>"
  },
  {
    "id": 158,
    "category": "定番アルゴリズム系",
    "theme": "探索",
    "subtheme": "線形探索",
    "text": "番兵法でループが終了した後、値が「元のデータ範囲内」で見つかったのか、それとも「番兵（末尾の隣）」で見つかったのかを判定する条件式を選んでください。",
    "example": "n = 5 のとき、i = 6 で停止したなら、それはデータの中には存在しなかった（番兵にぶつかった）ことを意味します。",
    "code": "01  /* while ループ終了後 */\n02  <span class=\"if\">if ([  1  ])</span>\n03     return i  /* 見つかった位置を返す */\n04  <span class=\"else\">else</span>\n05     return -1 /* 存在しなかった */\n06  <span class=\"endif\">endif</span>",
    "choices": ["i <= n", "i > n", "i == n + 1", "array[i] != num"],
    "specific_explanation": "1. 見つかったら即終了\n   ループが止まった位置 i が、元のデータ件数 n の範囲内であれば、番兵に辿り着く前に自力で値を見つけたことになります。\n\n2. 先頭からチェック\n   i が n を超えてしまった場合は、あらかじめ置いておいた番兵によってループが止まっただけなので、探索失敗と判断します。\n   <div class=\"important\">if (i <= n)</div>"
  },
  {
    "id": 159,
    "category": "定番アルゴリズム系",
    "theme": "探索",
    "subtheme": "線形探索",
    "text": "探索中に配列の範囲を超えてエラーになるのを防ぐため、データの末尾（n）の直後にあらかじめ目的の値を書き込んでおく「番兵」の処理として適切なものを選んでください。",
    "example": "配列 array のサイズは n + 1 以上の容量があるものとします。",
    "code": "01  sentinelSearch(整数型の配列: array, 整数型: n, 整数型: num)\n02  [  1  ]\n03  整数型: i = 1\n04  <span class=\"while\">while (array[i] != num)</span>\n05     i = i + 1\n06  <span class=\"while\">endwhile</span>",
    "choices": ["array[n + 1] = num", "array[n] = num", "array[0] = num", "array[i] = num"],
    "specific_explanation": "1. 先頭からチェック\n   番兵法（Sentinel Search）の最大の特徴は、データの終端（n番目）のさらに一つ先（n + 1番目）に、あえて探索対象と同じ値を置くことです。\n\n2. 見つかったら即終了\n   これにより、どんなにデータが多くても「いつかは必ず num に出会う」ことが保証され、ループ内での境界チェックを省くことができます。\n   <div class=\"important\">array[n + 1] = num</div>"
  },
  {
    "id": 160,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "探索中に、チェックする添え字を次に進める処理です。空欄 [  1  ] に入る適切な式を選んでください。",
    "example": "i = 1 のチェックが終わったら次は i = 2 を調べます。更新しないとどうなるか考えてみましょう。",
    "code": "01  整数型の配列: array\n02  整数型: i, num\n03  i ← 1\n04  <span class=\"while\">while (array[i] が num と等しくない)</span>\n05     [  1  ]\n06  <span class=\"while\">endwhile</span>",
    "choices": [
      "i ← i + 1",
      "i ← i - 1",
      "i ← n + 1",
      "i ← num"
    ],
    "specific_explanation": "1. 変数の変化\n   while ループ内で条件式に使われている変数 i を更新しないと、同じ場所を調べ続けて無限ループになってしまいます。\n\n2. 無限ループ回避\n   1 つずつ順番に後ろの要素を調べるため、インデックスを 1 加算します。\n   <div class=\"important\">i ← i + 1</div>"
  },
  {
    "id": 161,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "異常系の考慮",
    "text": "番兵法を用いることで、通常の線形探索と比較して簡略化できる部分はどこか、正しい組み合わせを選んでください。",
    "example": "通常の探索では継続条件が 2 つ必要でしたが、番兵法ではどちらが不要になるか考えてみましょう。",
    "code": "01  整数型の配列: array\n02  整数型: i ← 1\n03  <span class=\"while\">while (array[i] が num と等しくない)</span>\n04     i ← i + 1\n05  <span class=\"while\">endwhile</span>",
    "choices": [
      "継続条件から「i が n 以下であるか」の判定を削除できる",
      "継続条件から「array[i] が num と等しいか」の判定を削除できる",
      "初期化処理から「i ← 1」を削除できる",
      "終了後の if 文を削除できる"
    ],
    "specific_explanation": "1. 異常系の考慮\n   通常の線形探索では、値が見つからない場合にインデックスが配列の範囲を超えないようガード条件（i ≤ n）が必要です。\n\n2. 変数の変化\n   番兵を置くことで「必ず見つかる」ことが保証されるため、範囲チェックを省略しても安全にループが終了します。\n   <div class=\"important\">インデックスの境界判定を省略できる</div>"
  },
  {
    "id": 162,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "探索を開始するインデックス i の初期値と、ループ内で次の要素へ進む処理の組み合わせとして適切なものを選んでください。",
    "example": "配列の 1 番目から順に最後まで辿ります。番兵の位置まで確実に到達するにはどんな初期値と更新式が必要でしょうか。",
    "code": "01  整数型の配列: array\n02  整数型: i, num\n03  [  a  ]\n04  <span class=\"while\">while (array[i] が num と等しくない)</span>\n05     [  b  ]\n06  <span class=\"while\">endwhile</span>",
    "choices": [
      "a: i ← 1\nb: i ← i + 1",
      "a: i ← 0\nb: i ← i + 1",
      "a: i ← 1\nb: i ← n + 1",
      "a: i ← n\nb: i ← i - 1"
    ],
    "specific_explanation": "1. 変数の変化\n   探索は配列の先頭インデックス（本問題の仕様では 1）から開始します。\n\n2. 無限ループ回避\n   ループが回るたびにインデックスを 1 増やすことで、末尾にある番兵に向かって確実に変数が変化していきます。\n   <div class=\"important\">a: i ← 1\nb: i ← i + 1</div>"
  },
  // 34問目
  {
    "id": 163,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "ノードの挿入と削除",
    "text": "新しい要素をリストの適切な位置に挿入するため、新ノード work を生成します。このとき、新ノードの「次」が挿入位置のノード curr を指すように設定する処理を選んでください。",
    "example": "num = 4 を、3 と 5 の間に挿入する場合、4 の次は 5 (curr) を指すようにする",
    "code": "   1  insertElement(整数型: num)\n   2  /* 挿入位置の探索終了後 */\n   3  work <- [  1  ]\n   4  <span class=\"if\">if (curr が top と等しい)</span>\n   5     top <- work\n   6  <span class=\"if\">else</span>\n   7     prev.next <- work\n   8  <span class=\"if\">endif</span>",
    "choices": [
      "Element(num, curr)",
      "Element(num, prev)",
      "Element(curr, num)",
      "Element(num, curr.next)"
    ],
    "specific_explanation": "1. 代入の順番\n   新しいノードを作成する際、その「次の要素への参照」として現在見つけている <span class=\"italic\">curr</span> を指定します。これにより、新ノードがリストの後半部分と正しく繋がります。\n\n2. ポインタ（Next）の書き換え\n   鎖が途切れないよう、コンストラクタで「自分の次は誰か」を確定させてから、前のノード（または先頭ポインタ）を自分に向け直します。\n   <div class=\"important\">work <- Element(num, curr)</div>"
  },
  {
    "id": 164,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "ノードの挿入と削除",
    "text": "探索の結果、リストの「先頭」に要素を挿入する必要があると判断されました。このとき、リストの管理ポインタ top を更新する適切な処理を選んでください。",
    "example": "curr が top のまま動かなかった場合、新ノードが新たな先頭になる",
    "code": "   1  /* 挿入位置の探索終了後 */\n   2  work <- Element(num, curr)\n   3  <span class=\"if\">if (curr が top と等しい)</span>\n   4     [  1  ]\n   5  <span class=\"if\">else</span>\n   6     prev.next <- work\n   7  <span class=\"if\">endif</span>",
    "choices": [
      "top <- work",
      "top <- curr",
      "top <- prev",
      "top.next <- work"
    ],
    "specific_explanation": "1. ポインタ（Next）の書き換え\n   リストの先頭に挿入する場合、リスト全体を管理する起点である <span class=\"italic\">top</span> 自体を、新しいノード <span class=\"italic\">work</span> を指すように書き換える必要があります。\n\n2. 代入の順番\n   先に <span class=\"italic\">work</span> の次は <span class=\"italic\">curr</span> だと決まっているため、<span class=\"italic\">top</span> を更新しても既存のリスト構造は失われません。\n   <div class=\"important\">top <- work</div>"
  },
  {
    "id": 165,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "ノードの挿入と削除",
    "text": "リストの途中または末尾に要素を挿入します。直前のノード prev と新ノード work を繋ぐための適切な処理を選んでください。",
    "example": "prev → curr の間に work を入れ、prev → work → curr という鎖にする",
    "code": "   1  /* 挿入位置の探索終了後 */\n   2  work <- Element(num, curr)\n   3  <span class=\"if\">if (curr が top と等しい)</span>\n   4     top <- work\n   5  <span class=\"if\">else</span>\n   6     [  1  ]\n   7  <span class=\"if\">endif</span>",
    "choices": [
      "prev.next <- work",
      "curr.next <- work",
      "work.next <- prev",
      "prev <- work"
    ],
    "specific_explanation": "1. ポインタ（Next）の書き換え\n   リストの途中に挿入する場合、直前のノード <span class=\"italic\">prev</span> が指していた先（旧 <span class=\"italic\">curr</span>）を、新しいノード <span class=\"italic\">work</span> に向け直します。\n\n2. 代入の順番\n   <span class=\"italic\">work.next</span> が既に <span class=\"italic\">curr</span> を指しているため、<span class=\"italic\">prev.next</span> を書き換えるだけで一本の鎖として繋がります。\n   <div class=\"important\">prev.next <- work</div>"
  },
  {
    "id": 166,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "リストの走査（辿り）",
    "text": "昇順（小さい順）に並んでいるリストの中から、引数 num を挿入すべき位置を探します。ループを継続する条件 [ a ] として適切なものを選んでください。",
    "example": "num = 10 のとき、現在の値が 10 より「小さい」間は次へと進む",
    "code": "   1  curr <- top\n   2  <span class=\"while\">while ((curr が 未定義でない) and ([  a  ]))</span>\n   3     prev <- curr\n   4     curr <- curr.next\n   5  <span class=\"while\">endwhile</span>",
    "choices": [
      "curr.val < num",
      "curr.val > num",
      "curr.val == num",
      "prev.val < num"
    ],
    "specific_explanation": "1. ループの終了条件\n   昇順を維持して挿入するためには、「自分以上の値」が見つかるまでリストを辿る必要があります。したがって、現在の値が <span class=\"italic\">num</span> より「小さい」間はループを継続します。\n\n2. リストの走査（辿り）\n   この条件が偽になった場所（自分以上の値が見つかった場所）の直前に挿入することで、並び順が保たれます。\n   <div class=\"important\">while (... and (curr.val < num))</div>"
  },
  {
    "id": 167,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "リストの走査（辿り）",
    "text": "ポインタを次のノードへ進める処理です。1つ前の位置を保持しながら次へ進むための、空欄 [  1  ] に入る適切な処理を選んでください。",
    "example": "curr を「今の curr の次」に更新し、移動前の場所を prev に残す",
    "code": "   1  <span class=\"while\">while (探索継続)</span>\n   2     prev <- curr\n   3     [  1  ]\n   4  <span class=\"while\">endwhile</span>",
    "choices": [
      "curr <- curr.next",
      "curr <- prev.next",
      "curr <- top",
      "curr <- work"
    ],
    "specific_explanation": "1. リストの走査（辿り）\n   単方向連結リストでは、各ノードが持つ <span class=\"italic\">next</span>（次のインスタンスへの参照）を辿ることで順次アクセスを行います。\n\n2. ポインタ（Next）の書き換え\n   （応用）移動する前に <span class=\"italic\">prev <- curr</span> としておくことで、挿入時に必要な「1つ前のノード」を見失わないようにしています。\n   <div class=\"important\">curr <- curr.next</div>"
  },
  {
    "id": 168,
    "category": "データ構造",
    "theme": "連結リスト",
    "subtheme": "リストの走査（辿り）",
    "text": "探索の初期設定として、空欄 [ a ] と、新ノード生成処理 [ b ] の組み合わせを選んでください。",
    "example": "先頭から探索を始め、挿入位置が決まったら新ノードを作る",
    "code": "   1  [  a  ]\n   2  <span class=\"while\">while (探索条件)</span>\n   3     /* 走査 */\n   4  <span class=\"while\">endwhile</span>\n   5  work <- [  b  ]",
    "choices": [
      "a: curr <- top\nb: Element(num, curr)",
      "a: curr <- 未定義\nb: Element(num, curr)",
      "a: curr <- top\nb: Element(num, prev)",
      "a: curr <- 未定義\nb: Element(num, prev)"
    ],
    "specific_explanation": "1. 先頭（Head）からのスタート\n   リスト内のどこに挿入すべきかを判断するため、必ずリストの起点である <span class=\"italic\">top</span> から探索を開始します。\n\n2. 代入の順番\n   探索が止まった位置 <span class=\"italic\">curr</span> を「自分の次」として持つノードを生成することで、挿入準備が整います。\n   <div class=\"important\">a: curr <- top\nb: Element(num, curr)</div>"
  },
  // 35問目
  {
    "id": 169,
    "category": "データ構造",
    "theme": "キュー",
    "subtheme": "円環構造",
    "text": "ハッシュテーブルを環状（リングバッファ）として扱い、末尾に達した添え字を先頭に戻す処理です。空欄 [ a ] に入る適切な条件式を選んでください。",
    "example": "配列の要素数 n = 5 のとき、i = 5 になった瞬間に i = 0 へ戻します。",
    "code": "   1  <span class=\"while\">while ((i が hash と等しくない) and (pos が -1 と等しい))</span>\n   2     <span class=\"if\">if ([  a  ])</span>\n   3        i <- 0\n   4     <span class=\"if\">endif</span>\n   5     <span class=\"if\">if (ht[i] が 未定義)</span>\n   6        pos <- i\n   7     <span class=\"if\">endif</span>\n   8     i <- i + 1\n   9  <span class=\"while\">endwhile</span>",
    "choices": [
      "i が n と等しい",
      "i が n と等しくない",
      "i が hash と等しい",
      "i が 0 と等しい"
    ],
    "specific_explanation": "1. 剰余（%）による回り込み\n   （応用）このアルゴリズムでは、添え字 <span class=\"italic\">i</span> が配列の最大インデックス（<span class=\"italic\">n - 1</span>）を超えて <span class=\"italic\">n</span> に達したとき、手動で 0 にリセットすることで環状構造を実現しています。\n\n2. 空・満杯の特殊条件\n   配列の最後まで探索しても空きが見つからない場合、0 に戻って探索を継続させるためにこの境界判定が必要です。\n   <div class=\"important\">if (i == n)</div>"
  },
  {
    "id": 170,
    "category": "データ構造",
    "theme": "キュー",
    "subtheme": "円環構造",
    "text": "固定長配列を用いたキューで、次にデータを格納する位置（Tail）を更新します。配列の末尾に達した際に先頭（0）に戻るための適切な処理はどれですか。なお、size は配列の要素数とします。",
    "example": "size = 5, Tail = 4 のとき → 実行後の Tail: 0",
    "code": "01  updateTail(整数型: Tail, 整数型: size)\n02  Tail = [  1  ]\n03  return Tail",
    "choices": ["(Tail + 1) % size", "Tail + 1", "(Tail + 1) / size", "Tail % (size - 1)"],
    "specific_explanation": "1. 剰余（%）による回り込み\n   ポインタが配列の末尾に達した時、次に 1 を足すだけでは範囲外になってしまいます。要素数 size で割った余り（%）を計算することで、size に達した瞬間に計算結果が 0 にリセットされます。\n   <div class=\"important\">Tail = (Tail + 1) % size</div>\n\n2. 範囲内に収める\n   この計算式を使うことで、if文による条件分岐を使わずに、値を常に 0 から size - 1 の範囲内に閉じ込めることができます。"
  },
  {
    "id": 171,
    "category": "データ構造",
    "theme": "キュー",
    "subtheme": "円環構造",
    "text": "リングバッファにおいて、キューが「空」であるか「満杯」であるかを判定するフラグの動きを考えます。データを一つ取り出す（Deq）際、空欄 [  a  ] に入れるべき処理はどれですか。",
    "example": "データを取り出した後、キューが空なら isFull フラグは必ず false になる",
    "code": "01  deq(整数型の配列: queue)\n02  <span class=\"if\">if (isEmpty == true)</span>\n03     return \"エラー：空です\"\n04  <span class=\"if\">endif</span>\n05  /* データ取り出し処理 */\n06  Head = (Head + 1) % size\n07  [  a  ]\n08  return value",
    "choices": ["isFull = false", "isFull = true", "isEmpty = true", "isEmpty = false"],
    "specific_explanation": "1. 空・満杯の特殊条件\n   リングバッファでは、Head と Tail が重なっただけでは「空」か「満杯」か区別できません。そのため、フラグを用いて状態を管理します。\n\n2. 状態の更新\n   データを一つ取り出した（Deq）直後は、少なくとも配列内に「1つ以上の空き」が確実に発生します。したがって、満杯フラグ（isFull）を false に更新するのが適切です。\n   <div class=\"important\">isFull = false</div>"
  },
  {
    "id": 172,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "ハッシュ法において、キー値（key）から格納位置（hash）を決定します。要素数 11 のハッシュテーブルにおいて、key = 25 の時の格納位置を求めてください。",
    "example": "key = 15, size = 11 のとき → 15 % 11 = 4",
    "code": "01  getHash(整数型: key)\n02  整数型: size = 11\n03  整数型: hash\n04  hash = [  1  ]\n05  return hash",
    "choices": ["key % size", "key / size", "size % key", "key - size"],
    "specific_explanation": "1. 範囲内に収める\n   ハッシュテーブルのサイズ size でキー値を割った「余り（mod）」を計算します。これにより、どんな数値も 0 〜 10 のインデックスに変換されます。\n   <div class=\"important\">25 % 11 = 3</div>\n\n2. リセット処理\n   周期的な数値変換を行うことで、限られたメモリ範囲内にデータを分散させて格納することが可能になります。"
  },
  {
    "id": 173,
    "category": "データ構造",
    "theme": "キュー",
    "subtheme": "円環構造",
    "text": "探索インデックス i が、配列を一周して開始地点 hash に戻ったかどうかを判定するループ条件です。空欄 [  1  ] に入る条件式として適切なものを選んでください。",
    "example": "i が hash と同じ位置に来たら、全要素を調べ終えたのでループを抜ける",
    "code": "01  searchTable(整数型: hash)\n02  整数型: i = (hash + 1) % size\n03  <span class=\"while\">while ([  1  ])</span>\n04     /* 探索処理 */\n05     i = (i + 1) % size\n06  <span class=\"while\">endwhile</span>",
    "choices": ["i != hash", "i == hash", "i < size", "i != 0"],
    "specific_explanation": "1. 空・満杯の特殊条件\n   探索が一周したことを検知するには、「現在の位置 i が、開始位置 hash に戻っていないこと」を継続条件にします。i が hash に等しくなった瞬間に while ループが終了します。\n\n2. 周期的なインデックス\n   <div class=\"important\">while (i != hash)</div>\n   これによって、すべての要素を重複なく一度ずつチェックする「環状の探索」が実現できます。"
  },
  {
    "id": 174,
    "category": "数値計算系",
    "theme": "剰余演算",
    "subtheme": "周期的なインデックス",
    "text": "5つのランプ（0〜4番）が順番に点灯するプログラムです。現在のランプ番号 L を次の番号に進める処理として、if文を使わずに記述したものはどれですか。",
    "example": "L = 4 のとき、次は L = 0 に戻る",
    "code": "01  nextLamp(整数型: L)\n02  L = [  1  ]\n03  return L",
    "choices": ["(L + 1) % 5", "(L + 1) % 4", "L + 1 / 5", "L % 5 + 1"],
    "specific_explanation": "1. 範囲内に収める\n   「0, 1, 2, 3, 4, 0, 1...」という周期的な動きは、剰余演算の得意分野です。要素数である「5」で割った余りを取ることで、4の次は 5 % 5 = 0 となり、周期性が生まれます。\n   <div class=\"important\">L = (L + 1) % 5</div>\n\n2. リセット処理\n   (L + 1) を行うことで値を進め、% 5 を行うことで上限に達した際のリセット（0への回帰）を同時に行っています。"
  },
  // 36問目
  // 37問目
  // 38問目
  // 39問目
  // 40問目
  // 41問目
  // 42問目
  // 43問目
  // 44問目
  // 45問目
  // 46問目
  // 47問目
  // 48問目
  // 49問目
  // 50問目
  {
    "id": 175,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "年齢が「9歳以下」であることを判定する適切な条件式を選んでください。この条件は「9歳を含む」必要があります。",
    "example": "age = 9 のとき、条件式の結果が true になる演算子はどれかを確認してみましょう。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if ([  1  ])</span>\n03     ret ← 300\n04  <span class=\"if\">endif</span>",
    "choices": ["age ≤ 9", "age < 9", "age < 10", "age ≤ 10"],
    "specific_explanation": "1. 境界の特定\n   基準となる数値は「9」歳です。\n\n2. 含むか含まないか\n   「以下」はその数値自体を含みます。9歳ちょうども条件を満たす必要があるため、「以下（≤）」が適切です。\n   <div class=\"important\">if (age ≤ 9)</div>"
  },
  {
    "id": 176,
    "category": "定番アルゴリズム系",
    "theme": "文字列処理",
    "subtheme": "文字列の逆順変換",
    "text": "配列の要素を逆順に並べ替える処理で、左端の添え字 left に対応する右端の添え字 right を求める式として正しいものを選んでください。なお、添え字は 1 から始まるとします。",
    "example": "要素数 5 のとき：left=1 なら right=5、left=2 なら right=4",
    "code": "1  reverse(整数型の配列: array)\n2  整数型: left, right, n\n3  n ← arrayの要素数\n4  <span class=\"for\">for (left を 1 から (n ÷ 2 の商) まで 1 ずつ増やす)</span>\n5     right ← [  1  ]\n6     // 入れ替え処理（省略）\n7  <span class=\"for\">endfor</span>",
    "choices": ["n - left + 1", "n - left", "n - left - 1", "left + (n ÷ 2)"],
    "specific_explanation": "1. 後ろから拾う\n   右端の添え字は、全体の要素数 n から現在の位置 left を引いた位置を基準にします。\n\n2. 真ん中で折り返す\n   添え字が 1 から始まる場合、left=1 のときに right=n となる必要があるため、-left した後に +1 して調整します。\n   <div class=\"important\">right ← n - left + 1</div>"
  },
  {
    "id": 177,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "配列 array の left 番目と right 番目の要素を入れ替える処理です。空欄 a, b に入る正しい組み合わせを選んでください。",
    "example": "array = [10, 20], left=0, right=1 のとき\n処理後: array = [20, 10]",
    "code": "1  swap(整数型[]: array, 整数型: left, 整数型: right)\n2    整数型: tmp\n3    tmp ← array[left]\n4    array[left] ← [  a  ]\n5    array[right] ← [  b  ]",
    "choices": [
      "a: array[right]\nb: tmp",
      "a: array[right]\nb: array[left]",
      "a: tmp\nb: array[right]",
      "a: array[left]\nb: tmp"
    ],
    "specific_explanation": "1. 退避用変数の利用\n   値を上書きすると元の値が消えてしまうため、最初に array[left] の値を一時変数 tmp に保存しておきます。\n\n2. 三段階の代入\n   まず、空いた array[left] に array[right] の値をコピーします。最後に、保存しておいた tmp の値を array[right] に戻すことで入れ替えが完了します。\n   <div class=\"important\">array[left] ← array[right]\narray[right] ← tmp</div>"
  },
  {
    "id": 178,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "配列を逆順にする際、ループの終了値を「要素数 ÷ 2 の商」とする理由として適切なものを選んでください。",
    "example": "要素数 4 の配列で、1番目から 4番目まで全ての要素を順に入れ替え続けた場合に何が起こるか考えてみましょう。",
    "code": "   01  整数型の配列: array\n   02  整数型: left, right, n, tmp\n   03  n ← arrayの要素数\n   04  <span class=\"for\">for (left を 1 から (n ÷ 2 の商) まで 1 ずつ増やす)</span>\n   05     right ← n - left + 1\n   06     // array[left] と array[right] の入れ替え処理\n   07  <span class=\"for\">endfor</span>",
    "choices": [
      "中央まで入れ替えれば完了であり、それ以上回すと入れ替えた要素が元に戻ってしまうから",
      "要素数が奇数の場合、中央の要素を入れ替えるとエラーになるから",
      "配列の添え字が 1 から始まる場合、末尾の要素は計算対象外になるから",
      "計算量を半分に抑えることがアルゴリズムの必須要件であるから"
    ],
    "specific_explanation": "1. 開始と終了の数値\n逆順処理は「左端と右端」をペアで入れ替えるため、中央（n ÷ 2）に到達した時点で全ての要素の移動が完了します。これを超えてループを継続すると、一度入れ替えたペアを再び入れ替えてしまい、結果として元の順序に戻ってしまいます。\n\n\n<div class=\"important\">中央で止めることで、ちょうど 1 回ずつ入れ替えが行われます</div>"
  },
  {
    "id": 179,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "年齢(age)に応じて入場料(ret)を決定するプログラムです。「4歳から9歳までは300円」という条件を正しく判定するための空欄 [  1  ] に入る条件式を選んでください。なお、0〜3歳(100円)の判定は既に済んでいるものとします。",
    "example": "age = 9 のとき、3歳以下の条件は既に除外されています。9歳が 300円 になるには、どのような上限値を指定すればよいでしょうか。",
    "code": "01  fee(整数型: age)\n02  整数型: ret\n03  <span class=\"if\">if (age ≤ 3)</span>\n04     ret ← 100\n05  <span class=\"if\">elseif ([  1  ])</span>\n06     ret ← 300\n07  <span class=\"if\">else</span>\n08     ret ← 500\n09  <span class=\"if\">endif</span>\n10  return ret",
    "choices": ["age ≤ 9", "age < 9", "age ≥ 4", "age < 10"],
    "specific_explanation": "1. 境界の特定\n   基準となる数値は「9歳」です。問題文の「9歳まで」という表現から、9を境界として特定します。\n\n2. 含むか含まないか\n   「9歳まで」は9歳を含みます。既に3歳以下の判定が済んでいるため、ここでは上限の「9以下（≤ 9）」を判定すれば、自動的に4〜9歳の範囲が定まります。\n   <div class=\"important\">elseif (age ≤ 9)</div>"
  },
  {
    "id": 180,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "配列の要素を逆順にする処理です。left に対応する「右側の添え字」を算出する空欄 [  1  ] に入る式を選んでください。配列の添え字は 1 から始まります。",
    "example": "left = 1 のとき right = n、left = 2 のとき right = n - 1 になるような、n と left を使った計算式を導いてみましょう。",
    "code": "   01  整数型の配列: array\n   02  整数型: left, right, n, tmp\n   03  n ← arrayの要素数\n   04  <span class=\"for\">for (left を 1 から (n ÷ 2 の商) まで 1 ずつ増やす)</span>\n   05     right ← [  1  ]\n   06     tmp ← array[right]\n   07     array[right] ← array[left]\n   08     array[left] ← tmp\n   09  <span class=\"for\">endfor</span>",
    "choices": [
      "n - left + 1",
      "n - left",
      "n - left - 1",
      "left + (n ÷ 2)"
    ],
    "specific_explanation": "1. 規則性の発見\nペアとなる添え字の合計値（left + right）に着目します。1番目と n 番目なら合計は n + 1、2番目と n - 1 番目なら合計はやはり n + 1 となり、常に一定の規則性があることがわかります。\n\n\n2. ずれの調整\n「left + right = n + 1」という等式から求めたい right を導き出すと、right = n + 1 - left となります。添え字が 1 から始まる場合、単に n から引くだけでは値が 1 小さくなるため、調整が必要です。\n\n<div class=\"important\">right ← n - left + 1</div>"
  },
  {
    "id": 181,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "ベースケース",
    "text": "非負の整数 m の階乗を再帰的に計算する関数 Fact です。再帰呼び出しを終了し、値を確定させるための「ベースケース」となる空欄 [  b  ] の条件を選んでください。",
    "example": "0! = 1 と定義されています。再帰が止まるべき最小の入力値は何か考えてみましょう。",
    "code": "01  Fact(整数型: m)\n02  <span class=\"if\">if (m > 0)</span>\n03     return m × Fact(m - 1)\n04  <span class=\"if\">elseif ([    b    ])</span>\n05     return 1\n06  <span class=\"if\">else</span>\n07     return -1\n08  <span class=\"if\">endif</span>",
    "choices": ["m が 0 と等しい", "m が 1 と等しい", "m が 0 より小さい", "m が 1 以下"],
    "specific_explanation": "1. 最小単位の特定\n   階乗においてこれ以上分解できない最小の計算単位は 0! です。m が 0 に達したとき、再帰を止める必要があります。\n\n2. 戻り値の確定\n   引数が 0 のときに具体的な数値「1」を返すことで、無限ループを防ぎつつ正しい計算結果を確定させます。\n   <div class=\"important\">elseif (m = 0)</div>"
  },
  {
    "id": 182,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "配列の2つの要素を入れ替える（スワップ）処理を正しく行うため、一時変数 tmp を利用した代入操作を完成させてください。空欄 [  b  ] に入る変数を選んでください。",
    "example": "array[left]の内容を消さないようにtmpへ退避させる",
    "code": "01 // array[left] と array[right] を入れ替える\n02 整数型: tmp\n03 tmp ← array[right]\n04 array[right] ← array[left]\n05 [    b    ] ← tmp",
    "choices": ["array[left]", "array[right]", "left", "right"],
    "specific_explanation": "1. 退避用変数の利用\n   値を上書きする前に、一方の値を tmp に保存（退避）します。\n\n2. 三段階の代入\n   ① right を tmp へ、②空いた right へ left を、③最後に残った left へ tmp（元のright）を戻すことで、データが消えずに交換されます。\n   <div class=\"important\">array[left] ← tmp</div>"
  },
  {
    "id": 183,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "階乗の定義 n! = n × (n-1)! を、関数 Fact の中で再帰的に実装したいと考えています。空欄 [  a  ] に入る適切な式を選んでください。",
    "example": "Fact(3) の中で Fact(2) が呼ばれるとすると、その間にどんな掛け算が行われるか考えてみましょう。",
    "code": "01  Fact(整数型: m)\n02  <span class=\"if\">if (m > 0)</span>\n03     return [    a    ]\n04  <span class=\"if\">elseif (m = 0)</span>\n05     return 1\n06  <span class=\"if\">endif</span>",
    "choices": ["m × Fact(m - 1)", "(m - 1) × Fact(m)", "m × (m - 1)", "Fact(m - 1)"],
    "specific_explanation": "1. 一回り小さい形への変換\n   階乗の計算を「自分自身の値 × 自分より 1 小さい階乗」という形に分解します。\n\n2. 再帰呼び出し\n   引数を 1 つ減らして自分自身（Fact）を呼び出すことで、ドミノ倒しのように計算が連鎖します。\n   <div class=\"important\">return m × Fact(m - 1)</div>"
  },
  {
    "id": 184,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "入場料の判定において、空欄に入る最も適切な条件式を選んでください。なお、プログラムは上から順に判定されます。",
    "example": "elseif に到達した時点で age が 4 以上であることは確定しています。あとは何を判定すれば「4〜9歳」の範囲が定まるか考えてみましょう。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age ≤ 3)</span>\n03     ret ← 100\n04  <span class=\"if\">elseif ([      ])</span>\n05     ret ← 300\n06  <span class=\"if\">else</span>\n07     ret ← 500\n08  <span class=\"if\">endif</span>",
    "choices": ["age ≤ 9", "age < 9", "age ≥ 4", "(age ≥ 4) and (age ≤ 9)"],
    "specific_explanation": "1. 優先順位の確認\n   if で「3歳以下」が既に除外されているため、elseif に到達した時点で age は自動的に 4 以上であることが確定しています。\n\n2. 排他性チェック\n   したがって、上限の「9歳以下か」だけを判定すれば、自動的に「4〜9歳」の範囲を特定できます。\n   <div class=\"important\">elseif (age ≤ 9)</div>"
  },
  {
    "id": 185,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "入場料判定プログラムにおいて、10歳以上の客が来た場合に 500円が代入される仕組みとして正しい説明を選んでください。",
    "example": "age = 15 のとき、if と elseif の条件をひとつずつ確認してみましょう。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age ≤ 3)</span>\n03     ret ← 100\n04  <span class=\"if\">elseif (age ≤ 9)</span>\n05     ret ← 300\n06  <span class=\"if\">else</span>\n07     ret ← 500\n08  <span class=\"if\">endif</span>",
    "choices": [
      "全ての条件（3歳以下、9歳以下）に当てはまらない場合、else句が実行される",
      "age が 10 以上になると自動的に else の数値が加算される",
      "else は「それ以外」ではなく「最大値」を指定する命令だから",
      "elseif の条件が偽のとき、必ず else の中身が実行されるから"
    ],
    "specific_explanation": "1. 排他性チェック\n   多分岐構造では、上の条件から順に判定され、どれにも当てはまらなかった場合にのみ else ブロックが実行されます。\n\n2. 優先順位の確認\n   「3歳以下ではない」かつ「9歳以下ではない」という 2 条件の否定が重なった結果として「10歳以上」が確定し、else が実行されます。\n   <div class=\"important\">条件を外れた「残り全て」を else で処理する</div>"
  },
  {
    "id": 186,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "多分岐（elseif）において、年齢 10歳以上の料金（500円）が正しく適用される理由として適切なものはどれですか。",
    "example": "age = 10 のとき、最初の 2 つの条件が偽（false）になることを順番に確かめてみましょう。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age ≤ 3)</span>\n03     ret ← 100\n04  <span class=\"if\">elseif (age ≤ 9)</span>\n05     ret ← 300\n06  <span class=\"if\">else</span>\n07     ret ← 500\n08  <span class=\"if\">endif</span>",
    "choices": [
      "前の条件（3歳以下、9歳以下）のいずれにも該当しないため",
      "else句は常に「10以上」を意味する予約語だから",
      "プログラムの最後で必ず500が加算されるから",
      "10以上の数値が入力されたときにエラーを防ぐため"
    ],
    "specific_explanation": "1. 排他性チェック\n   多分岐構造では、ある条件に入ったとき他の条件は無視されます。逆に言えば、else に到達するのは「前のすべての条件が偽」だった場合のみです。\n\n2. 優先順位の確認\n   「3歳以下」でも「9歳以下」でもない（つまり10歳以上である）場合にのみ、else の処理が実行されます。\n   <div class=\"important\">どの条件式も真にならないとき、else 句が実行される</div>"
  },
  {
    "id": 187,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "複合条件",
    "text": "空欄 [  ] に「4歳から9歳まで」を厳密に指定する条件を入れる場合、適切な式はどれですか。なお、前の if 文は存在しないものと仮定します。",
    "example": "age = 4 のときも age = 9 のときも真になるためには、2 つの条件をどう組み合わせればよいか考えてみましょう。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if ([      ])</span>\n03     ret ← 300\n04  <span class=\"if\">endif</span>",
    "choices": [
      "(age ≥ 4) and (age ≤ 9)",
      "(age > 3) or (age < 10)",
      "(age ≥ 4) or (age ≤ 9)",
      "4 ≤ age ≤ 9"
    ],
    "specific_explanation": "1. ANDとOR\n   「AからBまで」という範囲を指定する場合、A以上「かつ」B以下である必要があるため、and を使用します。\n\n2. 短絡評価の意識\n   両方の条件が同時に成立しなければならないため、一方が欠けても成立する or では不適切です。\n   <div class=\"important\">(age ≥ 4) and (age ≤ 9)</div>"
  },
  {
    "id": 188,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "多分岐の論理",
    "text": "もし if と elseif の条件式を入れ替えて、最初に age ≤ 9 を判定するよう変更した場合、3歳の子供の料金はどうなりますか。",
    "example": "判定順序：(1) age ≤ 9 → (2) age ≤ 3 の順で進みます。age = 3 はどちらの条件を最初に満たすか考えてみましょう。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age ≤ 9)</span>\n03     ret ← 300\n04  <span class=\"if\">elseif (age ≤ 3)</span>\n05     ret ← 100\n06  <span class=\"if\">else</span>\n07     ret ← 500\n08  <span class=\"if\">endif</span>",
    "choices": ["300円になる", "100円になる", "エラーになる", "400円になる"],
    "specific_explanation": "1. 優先順位の確認\n   if 文は上から順に判定され、最初に真になったブロックだけが実行されます。\n\n2. 排他性チェック\n   3歳は age ≤ 9 を満たしてしまうため、本来の 100円の処理に到達する前に 300円が確定してしまいます。より「狭い条件」や「特殊なケース」を先に書くのが鉄則です。\n   <div class=\"important\">条件式は、より厳しい条件を先に書く必要がある</div>"
  },
  {
    "id": 189,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "「10歳以上は500円」というルールを if 文で直接書く場合、適切な比較演算子を選んでください。",
    "example": "age = 10 のとき条件が真(true)になり、age = 9 のとき偽(false)になる演算子はどれかを確認してみましょう。",
    "code": "01  整数型: age, ret\n02  <span class=\"if\">if (age [  1  ] 10)</span>\n03     ret ← 500\n04  <span class=\"if\">endif</span>",
    "choices": ["≥", ">", "=", "≤"],
    "specific_explanation": "1. 境界の特定\n   基準となる数値は「10」です。\n\n2. 含むか含まないか\n   「以上」はその数値自体を含みます。10歳も 500円の対象であるため、10 を含む「≥」が適切です。\n   <div class=\"important\">if (age ≥ 10)</div>"
  },
  {
    "id": 190,
    "category": "数値計算系",
    "theme": "n進法",
    "subtheme": "重み付けの累積",
    "text": "配列に格納されたn進数の各桁を、上位桁から順に10進数に変換するプログラムです。空欄[  b  ]に入れる適切な式を選んでください。",
    "example": "n=6, t[i]=2, ret=4 のとき → ret = 4 * 6 + 2 = 26",
    "code": "1  cardinal(整数型の配列: t, 整数型: m, 整数型: n)\n2  整数型: i, ret\n3  i ← 1\n4  ret ← 0\n5  <span class=\"while\">while ((ret ≠ -1) and (i ≤ m))</span>\n6     <span class=\"if\">if (t[i] < n)</span>\n7        ret ← [  b  ]\n8     <span class=\"if\">else</span>\n9        ret ← -1\n10    <span class=\"if\">endif</span>\n11    i ← i + 1\n12 <span class=\"while\">endwhile</span>\n13 return ret",
    "choices": ["ret * n + t[i]", "ret + t[i] * n", "(ret + t[i]) * n", "ret * t[i] + n"],
    "specific_explanation": "1. 重み付けの累積\n   現在の合計値 ret を「n倍」することで、これまでの数値を一つ上の桁にシフトさせます。\n\n2. 新しい桁の加算\n   空いた1の位に、現在の桁の数字 t[i] を足し合わせることで、上位桁からの累積計算が成立します。\n   <div class=\"important\">ret ← ret * n + t[i]</div>"
  },
  {
    "id": 191,
    "category": "数値計算系",
    "theme": "n進法",
    "subtheme": "各桁のバリデーション",
    "text": "n進数の各桁の値が適切であるかを判定する条件式を完成させてください。空欄[  a  ]に入る適切な字句を選んでください。",
    "example": "n=6 のとき、t[i]が 0～5 なら正常、6以上ならエラー",
    "code": "1  <span class=\"if\">if (t[i] [  a  ] n)</span>\n2     ret ← ret * n + t[i]\n3  <span class=\"if\">else</span>\n4     ret ← -1\n5  <span class=\"if\">endif</span>",
    "choices": ["より小さい", "以下", "より大きい", "以上"],
    "specific_explanation": "1. 基数との比較\n   n進法において、各桁の数字は必ず「基数n」よりも小さくなければなりません（例：2進法なら0か1のみ）。\n\n2. エラー判定\n   t[i] が n 以上の場合はn進数として成立しないため、エラー処理（else側）へ進める必要があります。\n   したがって、正常系の条件は「より小さい（<）」となります。\n   <div class=\"important\">if (t[i] < n)</div>"
  },
  {
    "id": 192,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "このプログラムのループが終了する条件として「不適切なもの」はどれですか。※ while 文の継続条件から逆算してください。",
    "example": "継続条件が and でつながれているとき、ループが終了するのはどんな場合か考えてみましょう。また、ret が 0 になることは終了条件になりますか。",
    "code": "01  整数型: ret, i, m\n02  <span class=\"while\">while ((ret ≠ -1) and (i ≤ m))</span>\n03     /* 処理 */\n04  <span class=\"while\">endwhile</span>",
    "choices": ["ret が 0 になったとき", "ret が -1 になったとき", "i が m を超えたとき", "エラーが発生したとき"],
    "specific_explanation": "1. 異常系の考慮\n   この while 文は and 条件であるため、どちらか一方が偽になった時点で終了します。\n\n2. 変数の変化\n   ret ≠ -1 が継続条件なので、その逆の ret = -1（エラー発生時）が終了条件です。また i ≤ m が継続条件なので、i > m（走査完了）も終了条件です。「ret が 0」は有効な計算途中の値であり、終了条件ではありません。\n   <div class=\"important\">終了条件：(ret = -1) or (i > m)</div>"
  },
  {
    "id": 193,
    "category": "定番アルゴリズム系",
    "theme": "集計とフラグ管理",
    "subtheme": "存在チェック",
    "text": "エラーが発生した際に、以降の計算を行わずにループを即座に抜けるための工夫として、このプログラムで「フラグ」の役割を果たしている変数はどれですか。",
    "example": "一度 -1 が代入されると、whileの条件式が偽になる",
    "code": "5  <span class=\"while\">while ((ret ≠ -1) and (i ≤ m))</span>\n9        ret ← -1",
    "choices": ["ret", "i", "m", "n"],
    "specific_explanation": "1. 初期状態の設定\n   ret は計算結果を保持する変数ですが、同時に「エラー未発生」を示すフラグとしても機能しています。\n\n2. 状態の更新\n   一度 ret に -1 が代入されると、while文の継続条件である ret ≠ -1 が満たされなくなり、残りの処理をスキップして終了します。\n   <div class=\"important\">ret ≠ -1 をチェックすることで計算継続を判断している</div>"
  },
  {
    "id": 194,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "配列 t = {4, 0, 2, 5}、n = 6 のとき、プログラムを 2 回ループさせた直後の ret の値を求めなさい。",
    "example": "i = 1 の時の計算結果を次の回の ret に代入して、順番に値を更新してみましょう。",
    "code": "   01  整数型の配列: t ← {4, 0, 2, 5}\n   02  整数型: n ← 6, ret ← 0, i\n   03  <span class=\"for\">for (i を 1 から 4 まで 1 ずつ増やす)</span>\n   04     ret ← ret * n + t[i]\n   05  <span class=\"for\">endfor</span>",
    "choices": ["24", "4", "26", "881"],
    "specific_explanation": "1. 規則性の発見\nこの処理は n 進法を 10 進法に変換する際によく使われる手法です。現在の累積値 ret を n 倍して桁をずらし、新しい要素 t[i] を加算して数値を更新していきます。\n\n2. ずれの調整\ni = 1 のとき：0 * 6 + 4 = 4 となります。続く i = 2 のときには、前回求めた 4 を ret に代入して計算するため、4 * 6 + 0 = 24 と算出されます。\n\n\n<div class=\"important\">2回目終了時点の ret は 24 です</div>"
  },
  {
    "id": 195,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "気温が35度以上のときに「警告」を返す関数です。空欄に入る適切な比較演算子を選択してください。",
    "example": "temp = 35 のとき「警告」が返るということは、35 自体を条件に含める必要があります。どの演算子が 35 を含みますか。",
    "code": "01  checkHeat(整数型: temp)\n02  <span class=\"if\">if (temp [  1  ] 35)</span>\n03     return \"警告\"\n04  <span class=\"if\">else</span>\n05     return \"安全\"\n06  <span class=\"if\">endif</span>",
    "choices": [">=", ">", "<=", "<"],
    "specific_explanation": "1. 境界の特定\n   基準となる数値は「35」度です。\n\n2. 含むか含まないか\n   問題文に「35度以上」とあり、35 そのものも警告対象です。「以上」を意味する 「>=」 が正解です。\n   <div class=\"important\">if (temp >= 35)</div>"
  },
  {
    "id": 196,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "12歳未満（12歳を含まない）の場合に子供料金を適用する判定式です。空欄を埋めてください。",
    "example": "age = 12 のとき「大人料金」が返るとすると、12 は条件を満たしません。12 を含まない比較演算子はどれでしょうか。",
    "code": "01  checkFare(整数型: age)\n02  <span class=\"if\">if (age [  1  ] 12)</span>\n03     return \"子供料金\"\n04  <span class=\"if\">else</span>\n05     return \"大人料金\"\n06  <span class=\"if\">endif</span>",
    "choices": ["<", "<=", ">", ">="],
    "specific_explanation": "1. 境界の特定\n   基準となる数値は「12」歳です。\n\n2. 含むか含まないか\n   「未満」はその数値自体を含みません。12歳は大人料金になるため、12 より小さいことを示す「<」を選びます。\n   <div class=\"important\">if (age < 12)</div>"
  },
  {
    "id": 197,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "在庫数が10個以下になった場合に「発注」を出すプログラムです。空欄に入る演算子を選んでください。",
    "example": "stock = 10 のとき「発注」が返るということは、10 そのものも条件を満たすはずです。どの演算子が 10 を含みますか。",
    "code": "01  checkStock(整数型: stock)\n02  <span class=\"if\">if (stock [  1  ] 10)</span>\n03     return \"発注\"\n04  <span class=\"if\">else</span>\n05     return \"待機\"\n06  <span class=\"if\">endif</span>",
    "choices": ["<=", "<", ">=", ">"],
    "specific_explanation": "1. 境界の特定\n   基準となる数値は「10」個です。\n\n2. 含むか含まないか\n   「以下」はその数値自体を含みます。10個ちょうどでも発注が必要なため、10 を含む「<=」が適切です。\n   <div class=\"important\">if (stock <= 10)</div>"
  },
  {
    "id": 198,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "配列の添え字 i が、要素数 10 の配列 a（1〜10番）の範囲内にあるかを確認します。",
    "example": "i = 10 のとき true が返るとすると、10 は範囲内と判断されます。10 を含む比較演算子はどれかを考えてみましょう。",
    "code": "01  isSafeIndex(整数型: i)\n02  <span class=\"if\">if (i >= 1 and i [  1  ] 10)</span>\n03     return true\n04  <span class=\"if\">else</span>\n05     return false\n06  <span class=\"if\">endif</span>",
    "choices": ["<=", "<", "==", ">="],
    "specific_explanation": "1. 境界の特定\n   配列の末尾の番号である「10」が上限の基準です。\n\n2. 含むか含まないか\n   10番目の要素は存在するため、10 を含めて判定する必要があります。範囲内（10以下）を示す「<=」が正解です。\n   <div class=\"important\">if (i >= 1 and i <= 10)</div>"
  },
  {
    "id": 199,
    "category": "制御構文",
    "theme": "if文",
    "subtheme": "境界値の判定",
    "text": "テストの点が90点より大きい場合にのみ、評価を「秀」とします。適切なものを選んでください。",
    "example": "score = 90 のときどうなるか考えてみましょう。",
    "code": "01  getGrade(整数型: score)\n02  <span class=\"if\">if (score [  1  ] 90)</span>\n03     return \"秀\"\n04  <span class=\"if\">else</span>\n05     return \"優\"\n06  <span class=\"if\">endif</span>",
    "choices": [">", ">=", "<", "<="],
    "specific_explanation": "1. 境界の特定\n   基準となる数値は「90」点です。\n\n2. 含むか含まないか\n   「より大きい（超える）」はその数値自体を含みません。90点ちょうどでは「秀」にならないため、90 を含まない「>」を使用します。\n   <div class=\"important\">if (score > 90)</div>"
  },
  {
    "id": 200,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "1から引数で指定された正の整数 n までの合計値を再帰的に計算して返す関数 sum を作成した。空欄 [  a  ] に入れるべき適切な式を答えなさい。",
    "example": "sum(5) の中に「sum(4) と同じ形の計算」が含まれているか、具体的な数値で確認してみましょう。",
    "code": "01  整数型: sum(整数型: n)\n02  <span class=\"if\">if (n = 1)</span>\n03     return 1\n04  <span class=\"if\">else</span>\n05     return [  a  ]\n06  <span class=\"if\">endif</span>",
    "choices": ["n + sum(n - 1)", "n + sum(n + 1)", "sum(n - 1)", "n + (n - 1)"],
    "specific_explanation": "1. 最小単位の特定\n   合計の最小単位は n = 1 のときです。1 までの合計は 1 なので、そのまま 1 を返して再帰を終了させます。\n\n2. 一回り小さい形への変換\n   sum(n) の中に「一回り小さい sum(n - 1)」を見つけます。sum(5) = 5 + sum(4) と書き換えられるため、これを一般化すると次の式になります。\n   <div class=\"important\">sum(n) = n + sum(n - 1)</div>"
  },
  {
    "id": 201,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "フィボナッチ数列の第 n 項の値を求める関数 fib(n) を作成した。空欄 [  a  ] に入れるべき適切な式を答えなさい。なお、数列は 0, 1, 1, 2, 3, 5... とする。",
    "example": "fib(4) を求めるには、直前の 2 項である fib(3) と fib(2) の結果が必要です。この規則を式にしてみましょう。",
    "code": "01  整数型: fib(整数型: n)\n02  <span class=\"if\">if (n = 0)</span>\n03     return 0\n04  <span class=\"if\">elseif (n = 1)</span>\n05     return 1\n06  <span class=\"if\">else</span>\n07     return [  a  ]\n08  <span class=\"if\">endif</span>",
    "choices": ["fib(n - 1) + fib(n - 2)", "fib(n - 1) + n", "fib(n - 2) + (n - 1)", "fib(n - 1) × 2"],
    "specific_explanation": "1. 最小単位の特定\n   フィボナッチ数列では最初の 2 項が固定されています。n = 0 のときは 0、n = 1 のときは 1 を返して再帰を終了させます。\n\n2. 一回り小さい形への変換\n   第 n 項は「1 つ前の項 + 2 つ前の項」というルールで決まります。自分自身を 2 回呼び出すことでこの規則を表現します。\n   <div class=\"important\">fib(n) = fib(n - 1) + fib(n - 2)</div>"
  },
  {
    "id": 202,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "与えられた正の整数 n の各桁の数字をすべて足した合計を再帰的に計算して返す関数 digitSum(n) を作成した。空欄 [  a  ] に入れる適切な式を答えなさい。",
    "example": "digitSum(123) を求めるとき、123 を「末尾の 1 桁」と「残りの桁」に分けてみましょう。",
    "code": "01  整数型: digitSum(整数型: n)\n02  <span class=\"if\">if (n < 10)</span>\n03     return n\n04  <span class=\"if\">else</span>\n05     return [  a  ]\n06  <span class=\"if\">endif</span>",
    "choices": ["digitSum(n ÷ 10) + (n mod 10)", "digitSum(n - 1) + n", "digitSum(n ÷ 10) + 1", "digitSum(n mod 10) + 10"],
    "specific_explanation": "1. 最小単位の特定\n   n が 10 未満（1桁）になったら、それ以上分解できないため、その数値自体を返して終了します。\n\n2. 一回り小さい形への変換\n   数値を「末尾の 1 桁（n mod 10）」と「残りの桁（n ÷ 10）」に分けます。例えば 123 は 3 と 12 に分けられ、12 に対して同じ処理を呼び出すことで連鎖させます。\n   <div class=\"important\">digitSum(n) = digitSum(n ÷ 10) + (n mod 10)</div>"
  },
  {
    "id": 203,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "正の整数 n の階乗（n! = n × (n-1) × ... × 1）を再帰的に計算して返す関数 fact(n) を作成した。空欄 [  a  ] に入れるべき適切な式を答えなさい。",
    "example": "fact(5) の中に「fact(4) と同じ形の計算」が含まれているか、具体的な数値で確認してみましょう。",
    "code": "01  整数型: fact(整数型: n)\n02  <span class=\"if\">if (n = 1)</span>\n03     return 1\n04  <span class=\"if\">else</span>\n05     return [  a  ]\n06  <span class=\"if\">endif</span>",
    "choices": ["n × fact(n - 1)", "n + fact(n - 1)", "fact(n - 1)", "n × (n - 1)"],
    "specific_explanation": "1. 最小単位の特定\n   最小のケースは n = 1 です。1! = 1 なので、1 を返して再帰を終了させます。\n\n2. 一回り小さい形への変換\n   5! を分解すると「5 × 4!」になります。つまり fact(n) は「n × fact(n - 1)」と定義できます。\n   <div class=\"important\">fact(n) = n × fact(n - 1)</div>"
  },
  {
    "id": 204,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "x の n 乗（x^n）を再帰的に計算して返す関数 pow(x, n) を作成した。空欄 [  a  ] に入れるべき適切な式を答えなさい。",
    "example": "pow(2, 3) の中に「pow(2, 2) と同じ形の計算」が含まれているか、具体的な数値で確認してみましょう。",
    "code": "01  整数型: pow(整数型: x, 整数型: n)\n02  <span class=\"if\">if (n = 0)</span>\n03     return 1\n04  <span class=\"if\">else</span>\n05     return [  a  ]\n06  <span class=\"if\">endif</span>",
    "choices": ["x × pow(x, n - 1)", "x × pow(x - 1, n)", "x + pow(x, n - 1)", "pow(x, n - 1)"],
    "specific_explanation": "1. 最小単位の特定\n   どんな数も 0 乗すると 1 になるため、n = 0 を終了条件として 1 を返します。\n\n2. 一回り小さい形への変換\n   x^3 は「x × x^2」と分解できます。つまり pow(x, n) は「x × pow(x, n - 1)」と定義できます。\n   <div class=\"important\">pow(x, n) = x × pow(x, n - 1)</div>"
  },
  {
    "id": 205,
    "category": "制御構文",
    "theme": "再帰関数",
    "subtheme": "再帰的処理",
    "text": "2つの正の整数 a と b の最大公約数を求める関数 gcd(a, b) を作成した。空欄 [  a  ] に入れるべき適切な式を答えなさい。なお、a ≧ b とする。",
    "example": "gcd(12, 8) のとき、12 mod 8 = 4 です。次に gcd(8, 4) を計算するとどうなるか追ってみましょう。",
    "code": "01  整数型: gcd(整数型: a, 整数型: b)\n02  <span class=\"if\">if (b = 0)</span>\n03     return a\n04  <span class=\"if\">else</span>\n05     return [  a  ]\n06  <span class=\"if\">endif</span>",
    "choices": ["gcd(b, a mod b)", "gcd(a mod b, b)", "gcd(a - b, b)", "a mod b"],
    "specific_explanation": "1. 最小単位の特定\n   ユークリッドの互除法では、割る数（b）が 0 になったときの割られる数（a）が最大公約数となります。\n\n2. 一回り小さい形への変換\n   「a と b の最大公約数」は「b と (a mod b) の最大公約数」と等しい性質を利用します。b を第一引数に、余りを第二引数にすることで問題を縮小していきます。\n   <div class=\"important\">gcd(a, b) = gcd(b, a mod b)</div>"
  },

  // for文
  {
    "id": 206,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "画面に文字を出力する命令を print(文字列) とします。「Hello」を n 回表示するための終了値 [  a  ] を選んでください。",
    "example": "n = 3 のとき、i が 1, 2, 3 と変化して計 3 回実行される数値。 ",
    "code": "   01  整数型: n, i\n   02  printHello(n)\n   03  <span class=\"for\">for (i を 1 から [  a  ] まで 1 ずつ増やす)</span>\n   04     print(\"Hello\")\n   05  <span class=\"for\">endfor</span>",
    "choices": ["n", "n - 1", "n + 1", "0"],
    "specific_explanation": "1. 開始と終了の数値\ni が 1 から始まる場合、終了値を n に設定すれば、実行回数と終了値が一致します。1, 2, ..., n と数えることで正確に n 回の処理が行われます。\n\n\n<div class=\"important\">1 から開始して n 回繰り返すなら、終了値は n です</div>"
  },
  {
    "id": 207,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "0 から開始して n 回処理を繰り返すための、適切な終了値 [  a  ] を選んでください。",
    "example": "n = 3 のとき、i が 0, 1, 2 と変化して計 3 回となる数値。 ",
    "code": "   01  整数型: n, i\n   02  loopZero(n)\n   03  <span class=\"for\">for (i を 0 から [  a  ] まで 1 ずつ増やす)</span>\n   04     process()\n   05  <span class=\"for\">endfor</span>",
    "choices": ["n - 1", "n", "n + 1", "1"],
    "specific_explanation": "1. 開始と終了の数値\n0 から数え始める場合、n 回目のループにおける i の値は n - 1 になります。例えば 3 回繰り返すなら、0, 1, 2 となり、2（3 - 1）で終了する必要があります。\n\n\n<div class=\"important\">0 から開始して n 回繰り返すなら、終了値は n - 1 です</div>"
  },
  {
    "id": 208,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "1 から n までの奇数のみを print 命令で表示します。適切な増分（step）[  a  ] を選んでください。",
    "example": "n = 5 のとき、i を 1 → 3 → 5 とスキップさせながら変化させます。",
    "code": "   01  整数型: n, i\n   02  printOdd(n)\n   03  <span class=\"for\">for (i を 1 から n まで [  a  ] ずつ増やす)</span>\n   04     print(i)\n   05  <span class=\"for\">endfor</span>",
    "choices": ["2", "1", "3", "i + 2"],
    "specific_explanation": "1. 規則性の発見\n奇数は 1, 3, 5... と、前の数に 2 を足した数値になります。増分を 2 に設定することで、偶数を飛ばして奇数のみを順番に処理できます。\n\n\n2. ずれの調整\n増分を 1 にして if 文で判定するよりも、増分そのものを 2 にする方がループ回数が半分になり効率的です。\n\n<div class=\"important\">2 ずつ増やすことで、1, 3, 5... と奇数のみを抽出できます</div>"
  },
  {
    "id": 209,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "配列 arr の全要素を合計する処理です。最後の要素までアクセスするための終了値 [  a  ] を選んでください。",
    "example": "要素数 len = 2 のとき、添字 0 と 1 の要素を足し合わせます。",
    "code": "   01  整数型の配列: arr\n   02  整数型: len, total ← 0, i\n   03  sumArray(arr, len)\n   04  <span class=\"for\">for (i を 0 から [  a  ] まで 1 ずつ増やす)</span>\n   05     total ← total + arr[i]\n   06  <span class=\"for\">endfor</span>\n   07  return total",
    "choices": ["len - 1", "len", "len + 1", "1"],
    "specific_explanation": "1. 開始と終了の数値\n配列の添字（インデックス）は 0 から始まります。そのため、要素数が len 個の場合、最後の要素の添字は len - 1 となります。\n\n\n2. 範囲外アクセスの防止\n終了値を len にしてしまうと、配列の範囲外（存在しない領域）を参照してしまいエラーが発生します。\n<div class=\"important\">0 から開始して全要素を辿るなら、終了値は len - 1 です</div>"
  },
  {
    "id": 210,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "n から 1 までカウントダウン表示する処理です。適切な増分（step）[  a  ] を選んでください。",
    "example": "countdown(3) とした場合、3, 2, 1 と数字を減らしながら出力します。",
    "code": "   01  整数型: n, i\n   02  countdown(n)\n   03  <span class=\"for\">for (i を n から 1 まで [  a  ] ずつ増やす)</span>\n   04     print(i)\n   05  <span class=\"for\">endfor</span>",
    "choices": ["-1", "1", "0", "n - 1"],
    "specific_explanation": "1. 開始と終了の数値\n開始値が n（大きい数）、終了値が 1（小さい数）であるため、値を減らしていく必要があります。疑似コードでは「-1 ずつ増やす」ことで値を減少させます。\n\n\n<div class=\"important\">値を 1 ずつ減らす場合は、増分に -1 を指定します</div>"
  },
  {
    "id": 211,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "整数 a から b までの全整数を足し合わせる処理です。適切な開始値 [  a  ] を選んでください。",
    "example": "sumRange(3, 5) のとき、3 + 4 + 5 を計算します。",
    "code": "   01  整数型: a, b, total ← 0, i\n   02  sumRange(a, b)\n   03  <span class=\"for\">for (i を [  a  ] から b まで 1 ずつ増やす)</span>\n   04     total ← total + i\n   05  <span class=\"for\">endfor</span>\n   06  return total",
    "choices": ["a", "1", "0", "b"],
    "specific_explanation": "1. 開始と終了の数値\n「a から b まで」という指定があるため、ループの開始地点は変数 a そのものになります。開始値には 0 や 1 だけでなく、変数を利用することも可能です。\n\n\n<div class=\"important\">指定された範囲の開始地点を変数（a）で指定します</div>"
  },
  {
    "id": 212,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "ループ変数の計算利用",
    "text": "0 から n までの「5の倍数」を表示します。for 文の増分 [  a  ] を選んでください。",
    "example": "n = 12 のとき、i が 0, 5, 10 と変化する数値の間隔を考えます。",
    "code": "   01  整数型: n, i\n   02  printMultiples5(n)\n   03  <span class=\"for\">for (i を 0 から n まで [  a  ] ずつ増やす)</span>\n   04     print(i)\n   05  <span class=\"for\">endfor</span>",
    "choices": ["5", "1", "4", "i + 5"],
    "specific_explanation": "1. 規則性の発見\n0 の次を 5、その次を 10 と変化させるには、その差である 5 を増分に設定します。i は 5 ずつ増えていくことになります。\n\n\n2. ずれの調整\nif 文で「5 で割り切れるか」を判定するよりも、増分で調整する方が無駄なループが発生せず、処理が効率的になります。\n<div class=\"important\">5 ずつ増やすことで、倍数のみを抽出できます</div>"
  },
  {
    "id": 213,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "配列 arr を 1 つ飛ばし（添字 0, 2, 4...）に合計します。適切な終了値 [  a  ] を選んでください。",
    "example": "要素数 count = 4 のとき、最後にアクセスすべき添字の最大値がいくつになるか確認しましょう。",
    "code": "   01  整数型の配列: arr\n   02  整数型: count, total ← 0, i\n   03  sumSkip(arr, count)\n   04  <span class=\"for\">for (i を 0 から [  a  ] まで 2 ずつ増やす)</span>\n   05     total ← total + arr[i]\n   06  <span class=\"for\">endfor</span>\n   07  return total",
    "choices": ["count - 1", "count", "count / 2", "count + 1"],
    "specific_explanation": "1. 開始と終了の数値\n増分が 2 であっても、配列にアクセスする際の有効なインデックス範囲は 0 から count - 1 までです。終了判定はこの最大値を超えないように設定します。\n\n\n2. 終端判定の原則\nステップ数に関わらず、配列の境界（要素数 - 1）を終了条件にするのが、安全に要素を走査する基本です。\n<div class=\"important\">終了値は通常通り count - 1 を指定します</div>"
  },
  {
    "id": 214,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "配列の要素を、末尾から先頭に向かって順番に表示します。開始値 [  a  ] を選んでください。",
    "example": "要素数 len = 3 のとき、逆順のスタート地点（30 の位置）は何番目か追ってみましょう。",
    "code": "   01  整数型の配列: arr ← {10, 20, 30}\n   02  整数型: len ← 3, i\n   03  printReverse(arr, len)\n   04  <span class=\"for\">for (i を [  a  ] から 0 まで -1 ずつ増やす)</span>\n   05     print(arr[i])\n   06  <span class=\"for\">endfor</span>",
    "choices": ["len - 1", "len", "len + 1", "0"],
    "specific_explanation": "1. 開始と終了の数値\n配列の最後の要素を指す添字は len - 1 です。逆順処理ではここを開始点とし、0 に向かって値を減らしていきます。\n\n\n2. 境界値の管理\nもし len から始めてしまうと、最初のループで「存在しない要素」を参照してしまい、エラーが発生します。\n<div class=\"important\">逆順ループの開始値は len - 1 となります</div>"
  },
  {
    "id": 215,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "処理 process() をちょうど n 回実行します。i を 0 から開始する場合の終了値 [  a  ] を選んでください。",
    "example": "n = 3 のとき、i が 0, 1, 2 と変化して計 3 回実行される数値です。",
    "code": "   01  整数型: n, i\n   02  runTimes(n)\n   03  <span class=\"for\">for (i を 0 から [  a  ] まで 1 ずつ増やす)</span>\n   04     process()\n   05  <span class=\"for\">endfor</span>",
    "choices": ["n - 1", "n", "n + 1", "1"],
    "specific_explanation": "1. 開始と終了の数値\n0 から数え始めて n 回繰り返す場合、終了値は n - 1 になります。3 回なら 0, 1, 2 で終了となり、終了値そのものは回数より 1 小さくなります。\n\n\n<div class=\"important\">0 から開始して n 回繰り返すなら、終了値は n - 1 です</div>"
  },
  {
    "id": 216,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "文字列 str の全文字を 1 文字ずつ表示します。適切な終了値 [  a  ] を選んでください。",
    "example": "str = 'ABC'（3文字）のとき、添字 0, 1, 2 を順番に参照します。",
    "code": "   01  文字列型: str\n   02  整数型: i\n   03  printChars(str)\n   04  <span class=\"for\">for (i を 0 から [  a  ] まで 1 ずつ増やす)</span>\n   05     print(str[i])\n   06  <span class=\"for\">endfor</span>",
    "choices": ["str.length - 1", "str.length", "str.length + 1", "1"],
    "specific_explanation": "1. 開始と終了の数値\n文字列の添字は 0 から始まります。そのため、末尾の添字は「文字数 - 1」となります。\"ABC\"（3文字）なら、0, 1, 2 番目までを辿る必要があります。\n\n\n<div class=\"important\">0 から開始して末尾まで辿るなら、終了値は str.length - 1 です</div>"
  },
  {
    "id": 217,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "配列 arr の index 番目から最後までの要素を合計します。適切な開始値 [  a  ] を選んでください。",
    "example": "index = 1 のとき、添字 1 番目から末尾までをループの対象にします。",
    "code": "   01  整数型の配列: arr\n   02  整数型: index, total ← 0, i\n   03  sumFrom(arr, index)\n   04  <span class=\"for\">for (i を [  a  ] から arr.要素数 - 1 まで 1 ずつ増やす)</span>\n   05     total ← total + arr[i]\n   06  <span class=\"for\">endfor</span>\n   07  return total",
    "choices": ["index", "index + 1", "0", "1"],
    "specific_explanation": "1. 開始と終了の数値\n「index 番目から」という指定があるため、ループの開始地点には引数の index をそのまま使用します。開始値は 0 や 1 固定ではなく、変数で柔軟に指定できます。\n\n\n<div class=\"important\">特定の場所から開始する場合、その添字を変数で指定します</div>"
  },
  {
    "id": 218,
    "category": "制御構文",
    "theme": "for文",
    "subtheme": "範囲と終端判定",
    "text": "1 から n までの奇数のみを足し合わせます。増分が 2 のとき、適切な終了値 [  a  ] を選んでください。",
    "example": "n = 5 のとき、1, 3, 5 までを合計の対象に含める設定を考えます。",
    "code": "   01  整数型: n, total ← 0, i\n   02  sumOdd(n)\n   03  <span class=\"for\">for (i を 1 から [  a  ] まで 2 ずつ増やす)</span>\n   04     total ← total + i\n   05  <span class=\"for\">endfor</span>\n   06  return total",
    "choices": ["n", "n / 2", "n - 1", "n * 2"],
    "specific_explanation": "1. 開始と終了の数値\nステップ（増分）が 2 であっても、「どこまでを範囲に含めるか」という終了の境界線は n のまま変わりません。i が n を超えた時点でループは自動的に停止します。\n\n\n<div class=\"important\">対象に含めたい上限の数値（n）を終了値に指定します</div>"
  },
  {
    "id": 219,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "配列 array の index 番目と index + 1 番目の要素を入れ替える処理です。空欄 [  a  ] に入る適切な式を選んでください。",
    "example": "array: [10, 20], index: 0 → 実行後: [20, 10]",
    "code": "01  swap(整数型の配列: array, 整数型: index)\n02  整数型: tmp\n03  tmp = array[index]\n04  array[index] = array[index + 1]\n05  [  a  ] = tmp",
    "choices": ["array[index + 1]", "array[index]", "array[0]", "tmp"],
    "specific_explanation": "1. 退避用変数の利用\n   上書きで消えてしまわないよう、一方の値（array[index]）を一時変数（tmp）に保存しています。\n\n2. 三段階の代入\n   tmp ← A, A ← B, B ← tmp という手順で値を交換します。3行目で tmp に index の値を、4行目で index に index + 1 の値を上書きしたため、最後に index + 1 へ退避していた値を戻します。\n   <div class=\"important\">array[index + 1] = tmp</div>"
  },
  {
    "id": 220,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "配列の先頭要素と末尾要素を入れ替えるプログラムです。空欄 [  a  ] および [  b  ] に入る組み合わせとして正しいものはどれか。なお、配列の要素数を n とします。",
    "example": "array: [1, 2, 3], n: 3 → 実行後: [3, 2, 1]",
    "code": "01  flipEnds(整数型の配列: array, 整数型: n)\n02  整数型: tmp\n03  tmp = [  a  ]\n04  array[0] = [  b  ]\n05  array[n - 1] = tmp",
    "choices": ["[ a ]: array[0]\n[ b ]: array[n - 1]", "[ a ]: array[n - 1]\n[ b ]: array[0]", "[ a ]: array[1]\n[ b ]: array[n]", "[ a ]: array[0]\n[ b ]: tmp"],
    "specific_explanation": "1. 退避用変数の利用\n   交換の第一歩は、消えてしまう値を tmp にコピーすることです。ここでは array[0] を退避させています。\n\n2. 三段階の代入\n   array[0] を空けるイメージで、そこに末尾の値 array[n - 1] を代入します。最後に末尾へ tmp を戻すことで入れ替えが完了します。\n   <div class=\"important\">tmp = array[0]\narray[0] = array[n - 1]</div>"
  },
  {
    "id": 221,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "2つの変数 a, b の値を、退避用変数を使わずに加減算のみで入れ替えるロジックを考えます。空欄 [  a  ] に入る式はどれですか。",
    "example": "a=5, b=3 → (a=a+b) a=8, b=3 → (b=a-b) a=8, b=5 → (a=a-b) a=3, b=5",
    "code": "01  calcSwap(整数型: a, 整数型: b)\n02  a = a + b\n03  b = a - b\n04  a = [  a  ]\n05  return",
    "choices": ["a - b", "a + b", "b - a", "a"],
    "specific_explanation": "1. 退避用変数の利用\n   この特殊なパターンでは「合計値」を一時的な退避場所として利用しています。\n\n2. 三段階の代入\n   3行目の時点で、b には元の a の値が入っています。最後に合計値（新しい a）から現在の b（元の a）を引けば、元の b の値が求まります。\n   <div class=\"important\">a = a - b</div>"
  },
  {
    "id": 222,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "配列の隣り合う要素を比較し、左側が大きい場合にのみ入れ替えを行う（昇順に近づける）処理です。空欄 [  a  ] に入る条件式を選んでください。",
    "example": "array: [5, 2] → 入れ替え発生 → [2, 5]",
    "code": "01  compareSwap(整数型の配列: array, 整数型: i)\n02  <span class=\"if\">if ([  a  ])</span>\n03     整数型: tmp = array[i]\n04     array[i] = array[i + 1]\n05     array[i + 1] = tmp\n06  <span class=\"if\">endif</span>",
    "choices": ["array[i] > array[i + 1]", "array[i] < array[i + 1]", "array[i] == array[i + 1]", "array[i] >= 0"],
    "specific_explanation": "1. 全件比較と更新\n   入れ替えを行うための「条件」を判定します。昇順にするためには、左側（i）が右側（i + 1）より大きい場合にアクションを起こす必要があります。\n\n2. 三段階の代入\n   条件に合致したときのみ、tmp を使った定石通りの入れ替え手順を実行します。\n   <div class=\"important\">if (array[i] > array[i + 1])</div>"
  },
  {
    "id": 223,
    "category": "データ構造",
    "theme": "配列",
    "subtheme": "要素のスワップ処理",
    "text": "3つの変数 a, b, c の値を「a → b, b → c, c → a」のようにローテーションさせる処理です。空欄 [  a  ] に入る式を選んでください。",
    "example": "a:1, b:2, c:3 → 実行後: a:3, b:1, c:2",
    "code": "01  rotate(整数型: a, 整数型: b, 整数型: c)\n02  整数型: tmp\n03  tmp = c\n04  c = b\n05  b = a\n06  a = [  a  ]",
    "choices": ["tmp", "c", "b", "a"],
    "specific_explanation": "1. 退避用変数の利用\n   複数の値を動かす場合も、最初に上書きされて消えてしまう値を tmp に保存するのが鉄則です。ここでは c を退避させています。\n\n2. 三段階の代入\n   玉突きのように値を移動させます。c に b を、b に a を入れた後、最後に a へ最初に退避させておいた c（tmp）を戻します。\n   <div class=\"important\">a = tmp</div>"
  },
  {
    "id": 224,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "ドット演算子によるメンバ参照",
    "text": "生徒の情報を管理する構造体 Student（メンバ：name, score）があります。変数 s に格納された生徒の「点数（score）」を取り出して、変数 val に代入する正しい記述を選んでください。",
    "example": "入力: s = { name: \"太郎\", score: 85 }\n結果: val に 85 が代入される",
    "code": "01  getScore(Student: s)\n02  整数型: val\n03  val = [  1  ]\n04  return val",
    "choices": ["s.score", "s(score)", "Student.score", "score.s"],
    "specific_explanation": "1. 変数名とメンバ名の特定\n   どの構造体変数（箱）の中にある、どのデータが欲しいかを明確にします。この場合は変数 <span class=\"italic\">s</span> の中にある <span class=\"italic\">score</span> です。\n\n2. ドットによる連結\n   「変数名.メンバ名」の形で、左から順に辿ってデータを取り出します。\n   <div class=\"important\">val = s.score</div>"
  },
  {
    "id": 225,
    "category": "構造体・クラス",
    "theme": "参照値の更新",
    "subtheme": "代入対象（左辺）の厳格な指定",
    "text": "商品リストを表す構造体 Item（メンバ：id, price）の配列 items があります。3番目（添え字 2）の商品の「価格（price）」を 1200 に書き換える正しい記述を選んでください。",
    "example": "初期状態: items[2] は { id: 101, price: 1000 }\n実行後: items[2].price が 1200 になる",
    "code": "01  updatePrice(Item型の配列: items)\n02  [  1  ] = 1200",
    "choices": [
      "items[2].price",
      "items.price[2]",
      "items[3].price",
      "price.items[2]"
    ],
    "specific_explanation": "1. 「どこに保存するか」の確定\n   代入演算子（ = ）の左側には、必ず「データの保存先」であるメンバ参照を記述します。3番目の要素なので、添え字は <span class=\"italic\">2</span> を使用します。\n\n2. 変数名忘れの防止\n   メンバ名である <span class=\"italic\">price</span> だけで更新しようとせず、必ず構造体変数名（配列要素）である <span class=\"italic\">items[2].price</span> をセットで指定しましょう。\n   <div class=\"important\">items[2].price = 1200</div>"
  },
  {
    "id": 226,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "ドット演算子によるメンバ参照",
    "text": "注文情報 Order（メンバ：itemId, qty）と、各商品の単価を格納した配列 unitPrices があります。注文された商品の「単価」を unitPrices から取得する記述を選んでください。",
    "example": "order.itemId が 5 のとき、unitPrices[5] を参照したい",
    "code": "01  calc(Order: order, 整数型の配列: unitPrices)\n02  整数型: price\n03  price = [  1  ]\n04  return price",
    "choices": [
      "unitPrices[order.itemId]",
      "order.unitPrices[itemId]",
      "unitPrices.order.itemId",
      "unitPrices[itemId]"
    ],
    "specific_explanation": "1. 変数名とメンバ名の特定\n   まずは、構造体 <span class=\"italic\">order</span> から商品番号の情報である <span class=\"italic\">itemId</span> を正確に取り出す必要があります。\n\n2. ドットによる連結\n   「変数名.メンバ名」の形で取り出した値を、そのまま配列 <span class=\"italic\">unitPrices</span> の添え字として利用することで、目的の単価へアクセスします。\n   <div class=\"important\">unitPrices[order.itemId]</div>"
  },
  {
    "id": 227,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "ドット演算子によるメンバ参照",
    "text": "在庫管理の構造体 Item（メンバ：stock, limit）があります。現在の在庫数（stock）が、発注のしきい値（limit）を下回っている（未満）かを判定する条件式を選んでください。",
    "example": "item = { stock: 5, limit: 10 } のとき、戻り値: \"不足\"",
    "code": "01  isShortage(Item: item)\n02  <span class=\"if\">if ([  1  ])</span>\n03     return \"不足\"\n04  <span class=\"if\">else</span>\n05     return \"十分\"",
    "choices": [
      "item.stock < item.limit",
      "item[stock] < item[limit]",
      "stock.item < limit.item",
      "item.stock < limit"
    ],
    "specific_explanation": "1. 変数名とメンバ名の特定\n   比較に使用する「現在の在庫数」と「しきい値」は、どちらも構造体変数 <span class=\"italic\">item</span> に紐付いています。\n\n2. ドットによる連結\n   それぞれの値を取り出すために <span class=\"italic\">item.stock</span> と <span class=\"italic\">item.limit</span> のようにドットで繋ぎ、比較演算子を適用します。\n   <div class=\"important\">if (item.stock < item.limit)</div>"
  },
  {
    "id": 228,
    "category": "構造体・クラス",
    "theme": "参照値の更新",
    "subtheme": "代入対象（左辺）の厳格な指定",
    "text": "ユーザー情報 User（メンバ：rank, point）において、ランク（rank）が 1 の場合に、ポイント（point）に 100 を加算する処理です。空欄に入る適切な記述を選んでください。",
    "example": "初期状態: u = { rank: 1, point: 50 }\n実行後: u.point が 150 になる",
    "code": "01  addBonus(User: u)\n02  <span class=\"if\">if (u.rank == 1)</span>\n03     [  1  ]\n04  <span class=\"if\">endif</span>",
    "choices": [
      "u.point = u.point + 100",
      "point = point + 100",
      "u.point + 100",
      "u = u.point + 100"
    ],
    "specific_explanation": "1. 「どこに保存するか」の確定\n   値を更新して保存したい場所は <span class=\"italic\">u.point</span> です。これを代入式の左側に配置します。\n\n2. 変数名忘れの防止\n   右辺で現在の値を取り出す際も、左辺で保存先を指定する際も、構造体変数 <span class=\"italic\">u</span> を省略せずに記述することが重要です。\n   <div class=\"important\">u.point = u.point + 100</div>"
  },
  {
    "id": 229,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "ドット演算子によるメンバ参照",
    "text": "生徒の情報を管理する構造体 Student（メンバ：name, score）があります。変数 s から「名前（name）」を取り出して、変数 n に代入する正しい記述を選んでください。",
    "example": "入力: s = { name: \"太郎\", score: 85 }\n結果: n に \"太郎\" が代入される",
    "code": "01  getName(Student: s)\n02  文字列型: n\n03  n = [  1  ]\n04  return n",
    "choices": ["s.name", "s(name)", "Student.name", "name.s"],
    "specific_explanation": "1. 変数名とメンバ名の特定\n   どの構造体変数（箱）の中にある、どのデータが欲しいかを明確にします。この場合は変数 <span class=\"italic\">s</span> の中にある <span class=\"italic\">name</span> です。\n\n2. ドットによる連結\n   「変数名.メンバ名」の形で、左から順に辿ってデータを取り出します。\n   <div class=\"important\">n = s.name</div>"
  },
  {
    "id": 230,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "ドット演算子によるメンバ参照",
    "text": "矩形を表す構造体 Rect（メンバ：width, height）があります。この構造体の変数 r を使い、面積（幅 × 高さ）を求める式として正しいものを選んでください。",
    "example": "入力: r = { width: 5, height: 10 }\n結果: 50 を算出したい",
    "code": "01  calcArea(Rect: r)\n02  整数型: area\n03  area = [  1  ]\n04  return area",
    "choices": ["r.width * r.height", "r.width * height", "width * height", "r(width * height)"],
    "specific_explanation": "1. 変数名とメンバ名の特定\n   計算に必要な「幅」と「高さ」は、どちらも構造体変数 <span class=\"italic\">r</span> の中に保持されています。\n\n2. ドットによる連結\n   それぞれの値を取り出すために <span class=\"italic\">r.width</span> と <span class=\"italic\">r.height</span> のようにドットで繋ぎ、それらを掛け合わせます。\n   <div class=\"important\">area = r.width * r.height</div>"
  },
  {
    "id": 231,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "ドット演算子によるメンバ参照",
    "text": "従業員データ Employee（メンバ：id, age）があります。20歳以上かどうかを判定する条件式を完成させてください。",
    "example": "入力: emp = { id: 101, age: 25 }\n結果: 判定が 真（true）になる",
    "code": "01  isAdult(Employee: emp)\n02  <span class=\"if\">if ([  1  ] >= 20)</span>\n03     return true\n04  <span class=\"if\">else</span>\n05     return false",
    "choices": ["emp.age", "emp.id", "Employee.age", "age.emp"],
    "specific_explanation": "1. 変数名とメンバ名の特定\n   年齢に関する情報はメンバ <span class=\"italic\">age</span> に格納されています。引数で渡された変数名 <span class=\"italic\">emp</span> を使って指定します。\n\n2. ドットによる連結\n   比較演算子の左側に <span class=\"italic\">emp.age</span> を記述することで、構造体内の数値と「20」を比較できます。\n   <div class=\"important\">if (emp.age >= 20)</div>"
  },
  {
    "id": 232,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "配列内の構造体参照",
    "text": "商品リストを表す構造体 Item（メンバ：id, price）の配列 items があります。先頭（添え字 0）の商品の「価格（price）」を取り出す正しい記述はどれですか。",
    "example": "入力: items[0] = { id: 101, price: 500 }\n出力: 500",
    "code": "01  getFirstPrice(Item型の配列: items)\n02  整数型: p\n03  p = [  1  ]\n04  return p",
    "choices": ["items[0].price", "items.price[0]", "items[1].price", "price.items[0]"],
    "specific_explanation": "1. 要素の特定（添え字）\n   まず <span class=\"italic\">items[0]</span> と記述することで、配列の何番目の箱（要素）に注目するかを決めます。\n\n2. 要素内のメンバ抽出\n   特定した1つの要素に対してドット（.）を使い、その中身にあるメンバ <span class=\"italic\">price</span> へアクセスします。\n   <div class=\"important\">p = items[0].price</div>"
  },
  {
    "id": 233,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "配列内の構造体参照",
    "text": "Item型の配列から、ループ変数 i を使って各商品の「商品番号（id）」を順番にチェックしたい。空欄に入る適切な記述を選んでください。",
    "example": "i = 2 のとき、items[2].id を参照したい",
    "code": "01  findItem(Item型の配列: items, 整数型: targetId)\n02  <span class=\"for\">for (i を 0 から itemsの要素数 - 1 まで 1 ずつ増やす)</span>\n03     <span class=\"if\">if ([  1  ] == targetId)</span>\n04        return i\n05     <span class=\"if\">endif</span>\n06  <span class=\"for\">endfor</span>",
    "choices": ["items[i].id", "items.id[i]", "items[i].targetId", "id[i]"],
    "specific_explanation": "1. 要素の特定（添え字）\n   ループ変数 <span class=\"italic\">i</span> を添え字として使うことで、<span class=\"italic\">items[i]</span> のように各要素を動的に指定します。\n\n2. 要素内のメンバ抽出\n   取り出した各要素が持つメンバ <span class=\"italic\">id</span> をドット演算子で繋ぎ、比較対象として取り出します。\n   <div class=\"important\">if (items[i].id == targetId)</div>"
  },
  {
    "id": 234,
    "category": "構造体・クラス",
    "theme": "情報の取り出し",
    "subtheme": "ネストされた構造体の参照",
    "text": "User構造体の中に、住所情報を管理する Address構造体（メンバ：zip）がメンバとして含まれています。ユーザー u の「郵便番号（zip）」を取り出す正しい記述はどれですか。",
    "example": "入力: u = { name: \"葵\", address: { zip: \"123-4567\" } }\n出力: \"123-4567\"",
    "code": "01  getZipCode(User: u)\n02  文字列型: z\n03  z = [  1  ]\n04  return z",
    "choices": ["u.address.zip", "u.zip.address", "User.address.zip", "u.address[zip]"],
    "specific_explanation": "1. 参照の連鎖\n   「ユーザーの中の、住所の中の、郵便番号」という階層を、ドットを繋げて一つずつ深く潜っていくイメージで記述します。\n\n2. データの型の意識\n   最後に取り出した値が、目的のデータ（zip）であることを確認します。\n   <div class=\"important\">z = u.address.zip</div>"
  },
  {
    "id": 235,
    "category": "構造体・クラス",
    "theme": "参照値の更新",
    "subtheme": "代入対象（左辺）の厳格な指定",
    "text": "商品の価格（price）を改定します。引数として渡された構造体 item の価格を、新しい価格 newPrice で上書きする正しい処理はどれですか。",
    "example": "初期状態: item.price = 1000, newPrice = 1200\n実行後: item.price が 1200 になる",
    "code": "01  updatePrice(Item: item, 整数型: newPrice)\n02  [  1  ]\n03  return item",
    "choices": ["item.price = newPrice", "newPrice = item.price", "price = newPrice", "item = newPrice"],
    "specific_explanation": "1. 「どこに保存するか」の確定\n   代入演算子（ = ）の左側には、必ずデータの保存先を記述します。今回は <span class=\"italic\">item</span> の中の <span class=\"italic\">price</span> を書き換えたいので、左辺に記述します。\n\n2. 変数名忘れの防止\n   単に <span class=\"italic\">price</span> と書くだけでは、どの構造体のメンバか判別できません。必ず構造体変数名を含めた <span class=\"italic\">item.price</span> をセットで書く必要があります。\n   <div class=\"important\">item.price = newPrice</div>"
  },
  {
    "id": 236,
    "category": "構造体・クラス",
    "theme": "参照値の更新",
    "subtheme": "代入対象（左辺）の厳格な指定",
    "text": "ユーザーのランク（rank）を更新します。ユーザー u の現在のランクを 1 つ上げる（1 を加算する）正しい処理を選んでください。",
    "example": "初期状態: u.rank = 2\n実行後: u.rank が 3 になる",
    "code": "01  levelUp(User: u)\n02  [  1  ]\n03  return u",
    "choices": ["u.rank = u.rank + 1", "rank = rank + 1", "u.rank + 1", "u = u.rank + 1"],
    "specific_explanation": "1. 「どこに保存するか」の確定\n   値を更新して保存したい場所は <span class=\"italic\">u.rank</span> です。これを代入式の左側に配置します。\n\n2. 変数名忘れの防止\n   右辺で現在の値を取り出す際も、左辺で保存先を指定する際も、構造体変数 <span class=\"italic\">u</span> を省略せずに記述することが重要です。\n   <div class=\"important\">u.rank = u.rank + 1</div>"
  },
  {
    "id": 237,
    "category": "構造体・クラス",
    "theme": "参照値の更新",
    "subtheme": "更新処理の完全性",
    "text": "生徒の点数（score）にボーナス点を加算します。計算結果を確実に構造体 s に反映（上書き）させる記述を選んでください。",
    "example": "初期状態: s.score = 80, bonus = 5\n実行後: s.score が 85 になる",
    "code": "01  addBonus(Student: s, 整数型: bonus)\n02  [  1  ]",
    "choices": [
      "s.score = s.score + bonus",
      "s.score + bonus",
      "整数型: total = s.score + bonus",
      "s.score == s.score + bonus"
    ],
    "specific_explanation": "1. 処理の完結\n   値を計算しただけで満足せず、最後に必ずメンバへの代入（上書き）が行われているかを確認します。代入式がない場合、構造体の中身は変化しません。\n\n2. 更新前後の比較\n   実行後に <span class=\"italic\">s.score</span> の中身が加算後の値に変化するためには、左辺にそのメンバを指定した代入が必要です。\n   <div class=\"important\">s.score = s.score + bonus</div>"
  },
  {
    "id": 238,
    "category": "構造体・クラス",
    "theme": "参照値の更新",
    "subtheme": "代入対象（左辺）の厳格な指定",
    "text": "座標（x, y）を持つ構造体 Point の変数 p があります。x 座標の値を 0 にリセットする正しい記述を選んでください。",
    "example": "初期状態: p = { x: 10, y: 20 }\n実行後: p.x が 0 になる",
    "code": "01  resetX(Point: p)\n02  [  1  ]",
    "choices": ["p.x = 0", "x = 0", "p = 0", "Point.x = 0"],
    "specific_explanation": "1. 「どこに保存するか」の確定\n   特定のメンバだけを初期化したい場合は、そのメンバを正確に指し示す必要があります。構造体全体（p）に代入するのではなく、<span class=\"italic\">p.x</span> を指定します。\n\n2. 変数名忘れの防止\n   型名である <span class=\"italic\">Point</span> ではなく、実際にデータを持っている変数名 <span class=\"italic\">p</span> を使用して更新先を特定します。\n   <div class=\"important\">p.x = 0</div>"
  },
  {
    "id": 239,
    "category": "構造体・クラス",
    "theme": "参照値の更新",
    "subtheme": "更新処理の完全性",
    "text": "在庫（stock）を 1 つ減らす処理です。在庫が 0 より大きい場合にのみ減算し、その結果をメンバに書き戻す正しい処理を選んでください。",
    "example": "初期状態: item.stock = 5\n実行後: item.stock が 4 になる",
    "code": "01  reduceStock(Item: item)\n02  <span class=\"if\">if (item.stock > 0)</span>\n03     [  1  ]\n04  <span class=\"if\">endif</span>",
    "choices": ["item.stock = item.stock - 1", "item.stock - 1", "item.stock == item.stock - 1", "stock = stock - 1"],
    "specific_explanation": "1. 処理の完結\n   <span class=\"italic\">item.stock - 1</span> と計算するだけでは、元の値は変わりません。等号（ = ）を使って、計算結果を元の場所に格納し直すことで処理が完結します。\n\n2. 更新前後の比較\n   処理が進んだ後で在庫数が減っていることを保証するために、代入による上書き操作を正しく選択しましょう。\n   <div class=\"important\">item.stock = item.stock - 1</div>"
  },
  {
    "id": 240,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "Push/Pop操作とポインタ",
    "text": "スタックにデータ data を追加（Push）するプログラムです。空欄 [  1  ] に入る適切な処理を選んでください。なお、top はスタックの最上位を指しており、初期値は 0（空の状態）とします。",
    "example": "初期状態: top = 1 (stack[1]に値がある)\n実行後: top = 2, stack[2] = data",
    "code": "01  push(整数型: data)\n02  <span class=\"if\">if (top < MAX_SIZE)</span>\n03     top = top + 1\n04     [  1  ]\n05  <span class=\"if\">endif</span>",
    "choices": ["stack[top] = data", "stack[top + 1] = data", "data = stack[top]", "top = stack[data]"],
    "specific_explanation": "1. ポインタ（Top）の移動\n   Push操作では、まずポインタ <span class=\"italic\">top</span> を <span class=\"italic\">1</span> 増やして、新しいデータを格納するための「空き地」を確保します。\n\n2. LIFO（後入れ先出し）\n   新しく確保された場所（更新後の <span class=\"italic\">top</span> の位置）に対して、データを代入します。これにより、最後に入れたものが常に一番上になります。\n   <div class=\"important\">stack[top] = data</div>"
  },
  {
    "id": 241,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "Push/Pop操作とポインタ",
    "text": "スタックからデータを取り出す（Pop）処理です。値を返すと同時に、ポインタを適切に更新する空欄 [  1  ] を選んでください。",
    "example": "初期状態: top = 2 (stack[2]が最上位)\n実行後: stack[2] の値を返し、top は 1 になる",
    "code": "01  pop()\n02  整数型: value\n03  <span class=\"if\">if (top > 0)</span>\n04     value = stack[top]\n05     [  1  ]\n06     return value\n07  <span class=\"if\">endif</span>",
    "choices": ["top = top - 1", "top = top + 1", "top = 0", "stack[top] = 0"],
    "specific_explanation": "1. ポインタ（Top）の移動\n   Pop操作では、データを取り出した後、スタックの「高さ」を <span class=\"italic\">1</span> つ減らす必要があります。\n\n2. LIFO（後入れ先出し）\n   現在 <span class=\"italic\">top</span> が指している要素が最後に追加されたデータです。これを取り出した後は、その下の要素が新たな最上位になるため、ポインタをデクリメント（−1）します。\n   <div class=\"important\">top = top - 1</div>"
  },
  {
    "id": 242,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "Push/Pop操作とポインタ",
    "text": "スタックに対して以下の操作を順に行ったとき、最終的なポインタ top の値はいくつになりますか。初期値は 0 とします。",
    "example": "操作: Push(A), Push(B), Pop(), Push(C), Push(D), Pop()",
    "code": "01  // top = 0 から開始\n02  push(A)\n03  push(B)\n04  pop()\n05  push(C)\n06  push(D)\n07  pop()",
    "choices": ["2", "1", "3", "0"],
    "specific_explanation": "1. ポインタ（Top）の移動\n   <span class=\"italic\">Push</span> で <span class=\"italic\">+1</span>、<span class=\"italic\">Pop</span> で <span class=\"italic\">-1</span> されます。計算式にすると <span class=\"italic\">0 + 1 + 1 - 1 + 1 + 1 - 1 = 2</span> となります。\n\n2. LIFO（後入れ先出し）\n   最後に残っているのは、最初に入れた「A」と、途中で入れた「C」の2つです。ポインタは常に「現在のデータの数」と一致していることがわかります。\n   <div class=\"important\">最終的な top = 2</div>"
  },
  {
    "id": 243,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "Push/Pop操作とポインタ",
    "text": "スタックの要素をすべて取り出すループを作成したい。空欄 [  1  ] に入る継続条件として適切なものはどれですか。",
    "example": "top = 3 のとき、3回 Pop したらループを抜ける",
    "code": "01  clearStack()\n02  <span class=\"while\">while ([  1  ])</span>\n03     output pop()\n04  <span class=\"while\">endwhile</span>",
    "choices": ["top > 0", "top == 0", "top < MAX_SIZE", "top != -1"],
    "specific_explanation": "1. ポインタ（Top）の移動\n   <span class=\"italic\">Pop</span> を繰り返すと <span class=\"italic\">top</span> は <span class=\"italic\">0</span> に向かって減少していきます。\n\n2. LIFO（後入れ先出し）\n   スタックが空である状態は <span class=\"italic\">top = 0</span> です。つまり、データが存在する（取り出せる）間は <span class=\"italic\">top</span> が <span class=\"italic\">0</span> より大きい状態である必要があります。\n   <div class=\"important\">while (top > 0)</div>"
  },
  {
    "id": 244,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "Push/Pop操作とポインタ",
    "text": "スタックの最上位にある要素を「取り出さずに参照だけ」したい（Peek操作）。空欄 [  1  ] に入る記述を選んでください。",
    "example": "top = 5 のとき、stack[5] の値を返したいが、top は 5 のままにする",
    "code": "01  peek()\n02  <span class=\"if\">if (top > 0)</span>\n03     return [  1  ]\n04  <span class=\"if\">endif</span>",
    "choices": ["stack[top]", "stack[top - 1]", "stack[top = top - 1]", "top"],
    "specific_explanation": "1. ポインタ（Top）の移動\n   今回は「参照だけ」なので、ポインタ <span class=\"italic\">top</span> を移動させてはいけません。現在の <span class=\"italic\">top</span> が指す位置をそのまま使いましょう。\n\n2. LIFO（後入れ先出し）\n   スタックのルールでは、常に <span class=\"italic\">top</span> が指している場所が「最後に入れた最新のデータ」です。\n   <div class=\"important\">return stack[top]</div>"
  },
  {
    "id": 245,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "スタックの閾値判定",
    "text": "スタックにデータを追加する前に、これ以上データが入らない状態（満杯）かどうかを判定したい。空欄 [  1  ] に入る適切な条件式を選んでください。",
    "example": "MAX_SIZE = 10 のとき、top = 10 ならこれ以上 Push できない",
    "code": "01  push(整数型: data)\n02  <span class=\"if\">if ([  1  ])</span>\n03     output \"エラー：オーバーフロー\"\n04  <span class=\"if\">else</span>\n05     top = top + 1\n06     stack[top] = data\n07  <span class=\"if\">endif</span>",
    "choices": ["top == MAX_SIZE", "top < MAX_SIZE", "top == 0", "top > MAX_SIZE"],
    "specific_explanation": "1. オーバーフローのガード\n   <span class=\"italic\">top</span> が配列サイズの上限である <span class=\"italic\">MAX_SIZE</span> に達した時に、データの追加を禁止する必要があります。\n\n2. 境界の判定\n   ポインタが上限と等しい（<span class=\"italic\">==</span>）状態が「満杯」を指します。\n   <div class=\"important\">if (top == MAX_SIZE)</div>"
  },
  {
    "id": 246,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "スタックの閾値判定",
    "text": "スタックからデータを取り出す前に、データが一つも入っていない状態（空）かどうかを判定したい。空欄 [  1  ] に入る条件式を選んでください。",
    "example": "初期状態 top = 0 のとき、Pop を試みるとエラーになる",
    "code": "01  pop()\n02  <span class=\"if\">if ([  1  ])</span>\n03     output \"エラー：アンダーフロー\"\n04  <span class=\"if\">else</span>\n05     整数型: v = stack[top]\n06     top = top - 1\n07     return v\n08  <span class=\"if\">endif</span>",
    "choices": ["top == 0", "top > 0", "top != 0", "top == MAX_SIZE"],
    "specific_explanation": "1. アンダーフローのガード\n   <span class=\"italic\">top</span> が初期値である <span class=\"italic\">0</span> の時に <span class=\"italic\">Pop</span> しようとしていないか確認します。データがないのに取り出そうとする操作を防ぎます。\n\n2. 空の状態の定義\n   スタックに一つもデータがないことは、ポインタが <span class=\"italic\">0</span> を指していることで判定します。\n   <div class=\"important\">if (top == 0)</div>"
  },
  {
    "id": 247,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "スタックの閾値判定",
    "text": "スタックが「満杯ではない」ときだけデータを追加する処理です。空欄 [  1  ] に入る継続条件として適切なものを選んでください。",
    "example": "MAX_SIZE = 5, top = 4 のときは追加可能だが、top = 5 では追加できない",
    "code": "01  safePush(整数型: data)\n02  <span class=\"if\">if ([  1  ])</span>\n03     top = top + 1\n04     stack[top] = data\n05  <span class=\"if\">endif</span>",
    "choices": ["top < MAX_SIZE", "top <= MAX_SIZE", "top == MAX_SIZE", "top > 0"],
    "specific_explanation": "1. オーバーフローのガード\n   次に <span class=\"italic\">top + 1</span> をしても上限を超えないかを事前に確認します。つまり、現在の <span class=\"italic\">top</span> が <span class=\"italic\">MAX_SIZE</span> より小さい（未満）ことが条件となります。\n\n2. 境界の意識\n   <span class=\"italic\">top == MAX_SIZE</span> になってからでは遅いため、「未満」の判定を用います。\n   <div class=\"important\">if (top < MAX_SIZE)</div>"
  },
  {
    "id": 248,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "スタックの閾値判定",
    "text": "スタックが「空ではない」ことを判定する関数 isNotEmpty を作成します。空欄に入る論理式を選んでください。",
    "example": "top = 1 なら 真（true）、top = 0 なら 偽（false）を返す",
    "code": "01  論理型: isNotEmpty()\n02  return [  1  ]",
    "choices": ["top > 0", "top == 0", "top < MAX_SIZE", "top != MAX_SIZE"],
    "specific_explanation": "1. アンダーフローのガード\n   スタックが空でない、つまりデータが1つ以上存在することは、ポインタが初期値 <span class=\"italic\">0</span> より大きいことで示されます。\n\n2. 状態の反転\n   「空（<span class=\"italic\">top == 0</span>）」の反対は「空ではない（<span class=\"italic\">top > 0</span>）」となります。\n   <div class=\"important\">return top > 0</div>"
  },
  {
    "id": 249,
    "category": "データ構造",
    "theme": "スタック",
    "subtheme": "スタックの閾値判定",
    "text": "スタックが満杯のとき、それ以上 Push しようとするとエラーを返すロジックを考えます。空欄 [  1  ] に入る値を選んでください。",
    "example": "MAX_SIZE = 8, top = 8 のとき、エラー（-1）を返す",
    "code": "01  整数型: pushWithCheck(整数型: data)\n02  <span class=\"if\">if (top >= [  1  ])</span>\n03     return -1 // エラーコード\n04  <span class=\"if\">endif</span>\n05  top = top + 1\n06  stack[top] = data\n07  return 0 // 正常終了",
    "choices": ["MAX_SIZE", "0", "MAX_SIZE - 1", "top + 1"],
    "specific_explanation": "1. オーバーフローのガード\n   <span class=\"italic\">top</span> が <span class=\"italic\">MAX_SIZE</span> 以上になった場合に処理を中断させ、配列の範囲外アクセスを防ぎます。\n\n2. 安全性の確保\n   「等しい」だけでなく「以上（<span class=\"italic\">>=</span>）」を使うことで、万が一ポインタが上限を超えてしまった場合でも確実にガードが働くようになります。\n   <div class=\"important\">if (top >= MAX_SIZE)</div>"
  },
  {
    "id": 250,
    "category": "データ構造",
    "theme": "2分木",
    "subtheme": "親子・兄弟の参照計算",
    "text": "完全2分木を配列で表現します。親ノードの添え字を i としたとき、「左側の子」の添え字を求める式として正しいものはどれですか。なお、添え字は 1 から始まるものとします。",
    "example": "親が 1 番のとき → 左の子は 2 番\n親が 3 番のとき → 左の子は 6 番",
    "code": "01  getLeftChild(整数型: i)\n02  整数型: left\n03  left = [  1  ]\n04  return left",
    "choices": ["i * 2", "i + 1", "i * 2 + 1", "i * i"],
    "specific_explanation": "1. 配列による表現\n   2分木を配列に並べると、親の番号を <span class=\"italic\">2倍</span> することで、そのすぐ下の段にある「左の子」の番号に辿り着けます。\n   <div class=\"important\">left = i * 2</div>\n\n2. 分岐の条件判定\n   この規則的な計算のおかげで、ポインタを使わなくても配列の添え字だけで親子関係を移動できます。"
  },
  {
    "id": 251,
    "category": "データ構造",
    "theme": "2分木",
    "subtheme": "親子・兄弟の参照計算",
    "text": "同様に、親ノードの添え字を i としたとき、「右側の子」の添え字を求める式を選んでください。添え字は 1 から始まります。",
    "example": "親が 1 番のとき → 右の子は 3 番\n親が 4 番のとき → 右の子は 9 番",
    "code": "01  getRightChild(整数型: i)\n02  整数型: right\n03  right = [  1  ]\n04  return right",
    "choices": ["i * 2 + 1", "i * 2", "i + 2", "i * 3"],
    "specific_explanation": "1. 配列による表現\n   左の子が <span class=\"italic\">i * 2</span> なので、そのすぐ隣にある「右の子」はそれに <span class=\"italic\">1</span> を足した番号になります。\n   <div class=\"important\">right = i * 2 + 1</div>\n\n2. 分岐の条件判定\n   左か右かによって、現在の番号を <span class=\"italic\">2倍</span> するか <span class=\"italic\">2倍+1</span> するかを選び分けるのが2分木の基本です。"
  },
  {
    "id": 252,
    "category": "データ構造",
    "theme": "2分木",
    "subtheme": "親子・兄弟の参照計算",
    "text": "逆に、あるノードの添え字を j としたとき、その「親ノード」の添え字を求める式として適切なものはどれですか。なお、割り算の結果は小数点以下を切り捨てるものとします。",
    "example": "子が 6 番または 7 番のとき → 親は 3 番\n子が 2 番または 3 番のとき → 親は 1 番",
    "code": "01  getParent(整数型: j)\n02  整数型: parent\n03  parent = [  1  ]\n04  return parent",
    "choices": ["j / 2", "j - 2", "(j - 1) / 2", "j / 2 + 1"],
    "specific_explanation": "1. 配列による表現\n   親から子へは「2倍」したので、子から親へは逆に「2で割る」ことで戻れます。\n\n2. 分岐の条件判定\n   左の子（偶数）でも右の子（奇数）でも、<span class=\"italic\">2</span> で割って端数を切り捨てれば、同じ親の番号にたどり着くことができます。\n   <div class=\"important\">parent = j / 2</div>"
  },
  {
    "id": 253,
    "category": "データ構造",
    "theme": "2分木",
    "subtheme": "親子・兄弟の参照計算",
    "text": "2分探索木において、新しい値 value を追加します。現在のノード tree[i] よりも value が「小さい」場合、次に進むべき添え字 i の更新式を選んでください。",
    "example": "tree[1] = 50, value = 30 のとき、次は左の子（i = 2）へ進む",
    "code": "01  insert(整数型: value)\n02  整数型: i = 1\n03  <span class=\"if\">if (value < tree[i])</span>\n04     i = [  1  ]\n05  <span class=\"if\">endif</span>",
    "choices": ["i * 2", "i * 2 + 1", "i + 1", "i / 2"],
    "specific_explanation": "1. 分岐の条件判定\n   2分探索木には「小さいものは左、大きいものは右」というルールがあります。\n\n2. 配列による表現\n   「左へ進む」ことは、添え字を <span class=\"italic\">i * 2</span> に更新することを意味します。\n   <div class=\"important\">i = i * 2</div>"
  },
  {
    "id": 254,
    "category": "データ構造",
    "theme": "2分木",
    "subtheme": "親子・兄弟の参照計算",
    "text": "2分探索木において、現在のノード tree[i] よりも追加したい値 value が「大きい」場合に、右の子へ進むための更新式を選んでください。",
    "example": "tree[1] = 50, value = 70 のとき、次は右の子（i = 3）へ進む",
    "code": "01  insertRight(整数型: value)\n02  整数型: i = 1\n03  <span class=\"if\">if (value > tree[i])</span>\n04     i = [  1  ]\n05  <span class=\"if\">endif</span>",
    "choices": ["i * 2 + 1", "i * 2", "i + 2", "i * 2 - 1"],
    "specific_explanation": "1. 分岐の条件判定\n   値が大きい場合は右側の枝を辿ります。\n\n2. 配列による表現\n   「右の子」の添え字は、親の添え字を <span class=\"italic\">2倍して1を足した</span> 数値でしたね。\n   <div class=\"important\">i = i * 2 + 1</div>"
  },
  {
    "id": 255,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "行・列の走査",
    "text": "縦が row、横が col の要素を持つ2次元配列 matrix のすべての要素を 0 で初期化する処理です。内側のループの終了条件 [ a ] に入る適切な変数を選んでください。",
    "example": "外側のループ変数 i が「何行目か」を指しています。では、内側のループ変数 j は「1行の中で横に何回進むか」を表すことになります。",
    "code": "1  clearArray(整数型の2次元配列: matrix, 整数型: row, 整数型: col)\n2  <span class=\"for\">for (i を 1 から row まで 1 ずつ増やす)</span>\n3     <span class=\"for\">for (j を 1 から [  a  ] まで 1 ずつ増やす)</span>\n4        matrix[i, j] ← 0\n5     <span class=\"endfor\">endfor</span>\n6  <span class=\"endfor\">endfor</span>",
    "choices": [
      "col",
      "row",
      "i",
      "j"
    ],
    "specific_explanation": "1. インデックスの役割固定\n   外側のループ変数 i を「行（縦）」、内側のループ変数 j を「列（横）」と固定して考えます。これにより、1行ごとの処理を上から下へ繰り返す構造になります。\n\n2. 参照順序の特定\n   1つの行に対して、左端（1列目）から右端（最後の列）まで順番に 0 を代入するため、内側のループは列の最大数である col まで繰り返す必要があります。\n   <div class=\"important\">横方向（列）の走査は col まで繰り返す</div>"
  },
  {
    "id": 256,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "行・列の走査",
    "text": "2次元配列 matrix から、指定した特定の列（targetCol）の値だけを縦に合計するプログラムです。空欄 [ a ] に入る、配列を正しく参照する式を選んでください。",
    "example": "targetCol が 3 のとき、合計したいのは matrix[1, 3]、matrix[2, 3]、matrix[3, 3]…というように、縦に並んだデータです。",
    "code": "1  sumColumn(整数型の2次元配列: matrix, 整数型: row, 整数型: targetCol)\n2  整数型: sum ← 0\n3  <span class=\"for\">for (i を 1 から row まで 1 ずつ増やす)</span>\n4     sum ← sum + [  a  ]\n5  <span class=\"endfor\">endfor</span>\n6  return sum",
    "choices": [
      "matrix[i, targetCol]",
      "matrix[targetCol, i]",
      "matrix[i, i]",
      "matrix[1, targetCol]"
    ],
    "specific_explanation": "1. インデックスの役割固定\n   行（縦）のインデックスとしてループ変数 i を使用します。指定された列（targetCol）は固定されたまま、行だけが 1, 2, 3... と変化していきます。\n\n2. 参照順序の特定\n   一般的に 2次元配列は matrix[行, 列] の順で参照します。今回は「行」が i、「列」が targetCol となるため、この2つを正しい順序で指定します。\n   <div class=\"important\">matrix[行の変数, 固定された列]</div>"
  },
  {
    "id": 257,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "行・列の走査",
    "text": "2次元配列 matrix の中から、目的の値（target）を探し出し、見つかった場合はその位置を `{行, 列}` の形式で返すプログラムです。空欄 [ a ] に入る適切な戻り値を選んでください。",
    "example": "目的の値が見つかったとき、その値が存在している場所（座標）は、現在実行しているループの変数によって表されます。",
    "code": "1  findValue(整数型の2次元配列: matrix, 整数型: row, 整数型: col, 整数型: target)\n2  <span class=\"for\">for (i を 1 から row まで 1 ずつ増やす)</span>\n3     <span class=\"for\">for (j を 1 から col まで 1 ずつ増やす)</span>\n4        <span class=\"if\">if (matrix[i, j] == target)</span>\n5           return [  a  ]\n6        <span class=\"endif\">endif</span>\n7     <span class=\"endfor\">endfor</span>\n8  <span class=\"endfor\">endfor</span>\n9  return {-1, -1}",
    "choices": [
      "{i, j}",
      "{j, i}",
      "matrix[i, j]",
      "target"
    ],
    "specific_explanation": "1. インデックスの役割固定\n   外側のループ変数 i が「行（縦）」、内側のループ変数 j が「列（横）」の現在位置を管理しています。\n\n2. 参照順序の特定\n   値が一致した場合、その時点の i と j がそのまま目的の座標になります。戻り値の指定が `{行, 列}` の順であるため、変数もその通りに並べて返します。\n   <div class=\"important\">見つかったときの位置は {i, j} となる</div>"
  },
  {
    "id": 258,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "行・列の走査",
    "text": "縦横が同じ size の正方行列において、左上から右下へ向かう対角線上の要素だけを 1 に、それ以外を 0 にする（単位行列を作る）プログラムです。1 を代入するための条件式 [ a ] を選んでください。",
    "example": "左上から右下への対角線上にあるマス目の座標は、[1, 1]、[2, 2]、[3, 3] のように規則的に並んでいます。行（i）と列（j）の関係に注目しましょう。",
    "code": "1  createIdentity(整数型の2次元配列: matrix, 整数型: size)\n2  <span class=\"for\">for (i を 1 から size まで 1 ずつ増やす)</span>\n3     <span class=\"for\">for (j を 1 から size まで 1 ずつ増やす)</span>\n4        <span class=\"if\">if ([  a  ])</span>\n5           matrix[i, j] ← 1\n6        <span class=\"else\">else</span>\n7           matrix[i, j] ← 0\n8        <span class=\"endif\">endif</span>\n9     <span class=\"endfor\">endfor</span>\n10 <span class=\"endfor\">endfor</span>",
    "choices": [
      "i == j",
      "i > j",
      "i + j == size",
      "matrix[i, j] == 0"
    ],
    "specific_explanation": "1. インデックスの役割固定\n   2重ループにおいて、変数 i と j がそれぞれどの座標を指しているかを追います。すべてのマス目を1つずつ走査していきます。\n\n2. 参照順序の特定\n   左上から右下の対角線は、「1行目の1列目」「2行目の2列目」というように、行の番号と列の番号が一致する場所です。したがって、i と j が等しいときに 1 をセットします。\n   <div class=\"important\">対角線上の要素は 行と列のインデックスが等しい (i == j)</div>"
  },
  {
    "id": 259,
    "category": "データ構造",
    "theme": "多次元配列",
    "subtheme": "行・列の走査",
    "text": "2次元配列 matrix から、指定した特定の行（targetRow）の値だけを横に合計するプログラムです。空欄 [ a ] に入る、配列を正しく参照する式を選んでください。",
    "example": "targetRow が 2 のとき、合計したいのは matrix[2, 1]、matrix[2, 2]、matrix[2, 3]…というように、横に並んだデータです。",
    "code": "1  sumRow(整数型の2次元配列: matrix, 整数型: col, 整数型: targetRow)\n2  整数型: sum ← 0\n3  <span class=\"for\">for (j を 1 から col まで 1 ずつ増やす)</span>\n4     sum ← sum + [  a  ]\n5  <span class=\"endfor\">endfor</span>\n6  return sum",
    "choices": [
      "matrix[targetRow, j]",
      "matrix[j, targetRow]",
      "matrix[targetRow, targetRow]",
      "matrix[j, j]"
    ],
    "specific_explanation": "1. インデックスの役割固定\n   横（列）のインデックスとしてループ変数 j を使用しています。指定された行（targetRow）は固定されたまま、列だけが 1, 2, 3... と右へ進んでいきます。\n\n2. 参照順序の特定\n   一般的に 2次元配列は matrix[行, 列] の順で参照します。今回は「行」が固定値 targetRow、「列」がループ変数 j となるため、この順番で指定します。\n   <div class=\"important\">matrix[固定された行, 列の変数]</div>"
  },
  {
    "id": 260,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "配列 data から目的の値 target を探すプログラムです。目的の値が見つかるか、配列の最後まで調べ終わるまでループを続けるためのフラグ変数 found の初期値 [  a  ] を選んでください。",
    "example": "まだ何も調べていない開始時点では、「見つかった」という状態でしょうか、それとも「まだ見つかっていない」状態でしょうか。",
    "code": "01  search(整数型の配列: data, 整数型: n, 整数型: target)\n02  論理型: found ← [  a  ]\n03  整数型: i ← 1\n04  <span class=\"while\">while (found = false and i ≤ n)</span>\n05     <span class=\"if\">if (data[i] = target)</span>\n06        found ← true\n07     <span class=\"if\">endif</span>\n08     i ← i + 1\n09  <span class=\"while\">endwhile</span>\n10  return found",
    "choices": [
      "false",
      "true",
      "0",
      "1"
    ],
    "specific_explanation": "1. フラグの初期化\n   while 文の条件式に使用する found は、ループ開始前に適切な状態にしておく必要があります。\n\n2. 変数の変化\n   探す前は「まだ見つかっていない」ため、初期値は false とし、見つかった時点で true に更新してループを抜けます。\n   <div class=\"important\">found ← false で初期化する</div>"
  },
  {
    "id": 261,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "入力された数値 num が 0 になるまで合計を加算し続けるプログラムです。空欄 [  a  ] に入る処理を選んでください。ここで、readInput() とは、入力した値を受け取る関数です。",
    "example": "while 文の条件式 num ≠ 0 が最初に評価されるとき、num の中にどんな値が入っていればループに入れますか。",
    "code": "01  sumInput()\n02  整数型: sum ← 0, num\n03  [      a      ]\n04  <span class=\"while\">while (num ≠ 0)</span>\n05     sum ← sum + num\n06     num ← readInput()  /* 外部から数値を読み込む */\n07  <span class=\"while\">endwhile</span>\n08  return sum",
    "choices": [
      "num ← readInput()",
      "num ← 0",
      "num ← sum",
      "sum ← num"
    ],
    "specific_explanation": "1. フラグの初期化\n   while 文は最初に条件判定を行うため、判定に使われる変数（ここでは num）に意味のある初期値を入れておく必要があります。\n\n2. 変数の変化\n   最初に一度読み込んでおくことで、num ≠ 0 の判定が正しく機能し、0 が入力されたら即座に終了するようになります。\n   <div class=\"important\">ループに入る前に最初のデータを読み込む</div>"
  },
  {
    "id": 262,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "パスワードの入力チェックを行うプログラムです。この while 文を終了して次の処理へ進むための「終了条件」を論理式で表したものを選んでください。（※ コード中の継続条件の逆を考えます）",
    "example": "while 文の継続条件が「isCorrect = false かつ count < 3」のとき、これが偽になる状況を考えてみましょう。",
    "code": "01  checkPassword(文字列型: correctPass)\n02  論理型: isCorrect ← false\n03  整数型: count ← 0\n04  <span class=\"while\">while (isCorrect = false and count < 3)</span>\n05     入力パスワード ← readInput()\n06     <span class=\"if\">if (入力パスワード = correctPass)</span>\n07        isCorrect ← true\n08     <span class=\"if\">else</span>\n09        count ← count + 1\n10     <span class=\"if\">endif</span>\n11  <span class=\"while\">endwhile</span>\n12  return isCorrect",
    "choices": [
      "isCorrect = true or count ≥ 3",
      "isCorrect = true and count ≥ 3",
      "isCorrect = false or count < 3",
      "isCorrect = false and count < 3"
    ],
    "specific_explanation": "1. フラグの初期化\n   ループ前には isCorrect ← false、count ← 0 と初期化されています。\n\n2. 異常系の考慮\n   継続条件の否定（ド・モルガンの法則）が終了条件となります。パスワードが一致した（true）、または制限回数に達した（≥ 3）のどちらか一方でループを抜けます。\n   <div class=\"important\">終了条件：(isCorrect = true) or (count ≥ 3)</div>"
  },
  {
    "id": 263,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "フラグによる終了判定",
    "text": "データ通信プログラムで、データを受信するまで待機する処理です。変数 status が \"READY\" になるまで待つループを構築したい場合、空欄 [  a  ] に入る適切な条件式を選んでください。",
    "example": "「READY になるまで待ち続ける」とは、「READY ではない間ループを続ける」という意味になります。これを条件式に当てはめてみましょう。",
    "code": "01  waitConnection()\n02  文字列型: status ← \"WAITING\"\n03  <span class=\"while\">while ([      a      ])</span>\n04     status ← checkStatus()\n05     sleep(1)  /* 1秒待機 */\n06  <span class=\"while\">endwhile</span>\n07  return",
    "choices": [
      "status ≠ \"READY\"",
      "status = \"READY\"",
      "status = \"WAITING\"",
      "status ≠ \"WAITING\""
    ],
    "specific_explanation": "1. フラグの初期化\n   初期状態のフラグは \"WAITING\" であり、ループ内の checkStatus() が新しい状態を返して上書きします。\n\n2. 無限ループ回避\n   「READY になるまで繰り返す」とは「READY ではない間ループを継続する」という意味です。フラグが \"READY\" に更新された時点でループを抜けます。\n   <div class=\"important\">while (status ≠ \"READY\")</div>"
  },
  {
    "id": 264,
    "category": "制御構文",
    "theme": "while文",
    "subtheme": "無限ループ回避",
    "text": "配列 data に含まれる正の数だけを順番に処理し、0または負の数（終端記号）が現れた時点で処理を即座に打ち切るプログラムです。空欄 [  a  ] に入る適切な継続条件を選んでください。",
    "example": "data[i] がどのような値のとき「まだ処理を続けてよい」と判断できるか考えてみましょう。0 が来たらどうしたいですか。",
    "code": "01  processPositiveData(整数型の配列: data)\n02  整数型: i ← 1\n03  <span class=\"while\">while ([      a      ])</span>\n04     /* 正の数に対する処理 */\n05     i ← i + 1\n06  <span class=\"while\">endwhile</span>\n07  return i - 1",
    "choices": [
      "data[i] > 0",
      "data[i] < 0",
      "data[i] = 0",
      "data[i] ≠ 0"
    ],
    "specific_explanation": "1. 変数の変化\n   正の数である間は処理を続行したいため、現在の要素 data[i] が 0 より大きいことが継続条件となります。条件を満たさなくなった時点でループは終了します。\n\n2. 異常系の考慮\n   この配列では、0 以下の数が終端を示す番兵（センチネル）のような役割を果たしています。\n   <div class=\"important\">while (data[i] > 0)</div>"
  },
  {
    "id": 265,
    "category": "データ構造",
    "theme": "キュー",
    "subtheme": "Enq/Deq操作",
    "text": "キューにデータを追加する Enq 操作のプログラムです。データを配列 queue の Tail が示す位置に格納した後、空欄 [  a  ] に入る適切な処理を選んでください。",
    "example": "Tail = 3 のとき、value を格納し終えた直後に Tail はいくつになるべきか考えてみましょう。",
    "code": "01  enqueue(整数型の配列: queue, 整数型: Tail, 整数型: value)\n02  queue[Tail] ← value\n03  [  a  ]",
    "choices": [
      "Tail ← Tail + 1",
      "Head ← Head + 1",
      "Tail ← Tail - 1",
      "Tail ← 0"
    ],
    "specific_explanation": "1. 二つのポインタ\n   キューは「入口（Tail）」と「出口（Head）」の 2 つのポインタで管理します。Enq 操作はデータを Tail の位置に格納する操作であり、格納後は次の空き位置を示すために Tail を 1 進める必要があります。\n\n2. FIFO（先入れ先出し）\n   データを入れるたびに Tail だけが進み、Head はそのままです。こうすることで「先に入れたデータが Head 側に残り続ける」という FIFO の性質が保たれます。\n   <div class=\"important\">Tail ← Tail + 1</div>"
  },

  // ---------------------------------------------------------------
  // id 266  Enq/Deq操作
  // 内容: Deq 操作で Head ポインタが進む処理を問う
  // ---------------------------------------------------------------
  {
    "id": 266,
    "category": "データ構造",
    "theme": "キュー",
    "subtheme": "Enq/Deq操作",
    "text": "キューからデータを取り出す Deq 操作のプログラムです。Head が示す位置の値を取得した後、空欄 [  a  ] に入る適切な処理を選んでください。",
    "example": "Head = 1 のとき、queue[1] の値を取り出した直後に Head はいくつになるべきか考えてみましょう。",
    "code": "01  dequeue(整数型の配列: queue, 整数型: Head)\n02  整数型: value ← queue[Head]\n03  [  a  ]\n04  return value",
    "choices": [
      "Head ← Head + 1",
      "Tail ← Tail + 1",
      "Head ← Head - 1",
      "Head ← 0"
    ],
    "specific_explanation": "1. 二つのポインタ\n   Deq 操作はデータを Head の位置から取り出す操作です。取り出し後は次に取り出すべき位置を示すために Head を 1 進める必要があります。Tail はそのままで変化しません。\n\n2. FIFO（先入れ先出し）\n   データを出すたびに Head だけが進むことで、最初に入れたデータから順に取り出せます。Tail（入口）と Head（出口）が独立して動くことが FIFO の仕組みの核心です。\n   <div class=\"important\">Head ← Head + 1</div>"
  },

  // ---------------------------------------------------------------
  // id 267  Enq/Deq操作
  // 内容: 複数回の Enq/Deq 後の Head・Tail の状態と次の取り出し値を問う
  // ---------------------------------------------------------------
  {
    "id": 267,
    "category": "データ構造",
    "theme": "キュー",
    "subtheme": "Enq/Deq操作",
    "text": "空のキュー（Head = 1, Tail = 1）に対して、10, 20, 30 の順に Enq を 3 回行い、その後 Deq を 2 回行いました。このとき、次に Deq で取り出される値として正しいものを選んでください。",
    "example": "Enq するたびに Tail が進み、Deq するたびに Head が進みます。最終的な Head の位置はどこを指していますか。",
    "code": "01  /* 初期状態: Head = 1, Tail = 1 */\n02  enqueue(queue, Tail, 10)  /* Tail: 1 → 2 */\n03  enqueue(queue, Tail, 20)  /* Tail: 2 → 3 */\n04  enqueue(queue, Tail, 30)  /* Tail: 3 → 4 */\n05  dequeue(queue, Head)      /* Head: 1 → 2, 戻り値: 10 */\n06  dequeue(queue, Head)      /* Head: 2 → 3, 戻り値: 20 */\n07  /* 次の Deq では何が返るか？ */",
    "choices": [
      "30",
      "10",
      "20",
      "取り出せない（キューが空）"
    ],
    "specific_explanation": "1. 二つのポインタ\n   3 回の Enq で Tail は 1 → 4 に進み、queue[1]=10, queue[2]=20, queue[3]=30 が格納されます。その後 2 回の Deq で Head は 1 → 3 に進みます。次の Deq は Head = 3 の位置、すなわち queue[3] を参照します。\n\n2. FIFO（先入れ先出し）\n   最初に入れた 10 が最初に取り出され、次に 20、その次に 30 が取り出されます。入れた順番通りに出てくるのが FIFO（先入れ先出し）の性質です。\n   <div class=\"important\">Head = 3 → queue[3] = 30</div>"
  },
  // ===================================================================
  // 新規作成問題
  // 対象 id: 268, 269, 270
  // category: "データ構造" / theme: "2分木" / subtheme: "木の巡回（走査順序）"
  // ===================================================================

  // 対象の木（3問共通）
  //         1
  //        / \
  //       2   3
  //      / \
  //     4   5
  //
  // 行きがけ順  (preorder)  : 1 → 2 → 4 → 5 → 3
  // 通りがけ順  (inorder)   : 4 → 2 → 5 → 1 → 3
  // 帰りがけ順  (postorder) : 4 → 5 → 2 → 3 → 1

  // ---------------------------------------------------------------
  // id 268  木の巡回（走査順序）
  // 内容: 行きがけ順（preorder）のコードを読んで出力順序を答える
  // ---------------------------------------------------------------
  {
    "id": 268,
    "category": "データ構造",
    "theme": "2分木",
    "subtheme": "木の巡回（走査順序）",
    "text": "次の再帰関数 traverse は、2分木を巡回してノードの値を順に出力します。下の木に対して traverse(root) を呼び出したとき、出力される順序として正しいものを選んでください。",
    "example": "1行目の print がどのタイミングで実行されるか（左の子を辿る前か後か）に注目してみましょう。",
    "code": "01  traverse(node)\n02  <span class=\"if\">if (node ≠ null)</span>\n03     print(node.value)\n04     traverse(node.left)\n05     traverse(node.right)\n06  <span class=\"if\">endif</span>\n\n/* 対象の木 */\n/*       1      */\n/*      / \\    */\n/*     2   3   */\n/*    / \\      */\n/*   4   5     */",
    "choices": [
      "1, 2, 4, 5, 3",
      "4, 2, 5, 1, 3",
      "4, 5, 2, 3, 1",
      "1, 3, 2, 5, 4"
    ],
    "specific_explanation": "1. 巡回パターンの把握\n   print が「左の子を辿る前（03行目）」に実行されています。これは「ノードに到達した瞬間（行きがけ）」に値を拾う行きがけ順（preorder）です。根 → 左部分木 → 右部分木 の順に処理が進みます。\n\n   実際の動きを追うと、まず root(1) に到達して 1 を出力、次に左の 2 に進んで 2 を出力、さらに左の 4 に進んで 4 を出力、4 の左右は null なので戻り 5 に進んで 5 を出力、最後に右の 3 に進んで 3 を出力します。\n   <div class=\"important\">行きがけ順（preorder）: 1 → 2 → 4 → 5 → 3</div>"
  },

  // ---------------------------------------------------------------
  // id 269  木の巡回（走査順序）
  // 内容: 出力結果を見て通りがけ順（inorder）だと特定する
  // ---------------------------------------------------------------
  {
    "id": 269,
    "category": "データ構造",
    "theme": "2分木",
    "subtheme": "木の巡回（走査順序）",
    "text": "下の木に対してある巡回プログラムを実行すると、出力が「4, 2, 5, 1, 3」になりました。この巡回はどの順序ですか。また、print の位置として正しいものを選んでください。",
    "example": "根ノード（値が 1）が出力される位置に注目してみましょう。1 が先頭でも末尾でもなく途中に現れていますね。",
    "code": "01  traverse(node)\n02  <span class=\"if\">if (node ≠ null)</span>\n03     traverse(node.left)\n04     [    print の位置    ]\n05     traverse(node.right)\n06  <span class=\"if\">endif</span>\n\n/* 対象の木・出力結果 */\n/*       1          出力: 4, 2, 5, 1, 3  */\n/*      / \\                              */\n/*     2   3                             */\n/*    / \\                               */\n/*   4   5                               */",
    "choices": [
      "通りがけ順（inorder）/ 左を辿った後・右を辿る前",
      "行きがけ順（preorder）/ 左を辿る前",
      "帰りがけ順（postorder）/ 左右を辿った後",
      "幅優先順（BFS）/ 根から階層ごと"
    ],
    "specific_explanation": "1. 巡回パターンの把握\n   根ノード（1）が出力列の 4 番目に現れている点が手がかりです。根が「先頭でも末尾でもなく中間」に現れるのは、左部分木の処理が終わってから根を出力し、その後で右部分木を処理する通りがけ順（inorder）の特徴です。\n\n   左部分木（4 → 2 → 5）をすべて処理した後に根（1）を出力し、最後に右部分木（3）を処理するため、print は「左を辿った後・右を辿る前」の位置に置かれます。\n   <div class=\"important\">通りがけ順（inorder）: 左 → 根 → 右</div>"
  },

  // ---------------------------------------------------------------
  // id 270  木の巡回（走査順序）
  // 内容: 帰りがけ順（postorder）のコードの空欄を埋める
  // ---------------------------------------------------------------
  {
    "id": 270,
    "category": "データ構造",
    "theme": "2分木",
    "subtheme": "木の巡回（走査順序）",
    "text": "下の木を帰りがけ順（postorder）で巡回し、「4, 5, 2, 3, 1」と出力したいと考えています。空欄 [  a  ] に入る適切な処理を選んでください。",
    "example": "帰りがけ順では、根ノード（値が 1）は出力列の一番最後に現れます。print がどのタイミングで呼ばれれば、根が最後になるか考えてみましょう。",
    "code": "01  traverse(node)\n02  <span class=\"if\">if (node ≠ null)</span>\n03     traverse(node.left)\n04     traverse(node.right)\n05     [    a    ]\n06  <span class=\"if\">endif</span>\n\n/* 対象の木・期待する出力 */\n/*       1          出力: 4, 5, 2, 3, 1  */\n/*      / \\                              */\n/*     2   3                             */\n/*    / \\                               */\n/*   4   5                               */",
    "choices": [
      "print(node.value)",
      "print(node.left)",
      "traverse(node.value)",
      "print(root.value)"
    ],
    "specific_explanation": "1. 巡回パターンの把握\n   帰りがけ順（postorder）は、左部分木 → 右部分木 の処理が両方終わった後に、そのノードの値を出力する方式です。print を左右の traverse より後（05行目）に置くことで、すべての子孫ノードを処理し終えてから「帰りがけ」に値を拾えます。\n\n   根（1）は最後に訪問されるため、出力列の末尾に現れます。木全体を葉から順に処理する必要がある「削除」や「サイズ計算」などの操作で活用される巡回順です。\n   <div class=\"important\">帰りがけ順（postorder）: 左 → 右 → 根</div>"
  },
  // ===================================================================
  // 新規作成問題
  // 対象 id: 271, 272, 273
  // category: "数値計算系" / theme: "論理演算" / subtheme: "ビットマスクによる抽出"
  // ===================================================================

  // ---------------------------------------------------------------
  // id 271  ビットマスクによる抽出
  // 内容: 特定のビット位置を調べるためのマスク値を選ぶ
  // ---------------------------------------------------------------
  {
    "id": 271,
    "category": "数値計算系",
    "theme": "論理演算",
    "subtheme": "ビットマスクによる抽出",
    "text": "8ビットの整数 flags の「3ビット目（右から3番目、0始まり）」が 1 かどうかを調べたいと考えています。AND 演算に使うマスク値として適切なものを選んでください。",
    "example": "右から0番目が 1（= 00000001）、1番目が 2（= 00000010）のとき、3番目は何になりますか。",
    "code": "01  整数型: flags, mask\n02  mask ← [    a    ]\n03  <span class=\"if\">if ((flags AND mask) ≠ 0)</span>\n04     /* 3ビット目が立っている場合の処理 */\n05  <span class=\"if\">endif</span>",
    "choices": [
      "8（= 00001000）",
      "3（= 00000011）",
      "4（= 00000100）",
      "16（= 00010000）"
    ],
    "specific_explanation": "1. 特定の桁を取り出す\n   調べたいビット位置だけを「1」にしたマスク値を作ります。右から 0 始まりで数えると、0ビット目が 1（2^0）、1ビット目が 2（2^1）、2ビット目が 4（2^2）、3ビット目が 8（2^3）となります。3ビット目のみを「1」にしたマスク値は 8（= 00001000）です。\n\n2. フラグの判定\n   flags AND 8 の結果が 0 でなければ（= 8 であれば）、3ビット目にフラグが立っていると判断できます。AND 演算はマスクが 0 の桁を必ず 0 にするため、マスクが 1 の桁だけを抽出できます。\n   <div class=\"important\">3ビット目のマスク値 = 2^3 = 8（= 00001000）</div>"
  },

  // ---------------------------------------------------------------
  // id 272  ビットマスクによる抽出
  // 内容: AND 演算の結果からフラグが立っているか判定する
  // ---------------------------------------------------------------
  {
    "id": 272,
    "category": "数値計算系",
    "theme": "論理演算",
    "subtheme": "ビットマスクによる抽出",
    "text": "flags = 45（= 00101101）に対してマスク値 8（= 00001000）で AND 演算を行いました。この結果から「3ビット目のフラグが立っているか」を正しく判定しているものを選んでください。",
    "example": "45（= 00101101）と 8（= 00001000）を桁ごとに AND してみましょう。3ビット目の値はそれぞれいくつですか。",
    "code": "01  整数型: flags ← 45  /* 00101101 */\n02  整数型: mask  ← 8   /* 00001000 */\n03  整数型: result ← flags AND mask\n04  /* result の値は？ → フラグの有無を判定する */",
    "choices": [
      "result = 0 なので、3ビット目のフラグは立っていない",
      "result = 8 なので、3ビット目のフラグが立っている",
      "result = 45 なので、フラグが全て立っている",
      "result = 1 なので、3ビット目のフラグが立っている"
    ],
    "specific_explanation": "1. 特定の桁を取り出す\n   45（00101101）と 8（00001000）を桁ごとに AND すると、3ビット目同士は「0 AND 1 = 0」となります。マスクが 1 の桁以外は全て 0 に潰されるため、result = 0 になります。\n\n2. フラグの判定\n   AND 演算の結果が 0 のとき、調べたビット位置は 0（フラグなし）と判断します。結果が 0 でない（マスク値と等しい）場合のみ「フラグが立っている」と判断できます。flags = 45 の 3ビット目は 0 であるため、フラグは立っていません。\n   <div class=\"important\">00101101 AND 00001000 = 00000000（result = 0）→ フラグなし</div>"
  },

  // ---------------------------------------------------------------
  // id 273  ビットマスクによる抽出
  // 内容: 複数フラグを持つ値から特定フラグの組み合わせを抽出・判定する
  // ---------------------------------------------------------------
  {
    "id": 273,
    "category": "数値計算系",
    "theme": "論理演算",
    "subtheme": "ビットマスクによる抽出",
    "text": "8ビットのフラグ変数 status に対して、0ビット目（読み取り権限）と 2ビット目（実行権限）の両方が立っているかを一度に確認したいと考えています。空欄 [  a  ] に入る適切なマスク値と判定式の組み合わせを選んでください。",
    "example": "0ビット目のマスクは 1（00000001）、2ビット目のマスクは 4（00000100）です。「両方」を一度に調べるにはどうすればよいでしょうか。",
    "code": "01  整数型: status\n02  整数型: mask ← [    a    ]\n03  <span class=\"if\">if ((status AND mask) = mask)</span>\n04     /* 読み取り権限と実行権限が両方ある場合の処理 */\n05  <span class=\"if\">endif</span>",
    "choices": [
      "5（= 00000101）",
      "3（= 00000011）",
      "1（= 00000001）",
      "7（= 00000111）"
    ],
    "specific_explanation": "1. 特定の桁を取り出す\n   複数のビットを同時に調べるには、調べたいビット位置をすべて「1」にしたマスク値を使います。0ビット目（1 = 00000001）と 2ビット目（4 = 00000100）の両方を「1」にした値は、1 OR 4 = 5（= 00000101）です。\n\n2. フラグの判定\n   「両方立っているか」を確認するには、(status AND mask) ≠ 0 ではなく (status AND mask) = mask と比較します。AND の結果がマスクと完全に一致した場合のみ、指定したビットがすべて 1 と確定できます。どちらか片方だけが立っている場合は結果がマスクより小さくなるため除外されます。\n   <div class=\"important\">mask = 5（00000101）/ (status AND mask) = mask で両方立っていると判定</div>"
  },

  // ===================================================================
  // 新規作成問題 id: 274 〜 288（5テーマ × 3問）
  //
  // 274~276: 数値計算系 > 端数処理 > 四捨五入のテクニック
  // 277~279: 数値計算系 > ビット演算 > 符号ビットの扱い
  // 280~282: 定番アルゴリズム系 > 探索 > 二分探索
  // 283~285: 定番アルゴリズム系 > 並べ替え > 隣接要素の比較
  // 286~288: 定番アルゴリズム系 > 並べ替え > 最小値の選択
  // ===================================================================


  // ===================================================================
  // 数値計算系 > 端数処理 > 四捨五入のテクニック
  // ===================================================================

  // ---------------------------------------------------------------
  // id 274  四捨五入のテクニック
  // 内容: 小数第1位で四捨五入する基本パターン（空欄補充）
  // ---------------------------------------------------------------
  {
    "id": 274,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "四捨五入のテクニック",
    "text": "実数 x を小数第1位で四捨五入して整数を求める関数です。数学関数を使わず、加算と整数型変換のみで実装します。空欄 [  a  ] に入る適切な式を選んでください。",
    "example": "x = 2.7 のとき結果は 3、x = 2.4 のとき結果は 2 になるはずです。それぞれ [  a  ] に各選択肢を当てはめて確認してみましょう。",
    "code": "01  実数型: round(実数型: x)\n02  整数型: result\n03  result ← 整数型([  a  ])\n04  return result",
    "choices": [
      "x + 0.5",
      "x + 1.0",
      "x - 0.5",
      "x × 2"
    ],
    "specific_explanation": "1. 0.5を足して切り捨てる\n   四捨五入を「0.5 を足してから小数点以下を切り捨てる」操作で再現します。x = 2.7 なら 2.7 + 0.5 = 3.2 → 整数型変換で 3 になります。x = 2.4 なら 2.4 + 0.5 = 2.9 → 整数型変換で 2 になります。\n\n   整数型への変換は小数点以下を切り捨てるため、0.5 以上の端数を持つ値だけが繰り上がります。これが数学的な四捨五入の定義と一致します。\n   <div class=\"important\">整数型(x + 0.5) で四捨五入を再現する</div>"
  },

  // ---------------------------------------------------------------
  // id 275  四捨五入のテクニック
  // 内容: 小数第2位で四捨五入（×10 → +0.5 → 切り捨て → ÷10）
  // ---------------------------------------------------------------
  {
    "id": 275,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "四捨五入のテクニック",
    "text": "実数 x を小数第2位で四捨五入し、小数第1位までの値を返す関数です。空欄 [  a  ] に入る適切な処理を選んでください。",
    "example": "x = 3.75 のとき結果は 3.8、x = 3.74 のとき結果は 3.7 になるはずです。",
    "code": "01  実数型: roundAt1(実数型: x)\n02  整数型: tmp\n03  tmp ← 整数型([  a  ])\n04  return tmp ÷ 10.0",
    "choices": [
      "x × 10 + 0.5",
      "x + 0.5",
      "x × 10",
      "x × 100 + 0.5"
    ],
    "specific_explanation": "1. 0.5を足して切り捨てる\n   小数第1位より下で四捨五入したい場合、まず「判断させたい桁」を整数の位まで引き上げる必要があります。x を 10 倍することで小数第2位が整数の位に来ます。その後 0.5 を足して整数型に変換（切り捨て）することで四捨五入が完成します。\n\n   x = 3.75 なら 3.75 × 10 + 0.5 = 38.0 → 整数型で 38 → 38 ÷ 10.0 = 3.8 となります。最後に 10.0 で割ることで元の桁に戻します。\n   <div class=\"important\">整数型(x × 10 + 0.5) ÷ 10.0 で小数第1位に丸める</div>"
  },

  // ---------------------------------------------------------------
  // id 276  四捨五入のテクニック
  // 内容: 切り捨て・四捨五入の違いを数値で問う
  // ---------------------------------------------------------------
  {
    "id": 276,
    "category": "数値計算系",
    "theme": "端数処理",
    "subtheme": "四捨五入のテクニック",
    "text": "x = 2.5 のとき、切り捨てと四捨五入それぞれの結果として正しい組み合わせを選んでください。",
    "example": "「整数型(x)」と「整数型(x + 0.5)」のそれぞれに x = 2.5 を当てはめてみましょう。",
    "code": "01  実数型: x ← 2.5\n02  整数型: a ← 整数型(x)        /* 切り捨て */\n03  整数型: b ← 整数型(x + 0.5)  /* 四捨五入 */\n04  /* a と b の値は？ */",
    "choices": [
      "a = 2, b = 3",
      "a = 2, b = 2",
      "a = 3, b = 3",
      "a = 3, b = 4"
    ],
    "specific_explanation": "1. 0.5を足して切り捨てる\n   切り捨ては整数型への変換のみで実現します。x = 2.5 を整数型に変換すると小数部が捨てられ a = 2 となります。\n\n   四捨五入は 0.5 を足してから変換します。2.5 + 0.5 = 3.0 を整数型に変換すると b = 3 となります。0.5 の加算により「ちょうど半分」の値でも確実に繰り上がることが保証されます。\n   <div class=\"important\">切り捨て: 整数型(2.5) = 2 / 四捨五入: 整数型(2.5 + 0.5) = 3</div>"
  },


  // ===================================================================
  // 数値計算系 > ビット演算 > 符号ビットの扱い
  // ===================================================================

  // ---------------------------------------------------------------
  // id 277  符号ビットの扱い
  // 内容: MSBを確認するマスク値を選ぶ
  // ---------------------------------------------------------------
  {
    "id": 277,
    "category": "数値計算系",
    "theme": "ビット演算",
    "subtheme": "符号ビットの扱い",
    "text": "8ビット整数の符号（正か負か）を調べるため、最上位ビット（MSB = 7ビット目）だけを「1」にしたマスク値を使って AND 演算を行います。空欄 [  a  ] に入る適切なマスク値を選んでください。",
    "example": "右から 0ビット目が 1（2^0）、1ビット目が 2（2^1）……と続くとき、7ビット目は 2 の何乗になりますか。",
    "code": "01  整数型: value, mask\n02  mask ← [    a    ]\n03  <span class=\"if\">if ((value AND mask) ≠ 0)</span>\n04     /* MSB が 1 → 負の数 */\n05  <span class=\"if\">else</span>\n06     /* MSB が 0 → 正の数 */\n07  <span class=\"if\">endif</span>",
    "choices": [
      "128（= 10000000）",
      "64（= 01000000）",
      "255（= 11111111）",
      "1（= 00000001）"
    ],
    "specific_explanation": "1. 最上位ビットの確認\n   8ビット表現では、右から 0 始まりで数えた 7ビット目が符号ビット（MSB）です。2^7 = 128（= 10000000）がこのビットだけを「1」にしたマスク値となります。\n\n   value AND 128 の結果が 0 でなければ MSB が 1、つまり負の数と判定できます。MSB が 0 であれば正の数です。\n   <div class=\"important\">8ビットの MSB マスク = 2^7 = 128（= 10000000）</div>"
  },

  // ---------------------------------------------------------------
  // id 278  符号ビットの扱い
  // 内容: 与えられた8ビット値のMSBから正負を判定する
  // ---------------------------------------------------------------
  {
    "id": 278,
    "category": "数値計算系",
    "theme": "ビット演算",
    "subtheme": "符号ビットの扱い",
    "text": "次の3つの8ビット値に対して MSB（最上位ビット）を確認し、「正・負」を正しく分類しているものを選んでください。",
    "example": "2進数の一番左のビットが 0 なら正、1 なら負というルールで、それぞれの先頭桁を確認してみましょう。",
    "code": "01  /* 各値の2進表現 */\n02  A ← 00110101  /* 10進数: 53  */\n03  B ← 10000001  /* 10進数: 129 （符号あり:-127） */\n04  C ← 01111111  /* 10進数: 127 */",
    "choices": [
      "A: 正, B: 負, C: 正",
      "A: 正, B: 正, C: 負",
      "A: 負, B: 負, C: 正",
      "A: 正, B: 負, C: 負"
    ],
    "specific_explanation": "1. 最上位ビットの確認\n   8ビット符号あり整数では、左端（MSB）が 0 なら正の数、1 なら負の数と判断します。\n\n   A（00110101）は MSB = 0 → 正、B（10000001）は MSB = 1 → 負、C（01111111）は MSB = 0 → 正となります。10進数の大きさだけで判断すると誤りやすいため、必ずビット表現の先頭桁を確認することが重要です。\n   <div class=\"important\">MSB = 0 → 正 / MSB = 1 → 負</div>"
  },

  // ---------------------------------------------------------------
  // id 279  符号ビットの扱い
  // 内容: 符号判定の結果に基づく処理分岐を完成させる
  // ---------------------------------------------------------------
  {
    "id": 279,
    "category": "数値計算系",
    "theme": "ビット演算",
    "subtheme": "符号ビットの扱い",
    "text": "8ビット整数 value の符号を MSB で判定し、負であれば絶対値を返す関数です。空欄 [  a  ] に入る適切な式を選んでください。なお、8ビット符号あり整数では「負の数の絶対値 = 256 - value（符号なし解釈）」で求められます。",
    "example": "value = 10000001（符号あり: -127）のとき、絶対値は 127 になるはずです。256 - 129 を計算してみましょう。",
    "code": "01  整数型: absValue(整数型: value)\n02  整数型: mask ← 128  /* 10000000 */\n03  <span class=\"if\">if ((value AND mask) ≠ 0)</span>\n04     return [    a    ]  /* MSB=1 → 負 → 絶対値を返す */\n05  <span class=\"if\">else</span>\n06     return value        /* MSB=0 → 正 → そのまま返す */\n07  <span class=\"if\">endif</span>",
    "choices": [
      "256 - value",
      "value - 128",
      "value AND 127",
      "128 - value"
    ],
    "specific_explanation": "1. 最上位ビットの確認\n   MSB が 1 のとき（符号あり解釈で負の数）、符号なし整数として読んだ value は 128〜255 の範囲になります。\n\n2. 0.5を足して切り捨てる ※類似操作\n   8ビット符号あり整数の負の数は 2 の補数で表現されており、その絶対値は「256 - value（符号なし解釈）」で求められます。例えば value = 129（= 10000001）なら 256 - 129 = 127 となり、-127 の絶対値が得られます。\n   <div class=\"important\">負の数の絶対値 = 256 - value（符号なし値）</div>"
  },


  // ===================================================================
  // 定番アルゴリズム系 > 探索 > 二分探索
  // ===================================================================

  // ---------------------------------------------------------------
  // id 280  二分探索
  // 内容: middle の計算式を空欄で選ぶ
  // ---------------------------------------------------------------
  {
    "id": 280,
    "category": "定番アルゴリズム系",
    "theme": "探索",
    "subtheme": "二分探索",
    "text": "昇順に整列された配列 array から目的の値 target を探す二分探索プログラムです。探索範囲の中央インデックス [  a  ] に入る計算式を選んでください。",
    "example": "left = 1, right = 9 のとき、中央インデックスはいくつになるか計算してみましょう。",
    "code": "01  binarySearch(整数型の配列: array, 整数型: n, 整数型: target)\n02  整数型: left ← 1, right ← n, middle\n03  <span class=\"while\">while (left ≤ right)</span>\n04     middle ← [    a    ]\n05     <span class=\"if\">if (array[middle] = target)</span>\n06        return middle\n07     <span class=\"if\">elseif (array[middle] < target)</span>\n08        left ← middle + 1\n09     <span class=\"if\">else</span>\n10        right ← middle - 1\n11     <span class=\"if\">endif</span>\n12  <span class=\"while\">endwhile</span>\n13  return -1",
    "choices": [
      "(left + right) ÷ 2",
      "left + right",
      "(right - left) ÷ 2",
      "left ÷ 2"
    ],
    "specific_explanation": "1. 中央の値を見る\n   探索範囲の中央インデックスは「左端と右端の和の半分」で求めます。left = 1, right = 9 なら (1 + 9) ÷ 2 = 5 が中央です。整数型の割り算により小数部は切り捨てられます。\n\n2. 範囲を半分にする\n   中央の値が target より小さければ left を middle + 1 に、大きければ right を middle - 1 に更新することで、毎回探索範囲を半分に絞り込みます。\n   <div class=\"important\">middle ← (left + right) ÷ 2</div>"
  },

  // ---------------------------------------------------------------
  // id 281  二分探索
  // 内容: 範囲を絞り込む条件の正しい組み合わせを選ぶ
  // ---------------------------------------------------------------
  {
    "id": 281,
    "category": "定番アルゴリズム系",
    "theme": "探索",
    "subtheme": "二分探索",
    "text": "二分探索において、中央の値と target を比較した結果に応じて探索範囲を更新します。空欄 [  a  ] と [  b  ] に入る適切な処理の組み合わせを選んでください。",
    "example": "array = {1, 3, 5, 7, 9}、target = 7 のとき、middle = 3（値5）です。7 > 5 なので次はどちら側を探すべきでしょうか。",
    "code": "01  middle ← (left + right) ÷ 2\n02  <span class=\"if\">if (array[middle] = target)</span>\n03     return middle\n04  <span class=\"if\">elseif (array[middle] < target)</span>\n05     [    a    ]  /* target は右側にある */\n06  <span class=\"if\">else</span>\n07     [    b    ]  /* target は左側にある */\n08  <span class=\"if\">endif</span>",
    "choices": [
      "a: left ← middle + 1\nb: right ← middle - 1",
      "a: right ← middle - 1\nb: left ← middle + 1",
      "a: left ← middle\nb: right ← middle",
      "a: left ← middle + 1\nb: left ← middle - 1"
    ],
    "specific_explanation": "1. 範囲を半分にする\n   中央値が target より小さい場合、target は中央の「右側」にあります。左端（left）を middle + 1 に移動させ、左半分を切り捨てます。\n\n   逆に中央値が target より大きい場合、target は「左側」にあります。右端（right）を middle - 1 に移動させ、右半分を切り捨てます。middle 自体は既に確認済みなので ±1 してから範囲を更新します。\n   <div class=\"important\">右側に絞る: left ← middle + 1 / 左側に絞る: right ← middle - 1</div>"
  },

  // ---------------------------------------------------------------
  // id 282  二分探索
  // 内容: 比較回数の上限を理解する（探索回数と配列サイズの関係）
  // ---------------------------------------------------------------
  {
    "id": 282,
    "category": "定番アルゴリズム系",
    "theme": "探索",
    "subtheme": "二分探索",
    "text": "要素数 8 の昇順配列 {1, 3, 5, 7, 9, 11, 13, 15} から target = 1 を二分探索で探します。見つかるまでに while 文のループが何回実行されるか、正しいものを選んでください。",
    "example": "left と right の変化を追いながら middle を毎回計算してみましょう。target と array[middle] の大小比較の結果で次のステップが変わります。",
    "code": "01  整数型の配列: array ← {1,3,5,7,9,11,13,15}\n02  整数型: left ← 1, right ← 8\n03  /* 1回目: middle = (1+8)÷2 = 4 → array[4]=7 → 1 < 7 なので right ← 3 */\n04  /* 2回目: middle = (1+3)÷2 = 2 → array[2]=3 → 1 < 3 なので right ← 1 */\n05  /* 3回目: middle = (1+1)÷2 = 1 → array[1]=1 → 一致！return 1 */",
    "choices": [
      "3回",
      "1回",
      "8回",
      "4回"
    ],
    "specific_explanation": "1. 中央の値を見る\n   1回目: middle = 4, array[4] = 7。target(1) < 7 なので right ← 3 に更新します。\n\n2. 範囲を半分にする\n   2回目: middle = 2, array[2] = 3。target(1) < 3 なので right ← 1 に更新します。3回目: middle = 1, array[1] = 1 で一致し return 1 となります。要素数 8 の配列でも最大 3 回（log₂8 = 3）で見つかります。線形探索なら最悪 8 回かかるところを大幅に削減できます。\n   <div class=\"important\">要素数 8 の二分探索: 最大 3 回（= log₂8）で完了</div>"
  },


  // ===================================================================
  // 定番アルゴリズム系 > 並べ替え > 隣接要素の比較（バブルソート）
  // ===================================================================

  // ---------------------------------------------------------------
  // id 283  隣接要素の比較
  // 内容: 内側ループの終了条件を選ぶ
  // ---------------------------------------------------------------
  {
    "id": 283,
    "category": "定番アルゴリズム系",
    "theme": "並べ替え",
    "subtheme": "隣接要素の比較",
    "text": "バブルソートで配列を昇順に並べるプログラムです。外側のループが i 回目のとき、末尾から i 個はすでに確定済みです。内側ループの終了値 [  a  ] に入る適切な式を選んでください。",
    "example": "1パス目（i=1）が終わると、最大値が末尾に確定します。2パス目では末尾から何個分を比較対象から外せますか。",
    "code": "01  bubbleSort(整数型の配列: array, 整数型: n)\n02  整数型: i, j, tmp\n03  <span class=\"for\">for (i を 1 から n - 1 まで 1 ずつ増やす)</span>\n04     <span class=\"for\">for (j を 1 から [    a    ] まで 1 ずつ増やす)</span>\n05        <span class=\"if\">if (array[j] > array[j + 1])</span>\n06           tmp ← array[j]\n07           array[j] ← array[j + 1]\n08           array[j + 1] ← tmp\n09        <span class=\"if\">endif</span>\n10     <span class=\"for\">endfor</span>\n11  <span class=\"for\">endfor</span>",
    "choices": [
      "n - i",
      "n",
      "n - 1",
      "n + i"
    ],
    "specific_explanation": "1. 端から確定させる\n   1パス目（i=1）が終わると配列の末尾（n番目）に最大値が確定します。2パス目では末尾を除いた範囲（1〜n-2）を比較すれば十分です。つまり i パス目の内側ループは 1 から n - i まで比較すれば済みます。\n\n2. お隣さんと比較\n   内側ループでは j と j+1 を比較するため、j の最大値が n - i のとき、比較対象は array[n-i] と array[n-i+1] となり、末尾の確定済み要素に触れずに済みます。\n   <div class=\"important\">内側ループ: j を 1 から n - i まで</div>"
  },

  // ---------------------------------------------------------------
  // id 284  隣接要素の比較
  // 内容: 昇順・降順の交換条件の違いを問う
  // ---------------------------------------------------------------
  {
    "id": 284,
    "category": "定番アルゴリズム系",
    "theme": "並べ替え",
    "subtheme": "隣接要素の比較",
    "text": "バブルソートを「降順（大きい順）」に変更したいと考えています。5行目の比較条件 [  a  ] に入る適切な式を選んでください。",
    "example": "昇順のとき「左が大きければ交換（左を小さくする）」でした。降順にするには、どんな状態のときに交換すべきでしょうか。",
    "code": "01  bubbleSortDesc(整数型の配列: array, 整数型: n)\n02  整数型: i, j, tmp\n03  <span class=\"for\">for (i を 1 から n - 1 まで 1 ずつ増やす)</span>\n04     <span class=\"for\">for (j を 1 から n - i まで 1 ずつ増やす)</span>\n05        <span class=\"if\">if ([    a    ])</span>\n06           tmp ← array[j]\n07           array[j] ← array[j + 1]\n08           array[j + 1] ← tmp\n09        <span class=\"if\">endif</span>\n10     <span class=\"for\">endfor</span>\n11  <span class=\"for\">endfor</span>",
    "choices": [
      "array[j] < array[j + 1]",
      "array[j] > array[j + 1]",
      "array[j] = array[j + 1]",
      "array[j] ≥ array[j + 1]"
    ],
    "specific_explanation": "1. お隣さんと比較\n   昇順では「左が右より大きければ交換」することで、大きい値を右（末尾方向）に押し出します。降順では逆に「左が右より小さければ交換」することで、小さい値を末尾方向に押し出します。\n\n2. 端から確定させる\n   条件を array[j] < array[j + 1] に変えるだけで、各パスで最小値が末尾へと確定していき、結果として降順に並びます。交換処理自体は変更不要です。\n   <div class=\"important\">降順の交換条件: array[j] < array[j + 1]</div>"
  },

  // ---------------------------------------------------------------
  // id 285  隣接要素の比較
  // 内容: {5,3,1,4,2} に対して1パス目終了後の配列状態を問う
  // ---------------------------------------------------------------
  {
    "id": 285,
    "category": "定番アルゴリズム系",
    "theme": "並べ替え",
    "subtheme": "隣接要素の比較",
    "text": "配列 {5, 3, 1, 4, 2} に対してバブルソート（昇順）の1パス目（i=1）を実行した直後の配列の状態として正しいものを選んでください。",
    "example": "j = 1 から始めて array[j] と array[j+1] を順に比較し、大きければ交換する動きを 1 ステップずつ手でたどってみましょう。",
    "code": "01  /* 初期状態: {5, 3, 1, 4, 2} */\n02  /* j=1: array[1]=5 > array[2]=3 → 交換 → {3,5,1,4,2} */\n03  /* j=2: array[2]=5 > array[3]=1 → 交換 → {3,1,5,4,2} */\n04  /* j=3: array[3]=5 > array[4]=4 → 交換 → {3,1,4,5,2} */\n05  /* j=4: array[4]=5 > array[5]=2 → 交換 → {3,1,4,2,5} */",
    "choices": [
      "{3, 1, 4, 2, 5}",
      "{1, 2, 3, 4, 5}",
      "{3, 1, 5, 4, 2}",
      "{5, 3, 1, 4, 2}"
    ],
    "specific_explanation": "1. お隣さんと比較\n   j = 1: 5 > 3 なので交換 → {3,5,1,4,2}。j = 2: 5 > 1 なので交換 → {3,1,5,4,2}。j = 3: 5 > 4 なので交換 → {3,1,4,5,2}。j = 4: 5 > 2 なので交換 → {3,1,4,2,5}。\n\n2. 端から確定させる\n   1パス目が終わると最大値の 5 が末尾（5番目）に確定します。2パス目以降は 5 を除いた範囲だけを処理すればよくなります。\n   <div class=\"important\">1パス目終了後: {3, 1, 4, 2, 5}（最大値5が末尾に確定）</div>"
  },


  // ===================================================================
  // 定番アルゴリズム系 > 並べ替え > 最小値の選択（選択ソート）
  // ===================================================================

  // ---------------------------------------------------------------
  // id 286  最小値の選択
  // 内容: 最小値インデックスの更新条件を選ぶ
  // ---------------------------------------------------------------
  {
    "id": 286,
    "category": "定番アルゴリズム系",
    "theme": "並べ替え",
    "subtheme": "最小値の選択",
    "text": "選択ソートで最小値のインデックスを記録するプログラムです。より小さい値を発見したとき minIdx を更新する条件 [  a  ] に入る適切な式を選んでください。",
    "example": "現在の暫定最小値は array[minIdx] に入っています。j 番目の値がそれより小さければ更新します。どんな比較式になりますか。",
    "code": "01  selectionSort(整数型の配列: array, 整数型: n)\n02  整数型: i, j, minIdx, tmp\n03  <span class=\"for\">for (i を 1 から n - 1 まで 1 ずつ増やす)</span>\n04     minIdx ← i\n05     <span class=\"for\">for (j を i + 1 から n まで 1 ずつ増やす)</span>\n06        <span class=\"if\">if ([    a    ])</span>\n07           minIdx ← j\n08        <span class=\"if\">endif</span>\n09     <span class=\"for\">endfor</span>\n10     /* minIdx の要素と i 番目の要素を交換 */\n11  <span class=\"for\">endfor</span>",
    "choices": [
      "array[j] < array[minIdx]",
      "array[j] > array[minIdx]",
      "j < minIdx",
      "array[j] = array[minIdx]"
    ],
    "specific_explanation": "1. 一番小さいのを探す\n   内側ループでは未整列エリア（i 〜 n）を順に走査し、現在の暫定最小値 array[minIdx] より小さい値を発見したら minIdx をその位置に更新します。ループ終了時、minIdx が未整列エリア全体の最小値の位置を指しています。\n\n2. 先頭と入れ替える\n   内側ループで最小値の位置が確定したら、array[minIdx] と array[i]（未整列エリアの先頭）を交換して位置を確定させます。\n   <div class=\"important\">更新条件: array[j] < array[minIdx]</div>"
  },

  // ---------------------------------------------------------------
  // id 287  最小値の選択
  // 内容: 最小値と先頭の交換処理の対象を選ぶ
  // ---------------------------------------------------------------
  {
    "id": 287,
    "category": "定番アルゴリズム系",
    "theme": "並べ替え",
    "subtheme": "最小値の選択",
    "text": "選択ソートで最小値を見つけた後、未整列エリアの先頭と交換する処理を完成させます。空欄 [  a  ], [  b  ] に入る適切な組み合わせを選んでください。",
    "example": "i = 1 のとき、未整列エリアの先頭は array[1] です。最小値が array[3] にあった場合、何と何を交換しますか。",
    "code": "01  /* 内側ループで minIdx が確定した後 */\n02  整数型: tmp\n03  tmp       ← array[i]\n04  array[i]  ← [    a    ]\n05  [    b    ] ← tmp",
    "choices": [
      "a: array[minIdx]\nb: array[minIdx]",
      "a: array[i + 1]\nb: array[i + 1]",
      "a: array[minIdx]\nb: array[i]",
      "a: array[i]\nb: array[minIdx]"
    ],
    "specific_explanation": "1. 先頭と入れ替える\n   スワップは tmp を使った 3 段階の代入で行います。① tmp ← array[i]（先頭を退避）、② array[i] ← array[minIdx]（最小値を先頭へ）、③ array[minIdx] ← tmp（退避した元の先頭を最小値の位置へ）。\n\n2. 一番小さいのを探す\n   この交換により i 番目の要素が確定し、次のパスでは i+1 以降の未整列エリアだけを対象にできます。\n   <div class=\"important\">a: array[minIdx] / b: array[minIdx]（元の先頭 tmp を最小値の位置へ戻す）</div>"
  },

  // ---------------------------------------------------------------
  // id 288  最小値の選択
  // 内容: {4,2,5,1,3} に対して2パス目終了後の配列状態を問う
  // ---------------------------------------------------------------
  {
    "id": 288,
    "category": "定番アルゴリズム系",
    "theme": "並べ替え",
    "subtheme": "最小値の選択",
    "text": "配列 {4, 2, 5, 1, 3} に対して選択ソート（昇順）を実行します。2パス目（i=2）が終了した直後の配列の状態として正しいものを選んでください。",
    "example": "1パス目（i=1）では全体の最小値を array[1] に置きます。2パス目（i=2）では残り（array[2]〜array[5]）の最小値を array[2] に置きます。それぞれ最小値はどれですか。",
    "code": "01  /* 初期: {4, 2, 5, 1, 3} */\n02  /* i=1: 全体の最小=1(index4) → array[1]と交換 → {1, 2, 5, 4, 3} */\n03  /* i=2: array[2..5]={2,5,4,3} の最小=2(index2) → 交換不要 → {1, 2, 5, 4, 3} */",
    "choices": [
      "{1, 2, 5, 4, 3}",
      "{1, 2, 3, 4, 5}",
      "{1, 2, 4, 5, 3}",
      "{2, 1, 5, 4, 3}"
    ],
    "specific_explanation": "1. 一番小さいのを探す\n   1パス目（i=1）: {4,2,5,1,3} の最小値は 1（index=4）。array[1] と array[4] を交換 → {1,2,5,4,3}。\n\n2. 先頭と入れ替える\n   2パス目（i=2）: 未整列エリア {2,5,4,3}（index=2〜5）の最小値は 2（index=2）。minIdx = i のため交換は発生せず配列はそのまま {1,2,5,4,3} です。1 と 2 の位置が確定済みとなり、3パス目以降で残り {5,4,3} が整列されます。\n   <div class=\"important\">2パス目終了後: {1, 2, 5, 4, 3}（先頭2要素が確定）</div>"
  },
]

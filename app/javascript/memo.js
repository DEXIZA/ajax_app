const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};
// 12行目では、関数buildHTMLの返り値にhtmlを指定しています。
// ここでいうhtmlとは、3〜11行目で定義した変数htmlのことを表しています。つまり、投稿後に新たに生成されたHTMLのことです。



function post (){
  const submit = document.getElementById("submit");
  // index.html.erbより、getElementByIdメソッドで取得した投稿ボタンの要素を変数submitに格納しています。
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // 説明１
    const form = document.getElementById("form");
    // getElementByIdメソッドを用いて、フォームの要素を取得します。
    const formData = new FormData(form);
    // 新たに生成したFormDataオブジェクトを変数formDataに格納しています。
    const XHR = new XMLHttpRequest();
    // 新たに生成したXMLHttpRequestオブジェクトを変数XHRに格納しています。
    XHR.open("POST", "/posts", true);  
    // リクエストの内容を指定できました。
    //「posts」→「post」にする、エラーの表示の為→確認出来たので戻す
    XHR.responseType = "json";
    // サーバーからのレスポンスの形式を指定
    XHR.send(formData);
    // フォームに入力された内容をサーバー側に送信します。
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      // XHR.statusには、HTTPステータスコードが格納されます。
      // また、XHR.statusTextには、ステータスコードに応じたメッセージが格納されます。この格納されているメッセージについては、この後のカリキュラムで確認します。
      // 28行目では、return null;を定義しています。
      // return null;によってJavaScriptの処理から抜け出すことができます。
      // エラーが出た場合に、これ以降に記述されている処理を行わないようにすることが目的です。
      const list = document.getElementById("list");
      // 新しいメモを挿入するための要素を取得して、変数listに格納しています。
      const formText = document.getElementById("content");
      // リセットの対象となるフォームの要素contentを取得して、変数formTextに格納しています。
        list.insertAdjacentHTML("afterend", buildHTML(XHR));
        // insertAdjacentHTMLメソッドの第一引数にafterendを指定することで、変数listに格納された要素の直後に生成したHTMLを挿入しています。
          // buildHTML(XHR)で一番最初にあるhtmlをもってきている
      formText.value = "";
      // formTextのvalue属性に空の文字列を指定することで、フォームの中身をリセットしています
    };
    // onloadプロパティを用いて、レスポンスの受信に成功したときの処理
  });
  // 「投稿ボタンがクリックされたこと」を認識するために、submit.addEventListenerと記述します。
    // 今回は「クリックされた」というイベントを認識したいため、addEventListenerメソッドの第一引数にはclickイベントを指定します。そして、第二引数に実行したい処理を記述しましょう。
    // 具体的な処理内容は後ほど記述するので、今は() => {}としておきましょう。
};
// ページが読み込まれた時に発動する

 
 window.addEventListener('load', post);

// メモ
//  FormDataフォームデータオブジェクト
// FormDataとは、フォームに入力された値を取得できるオブジェクトのことです。
// new FormData(フォームの要素);のように記述することでオブジェクトを生成し、引数にフォームの要素を渡すことで、そのフォームに入力された値を取得できます。

    // open()オープンメソッド
      //     open()メソッドとは、リクエストを初期化するメソッドです。リクエストの内容を指定するためのメソッドだと理解しておいてください。
      // XMLHttpRequestオブジェクトのメソッドの一種です。

      // openメソッドを用いるときは、XHR.open("POST", "/posts", true);のように表記します。
      // 第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをtrueかfalseで記述します。

      // 記述場所	目的	記述例
      // 第一引数	HTTPメソッドの指定	POST
      // 第二引数	パスの指定	/posts
      // 第三引数	非同期通信のON/OFF	true
    // データフォーマット
      // データフォーマットとは、リクエストやレスポンスをはじめとしたデータのやり取りを行う際に使われるデータの型のことです。
      
    // responseTypeレスポンスタイププロパティ
      // responseTypeプロパティとは、レスポンスのデータフォーマット（＝どのような形式のデータにするか）を指定するプロパティです。リクエストを送信する際に、レスポンスで欲しいデータフォーマットをあらかじめ指定しておく必要があります。
      // 今回は、レスポンスのデータを「JSON形式」で返して欲しいため、データフォーマットを「JSON」に指定します。
      
    // JSON（JavaScript Object Notation）ジェイソン（ジャバスクリプト オブジェクト ノーテーション）
      // JSONとは、JavaScriptをもとにして構成されたデータフォーマットのことです。
      // データを記述するフォーマットはいくつかありますが、動作が軽いことやモダンなフロント言語と親和性が高く管理がしやすいなどのメリットからJSONが用いられることが多くあります。

// send()センドメソッド
  // send()メソッドとは、リクエストを送信するメソッドです。
  // XMLHttpRequestオブジェクトのメソッドの一種です。

//preventDefault()プリベントデフォルトメソッド
  // preventDefault()メソッドとは、既定のイベントを無効化するためのメソッドです。
  // 既定のイベントとは、「投稿ボタンをクリックする」のようなものを指します。
  // 今回は投稿ボタンのクリックを無効化するためにpreventDefaultを用います。

//   説明１
  //   submit.addEventListener("click", (e) => {
  //     e.preventDefault();
  // eはイベントオブジェクトといい、イベント発生時の情報を持ったオブジェクトです。
  // 今回だと、「投稿ボタンをクリックした」という情報を持ったオブジェクトということになります。
  // なお、3行目のeはどんな文字列を指定してもOKです。慣例的にeventの頭文字eが多く用いられます。
  // 今回、preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化しています。
  // 「投稿ボタンをクリックした」という現象を無効化するのは、クリックした直後にブラウザからリクエストが送信されることを防ぎたいからです。

// onloadオンロードプロパティ
  // onloadプロパティとは、リクエストの送信が成功したときに呼び出されるプロパティのことです。XMLHttpRequestオブジェクトのプロパティの一種です。
  // onloadプロパティで、リクエストの送信に成功したときに行う処理を定義します。

// responseレスポンスプロパティ
  // responseプロパティとは、サーバーからのレスポンスに関する情報が格納されたプロパティのことです。
  // XMLHttpRequestオブジェクトのプロパティの一種です。
      
// insertAdjacentHTMLインサート アジェイセント エイチティーエムエルメソッド
  // insertAdjacentHTMLメソッドとは、HTMLをある要素の指定した箇所に挿入するメソッドです。
  // HTMLを挿入したい要素に対して使うメソッドで、第一引数にHTMLを挿入したい位置、第二引数に挿入したいHTMLを記述します。
  
  // 第一引数に指定できるのは以下の4つです。
  
  // 指定可能な文字列	意味
  // beforebegin	要素の直前
  // afterbegin	要素内部の、最初の子要素の直前
  // beforeend	要素内部の、最後の子要素の直後
  // afterend	要素の直後

  // <挿入したい要素名>.insertAdjacentHTML(挿入したい位置,挿入したいHTML);

// HTTPエイチティーティーピーステータスコード
  // HTTPステータスコードとは、特定のHTTPリクエストが正常に完了したかどうかを示した、サーバーからクライアントに送信される番号のことです。

  // ステータスコード	状態
  // 100〜199	リクエスト継続中
  // 200〜299	リクエストが成功した
  // 300〜399	リダイレクト中
  // 400〜499	クライアントでエラーが発生している
  // 500〜599	サーバーでエラーが発生している
  // リクエストを正常に受信した場合は、HTTPステータスコード200がクライアントに返されます。
  // より詳しく知りたい方はリファレンスを確認してください。
  
  // 今回はレスポンスに何らかの問題があった場合の条件式をXHR.status != 200として、条件分岐します。

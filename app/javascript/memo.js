function post (){
  const submit = document.getElementById("submit");
  // index.html.erbより、getElementByIdメソッドで取得した投稿ボタンの要素を変数submitに格納しています。
  submit.addEventListener("click", () => {
    const form = document.getElementById("form");
    // getElementByIdメソッドを用いて、フォームの要素を取得します。
    const formData = new FormData(form);
    // 新たに生成したFormDataオブジェクトを変数formDataに格納しています。
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
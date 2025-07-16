// html要素を定義
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックしたら2秒後に文章が書き換わる
btn.addEventListener('click',() => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  },2000);
});
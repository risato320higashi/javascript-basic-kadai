// HTML要素のid=btnをconst btnとして定義
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
  // Html要素のh2の値を取得しconst textとして定義
  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';
})
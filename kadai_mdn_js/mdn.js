// 現在の日付を取得
const today = new Date();

//年月日を配列に格納 
const nowDate = [
  today.getFullYear(),
  today.getMonth()+1, // getMonth() returns 0-11, so we add 1
  today.getDate()
]

// 年月日を表示
console.log(nowDate[0] + '年' + nowDate[1] + '月' + nowDate[2] + '日');
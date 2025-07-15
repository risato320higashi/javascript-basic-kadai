// 現在の日付を取得
const today = Date();

// Date()は現在の日時を表す文字列を返す
const toStringToday = new Date(today);

//年月日を配列に格納 
const nowDate = [
  toStringToday.getFullYear(),
  toStringToday.getMonth()+1, // getMonth() returns 0-11, so we add 1
  toStringToday.getDate()
]

// 年月日を表示
console.log(nowDate[0] + '年' + nowDate[1] + '月' + nowDate[2] + '日');
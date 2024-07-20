//Dateクラスの設定　　こんなものだと覚える
const date = new Date();
// 配列の設定
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

// 抽出された値をまとめる
const formattedDate = year + '年' + month + '月' + day + '日';
// 結果の出力
console.log(formattedDate);

// dateだけだとどうなるかチェック
// console.log(date)
let num = Math.floor(Math.random() * 100); //0から99までのランダムな整数を生成

if (num % 3 === 0 && num % 5 === 0) { //numが3と5の両方で割り切れるかチェック
    console.log("3と5の倍数です");
}else if (num % 3 === 0) { //numが3で割り切れるかチェック
    console.log("3の倍数です");
}else if (num % 5 === 0) { //numが5で割り切れるかチェック
    console.log("5の倍数です");
}else {
    console.log(num);
}

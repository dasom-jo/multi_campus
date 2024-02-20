let num = Number(prompt())
if (!num) {
    document.write('에러')
}else if (num % 5 ===0 || num % 7 === 0){
    document.write('통과')
}
else document.write('통과')

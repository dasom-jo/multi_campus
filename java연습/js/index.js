function test01(a,b){
    return a * b;
}
console.log(test01(3,5));

//변수에담는 함수
let test02 = function(a,b){
    return a * b;
}
console.log(test02(3,5));

//생성자함수
let test03 = new Function('a','b','return03(3,5)')

//화살표함수
let test04=(a,b)=>{
    return a*b;
}
console.log(test04(3,5));

//즉시호출한수
(function(){
    console.log(3*5);
})();

const plus =(x=10,y=10)=>{
    return x+y;
}
console.log(plus(0,1));
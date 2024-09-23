const result = document.querySelector('#result');
const button = document.querySelector('button');

const luckyNumber = {
    digitCount: 6,
    maxNumber:45,
};

button.addEventListener('click',()=>{
    const {digitCount, maxNumber } = luckyNumber;
    //console.log(digitCount,maxNumber);
    const numberSet = new Set();
    while (numberSet.size != digitCount) {  //이공식은 중복되면 숫자가 나오지않아 5개로 나오는데
        //그걸 방지하기위해 +1을 한 랜덤함수를 더 돌린다
        let randomNumber = Math.floor(Math.random()* maxNumber) + 1;
        numberSet.add(randomNumber);
    }
    result.innerText = `${[...numberSet].sort((a,b)=> a-b)}`;
    //a가 b보다 작으면 음수반환크면 양수반환 오름차순
})

//오름정수로 바꿔주고 숫자 는 0~1사이에서 오ㄴ니깐  맥스넘저정의해놈 45 이키타운트도 정의해놈 6
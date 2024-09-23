const result = document.querySelector('#result');
const button = document.querySelector('button');

const luckyNumber = {
    digitCount: 6, // 숫자 6개
    maxNumber: 45, // 최대 숫자 45
};

// 버튼 클릭 시, 로또번호 추출하여 출력
button.addEventListener('click', () => {
    const { digitCount, maxNumber } = luckyNumber;
    // console.log(digitCount, maxNumber);
    const numberSet = new Set();
    while (numberSet.size != digitCount) {
        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        // console.log(randomNumber);
        numberSet.add(randomNumber);
    }
    result.innerText = `${[...numberSet].sort((a, b) => a - b)}`; // set > arr [전개연산자 활용]
});
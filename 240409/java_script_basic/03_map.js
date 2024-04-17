<<<<<<< HEAD
/*배열 메서드 map()-
배열안에 요소들을 처리해, 새로운 배열생성(재배열)
배열의 각요소에 대해 주어지 함수를 호출한 결과를 모아, 새로운 배열을 반환*/

const arr = [1,3,5,7,9];
const mapArr1 = arr.map((x) => x + 1);//[ 2, 4, 6, 8, 10 ]
const mapArr2= arr.map((x, idx) => x + idx ); //[ 1, 4, 7, 10, 13 ]
const mapArr3 = arr.map((x, idx, arr) => x + arr[2]);//[ 6, 8, 10, 12, 14 ]

console.log(mapArr1);
console.log(mapArr2);
console.log(mapArr3);

const arr1 = [1,2,3,4,5];
const isOddArr = arr1.map((x) => x % 2 ==1 );
console.log(arr1);
=======
/*배열 메서드 map()-
배열안에 요소들을 처리해, 새로운 배열생성(재배열)
배열의 각요소에 대해 주어지 함수를 호출한 결과를 모아, 새로운 배열을 반환*/

const arr = [1,3,5,7,9];
// const mapArr = arr.map((x) => x + 1);//[ 2, 4, 6, 8, 10 ]
// const mapArr = arr.map((x, idx) => x + idx );[ 1, 4, 7, 10, 13 ]
const mapArr = arr.map((x, idx, arr) => x + arr[2]);//[ 6, 8, 10, 12, 14 ]
console.log(mapArr);

const arr1 = [1,2,3,4,5];
const isOddArr = arr1.map((x) => x % 2 ==1 );
console.log(arr1);
>>>>>>> 774db5d737327d284b218d744e04dd18ef85365d

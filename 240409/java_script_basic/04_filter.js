<<<<<<< HEAD
/*배열 메서드 filter()-
콜백 조곤에 충족하는 요소만을 뽑아오는 메서드
주어진 함수의 테스트를 통과하는 모든 요소를 뽑아,새로운 요소를반환
맵과 다른점은 맵은 원래 배열과 같은 수의 배열이자만
필터는 원래배열에서 추출한것이므로 배열의 수가 달라짐*/

const arr =[1,2,3,4,5,6];
const oddArr = arr.filter(x => x % 2 == 1);
const isoddArr = arr.map(x => x % 2 == 1);
console.log(oddArr);//[ 1, 3, 5 ]
console.log(isoddArr);//[ true, false, true, false, true, false ]

const thirdUpArr = arr.filter((x, idx) => idx >= 2);//.[2]번재포함이후요소
console.log(thirdUpArr);//[ 3, 4, 5, 6 ]
const thirdUpArr1 = arr.filter((x, idx,arr) => x >= arr[2]);//arr[2]요소보다 큰값
console.log(thirdUpArr1);[ 3, 4, 5, 6 ]

const fruit = ['사과','복숭아','바나나','수박','체리'];
const threewords = fruit.filter(x => x.length == 3);
console.log(threewords);

=======
/*배열 메서드 filter()-
콜백 조곤에 충족하는 요소만을 뽑아오는 메서드
주어진 함수의 테스트를 통과하는 모든 요소를 뽑아,새로운 요소를반환
맵과 다른점은 맵은 원래 배열과 같은 수의 배열이자만
필터는 원래배열에서 추출한것이므로 배열의 수가 달라짐*/

const arr =[1,2,3,4,5,6];
const oddArr = arr.filter(x => x % 2 == 1);
const isoddArr = arr.map(x => x % 2 == 1);
console.log(oddArr);//[ 1, 3, 5 ]
console.log(isoddArr);//[ true, false, true, false, true, false ]

const thirdUpArr = arr.filter((x, idx) => idx >= 2);//.[2]번재이후요소
console.log(thirdUpArr);//[ 3, 4, 5, 6 ]
const thirdUpArr1 = arr.filter((x, idx,arr) => x >= arr[2]);//arr[2]요소보다 큰값
console.log(thirdUpArr1);[ 3, 4, 5, 6 ]

const fruit = ['사과','복숭아','바나나','수박','체리'];
const threewords = fruit.filter(x => x.length == 3);
console.log(threewords);

>>>>>>> 774db5d737327d284b218d744e04dd18ef85365d

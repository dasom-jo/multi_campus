//매개변수 기본값 설장
function sum(x, y) {
    return x +y
}
console.log(sum(1,2)); //3
console.log(sum(1));//x

//가변형 매개변수(spread)

//배열 연산 (spread = concat)


//배열복사
let arr4 = [10,20,30];
let arr5 = arr4;
arr5[1] = 200;
console.log(arr4, arr5); //[10,200,30][10,200,30]

let arr6 = [...arr4];
arr6[1] =300
console.log(arr4,arr6);//[10,200,30][10,300,30]


//객체의 속성


//객체속성 추가


//계산된 프로퍼티명(키)
function fn() {return'key'}

let obj2 = {
    [fn()]: 'value' //함수결과가 키로 사용된다.
}
console.log(obj2); //{key : 'value'}

//객체에서 심벌키 사용
//자바스크립트에서는 총 6개의 기본형(원시) 데이터 타입 :number.string,boolean,null,nudefined.symblo
//1개의 객체 타입:objects
//simbol은 객체의 고유한 식별자(key)를 만들때 사용된다
//객체 프로퍼티 키를 고유하게 설정함으로써,키의 충돌을 방지할수있다.
let id1 = Symbol();//콘솔에 찍힘 심볼이
let id2 = Symbol();
console.log(id1,id2);
console.log(id1 == id2, id1==id1);// false,true

let name= Symbol('name');
let pwd= Symbol('name');
console.log(name,pwd);
console.log(name==pwd); //false

let obj = {
    name: '조다솜',
    age :20,
    [name] : 'dasm', //위에잇는 변수를 사용하엿기에
    [pwd] : function(){ 
        let pwd = prompt('생성안될거임');
        return pwd
    }
}

console.log(obj);

for() // 심볼에서 저장된값은 포 문에서 출력안됨
//심볼 숨긴 프로퍼티로 사용가능
console.log(obj[name]);
console.log(obj[pwd]()); 함수실행

//한번 만들어진 심볼은 다시 사용가능
//글로벌 심볼 레지스토리 에 저장 

//글로벌 심볼 레지스터에 저장된 심볼은 symbol.keyFor() 메서드를 사용해확인가능

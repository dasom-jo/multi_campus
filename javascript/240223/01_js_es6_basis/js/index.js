
        /*매개변수 기본값 설정*/
        function sum(x,y ){
            return x + y;
        }
        //console.log(sum(1,2)); //3
        //console.log(sum(1)); //NaN

        /*가변형 매개변수(spread)*/
        function addNum(...nums) {
            let total = 0;
            for(let num of nums) {
                total += num;
            }
            return total;
        }
        //console.log(addNum(1,2,3,4,5)); //15

        /*배열연산(spread)= concat*/
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6];
        let arr3 = [7, 8, 9];

        console.log(arr1.concat(arr2, arr3)); //[1,2,3,4,5,6,7,8,9]
        console.log(...arr1, ...arr2, ...arr3);

        /*배열복사*/ //얉은복사
        let arr4 = [10,20,30];
        let arr5 = arr4;
        arr5[1] = 200;
        console.log(arr4,arr5); //[10,200,30][10,200,30]
        
        /* 전개구문*///깊은복사
        let arr6 = [...arr4];
        arr6[1] = 300;
        console.log(arr4,arr6);//[10,200,30][10,300,30]
        
        /*객체속성*/
        //객체 = {key : value}
        let obj1 = {one : 1, two : 2, three : 3};
        obj1.four = 4; //객체속성추가
        console.log(obj1); //{one: 1, two: 2, three: 3, four: 4}

        //Syntax에러/[문법에러]/공백제외 불가시 []
        //obj1.important number = false 
        //obj1["important number"] = false
        //console.log(obj1.important number);
        //console.log(obj1["important number"])= false 

        /*계산된 프로파티명(키)*/
        function fn() {return 'key'}

        let obj2 = {[fn()]: "value" }//함수결과가 키로 사용된다
        console.log(object); // { key : 'value' }

        function add(a, b){return a+b};
        let obj3 = {[fn()]: 'value', [`${add(1,2)}key`]: 'three'} //함수결과가 키로 사용
        console.log(obj3); //{key : 'value', 3key: 'three'}

        obj3[`${add(2,2)} key`] = 'four';
        console.log(obj3); //{key : 'value', 3key: 'three',4key: 'four'}

        function makeUser(name, age) {
            //return {name: name, age:age}
            return{name, age}
        }
        console.log(makeUser('조다솜',25)); //{name: '조다솜', age:20}

        //객체에서 심벌키 사용
        /*자바스크립크에서는 총 6개의 기본 데어터 타입 : number, string, boolean,null,undefined,symbol
            그리고 1개의 객체 타입:object
            
        symbol은 객체의 고유한 식별자(key)를 만들때 사용된다.
        객체 프로퍼티 키를 고유하게 설정하므로써 키의 충돌을 방지할수있다*/

        id1 = Symbol();
        id2 = Symbol();
        console.log(id1,id2); //Symbol() Symbol()
        console.log(id1 == id2, id1 == id1); //false, true

        userName = Symbol('name');
        userPwd = Symbol('pwd');
        console.log(userName, userPwd); //Symbol(name) Symbol(pwd)

        userobj = {
            name : '조다솜',
            age : 20,
            [userName] : 'dasom',
            [userPwd] : function(){
                let pwd = prompt('비밀번호를 입력하세요');
                return pwd;
            }
        }
        console.log(userobj);

        //Symbol로 저장된 값은 for문에서 출력되지않는다
        for(let key in userObj) {
            console.log(`${userObj}`);
        }

        //Symbol은 숨김 프로퍼티로 사용할수있다
        console.log(userObj[userName]); 
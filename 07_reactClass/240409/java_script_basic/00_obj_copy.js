const obj1= {
    key: 10,
    key2: '안녕',
    key3:{
        easy: true
    }
};

const obj2 = obj1; //주소값복사
obj1.key +=1;
console.log('obj1', obj1); //obj1 { key: 11, key2: '안녕', key3: { easy: true } }
console.log('obj2', obj2); //obj2 { key: 11, key2: '안녕', key3: { easy: true } }

const obj3 = {...obj1} // 객체복사 (얇은 복사 - 객체내의 객체는 주소값복사)
const obj4 = JSON.parse(JSON.stringify(obj1)) // 객체복사(깊은복사- 객테내의 전체를 새롭게 복사)
obj1.key3.easy=false;
console.log('obj1', obj1); //obj1 { key: 11, key2: '안녕', key3: { easy: false } }
console.log('obj2', obj2);//obj2 { key: 11, key2: '안녕', key3: { easy: false } }
console.log('obj3', obj3);//obj3 { key: 11, key2: '안녕', key3: { easy: false } }
console.log('obj4', obj4);//obj4 { key: 11, key2: '안녕', key3: { easy: true } }


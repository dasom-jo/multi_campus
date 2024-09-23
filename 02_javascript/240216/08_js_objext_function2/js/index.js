//디스함수는 화살표함수를 가지지않기에 외부에서 가져옴
//디스가 내부에 들어가서 자기 자신을 가르킴 
//에로우는 디스를 같지않는다
//디스는 전역객체
//객체의 메서드를 작성할때 디스이용.화살표 함수로 작성하지말것

let pass = function(teamplayer) {
    console.log(`${this.name} : ${teamplayer}, 받아!`);
}

let son = {
    name : '손흥민',
    pass, // pass /*: function*/(teamplayer) {
        //     console.log(`손흥민 : ${teamplayer}, 받아!`);
        // }
}

let park = {
    name: '박지성',
    pass,
}

park.pass('손흥민')
son.pass('케인');

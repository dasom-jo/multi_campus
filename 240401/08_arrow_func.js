let relationShip1= {
    name: '짱구',
    friends: ['철수','영희','맹구','훈이'],
    pintfriends: function() {
        let that = this; //.this의 전역객체를 막고
        //relationShip1 함수를 가르키키위해
        this.friends.forEach(function(friend){
            //console.log(this);//전역객체됨
            console.log(`${that.name}의친구, ${friend}`);
        })//포이치는 반복문을 돌린거고  안에 디스는함수작동
    }//디스 쓸떄 화살표 함수 쓰지말것
}

relationShip1.pintfriends();
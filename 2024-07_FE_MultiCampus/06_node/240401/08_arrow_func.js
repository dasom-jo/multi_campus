let relationShip1 = {
    name: '짱구',
    friends: ['철수', '영희', '맹구', '훈이'],
    printFriends: function() {
        this.friends.forEach((friend) => {
            console.log(`${this.name}의 친구, ${friend}`);
        })
    }
}

relationShip1.printFriends();
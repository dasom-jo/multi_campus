const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => console.log('첫번째 이벤트'));
myEvent.emit('event1');

myEvent.on('event2', () => console.log('두번째 이벤트'));
myEvent.on('event2', () => console.log('또 다른 두번째 이벤트'));
myEvent.emit('event2');

console.log(myEvent.listenerCount('event1'));
console.log(myEvent.listenerCount('event2'));

myEvent.once('event3', () => console.log('세번째 이벤트'));
myEvent.emit('event3');
myEvent.emit('event3'); // 실행 안됨

myEvent.removeAllListeners('event2');
console.log(myEvent.listenerCount('event2'));

const listener = () => console.log('리스너 함수 실행');
myEvent.on('event5', listener);
myEvent.on('event5', () => console.log('다섯번째 이벤트'));
myEvent.off('event5', listener);
myEvent.emit('event5');
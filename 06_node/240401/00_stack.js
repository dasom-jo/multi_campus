let first = () => {
    second();
    console.log('첫번째');
}
let second = () => {
    thrid();
    console.log('두번째');
}
let thrid = () => {
    console.log('세번째');
}
first();
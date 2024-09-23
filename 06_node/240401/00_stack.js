//내부함수로  각각의 제어권이 넘어감 결국 3-2-1
// let first = () =>{
//     second();
//     console.log('첫번째')
// }


// let second = () =>{
//     third();
//     console.log('두번째')
// }

// let third = () =>{
//     console.log('세번째')
// }

// first();


let first = () =>{
    setTimeout(second,3000);
    console.log('첫번째')
}

let second = () =>{
    setTimeout(third,0)
    console.log('두번째')
}

let third = () =>{
    console.log('세번째')
}
first();
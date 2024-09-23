// let kor_score = prompt('국어 점수');
// let eng_score = prompt('영어 점수');
// let math_score = prompt('수학 점수');

// let kor_score = 
// let eng_score = 
// let math_score =

// let avg= (Number(kor_score) + Number(eng_score) + Number(math_score)) / 3;
// console.log(avg);


// if (avg >= 60) {
//     document.write(`<h1>합격<h1>`);
// }

// if (avg < 60) {
//     document.write(`불합격`);
// }


//한줄만 적을시 {}제외가능
// if (avg >= 60) document.write(`<h1>합격<h1>`) 
// else document.write(`<h1>불합격<h1>`)
    


// if (avg >= 60) {
//     document.write(`<h1>합격<h1>`);
//     document.write(`<h1>축하합니다<h1>`);
//     document.write(`<h1>합격<h1>`);
// }   else {
//     document.write(`<h1>불합격<h1>`)
//     }


    console.log("----------------")
    
    
    // // 100수 90우 80미 70양 60가


    // let result;

    // if(avg >= 90) {
    //     result = '수';
    // }else if (avg >= 80) {
    //     result = '우';
    // }else if (avg >= 70) {
    //     result = '미';
    // }
    // else  { result = '양';
    // }

    // let msg = `<h1>당신은 성적은? ${result}</h1>`
    // document.write(msg);

    let readHbrb = true ;
    let readjpj = false;
    //위에건 이거 트루 페일 바뀔떄마다 나타나는게 다름 조건문 바탕으로 

    // if (readHbrb == true) {
    //     if (readjpj == true) {
    //         document.write('참 잘했어요')
    //     }
    // }

    if (readHbrb == true & readjpj == true) {
            document.write('참 잘했어요')
        }
    //& ~와  | 개중 하나
        //&&와 ||는  두가지 자료를 다 체크한다 굳이 볼거이유가 아니면(하나라도 틀리면 false될때등)

    if (readHbrb == true | readjpj == true) {
        document.write('하나라도읽엇군')
    }



    // let num = 123;
    //   if (num) {
    //     d이동작 처리해 (센스의 문제)
    //   }

    
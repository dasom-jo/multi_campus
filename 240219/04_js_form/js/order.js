//주문하기 버튼을 클릭하면, 각항목에대한 값 입력 여부를 체크한다
//만약에 입력안된 항목이 있으면,alert띄우기 -> 그쪽으로 focus포커스
//ㅅ수량이나 이름쪽ㅇ 틀린것으로 추첮ㅇ
let orderBtn = document.querySelector('#orderBtn');



function prodNameCheck() { //네임체크
    if (document.order.prod.value == "") {//입력됫는지 체크 공백에 아이폰 치고 상품명대신 아이폰은 판매하지않습니다.
        alert('상품명을 입력하세요');
        document.order.prod.focus();
        return false;
    }return true;//값이잇으면
}

function prodNumCheck() { //num체크
    if (document.order.prodNum.value) {//빈값 혹은 0이라는 뜻 내 재고 수량 비교 퇴고 수량은 얼마입니다띄위기
        alert('수량을 입력하세요');
        document.order.prodNum.focus();
        return false;
    }return true;//값이잇으면
}

function orderNameCheck() { //이름체크
    if (document.order.orderName.value == "") {//빈값 혹은 0이라는 뜻
        alert('이름을 입력하세요');
        document.order.orderName.focus();
        return false;
    }return true;//값이잇으면
}

if (!document.querySelector('#order-tel').value) {
    alert('전화번호를 입력해주세요');
    document.querySelector('#order-tel').focus();
    return false;
}


orderBtn.onclick = (e) => {
    if (!prodNameCheck()) { 
        e.preventDefault(); //기본동작을 멈춤. alert 확인 버튼이 계속 뜨는걸 막기위해?=retrun false 
    }
    if (!prodNumCheck()) { 
        e.preventDefault();
        }
    return (!orderNameCheck());
}


// 주문하기 버튼 클릭하면, 각 항목에 대한 값 입력 여부를 체크한다.
// 만약에 입력 안된 항목이 있으면, alert 띄우기 -> 그쪽으로 포커스

let orderBtn = document.querySelector('#orderBtn')//버튼을 누르면 

        orderBtn.onclick = () => {//주문하기 버튼 누르면

            console.log(document.order.prod.value);//이걸 콘솔창에 띄웁니다

            if(!document.order.prod.value){//그런데 이 값이 없다 "!"
                alert("상품명을 입력해주세요");//발동!
                document.order.prod.focus();//얘도 발동!!
                return false;//어 내용물이 있어? 함수 끝
            }

            console.log(document.order['prodNum'].value);
            if(!document.order['prodNum'].value) {
                alert("수량을 입력해주세요");
                document.order.prodNum.focus();
                return false;
            }

            console.log(document.querySelector("#order-name").value);
            if (!document.querySelector("#order-name").value) {
                alert("이름을 입력하세요");
                document.querySelector("#order-name").focus();
                return false;
            }

            console.log(document.querySelector("#order-tel").value);
            if (!document.querySelector("#order-tel").value) {
                alert("연락처를 입력하세요");
                document.querySelector("#order-tel").focus();
                return false;
            }
            
            console.log(document.querySelector('#order-addr').value);
            if (!document.querySelector('#order-addr').value) {
                alert("주소를 입력하세요");
                document.querySelector('#order-addr');
                return false;
            }

        }
  
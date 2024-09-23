// 주문하기 버튼 클릭하면, 각 항목에 대한 값 입력 여부를 체크한다.
// 만약에 입력 안된 항목이 있으면, alert 띄우기 -> 그쪽으로 포커스
let orderBtn = document.querySelector('#orderBtn');

orderBtn.onclick = () => {
    console.log(document.order.prod.value);
    if (!document.order.prod.value) {
        alert('상품명을 입력하세요');
        document.order.prod.focus();
        return false;
    }
    console.log(document.order['prodNum'].value);
    if (!document.order['prodNum'].value) {
        alert('수량을 입력하세요');
        document.order.prodNum.focus();
        return false;
    }
    console.log(document.querySelector('#order-name').value);
    if (!document.querySelector('#order-name').value) {
        alert('주문자명을 입력하세요');
        document.order.orderName.focus();
        return false;
    }
    console.log(document.querySelector('#order-tel').value);
    if (!document.querySelector('#order-tel').value) {
        alert('전화번호를 입력하세요');
        document.querySelector('#order-tel').focus();
        return false;
    }
    console.log(document.querySelector('#order-addr').value);
    if (!document.querySelector('#order-addr').value) {
        alert('받을 주소지를 입력하세요');
        document.order.orderAddr.focus();
        return false;
    }
}
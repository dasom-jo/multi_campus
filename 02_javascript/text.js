// let title = document.querySelector('h1');
// title.onclick = () =>{
//     title.style.color = 'red';
//     title.style.backgroundColor = 'bule';
//     title.style.fontSize = '15px';
// }

// // 클래스를 이용한 스타일
// let title =document.querySelector('h1');
// let title =document.querySelector('h2');

// title.onclick = function() {
//     title.className = "clicked";
//     if (title.classList.contains('clicked')){
//         title.classList.remove('clicked');
//     }else {
//         title.classList.add('clicked');
//     }
// }

// // 히든존재,토클
// let viewBtn = document.querySelector('#view');
// let detail = document.querySelector('#detail');

// viewBtn.onclick = function(){
//     detail.classList.toggle('hidden')
//     if(detail.classList.contains('hidden')){
//         detail.classList.remove('hidden');
//         viewBtn.innerText = '상세설명닫기';
//     }else {
//         detail.classList.add('hidden');
//         viewBtn.innerText = '상세설명보기';
//     }
// }


// let btn = document.querySelector('#btn');
// let nav = document.querySelector('#nav');
// btn.onclick = function() {
//     btn.classList.toggle('active');
//     nav.classList.toggle('active');

//     if(btn.classList.contains('active'),
//         nav.classList.contains('active')){
//             btn.classList.remove('active');
//             nav.classList.remove('active');
//         }else {
//             btn.classList.contains('active');
//             nav.classList.contains('active');
//         }
// }

// //주문하기 버튼 클릭하면 ,각 항목에 대한 값 입력 여부를 체크한다
// //만약 입력안된 항목이 있으면,alert 띄우기 ->그쪽포커스
// let orderBtn = document.querySelector('#orderBtn')

//         orderBtn.onclick = () => {
//             console.log(document.order.prod.value);

//             if(!document.order.prod.value){
//                 alert("상품명을 입력");
//                 document.order.prod.focus();
//                 return false;
//             }

//             console.log(document.order['prodNum'].value);
//             if(!document.querySelector('#order-name').value){
//                 alert("이름을 입력하세요");
//                 document.querySelector('#order-name').focus();
//                 return false;
//             }

//             console.log(document.querySelector('#order-tel').value);
//             if(!document.querySelector('#order-tel').value){
//                 alert('연락처를 입력하세요');
//                 document.querySelector('#order-tel').focus();
//                 return false;
//             }

//             console.log(document.querySelector('#order-addr').value);
//             if(!document.querySelector('#order-addr').value){
//                 alert('주소를 입력하세요');
//                 document.querySelector('#order-addr');
//                 return false;
//             }
//         }


// //학과 선택시,alert으로 알려주기
// let selectMajor = document.querySelector('#major');
// //major 요소를 할당

// selectMajor.onchange = () =>{
//     let major = selectMajor.options[selectMajor.selectIndex];
//     console.log(major.innerText,major.value);
//     document.querySelector('#majorName').value = major.value;
//     if(major.value) {
//         document.querySelector('#majorName').readOnly = true;
//     }else {
//         document.querySelector('#majorName').readOnly = false;
//     }
// }

// let btn = document.querySelector('#send');
// btn.onclick = () => {
//     let subject = document.getElementsByName('subject');
//     let option;
//     for (let i=0; i<subject.length;i++) {
//         option = subject[i].value;
//         break;
//     }
//     let subjectRadio = document.querySelector("input[name = 'subject']:checked");
//     console.log(subjectRadio);

//     let mailingCheck = document.querySelectorAll("input[name='mailing']:checked");
//     console.log(mailingCheck);

//     let result = "";

//     result += subjectRadio.value + ", ";

//     for(let i = 0; i < mailingCheck.length;i++){
//         result += mailingCheck[i].value + ', ';
//     }
//     alert(result)
// }

// //이벤트 기초
// let btn = document.querySelector('#btn');
// function click1() {
//     alert('클릭되었다');
// }
// //웹요소에 직접 함수를 연결
// btn.onclick = click1;
// // 요소.on이벤트이름 = 함수명;
// // 요소.on이벤트이름 = function() {};
// // 요소.on이벤트이름 = () => {};

// //요소.addEventListener(이벤트명,함수,캡쳐링여부);
// let btn = document.querySelector('#btn');
// // btn.addEventListener('click',() => {},false)
// // false:버블링예정
// btn.addEventListener('click',()=>{
//     alert('a')
// })
// btn.addEventListener('click',function() {
//     alert('b')
// })

// //글자수 확인하는 코드
// let btn = document.querySelector('#btn');
// let word = document.querySelector('#word');
// let wordLenght = 0;
// //버튼클릭시 글자수 확인
// btn.addEventListener('click', () =>{
//     wordLenght = word.value.length;
//     document.querySelector('#result').innerText = wordLenght;
//     //wordLenght 이결과를 result에 표시
// })

// //버튼클릭에 대한 동작확인
// btn.addEventListener('click',(e) => {
//     if(e.ctrlkey){
//         console.log('컨트롤키를 누르고 클릭했네요');
//     }else {
//         console.log('그냥했네요?');
//     }
// })

// word.addEventListener('keyup',(e) => {
//     wordLenght = e.target.value.length;
//     document.querySelector('#result').innerText = wordLenght;
// })

// //마우스오버하면 이미지 바꾸기
// let img = document.querySelector('img');
// let index = 1;
// img.addEventListener('mouse',()=> {
//     img.src = `images/pic-${index % 6 + 1}.jpg`;
//     index++;
// });

// /*
// click  사용자가 동일한 요소위에서 마우스 버튼을 눌렀다 댈떄
// dblclick 두번 눌렀다 땔때
// mousedown 마우스를 누르고 있을때
// mouseup 눌렀던 마우스 버튼을 땔때
// mousemove 마우스를 움직였을때
// mouseover 요소위로 마우스를 움직였을때
// mouseout 요소 바깥으로 마우스를 움직였을때
// */

// const imgBox = document.querySelector("#container > img");

// imgBox.addEventListener("mouseover", () => imgBox.src = "images/pic-2.jpg");
// imgBox.addEventListener("mouseout", () => imgBox.src = "images/pic-1.jpg");
// imgBox.addEventListener("click", () => imgBox.src = "images/pic-3.jpg");
// imgBox.addEventListener("dblclick", () => imgBox.src = "images/pic-3.jpg");
// imgBox.addEventListener("mousedown", () => imgBox.src = "images/pic-4.jpg");
// imgBox.addEventListener("mousemove", () => imgBox.src = "images/pic-5.jpg");
// imgBox.addEventListener("mouseup", () => imgBox.src = "images/pic-6.jpg");

// //프로필구현
// //모달구현
// let modalBox = document.querySelector('#modal-box');
// let openBtn = document.querySelector('#open');
// let closeBtn = document.querySelector('#close');
// //프로필 보기버튼(#open)을 클릭하면 나타나는 모달
// openBtn.addEventListener('click',() => {
//         modalBox.classList.add('active');
// })

// //close 버튼을 눌렀을때 사라지는 모달
// closeBtn.addEventListener('click', ()=> {
//     modalBox.classList.remove('active');
// })

// //모달창 외부를 클릭했을때도 모달창이 닫힌다
// window.addEventListener('click',(e)=> {
//     if(e.target == modalBox) {
//         modalBox.classList.remove('active');
//     }
// })

// //사각형 내부를 누르면 위치가 찍힘
// let box = document.querySelector('#box');
// box.addEventListener('click',(e) => {
// console.log(`이벤트발생위치 : ${e.pageX},${e.pageY}`);
// //전체페이지기준
// console.log(`클라이언트위치 : ${e.clientX},${e.clientY}`);
// //브라우저 기준
// console.log(`클라이언트위치: ${e.screenX},${e.screenY}`);
// //모니어화면위치기준
// console.log(`오프셋위치: ${e.offsetX},${e.offsertY}`);
// //이벤트대상기준
// })

// //드래그한 위치 출력
// const box = document.querySelector('#box');
// let isdarg = false; //드래그상수변수
// let locx, locy = 0;
// //mousedown마우스 누르고 있을때
// box.addEventListener('mousedown',(e)=>{
//     isdarg = true;
//     locx = e.offsetX;
//     locy = e.offsertY;
// })
// //mouseup 눌렀던 마우스 버튼을 땔떄
// //때면서 아무것도 하고싶지않음
// window.addEventListener('mouseup',(e)=> {
//     isdarg = false;
// })

// //이동길이체크
// //시작점에서 끝값을 뺴서 왼쪽으로 이동 마치 마우스 따라 이동하는것
// //윈도우가 최상위 부모 도큐먼트 가능
// //mousemove 마우스를 움직였을때
// window.addEventListener('mousemove',(e) => {
//     if(isdrag){
//         box.innerText = `
//         (${locx},${locy})에서 드래그 시작 \n
//         (${e.clientX},${e.clientY})에서 드래그 끝.
//         (${e.clientX - locx}${e.clientY - locy})로 이동`;

//         box.style.left = (e.clientX - locx) + 'px';
//         box.style.top = (e.clientY - locy) + 'px';
//     }
// })

// //키보드 이벤트
// document.addEventListener('keydown',(e) => {
//     let txtContents = `code : ${e.code} \n key: ${e.key}`;
//     //e.code는 사용자가 누른키
//     document.querySelector('#result').innerText = txtContents;
//     //div에 텍스트 작성
//     if(e.key == 'enter') {
//         window.close()
//     }
// })

// //이미지 자동변경
// const container = document.querySelector('#container');
// const imgArr = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg','pic-6.jpg']
// let imgIdx = 0;
// container.style.backgroundColorImage = `url(./images/${imgArr[imgIdx]})`;
// const left_arrow = document.querySelector('#left');
// const right_arrow = document.querySelector('#right');

// //방법1 좌우버튼을통해 이미지변경하는법
// left_arrow.addEventListener('click',() =>{
//     imgIdx--;
//     if(imgIdx<0) {
//         imgIdx = imgArr.length - 1;
//     }
//     container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})`;
// })
// right_arrow.addEventListener('click',() =>{
//     imgIdx++; //반복되므로 배열 벗어나는 조건문 노필요
//     container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})`;
//     })

// //방법2 3초마다 이미지 자동변경
// function arrow_func(e){
//     if(e?.target.id == 'left'){
//         imgIdx--;
//         if(imgIdx < 0) {
//             imgIdx = imgArr.length - 1;
//         }
//     }else {
//         imgIdx++;
//         if (imgIdx >= imgArr.length) {
//             imgIdx = 0;
//         }
//     }
//     container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})`;
// }

// //방법3 더줄이기
// const arrows = document.querySelectorAll('.arrow');
//     for (let arrow of arrows) {
//         arrow.addEventListener('click',arrow_func);
//     }


// //버블링은 요소 간에 중첩된 구조에서 이벤트를 처리하고
// //상위 요소들도 이벤트를 감지하고자 할 때 유용합니다.
// const body = document.body;
// const div = document.querySelector('div');
// const section = document.querySelector('section');
// const p = document.querySelector('p');

// function bubbling(e) {
//     console.log(`버블링  => e.targer: ${e.target.tagName},
//         e.currentTarget:${e.currentTarget.tagName}`)
// }//.tagName:이 속성은 요소의 태그 이름을 문자열로 반환합니다.
// body.addEventListener('click', bubbling);
// div.addEventListener('click',(e)=>{
//     e.stopPropagation();
// });
// section.addEventListener('click',bubbling);
// p.addEventListener('click',bubbling);


//마우스 왼쪽이동으로 이미지변환
// function arrow_func(e) {
//     if (e? target.id == 'left') {
//         imgIdx = imgArr.length - 1;
//     }else {
//         if(imgIdx >= imgArr.length) {
//             imgIdx = 0;
//         }
//     container.style.background = "url(./images/pic-3.jpg)";
//     }
// }

// //1-1 오른쪽 마우스 클릭 못해 만들기
// window.addEventListener('contextmenu',(e)=>{
//     e.preventDefault()
//     alert('우측마우스 사용불가')
// })

//방법2 일반적인방법
// function arrow_func(e) {
//     if (e?.target.id == 'left'){
//         imgIdx--;
//         if(imgIdx < 0){
//             imgIdx = imgArr.length - 1;
//         }
//     } else{
//         imgIdx++;
//         if(imgIdx >= imgArr.length){
//             imgIdx = 0;
//         }
//     }
//     container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})`;
// }

// // 시간초 부여하는법
//     setInterval(arrow_func,1000);

// //더줄이는법
// const arrows = document.querySelectorAll('arrow');
//     for (let arrow of arrows) {
//         arrow.addEventListener('click',arrow_func)
//     }

// //create Element
// //1족보에없던 태그 생성/가장 마지막에생성
// let newP= document.createElement('p');
// //새로운 자식태그등장
// let textNode = document.createTextNode('python');
// newP.appendChild(textNode);
// //바디의 자식으로만듬 화면에 띄어짐
// document.body.appendChild(newP);

// //insertBefore(추가노드,기준노드);
// let h1 = document.querySelector('h1');//기준노드선언
// let javascript = document.querySelector('p:nth-child()')
// document.body.insertBefore(newP,javascript);//자바앞으로


// //특정노드 삭제
// h1.remove();


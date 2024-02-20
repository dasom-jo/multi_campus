const body = document.body;
const div = document.querySelector('div');
const section = document.querySelector('section');
const p = document.querySelector('p');

function bubbling(e) {
    console.log(`버블링 => e.target:${e.target.tagName},e.currentTarget:'${e.currentTarget.tagName}}`);
}  


// //버블링//더많이 쓰임
body.addEventListener('click', bubbling);
//div.addEventListener('click', bubbling);
div.addEventListener('click',(e) => {
    e.stopPropagation(); //디브에서 막히게해줌 거의 이런일은업사
});
section.addEventListener('click', bubbling);
p.addEventListener('click', bubbling);


//캡쳐링
// function capturing(e) {
//     console.log(`캡쳐링 => e.target:${e.target.tagName},e.currentTarget:'${e.currentTarget.tagName}}`);
// }

// body.addEventListener('click',capturing, true);
// div.addEventListener('click',capturing, true);
// section.addEventListener('clk',captuing, true);
// p.addEventListener('click',capturing, true);
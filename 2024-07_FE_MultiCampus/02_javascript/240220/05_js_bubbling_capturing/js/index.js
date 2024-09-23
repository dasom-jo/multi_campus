const body = document.body;
const div = document.querySelector('div');
const section = document.querySelector('section');
const p = document.querySelector('p');

function bubbling(e) {
    console.log(`버블링 => e.target:${e.target.tagName}, e.currentTarget:${e.currentTarget.tagName}`)
}

body.addEventListener('click', bubbling);
div.addEventListener('click', bubbling);
// div.addEventListener('click', (e) => {
//     e.stopPropagation();
// });
section.addEventListener('click', bubbling);
p.addEventListener('click', bubbling);


// function capturing(e) {
//     console.log(`캡처링 => e.target:${e.target.tagName}, e.currentTarget:${e.currentTarget.tagName}`)
// }

// div.addEventListener('click', capturing, true);
// body.addEventListener('click', capturing, true);
// section.addEventListener('click', capturing, true);
// p.addEventListener('click', capturing, true);
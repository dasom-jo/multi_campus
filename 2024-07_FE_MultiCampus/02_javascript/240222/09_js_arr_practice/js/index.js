const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

const title = document.querySelector("h1").innerText;
const startIndex = title.indexOf('[');
const endIndex = title.indexOf(']');
const arrStr = title.slice(startIndex + 1, endIndex);

const nums = arrStr.split(", ");  // ["2","4","6","8","10"]
showArray(origin, arr);

let sum = 0
for(let num of arr) {
    sum += Number(num);
}
arr.push(sum);

showArray(result, arr);

function showArray(location, array) {
    let table = "<table><tr>";
    for (let num of array) {
        table += `<td>${num}</td>`
    }
    table += "</tr></table>";
    location.innerHTML = table;
}

/*
showArray2(origin, arr);

let sum = 0
for (let num of arr) {
    sum += Number(num);
}
arr.push(sum);

showArray2(result, arr);

function showArray2(location, array) {
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    for (let i of array) {
        const td = document.createElement('td');
        td.innerText = i;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    location.appendChild(table);
}
 */

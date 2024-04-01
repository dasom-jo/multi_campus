const s = new Set();

s.add(false);
s.add(1);
s.add('1');
s.add(1);
s.add(1.0);
s.add(2);

console.log(s.size, s.has(1));

for (const e of s) {
    console.log(e);
}

s.forEach((e) => {
    console.log(e);
})

s.delete(1);
s.clear();

const arr = [2,0,2,4,0,4,0,1];
const resultSet = new Set(arr);
console.log(resultSet);
const resultArr = Array.from(resultSet);
console.log(resultArr);
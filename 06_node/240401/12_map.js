const m = new Map();

m.set('a', 'b');
m.set(3, 'c');
const o = {};
m.set(o, 'object');

console.log(m.get('a'));
console.log(m.get(3));
console.log(m.get(o));
// console.log(m.get({})); // 다른 참조
console.log(m.size);

for (const [k, v] of m) {
    console.log(k, v);
}


m.forEach((v, k) => {
    console.log(k, v);
});

console.log(m.has('a'));
console.log(m.delete('a'));
console.log(m);
m.clear()
console.log(m);
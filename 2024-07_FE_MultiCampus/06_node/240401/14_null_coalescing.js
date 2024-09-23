const a = 0;
const b = a ?? 3; // a가 null 또는 undefined이면 b는 3
const c = a || 3; // boolean(a)가 false이면 c는 3
console.log(b);
console.log(c);
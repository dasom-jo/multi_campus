const a = 0;
const b = a ?? 3; //a값이 null,undefined이면 b는 3
const c = a || 3;//boolean(A)값이 false이면 c는 3
console.log(b);
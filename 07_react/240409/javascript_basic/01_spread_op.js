const [name, ...info] = ['최인규', 17, '서울'];

console.log('name', name);
console.log('info', info);

const names = ['최민식', '유해진', '김고은']
const stars = ['이도현', ...names, ...names]
console.log(stars);

const arr = ['사과', '오렌지', '딸기', '수박', '메론'];
const [사과, 오렌지, ...rest] = arr;
console.log(rest);

let inkyu = {
    my_name: '최인규',
    my_age: 17,
    my_region: '서울',
    my_email: '484342@gmail.com'
};
const { my_name, my_age, ...my_rest } = inkyu;
console.log(my_rest)

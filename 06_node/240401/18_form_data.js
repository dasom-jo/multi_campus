const formData = new FormData();

formData.append('name', '최인규');
formData.append('item', '아이폰');
formData.append('item', '아이패드');

console.log(formData);
console.log(formData.has('item'));
console.log(formData.get('item'));
console.log(formData.getAll('item'));

formData.append('hobby', ['웹 개발', '코바늘']);
console.log(formData);
console.log(formData.get('hobby'));
formData.delete('name')
formData.set('item', '맥북');
console.log(formData);
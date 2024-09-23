const formDate = new FormData();

formDate.append('name','조다솜');
formDate.append('item','imac');
formDate.append('item','ipad');

console.log(formDate);
console.log(formDate.has('item'));
console.log(formDate.get('item'));
console.log(formDate.getAll('item'));

formDate.append('hobby',['수면','다이어트']);
console.log(formDate);
console.log(formDate.get('hobby'));
formDate.delete('name')
formDate.set('item','맥북');
console.log(formDate);
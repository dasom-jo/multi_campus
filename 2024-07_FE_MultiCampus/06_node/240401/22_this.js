console.log(this);
console.log(this == {});
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log(this === module.exports);
    console.log(this === exports);
    console.log(this);
}

whatIsThis();
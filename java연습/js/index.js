function solution(str2, target) {
    if(str2.includes(target)) {
        return 1;
    }else{
    return 0;
    }
}
let str1 = "abc"
let str2 = 	"aabcc"

console.log(solution(str2, str2))
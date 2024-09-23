/* filter() */
// 특정 조건에 맞는 요소만 "추출하여, 새로운 배열로 반환"

let scores = [90, 35, 64, 88, 45, 92]
// let high_scores = scores.filter(score => {
//     if (score >= 85) {
//         return score
//     }
// });

// let high_scores = scores.filter(score => {
//     if (score >= 85) return score
// });

let high_scores = scores.filter(score => score >= 85);

console.log(high_scores);

// 85 미만 점수 -> 인덱스도 같이 확인
let low_scores = scores.filter((score, idx) => {
    if (score < 85) {
        console.log(`index: ${idx}, score: ${score}`);
        return score;
    }
});
console.log(low_scores);
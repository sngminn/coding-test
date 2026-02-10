function solution(numbers) {
    const sort = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    const answer = sort.join("");
    return answer[0] === "0" ? "0" : answer
}
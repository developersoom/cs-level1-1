function solution(a, b) {
    var endday = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    var days = "SUN,MON,TUE,WED,THU,FRI,SAT".split(',');
    
    var total = 4 + b;
    for (var i = 1; i < a; i++) {
        total += endday[i];
    }    
    return days[total % 7]
}

console.log(solution(1, 1) === 'FRI');
console.log(solution(1, 31) === 'SUN');
console.log(solution(2, 1) === 'MON');
console.log(solution(5, 24) === 'TUE');
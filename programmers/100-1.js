//프로그래머스 레벨1 알고리즘
//문자열의 가운데 문자 리턴하기

function solution(s) {
    var answer = '';
    var middle = Math.floor(s.length / 2);
    
    if (s.length % 2 == 0) {
        answer = s[middle - 1]
    } 
    answer += s[middle];
    return answer;
}

function solution(A) {
    var sum = 0;
    var i;
    var len = A.length;
    for (i = 0; i < len; i++) {
        sum += A[i];
    }
    return (len+1) / 2 * (len+2) - sum;
}

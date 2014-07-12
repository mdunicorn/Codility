
function solution(A) {
    var sum = 0
    var i;
    for(i = 0; i < A.length; i++) {
        sum += A[i];
    }
    var left = 0, right = sum;
    var min = Number.MAX_VALUE;
    var a, diff;
    for(i = 0; i < A.length-1; i++) {
        a = A[i];
        left += a;
        right -= a;
        diff = Math.abs(left-right);
        if(diff < min)
            min = diff;
    }
    return min;
}

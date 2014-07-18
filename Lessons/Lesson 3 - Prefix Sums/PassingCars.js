
function solution(A) {
    var sum = 0;
    var zeros = 0;
    var i, value;
    for (i = 0; i < A.length; i++) {
        value = A[i];
        if (value === 0)
            ++zeros;
        else
            sum += zeros;
        if (sum > 1000000000)
            return -1;
    }
    return sum;
}


function solution(N, A) {
    var counters = [];
    var i ,j;
    for (i = 0; i < N; i++)
        counters[i] = 0;
    var max = 0;
    for (i = 0; i < A.length; i++) {
        var op = A[i];
        if(op <= N) {
            op--;
            counters[op]++;
            if(counters[op] > max)
                max = counters[op];
        } else {
            for ( j = 0; j < N; j++)
                counters[j] = max;
        }
    }
    return counters;
}

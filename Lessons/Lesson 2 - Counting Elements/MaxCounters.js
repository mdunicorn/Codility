
function solution(N, A) {
    var counters = [];
    var i ,j;
    for (i = 0; i < N; i++)
        counters[i] = 0;
    var max = 0;
    var lastMax = 0;
    for (i = 0; i < A.length; i++) {
        var op = A[i];
        if(op <= N) {
            op--;
            var c = counters[op];
            if( c < lastMax )
                c = lastMax + 1;
            else
                ++c;
            counters[op] = c;
            if(c > max)
                max = c;
        } else {
            lastMax = max;
        }
    }
    for (i = 0; i < counters.length; i++)
        if(counters[i] < lastMax)
            counters[i] = lastMax;
    return counters;
}


function solution(S, P, Q) {
    var i, j;
    var impactFactors = [];
    for (i = 0; i < S.length; ++i) {
        switch(S[i]) {
            case 'A':
                impactFactors[i] = 1;
                break;
            case 'C':
                impactFactors[i] = 2;
                break;
            case 'G':
                impactFactors[i] = 3;
                break;
            case 'T':
                impactFactors[i] = 4;
                break;
        }
    }
    var nexts = [];
    var lasts = [];
    var n;
    for (i = impactFactors.length-1; i >= 0; --i) {
        var num = impactFactors[i];
        lasts[num] = i;
        n = nexts[i] = [];
        for (j = 1; j < num; ++j)
            n[j] = lasts[j];
    }
    
    var result = [];
    
    for (i = 0; i < P.length; i++) {
        var start = P[i];
        var end = Q[i];
        var current = impactFactors[start];
        n = nexts[start];
        for (j = 1; j < current; j++)
            if(n[j] <= end) {
                result[i] = j;
                break;
            }
        if (j == current)
            result[i] = current;
    }
    return result;
}

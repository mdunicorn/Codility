#include <limits>

int solution(vector<int> &A) {
	long sum = 0;
	vector<int>::iterator it;
	for(it = A.begin(); it != A.end(); it++)
		sum += *it;
	long left = 0, right = sum, min = numeric_limits<long>::max();
	long diff;
	for(it = A.begin(); it != A.end()-1; it++) {
		left += *it;
		right -= *it;
		diff = left-right;
		if(diff < 0)
			diff = -diff;
		if(diff < min)
			min = diff;
	}
	return min;
}

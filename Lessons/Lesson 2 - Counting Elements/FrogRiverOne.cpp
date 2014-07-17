
int solution(int X, vector<int> &A) {
	vector<bool> fallen(X, false);
	int n = 0;
	for (int i = 0; i < A.size(); i++) {
		int pos = A[i]-1;
		if(fallen[pos])
			continue;
		fallen[pos] = true;
		n++;
		if(n == X)
			return i;
	}
	return -1;
}

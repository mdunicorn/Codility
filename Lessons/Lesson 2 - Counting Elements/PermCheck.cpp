
int solution(vector<int> &A) {
	int n = A.size();
	vector<bool> exists(n, false);
	for (int i = 0; i < n; i++) {
		if ( A[i] > n )
			return false;
		if (exists[A[i]])
			return false;
		exists[A[i]] = true;
	}
	return true;    
}

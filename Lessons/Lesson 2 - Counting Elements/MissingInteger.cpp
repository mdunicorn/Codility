
int solution(vector<int> &A) {
	int n = A.size(), num;
	vector<bool> found(n+1, false);
	
	for(int i = 0; i < n; i++) {
		num = A[i];
		if(num <= n && num > 0)
			found[num] = true;
	}
	for(int i = 1; i <= n; i++) {
		if(!found[i])
			return i;
	}
	return n+1;
}

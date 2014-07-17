
int solution(vector<int> &A) {
	int n = A.size();
	vector<bool> exists(n, false);
	for(vector<int>::iterator it = A.begin(); it != A.end(); it++) {
		if(*it > n)
			return false;
		if(*it < 1)
			return false;
		if(exists[*it-1])
			return false;
		exists[*it-1] = true;
	}
	return true;
}

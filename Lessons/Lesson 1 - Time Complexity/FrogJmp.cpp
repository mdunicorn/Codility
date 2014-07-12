
int solution(int X, int Y, int D) {
	int distance = Y-X;
	int r = distance / D;
	if ((distance % D) > 0)
		return r+1;
	return r;
}

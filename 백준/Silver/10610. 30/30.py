N = list(input())
N.sort(reverse=True)

if "0" not in N:
    print(-1)
elif sum(map(int,N))%3 != 0:
    print(-1)
else:
    print("".join(N));
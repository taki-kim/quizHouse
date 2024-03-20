import sys

N,K = map(int,sys.stdin.readline().split())

arr = []

for i in range(N+1):
    if i > 0:
        x = N%i
        if x == 0:
            arr.append(i)

if(K > len(arr)) :
    print(0)
else :
    print(arr[K-1])
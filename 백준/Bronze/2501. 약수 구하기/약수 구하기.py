import sys

N,K = map(int,sys.stdin.readline().split())

arr = []

for i in range(1,N+1):
    if N%i == 0:
        arr.append(i)

if(K > len(arr)) :
    print(0)
else :
    print(arr[K-1])
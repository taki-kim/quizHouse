import sys

input = sys.stdin.readline

N = int(input())

arr = set();

for i in range(N):
    arr.add(input().strip())

arr = list(arr)
result = sorted(arr, key = lambda x : (len(x), x))

print("\n".join(result))
import sys
input = sys.stdin.readline

N = int(input())

arr = list(map(int, input().split(" ")));

arr.sort();

acc = 0;
result = 0;

for i in range(N):
    acc += arr[i];
    result += acc;

print(result)
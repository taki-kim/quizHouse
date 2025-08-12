import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().strip().split(" ")));
arr.sort();

result = str(arr[0]) + " " + str(arr[N-1])

print(result)

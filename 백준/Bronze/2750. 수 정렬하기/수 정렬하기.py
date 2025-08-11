import sys

input= sys.stdin.readline

N = int(input())
nums = []

for N in range(N):
    nums.append(int(input()))

print("\n".join(map(str,sorted(nums))))

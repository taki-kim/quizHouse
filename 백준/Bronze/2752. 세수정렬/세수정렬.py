import sys

input = sys.stdin.readline

arr = map(int, input().split(" "))

print(" ".join(map(str,sorted(arr))))
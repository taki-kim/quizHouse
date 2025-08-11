import sys

input = sys.stdin.readline

arr = []

for i in range(5):
    num = int(input())
    arr.append(num)

print(sum(arr)//5)
print(sorted(arr)[2])

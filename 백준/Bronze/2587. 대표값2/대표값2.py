import sys

arr = []
sum = 0

for i in range(5):
    x = int(sys.stdin.readline())
    sum += x
    arr.append(x)

arr.sort()

print(sum//5)
print(arr[2])

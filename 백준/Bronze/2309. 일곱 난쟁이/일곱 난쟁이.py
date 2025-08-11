import sys

input = sys.stdin.readline

arr = []

for i in range(9):
    arr.append(int(input().strip()))

sum = sum(arr);

target_01 = 0;
target_02 = 0;


for i in range(8):
    for j in range(i+1,9):
        if(sum - (arr[i] + arr[j]) == 100):
            target_01 = arr[i]
            target_02 = arr[j]
            break

arr.remove(target_01)
arr.remove(target_02)

print("\n".join(map(str,sorted(arr))))
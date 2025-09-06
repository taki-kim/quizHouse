N, K = map(int, input().strip().split(" "))
arr = list(map(int, input().strip().split(" ")))

left = 0;

my_sum = sum(arr[left:K])
result = sum(arr[left:K])


for right in range(K, N):
    my_sum = my_sum - arr[left] + arr[right]
    left += 1
    if (my_sum > result):
        result = my_sum

print(result)
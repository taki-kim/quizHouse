N,M = map(int, input().strip().split(" "));
arr = list(map(int, input().strip().split(" ")));
 
result = 0;
cur_sum = 0;
left = 0;

for right in range(N):
    cur_sum += arr[right]
    while cur_sum > M:
        cur_sum -= arr[left];
        left += 1;
    if(cur_sum == M):
        result += 1;

print(result);


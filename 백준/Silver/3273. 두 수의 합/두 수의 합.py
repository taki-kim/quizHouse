n = int(input());
arr = list(map(int, input().strip().split(" ")));
x = int(input());

arr.sort();


answer = 0;
left = 0;
right = n-1;


while left < right:
    cur_sum = arr[left] + arr[right];
    if cur_sum == x:
        answer += 1;
        left +=1;
    elif cur_sum < x:
        left+=1;
    elif cur_sum > x:
        right-=1;

print(answer);
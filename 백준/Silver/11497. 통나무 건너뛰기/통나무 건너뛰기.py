T = int(input())

for i in range(T):
    N = int(input())
    arr = list(map(int,input().split(" ")))
    arr.sort()
    odd_arr = []
    even_arr = []
    result = 0

    for i in range(N):
        if i%2 == 0:
            even_arr.append(arr[i])
        else:
            odd_arr.append(arr[i])

    odd_arr.sort(reverse=True)

    new_arr = even_arr + odd_arr

    for i in range(N):
        target = 0
        if (i == N-1):
            target = abs(new_arr[i]-new_arr[0])  
        else:
            target = abs(new_arr[i] - new_arr[i+1])

        if(target >= result) : result = target

    print(result)
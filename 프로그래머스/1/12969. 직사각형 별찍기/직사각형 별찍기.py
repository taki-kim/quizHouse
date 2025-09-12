a, b = map(int, input().strip().split(' '))

stars = ""
for i in range(b):
    for j in range(a):
        stars += "*"
    print(stars)
    stars = ""
    
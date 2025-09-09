X, Y = map(int, input().split(" "))

N = int(input())

Xs = [0,X]
Ys = [0,Y]

for i in range(N):
    pos, tar = map(int,input().split(" "))
    if(pos == 0):
        Ys.append(tar)
    elif(pos == 1):
        Xs.append(tar)

Xs.sort();
Ys.sort();

targetX = 0
targetY = 0


for i in range(len(Xs)-1):
    res = Xs[i+1] - Xs[i]
    if(res > targetX): targetX = res

for i in range(len(Ys)-1):
    res = Ys[i+1] - Ys[i]
    if(res > targetY): targetY = res

print(targetX*targetY)
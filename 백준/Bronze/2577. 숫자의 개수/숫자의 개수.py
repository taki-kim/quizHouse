num = 1;

for i in range(3):
    num *= int(input());

count = [0]*10;

for i in map(int,list(str(num))):
    count[i] += 1;

print("\n".join(map(str,count)))

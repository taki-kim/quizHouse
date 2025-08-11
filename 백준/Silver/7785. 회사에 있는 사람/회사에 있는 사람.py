N = int(input());

myList = set();

for i in range(N):
    name, state = input().split();
    if(state == 'enter') : myList.add(name);
    elif( state == 'leave') : myList.remove(name);
    
print("\n".join(sorted(myList,reverse=True)))
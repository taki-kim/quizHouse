import sys
input = sys.stdin.readline

string = input().strip()

mySet = set()

for i in range(len(string)):
    for j in range(i+1, len(string)+1):
        mySet.add(string[i:j])

print(len(mySet))
N = int(input())
M = int(input())
graph = [[] for i in range(N+1)]
visited = [0] * (N+1)
answer = 0

for i in range(M):
    x,y = map(int,input().split())
    graph[x].append(y)
    graph[y].append(x)

def dfs(node):
    global answer
    visited[node] = 1
    answer = answer+1
    
    for i in graph[node]:
        if(visited[i] ==0) :
            dfs(i)

dfs(1)

print(answer - 1)
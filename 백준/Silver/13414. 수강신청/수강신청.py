import sys
input = sys.stdin.readline

capacity, applicant = map(int, input().split());

waitingList = {}

for i in range(applicant):
    studentID = input().strip();
    waitingList[studentID] = i;

sorted_dict = sorted(waitingList.items(), key=lambda item: item[1])



for i in range(capacity):
    if i < len(sorted_dict):
        print(sorted_dict[i][0])
    else:
        break



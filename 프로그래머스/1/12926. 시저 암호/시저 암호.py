import string

def solution(s, n):
    answer = ''
    alphabet = list(string.ascii_lowercase)
    
    
    for ch in s:
        if (ch == ' '):
            answer += ch
        else:
            upperCheck = ch.isupper()
            encrypt_index = (alphabet.index(ch.lower()) + n) % 26
            encrypt_letter = alphabet[encrypt_index]
            if(upperCheck == True):
                answer += encrypt_letter.upper()
            else:
                answer += encrypt_letter
        
    return answer
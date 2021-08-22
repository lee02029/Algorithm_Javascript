import re

def isPalindrome(s:str) -> bool:
    s = s.lower()
    #정규식으로 불필요한 문자 필터링
    s = re.sub('[^a-z0-9]','',s)

    return s == s[::-1]

string = 'abcba'
ans = isPalindrome(string)
print(ans)
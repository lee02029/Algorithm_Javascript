#isalnum()= 영문자, 숫자 판별하는 함수
#대소문자 구별하지 않으므로 lower()사용
def isPalindrome(self, s:str) ->bool:
    strs = []
    for char in s:
        if char.isalnum():
            strs.append(char.lower())

#list에서 pop함수는 인덱스 지정 가능 >> 0을 지정하여 맨 앞으로 가져올수 있다.
#맨 뒷부분이 일치하지 않으면 false, 맞으면 true
    while len(strs) > 1:
        if strs.pop(0) !=strs.pop():
            return False

    return True
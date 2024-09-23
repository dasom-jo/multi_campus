

def get_gender(data:str) ->str:
    gender_num = int(data[6])
    print(gender_num)
    if gender_num % 2:
        return '남자'
    return '여자'
    
def get_birth(data:str) -> tuple:
    year = data[:2]
    month = data[2:4]
    day = data[4:6]
    gender_num = int(data[6])
    #year = '20' + year if gender_num >= 3 else '19' + year
    if gender_num >= 3:
        year = '20' + year
    else:
        year = "19" + year
    return int(year),int(month),int(day)
    pass

if __name__ == "__main__":
    rrn_num = input('주민번호를 입력하세요').replace('-','')
    print(get_gender(rrn_num))
    print(get_birth(rrn_num))
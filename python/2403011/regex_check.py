import re

def match_check(regex,str):
    if re.search(regex, str):
        print(f"{regex}: {str} is ok")
    else:
        print(f"{regex}:{str}is \033[101m not \033[0m ok")

# match_check('[abc]','door')


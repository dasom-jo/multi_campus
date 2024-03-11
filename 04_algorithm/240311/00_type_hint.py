def isMinus(a:int, b:int) -> bool:
    if a - b >= 0:
        return False
    return True
    
print(isMinus(1, 2)) # True
print(isMinus(3, 2)) # False

# mypy 00_type_hint.py
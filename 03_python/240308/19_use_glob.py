import glob as gl

# print(gl.glob("*.py")) # 현재 디렉토리에 있는 모든 .py 파일을 리스트로 반환

print(gl.glob("../*")) # 상대 경로 이용해, 디렉토리 및 파일 리스트로 반환

print(gl.glob("C:/*")) # 절대 경로 이용해, 디렉토리 및 파일 리스트로 반환
import glob as gl
import shutil as sh

# for txt in gl.glob("*.txt"):
#     sh.copy(txt, 'c'+ txt)

sh.copy("경로+파일명", "경로 및 파일명")
sh.move("경로+파일명", "경로 및 파일명")

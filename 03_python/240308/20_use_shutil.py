import shutil as sh
import glob as gl

for txt in gl.glob('*.txt'):
    sh.copy(txt, 'c' + txt)

sh.copy("src.txt","src_copy.txt")
#        경로및 파일명 
sh.move('src.txt','src1.txt' ) #이름변경
#       경로및 파일명




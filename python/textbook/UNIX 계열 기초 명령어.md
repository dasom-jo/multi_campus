# UNIX 계열 운영체제 기초 명령어 정리

(1) 자동완성
- 자동완성은 TAB 키를 활용한다.

(2) 파일 내용 확인 
- `cat 파일명.확장자`

(3) 현재 경로 출력
- `pwd` : Print Working Directory

(4) 디렉토리 내부 목록 출력
- `ls` : list
- `ls -l` : 자세히 보기
- `ls -a` : 숨김파일 포함 보기
- `ls -al` : 숨김파일 포함 자세히 보기

(5) 경로 변경 (상대경로, 절대경로)
- `cd 경로` : Change Directory
- `cd ..` : 상위 폴더로 이동
- `cd .` : 현재 폴더로 이동
- `cd ~` : 홈 경로로 이동

(6) 폴더 생성
- `mkdir 폴더명` : MaKe DIRectory

(7) 삭제
- `rm` : ReMove
- `rm 파일명` : 파일 삭제
- `rm -r 폴더명` : 폴더 하위의 파일까지 재귀적으로(recursively) 삭제
- `rm -f 파일명` : 파일 강제 삭제
- `rm -rf 파일명` : 폴더 강제 삭제

(8) 파일 생성
- `touch 파일명` : 파일 생성

(9) 복사
- `cp` : CoPy
- `cp 해당파일명 복사할위치` : 파일 복사
- `cp -r 해당폴더명 복사할위치` : 폴더 복사

(10) 이동
- `mv` : MoVe
- `mv 파일/폴더명 이동할위치` : 파일 또는 폴더를 이동

# BONUS. GIT 기초 명령어 정리

(1) Commit을 위한 Staging : `git add`
- 현재 코드 상태의 스냅샷을 찍기 위한 파일 선택 (==Staging Area에 파일 추가)
    ```bash
    # .은 모든 변경 사항을 staging area로 올림
    git add 파일명
    ```

(2) 버전 관리를 위한 스냅샷 저장 : `git commit`
- 현재 상태에 대한 스냅샷을 `commit`하여, 버전 관리를 진행한다.
    ```bash
    git commit -m "커밋 메시지"
    ```

(3) 원격 저장소로 코드 `git push`
- 최종적으로 Github 원격 저장소에 push한다.
    ```bash
    git push
    ```

(4) 그 외 명령어
- .git이라는 비밀스러운 하위 디렉토리 생성
    ```bash
    git init
    ```

- 현재 `git`의 상태를 조회 `git status`
    ```bash
    git status
    ```

- 버전 관리 이력을 조회 [Author, Date, Message, Commit hash]
    ```bash
    git log
    ```

- 버전 관리 이력 한줄로 짧게 조회
    ```bash
    git log --oneline
    ```

- 현재 상태과 commit 버전과의 차이 확인
    ```bash
    git diff
    ```
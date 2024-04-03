window.onload = () => getUser(); // 페이지가 로드되면 getUser 함수 실행

/* 사용자 추가 이벤트 */
const form = document.querySelector('form'); // form 태그 선택
form.addEventListener('submit', async (e) => { // form 태그에 submit 이벤트 발생시
    e.preventDefault(); // submit 이벤트의 기본 동작을 막음
    const userName = e.target.userName.value; // form 태그의 userName 태그의 value 값을 가져옴
    if (!userName) {
        alert('이름을 입력해주세요'); // 만약 userName이 없다면 alert로 이름을 입력해주세요 출력 후 함수 종료
        return
    }
    try {
        // axios를 이용해 NODE 서버 /user 경로로 post 요청 (userName을 body로 보냄)
        const response = await axios.post('/user', { userName });
        // post 요청이 성공하면 response 출력 및 getUser 함수 실행
        console.log(response);
        getUser();
    } catch (err) {
        console.error(err);
    }
    e.target.reset(); // form 태그 입력값 초기화
});

/* 사용자 목록을 가져오는 getUser 함수 */
const getUser = async () => {
    try {
        // axios를 이용해 NODE 서버 /user 경로로 get 요청 (사용자 목록을 가져옴)
        const response = await axios.get('/user');
        // get 요청이 성공하면 response 출력
        console.log(response);
        // userObject에 response.data에 있는 사용자 목록을 할당
        const userObject = response.data;

        // list 태그 선택
        const list = document.querySelector('#list');
        // list 태그 초기화
        list.innerHTML = '';

        // userObject에 있는 사용자 목록을 순회하며 사용자 목록을 화면에 출력
        Object.keys(userObject).map((key) => {
            // 사용자별 div 태그 생성
            const userDiv = document.createElement('div');
            // 사용자 이름 span 태그 생성
            const userSpan = document.createElement('span');
            userSpan.textContent = userObject[key];

            // 사용자 수정 버튼 생성
            const editBtn = document.createElement('button');
            editBtn.textContent = '수정';
            // 수정 버튼 클릭시, prompt로 새로운 이름을 입력받고, axios를 이용해 사용자 이름 수정
            editBtn.addEventListener('click', async () => {
                const newName = prompt('바꿀 이름을 입력하세요');
                if (!newName) {
                    alert('이름을 입력하지 않아, 수정이 취소되었습니다.');
                    return
                }
                try {
                    await axios.put(`/user/${key}`, { newName });
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            })

            // 사용자 삭제 버튼 생성
            const delBtn = document.createElement('button');
            delBtn.textContent = '삭제';
            // 삭제 버튼 클릭시, axios를 이용해 사용자 삭제
            delBtn.addEventListener('click', async () => {
                if (confirm('정말 삭제하시겠습니까?')) {
                    try {
                        await axios.delete(`/user/${key}`);
                        getUser();
                    } catch (err) {
                        console.error(err);
                    }
                }
            })

            // 사용자별 div 태그에 사용자 이름 span 태그, 수정 버튼, 삭제 버튼 추가
            userDiv.appendChild(userSpan);
            userDiv.appendChild(editBtn);
            userDiv.appendChild(delBtn);
            // list 태그에 사용자별 div 태그 추가
            list.appendChild(userDiv);
        });
    } catch (err) {
        console.error(err);
    }
}
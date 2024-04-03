window.onload = () => getUser();

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    if (!userName) {
        alert('이름을 입력해주세요');
        return
    }
    try {
        const response = await axios.post('/user', { userName })
        console.log(response);
        getUser();
    } catch (err) {
        console.error(err);
    }
    e.target.reset();
});

const getUser = async () => {
    try {
        const response = await axios.get('/user');
        console.log(response);
        const userObject = response.data;
        const list = document.querySelector('#list');
        list.innerHTML = '';
        Object.keys(userObject).map((key)=>{
            const userDiv = document.createElement('div');
            
            const userSpan = document.createElement('span');
            userSpan.textContent = userObject[key];

            const editBtn = document.createElement('button');
            editBtn.textContent = '수정';
            editBtn.addEventListener('click', async () => {
                const newName = prompt('바꿀 이름을 입력하세요');
                if (!newName) {
                    alert('이름을 입력하지 않아, 수정이 취소되었습니다.');
                    return
                }
                await axios.put(`/user/${key}`, { newName });
            })

            const delBtn = document.createElement('button');
            delBtn.textContent = '삭제';

            userDiv.appendChild(userSpan);
            userDiv.appendChild(editBtn);
            userDiv.appendChild(delBtn);
            list.appendChild(userDiv);
        });
    } catch (err) {
        console.error(err);
    }
}
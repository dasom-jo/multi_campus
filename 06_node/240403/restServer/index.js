
window.onload =() =>  getUser();

const form = document.querySelector('form');

form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const userName = e.target.userName.value;
    if(!userName){
        alert('이름을 입력해주세요');
        return
    }
    try{
        const response = await axios.post('/user',{userName})
        console.log(response);
        getUser();
    }catch(err) {
        console.error(err);
    }
    e.target.reset();//동작이 끝나면 기록 지워줌
});

const getUser = async() => {
try {
    const response = await axios.get('./user');
    console.log(response);//데이터 가져오는법
    userObject = response.data;
    const list = document.querySelector('#list');
    list.innerHTML = '';//초기화
    Object.keys(userObject).map((key)=>{
        const userDiv = document.createElement('div');

        const userSpan = document.createElement('span');
        userSpan.textContent = userObject[key];

        const editBtn = document.createElement('button');
        editBtn.textContent ='수정';
        editBtn.addEventListener('click',async () =>{
            const newName = prompt('바꿀이름을 입력하세요')
            if (!newName) {
                alert('이름을 입력하지않아 수정이취소되었습니다')
                return
            }
            try{
                await axios.put(`/user/${key}`, { newName });
                getUser();//다시불러옴
            }catch(err){
                console.error(err);
            }
        })
        const delBtn = document.createElement('button');
        delBtn.textContent ='삭제';
        delBtn.addEventListener('click',async()=>{
            if(confirm('삭제하시겠습니까')){
                console.log('삭제');
                try {
                    await axios.delete(`/user/${key}`)
                    list.innerHTML = '';
                    getUser();
                }catch(err){
                    console.error(err);
                }
            }
        })

        userDiv.appendChild(userSpan);
        userDiv.appendChild(editBtn);
        userDiv.appendChild(delBtn)
        list.appendChild(userDiv);
    });
} catch (err) {
    console.error(err);
}}

//변경전
// axios.post('/user',{userName})
//     .then((data)=>{
//         //console.log(data);
//         getUser();
//     })
//     .catch((err)=>{
//         console.error(err);
//     });

window.onload =() =>  getUser();

const form = document.querySelector('form');

form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const userName = e.target.userName.value;
    if(!userName){
        alert('이름을 입력해주세요');
        return
    }
    try{
        const response = await axios.post('/user',{userName})
        console.log(response);
        getUser();
    }catch(err) {
        console.error(err);
    }
    e.target.reset();//동작이 끝나면 기록 지워줌
});

const getUser = async() => {
try {
    const response = await axios.get('./user');
    console.log(response);//데이터 가져오는법
    userObject = response.data;
    const list = document.querySelector('#list');
    list.innerHTML = '';//초기화
    Object.keys(userObject).map((key)=>{
        const userDiv = document.createElement('div');

        const userSpan = document.createElement('span');
        userSpan.textContent = userObject[key];

        const editBtn = document.createElement('button');
        editBtn.textContent ='수정';
        editBtn.addEventListener('click',async () =>{
            const newName = prompt('바꿀이름을 입력하세요')
            if (!newName) {
                alert('이름을 입력하지않아 수정이취소되었습니다')
                return
            }
            try{
                await axios.put(`/user/${key}`, { newName });
                getUser();//다시불러옴
            }catch(err){
                console.error(err);
            }
        })
        const delBtn = document.createElement('button');
        delBtn.textContent ='삭제';
        delBtn.addEventListener('click',async()=>{
            if(confirm('삭제하시겠습니까')){
                console.log('삭제');
                try {
                    await axios.delete(`/user/${key}`)
                    list.innerHTML = '';
                    getUser();
                }catch(err){
                    console.error(err);
                }
            }
        })

        userDiv.appendChild(userSpan);
        userDiv.appendChild(editBtn);
        userDiv.appendChild(delBtn)
        list.appendChild(userDiv);
    });
} catch (err) {
    console.error(err);
}}

//변경전
// axios.post('/user',{userName})
//     .then((data)=>{
//         //console.log(data);
//         getUser();
//     })
//     .catch((err)=>{
//         console.error(err);
//     });


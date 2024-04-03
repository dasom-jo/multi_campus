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

const getUser = () => {
    
}
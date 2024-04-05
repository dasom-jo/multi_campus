const userForm = document.querySelector('#user-form');

userForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const userId = e.target.userId.value;
    const name = e.target.name.value;
    const password = e.target.password.value;

    if (!userId || !name || !password) {
        alert('필수 입력값 모두 입력해주세요')
        return
    }

    let profileImage = e.target.profileImage.files[0];

    if (profileImage) {
        const formData = new FormData();
        formData.append('profileImage', e.target.profileImage.files[0]);
        // 이미지 업로드하고, 저장된 이미지 파일명을 반환
        const response = await axios.post('/users/img', formData);
        profileImage = response.data;
    } else {
        profileImage = null;
    }
    const userData = {
        userId,
        name,
        password,
        profileImg: profileImage
    };
    
    try {
        // POST /users userData
        const response = await axios.post('/users', { userData });
        console.log(response);
    } catch (err) {
        console.error(err);
    }
    e.target.reset();
});
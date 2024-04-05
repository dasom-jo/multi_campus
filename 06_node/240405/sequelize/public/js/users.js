const userForm = document.querySelector('#user-form');

userForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const userId = e.target.userId.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const profileImage = e.target.profileImage.files[0];

    if (profileImage) {
        const formData = new FormData();
        formData.append('profileImage', e.target.profileImage.files[0]);
        // 이미지 업로드하고, 저장된 이미지 파일명을 반환
        const response = await axios.post('/users/img', formData);
        console.log(response);
        // profileImage = 저장된이미지파일명
    } else {
        profileImage = null;
    }

    const userData = {
        userId,
        name,
        password,
        profileImage
    };
    
    try {
        // POST /users userData
        const response = await axios.post('/users', { userData });
        console.log(response);
    } catch (err) {
        console.error(err);
    }
});
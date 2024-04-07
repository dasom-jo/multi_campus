const userForm = document.querySelector('#user-form');

userForm.addEventListener('submit', async(e)=>{
    //폼의 기본동작 중단
    e.preventDefault();
    const userId = e.target.userId.value;
    const name = e.target.name.vlaue;
    const password = e.target.password.value;

    if (!userId || !name || !password){
        alert('필수 입력값을 모두 입력해주세요')
        return
    }

    let profileImage = e.target.profileImage.files[0];
    let userData = {
        userId,
        name,
        password
    };

    if(profileImage) {
        const formData = new FormData();
        formData.append('forfileImage', e.target.profileImage.files[0]);
        //이미지 업로드하고, 저장된이미지 파일명을 반환
        // axios:클라이언트 측에서 서버로 데이터를 보내거나, 서버에서 데이터를 가져올 때 많이 사용
        const response = await axios.post('/users/img',formData);
        profileImage = response.data;
        //profileimage = 저장된이미지 파일명
        userData.profileImge = profileImage
    };

    try {
        // POST /users userData
        //사용자 데이터를 서버로 전송
        const response = await axios.post('/users',{ userData });
        if (response.data == 'OK') {
            window.location.reload();
        } else {
            alert('이미 존재하는 아이디입니다');
        }
    } catch (err) {
        console.err(err);
    }
    e.target.removeEventListener();
    //console.log(userData);
    //console.log(e.target.profileImage.files[0]); //files경로의배열

});
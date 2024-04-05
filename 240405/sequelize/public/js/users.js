const userForm = document.querySelector('#user-form');

userForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const userId = e.target.userId.value;
    const name = e.target.name.value;
    const password = e.target.password.value;

    if(!userId || !name || !password){
        alert('입력해주세요')
        return
    }
    let profileImage = e.target.profileImage.files[0];
    //console.log(profileImage);

    let userData ={
        userId,
        name,
        password,
    }
    if(profileImage){
        const formData = new FormData();
        formData.append('profileImage',e.target.profileImage.files[0]);
        //이미지업로드하고 저장된이미지파일명을 반환
        const response = await axios.post('/users/img',formData);
        console.log(response);
        //profileimage = 저장된이미지 파일명
        userData.profileImg = profileImage
    };

    try {
        // POST /users userDate
        const response = await axios.post('/users', { userData });
        if(response.data == 'ok') {
            window.location.reload();
        }
    }catch(err){
        console.error(err);
    }
    //console.log(userData);
    //console.log(e.target.profileImage.files[0]); //files경로의배열

})
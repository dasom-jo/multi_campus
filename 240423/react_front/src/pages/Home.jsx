import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useAuth } from "../hooks/useAuth";
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import kakaoLoginImg from '../assets/kakao_login_medium_wide.png'
import { Cookies } from "react-cookie";



const Home = () => {
  const navigate = useNavigate();
  const { loginUser, login, logout, kakaoLogin } = useAuth();
  kakaoLogin();

  const {
    register,//register: 입력 요소를 등록하는 함수
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    width:"500px",
    timer: 3000,
    // timerProgressBar: true,
    // didOpen: (toast) => {
    //   toast.onmouseenter = Swal.stopTimer;
    //   toast.onmouseleave = Swal.resumeTimer;
    // }
  });



  const onSubmit = (data) => {
    // 로그인 시켜주기
    login((res) => {
      if (res.data.code !== 200) {
        Toast.fire({
          icon: "error",
          title: "로그인 실패",
          text: "아이디 혹은 비밀번호를 잘못입력하셨습니다",
          footer: '<div style="text-align: left;>'+
          '<a href="#" style ="color:grey; text-decoration: none;">아이디와 비밀번호 찾기</a>'
          +'</div>'
        });
      }
    }, data)
    reset();
  };

  const handleLogout = () => {
    logout(() => {
      Toast.fire({
        icon: "success",
        title: "안녕히가세요."
      });
    });
  }
  // console.log(watch("email")) // 이메일 변경 시 값 확인


  return (
    <>
      <h1>로그인</h1>
      {
        loginUser?.id ?
          <Button variant="outlined" color="mainColor" onClick={handleLogout}>
            로그아웃
          </Button> :
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{ width: '25ch', display: 'block',marginBottom:"10px" }}>
              <OutlinedInput type="text" variant="outlined" {...register("email", { required: true })} />
              {errors.email && <span>이메일은 필수값입니다.</span>}
            </FormControl>
            <FormControl sx={{ width: '25ch', display: 'block' }}>
              <OutlinedInput type="password" variant="outlined"{...register("password", { required: true })} />
              {errors.password && <span>비밀번호는 필수값입니다.</span>}
            </FormControl>
            <Button
              variant="contained" color="mainColor"
              type='submit' sx={{ color: 'bgColor1.main', display: 'block', width: '100%',marginTop:"50px",boxShadow:"1px 1px 10px  grey" }}>
              로그인
            </Button>
            <Link to={`${process.env.REACT_APP_API_URL}/auth/kakao`}>
              <img src={kakaoLoginImg} alt='카카오 로그인' style={{width: '25ch',marginTop:"10px", boxShadow:"1px 1px 10px  grey", borderRadius:"5px"}}/>
            </Link>
          </form>
      }
          <span
          className="styledButton"
          onClick={()=>{navigate(`/idsearch`)} }>
              이메일찾기
          </span>
    </>
  );
}



export default Home;

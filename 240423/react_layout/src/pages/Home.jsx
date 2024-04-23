import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useAuth } from "../hooks/useAuth";
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import kakaoLoginImg from '../assets/kakao_login_medium_wide.png'

const Home  = () => {
    const {loginUser, login, logout } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
        } = useForm();

    const Toast = Swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton: false,
        timer:3000,
        timerProgressBar:true,
        didOpen:(toast) =>{
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });


        const onSubmit = (data) => {
            const {email, password} = data;
            console.log(`[${email} // ${password}] 로그인 요청하는 코드`);
            if (email === 'choi@gmail.com' && password === "1234") {
                Toast.fire({
                    icon: "success",
                    title: "최인규님 안녕하세요."
                });
            } else {
                //로그인 시켜주시
                login(()=>{Toast.fire({
                    icon: "error",
                    title: "틀렸습니다.",
                    text: '아이디 또는 비밀번호를 다시 확인해주세요'
                })
            });

                reset();
            }
        };

    const handleLogout = () =>{
        logout(()=>{
            Toast.fire({
                icon:'success',
                title:'조다솜님 안녕히가세요'
            })
        })
    }

    //   console.log(watch("email")) 이메일변경시 값 확인
    return (
        <>
            <h1>홈</h1>
                {
                loginUser ?
                    <Button variant="outlined" color="mainColor" onClick={handleLogout}>
                        로그아웃
                    </Button> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl sx={{ width: '25ch', display: 'block' }}>
                        <OutlinedInput type="text" variant="outlined" {...register("email", { required: true })} />
                        {errors.email && <span>이메일은 필수값입니다.</span>}
                    </FormControl>
                    <FormControl sx={{ width: '25ch', display: 'block' }}>
                        <OutlinedInput type="password" variant="outlined"{...register("password", { required: true })} />
                        {errors.password && <span>비밀번호는 필수값입니다.</span>}
                    </FormControl>
                    <Button
                        variant="contained" color="mainColor"
                        type='submit' sx={{ color: 'bgColor1.main', display: 'block', width: '100%' }}>
                        로그인
                    </Button>
                    <Link to='/#'>
                        <img src={kakaoLoginImg} alt='카카오 로그인' style={{width: '25ch'}}/>
                    </Link>
                    </form>
                }
        </>
    );
}

export default Home;

// https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide
//카카오 버튼모양
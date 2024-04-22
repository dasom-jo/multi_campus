import { Link, useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import { FaShop } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
//헤더의 기본구조
const Header = () => {
    const navigate = useNavigate();
    const { loginUser, logout } = useAuth();

    return (
        <StyledHeader>
            <Link to='/'><FaShop /></Link>
        <nav>
            <Link to='/'>Home</Link>

            {!loginUser ?
                <Link to='/login'>로그인</Link>
                :
                <Link onClick={(e)=>{
                    e.preventDefault();
                    logout(()=> navigate('/'));
                }}>로그아웃</Link>
            }
            <Link to='/products'>Products</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/users'>사용자관리</Link>
            <Link to='/signup'>회원가입</Link>
            <Link to='/boards'>게시판</Link>
        </nav>
        </StyledHeader>
    );
}
//헤더의 scss
const StyledHeader = styled.header`
    display: flex;
    justify-content:space-between;//자식요소들사이간을 최대한 넓히는태그
    align-items: center;
    padding: 0.5rem lrem;
    background-color: #333;
    color: white;
    font-size: 2rem;
    & > a {
        color: white;
        text-align: left;
        font-size: 2rem;
        padding: 1rem;
    }
    nav {
        display: flex;
        a {
            color:white;
            text-decoration: none;
            margin:0 1rem;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export default Header;
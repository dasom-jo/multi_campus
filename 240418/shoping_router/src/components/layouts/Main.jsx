import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import ProductsDetail from "../../pages/ProductsDetail";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostsDetail ";
import Users from "../../pages/Users";
import SignUp from "../../pages/SignUp";
import Boards from "../../pages/Boards";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";


//메인의 기본구조
const Main = () => {

    return (
        <StyledMain>
            <Routes>
                {/* 누구나 접근가능 */}
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                {/* [0419] : 1. searchParams 간단 활용 */}
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:id" element={<ProductsDetail />}></Route>

                <Route path="/posts" element={<Posts />}></Route>
                {/* [과제] : 게시물 전체 보기 {정렬, 검색 생략}*/}
                <Route path="/posts/:id" element={<PostDetail />}></Route>
                {/* [과제] : 특정 게시물 상세 보기 */}

                {/* [0419] : 3. json-server 활용 _ userList */}

                <Route path='/signup' element={<SignUp />}></Route>

                {/* 회원만 접근가능 */}
                <Route element={<UserRoute/>}>
                    <Route path="/users" element={<Users />} />
                    <Route path="/boards" element={<Boards />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </StyledMain>
    );
}

const UserRoute = () => {
    const { loginUser } = useAuth();
    const isLogin = !!loginUser;
    return( //Outlet은 현재 경로의 하위 라우트를 렌더링하는 역할
        isLogin ? <Outlet /> : <Navigate to="/login" /> //로그인하지않고 회원 사용자 페이지로 갈시 로그인화면으로 이동
    )
};


const StyledMain = styled.main`
    width: 70vw;
    margin: 0 auto;
`
export default Main;
import {Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import {styled} from 'styled-components';
import ProductsDetail from '../../pages/ProductsDetail';
import Posts from '../../pages/Posts';
import PostDetail from '../../pages/PostsDetail ';

//메인의 기본구조
const Main = () => {

    return (
        <StyledMain>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* [0419] : 1. searchParams 간단 활용 */}
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:id" element={<ProductsDetail />}></Route>
                {/* [0419] : 3. json-server 활용 _ userList */}
                <Route path="/posts" element={<Posts />}></Route>
                {/* [과제] : 게시물 전체 보기 {정렬, 검색 생략}*/}
                <Route path="/posts/:id" element={<PostDetail />}></Route>
                {/* [과제] : 특정 게시물 상세 보기 */}
            </Routes>
        </StyledMain>
    );
}

const StyledMain = styled.main`
    width: 70vw;
    margin: 0 auto;
`
export default Main;
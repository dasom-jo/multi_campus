import {Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import {styled} from 'styled-components';
import ProductsDetail from '../../pages/ProductsDetail';

const Main = () => {

    return (
        <Styledmain>
        <Routes>
            <Route path = '/' element = {<Home />}></Route>
            <Route path = '/products'  element = {<Products />}></Route>
            <Route path = '/products/:cate/:id'  element = {<ProductsDetail />}></Route>
        </Routes>
        </Styledmain>
    );
}

const Styledmain = styled.main`
    margin: 0 auto;
    width: 70vw;
`

export default Main;
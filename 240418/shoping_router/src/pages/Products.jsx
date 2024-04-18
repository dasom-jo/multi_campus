import { useEffect, useState } from "react";
import ProdList from "../components/products/ProdList";
import axios from "axios";
import styled from "styled-components";

const Products = () => {
    // [0419]: 2. 정렬을 SearchParam을 활용해 변경
    const [prods, setProds] = useState([]);

    const [order, setOrder] = useState({
        key: '',
        order: false
    });

    const [keyword, setKeyword] = useState('');
    const handleKeyword = (e) => setKeyword(e.target.value);

    const getProds = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=10')
            setProds(response.data.products);
        } catch (err) {
            console.error(err);
        }
    }

    const handleSearch = () => {
        const q = keyword;
        axios.get(`https://dummyjson.com/products/search?q=${q}`)
        .then(res => {
            return res.data.products
        })
        .then(data => {
            setProds(data);
        })
        .catch(err => {
            console.error(err);
        })
        setKeyword('');
    }

    const ordering = () => {
        if (order.key !== '') {
            const copy = [...prods];
            copy.sort((a, b) => {
                if (order.order) {
                    return a[order.key] > b[order.key] ? -1 : 0
                } else {
                    return a[order.key] < b[order.key] ? -1 : 0
                }
            })
            setProds(copy);
        }
    }

    useEffect(() => {
        ordering();
    }, [order]);

    useEffect(() => {
        getProds();
    }, []);

    return (
        <>
            <h1>상품 목록</h1>
            <ProdOption>
                <div>
                    <button onClick={() => setOrder({ ...order, key:'price', order:false})}>가격 낮은 순</button>
                    <button onClick={() => setOrder({ ...order, key: 'price', order: true })}>가격 높은 순</button>
                    <button onClick={() => setOrder({ ...order, key: 'rating', order: false })}>평점 낮은 순</button>
                    <button onClick={() => setOrder({ ...order, key: 'rating', order: true })}>평점 높은 순</button>
                </div>
                <div>
                    <input type='text' value={keyword} onChange={handleKeyword}/>
                    <button onClick={handleSearch}>검색</button>
                </div>
            </ProdOption>
            <ProdList prods={prods}/>
        </>
    );
}
const ProdOption = styled.div`
    display: flex;
    justify-content: space-between;
`
export default Products;
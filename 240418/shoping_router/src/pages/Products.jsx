import { useEffect, useState } from "react";
import ProdList from "../components/products/ProdList";
import axios from "axios";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Products = () => {
    // [0419]: 2. 정렬을 SearchParam을 활용해 변경
    const [searchParams, setSearchParams] = useSearchParams();
    const [prods, setProds] = useState([]);

    // const [order, setOrder] = useState({
    //     key: '',
    //     order: false
    // });

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

    // const handleSearch = () => {
    //     const q = keyword;
    //     axios.get(`https://dummyjson.com/products/search?q=${q}`)
    //     .then(res => {
    //         return res.data.products
    //     })
    //     .then(data => {
    //         setProds(data);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    //     setKeyword('');
    // }

    // const ordering = () => {
    //     if (order.key !== '') {
    //         const copy = [...prods];
    //         copy.sort((a, b) => {
    //             if (order.order) {
    //                 return a[order.key] > b[order.key] ? -1 : 0
    //             } else {
    //                 return a[order.key] < b[order.key] ? -1 : 0
    //             }
    //         })
    //         setProds(copy);
    //     }
    // }

    // useEffect(() => {
    //     ordering();
    // }, [order]);

    const onClickSearch =()=>{
        searchParams.set("검색어",keyword)
        setSearchParams(searchParams);
    }

    const onClickOrder = (key,way) =>{
        searchParams.set( "기준", key);
        searchParams.set( "방식", way);
        setSearchParams(searchParams);

    }

//검색후 주소창에 검색어=~~ 뜸
const handleSearch = () => {
    if (searchParams.size === 0){
        getProds();
    }else{
        const q = searchParams.get('검색어');
            if(q){
                axios.get(`https://dummyjson.com/products/search?q=${q}`)
                .then(res => {
                    return res.data.products
                })
                .then(data => {
                    ordering(data);
                })
                .catch(err => {
                    console.error(err);
                })
                setKeyword('');
            }else {
                ordering(prods); //매개변수화시킴
            }
        }
}

    const ordering = (data) => {
        const key = searchParams.get('기준')
        const sort = searchParams.get('방식');
        if (key !== '') {
            const copy = [...data];
            copy.sort((a, b) => {
                if (sort === 'desc') {
                    return a[key] > b[key] ? -1 : 0
                } else {
                    return a[key] < b[key] ? -1 : 0
                }
            })
            setProds(copy);
        }
    }

    useEffect(() => {
        handleSearch();
    }, [searchParams]);

    useEffect(() => {
        getProds();
    }, []);

    return (
        <>
            <h1>상품 목록</h1>
            {/*
                localhost:3000/products?기준=가격&방식= 오름차
                localhost:3000/products?기준=가격&방식= 내림차
                localhost:3000/products?기준=평점&방식= 오름차
                localhost:3000/products?기준=평점&방식= 내림차

                정렬기준 : 가격,평점/오른차,내림차/
            */}
            <ProdOption>
                <div>
                    <button onClick={() => onClickOrder("price",'asc')}>가격 낮은 순</button>
                    <button onClick={() => onClickOrder("proce",'desc')}>가격 높은 순</button>
                    <button onClick={() => onClickOrder("rating",'asc' )}>평점 낮은 순</button>
                    <button onClick={() => onClickOrder("rating", 'desc' )}>평점 높은 순</button>
                </div>
                <div>
                    <input type='text' value={keyword} onChange={ handleKeyword}/>
                    <button onClick={onClickSearch}>검색</button>
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
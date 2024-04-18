import { useEffect, useState } from 'react';
import ProdList from '../components/products/ProdList';
import axios from "axios";
import styled from 'styled-components';


const Products = () => {
    const [prods, setProds] = useState([

    ]);

    const [order , setOrder ] = useState({
        key: '',
        order: false
    });

    const [keyword, setKeyword] = useState('');
    const handleKeyword = (e) => setKeyword(e.target.value);

    const getProds = async() =>{
        try{
            const response = await axios.get('https://dummyjson.com/products?limit=10');
            console.log(response.data.products);
        } catch(err){
            console.error(err);
        }
    }

    const handleSearch = () =>{
        const q = keyword;
        axios.get(`https://dummyjson.com/products/search?q=${q}`)
        .then(res =>{
            return res.data.products
        } )
        .then(data =>{
            return setProds(data)
        } )
        .catch(err =>{
            console.error(err);
        })
        setKeyword('');
    }

    const ordering = () =>{
        if(order.key !== ''){
            const copy = [...prods];
        copy.sort((a,b) => {
            if(order.order) {
                return a[order.key] > b[order.key] ? -1 : 0;
            } else {
                return a[order.key] < b[order.key] ? -1 : 0;
            }
        })
        setProds(copy);
        }
    }

    useEffect(()=>{
        ordering();
    },[order]);

    useEffect(()=>{
        getProds();
    },[])

    // const 내림차순정렬 = (key) =>{
    //     const copy = [...prods];
    //     copy.sort((a,b) => {
    //         return a[key] > b[key] ? -1 : 0;
    //     })
    //     setProds(copy);
    //     setOrder({...order,key,order:true}) //높은순낮은순 변동
    // }

    // const 오름차순정렬 = (key) =>{
    //     const copy = [...prods];
    //     copy.sort((a,b) => {
    //         return a[key] < b[key] ? -1 : 0;
    //     })
    //     setProds(copy);
    //     setOrder({...order,key,order:false}) //높은순낮은순 변동
    // }




    return (
        <>
            <h1>상품 목록</h1>
                <ProdOption>
                    <div>
                        <div>
                            <button onClick={ ()=>setOrder({...order, key:'price',order:false}) }>가격 낮은순</button>
                            <button onClick={ ()=>setOrder({...order, key:'price',order:true}) }>가격 높은순</button>
                            <button onClick={ ()=>setOrder({...order, key:'rating',order:false}) }>평점 낮은순</button>
                            <button onClick={ ()=>setOrder({...order, key:'rating',order:true}) }>평점 높은순</button>
                        </div>
                        <div>
                            <input type="text" value={keyword} onChange={handleKeyword} />
                            <button onClick={handleSearch}>검색</button>
                        </div>
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
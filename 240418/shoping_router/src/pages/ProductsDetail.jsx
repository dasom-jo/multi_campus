import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from "styled-components";

const ProductDetail = () => {
    const parameter = useParams();
    const { id } = parameter;

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const [prodDetail, setProdDetail] = useState();
    const getProdDetail = () => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => res.data)
        .then(data => setProdDetail(data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getProdDetail();
    }, [])

    return (
        <>
            <h1>{id}번 상품 설명</h1>
            {
                prodDetail &&
                    <StyleProdDetail>
                        <div className="slide">
                            <Slide>
                                {
                                    prodDetail.images.map((img, idx) => (
                                        <div className="each-slide-effect" key={idx}>
                                            <div style={{ 'backgroundImage': `url(${img})` }} />
                                        </div>
                                    ))
                                }
                            </Slide>
                        </div>
                        <div className="prodInfo">
                            <h1>{prodDetail.title}</h1>
                            <p>{prodDetail.description}</p>
                        </div>
                    </StyleProdDetail>
            }
            <button onClick={goBack}>돌아가기</button>
        </>
    );
}

const StyleProdDetail = styled.div`
    display: flex;
    .slide {
        width: 40%;
    }
    .react-slideshow-wrapper {
        width: 100%;
    }
    .react-slideshow-container {
        justify-content: center;
    }
    .prodInfo {
        width: 60%;
    }
`
export default ProductDetail;
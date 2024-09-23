import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from "styled-components";

const ProductDetail = () => {
    //이 함수를 사용하면 동적 라우팅을 구현할 때 URL에서
    //동적으로 변하는 파라미터 값을 편리하게 접근할 수 있습니다.
    //url구조중/post/:postId에서 :postId는 동적으로변하는 게시물이고 useparams는 id값을 가져올수잇다
    const parameter = useParams();
    const { id } = parameter;

    const navigate = useNavigate();
    const goList = () => navigate({
        pathname: './products'
    });

    const [prodDetail, setProdDetail] = useState();
    const getProdDetail = () => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => res.data) //요청합니다
        .then(data => setProdDetail(data)) //데이터를 업데이트합니다
        .catch(err => console.error(err)) //안오면 에러뜹니다
    }

    useEffect(() => {
        getProdDetail(); //이걸하면 해당함수 호출
    }, [])

    return (
        <>
            <h1>{id}번 상품 설명</h1>
            {
                prodDetail && //주소가 있다면 셋팅하세요
                    <StyleProdDetail>
                        <div className="slide">
                            {/* 이미지를 슬라이드하는함수 */}
                            <Slide>
                                {   //화면에 뿌려주는 함수   매개변수 지정
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
            <button onClick={goList}>돌아가기</button>
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
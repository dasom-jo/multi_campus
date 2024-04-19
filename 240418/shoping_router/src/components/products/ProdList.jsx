import { styled } from 'styled-components';
import Prod from './Prod';
import { useNavigate } from 'react-router-dom';
//검색시 제품 출력 혹은 null출력
const ProdList = ({ prods }) => {
    //상품이나오지않을시 다시 돌아가는 버튼 코드
    const navigate = useNavigate();
    const goHome = () => navigate({
        pathname: '/'
    })
    const goProduct = () => navigate({
        pathname: '/products'
    })

    return (
        <StyledProdList>
            {
                prods.length ?
                prods.map(p => ( //p를 선언
                    <Prod key={p.id} p={p} />
                ))
                :
                <div>
                    <h2>찾으시는 상품이 없습니다.</h2>
                    <button className='btn' onClick={goHome}>홈으로 돌아가기</button>
                    <button className='btn'onClick={goProduct}>상품으로 돌아가기</button>
                </div>
            }

        </StyledProdList>
    );
}

const StyledProdList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1%;
`

export default ProdList;
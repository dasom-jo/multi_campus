import styled from 'styled-components';
import Prod from './Prod';

const ProdList = ({prods}) => {
    return (
        <StyledProdList >
        {
            prods.length ?
            prods.map(p => (
                <Prod key={p.id} p={p}/>
            ))
            :
            <div>찾으시는 상품이 없습니다</div>
        }
        </StyledProdList>
    );
}

const StyledProdList = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:1%;
`

export default ProdList;
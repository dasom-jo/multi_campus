import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import styled from "styled-components";

const NotFound = () => {
    return (
        <StyledNotFound>
            <div>없는 경로입니다</div>
            <Link to='/'><Button>홈으로 돌아가기</Button></Link>
        </StyledNotFound>
    );
}

const StyledNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    font-size: 1.5rem;
    color:rgb(153, 153, 153);
    div {
        margin-bottom: 1rem;
    }
`

export default NotFound;
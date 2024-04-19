import styled, {css} from 'styled-components';
import { darken } from 'polished';

const User = ({ user, onDeleteUser }) => {
    return (
        <StyledUser>
            <UserInfo>
                <p>아이디: {user.id}</p>
                <p>닉네임: {user.nickname}</p>
                <p>이메일: {user.email}</p>
            </UserInfo>
            <div>
                <Button>수정</Button>
                <Button color="danger" onClick={()=> onDeleteUser(user.id)}>삭제</Button>
            </div>
        </StyledUser>
    );
}
const Button = styled.button`
    ${props => css`
        padding: 5px 10px;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        margin: 0 0.4rem;
        background-color: ${props.color ? '#ff8282' : '#5f97f9'};
        color: white;
        font-weight: bold;
        transition: background-color 0.3s ease-in;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        &:hover {
            background-color: ${darken(0.2, props.color ? '#ff8282' : '#5f97f9')}
        }
        &:active {
            transform: translateY(1.5px);
        }
    `}
`

const UserInfo = styled.div`
    & > p {
        margin: 0.4rem;
    }
`
const StyledUser = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    padding: 10px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

export default User;
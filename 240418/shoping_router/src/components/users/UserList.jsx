import styled from 'styled-components';
import User from './User';

const UserList = ({ userList, onDeleteUser }) => {
    return (
        <StyledUserList>
            {   //User에서 받아온 구성으로 데이터를 맞춰서 뿌려줌 
                userList &&
                userList.map(user=> (
                    <User key={user.id} user={user} onDeleteUser={onDeleteUser}/>
                ))
            }
        </StyledUserList>
    );
}

const StyledUserList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4%;
    width: 100%;
`

export default UserList;
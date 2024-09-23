import styled from 'styled-components';
import User from './User';

const UserList = ({ userList, onDeleteUser, onUpdateUser }) => {
    return (
        <StyledUserList>
            {
                userList &&
                userList.map(user=> (
                    <User key={user.id} user={user} onDeleteUser={onDeleteUser} onUpdateUser={onUpdateUser} />
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
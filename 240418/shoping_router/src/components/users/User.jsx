import styled from 'styled-components';
import { Button } from '../ui/Button';
import { useContext, useState } from 'react';
import useInputs from '../../hooks/useInputs';
import { MdCancel } from "react-icons/md";
import useAuth from '../../hooks/useAuth';

const User = ({ user, onDeleteUser, onUpdateUser }) => {
    const { loginUser }= useAuth();
    const [isModify, setIsModify] = useState(false);

    const [form, onChange, reset, setForm] = useInputs({
        id: '',
        email: '',
        nickname: '',
        password: '',
    });

    const showModifyForm = (user) => {
        setForm({
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            password: ''
        })
        setIsModify(true);
    }
    return (
        <StyledUser>
            <UserInfo>
                {isModify ?
                <>
                    <MdCancel onClick={()=>setIsModify(false)} />
                    <input type='text' name='nickname' value={form.nickname} onChange={onChange} />
                    <input type='text' name='email' value={form.email} onChange={onChange} />
                    <input type='text' name='password' value={form.password} onChange={onChange} />
                </>
                :
                <>
                    <p>아이디: {user.id}</p>
                    <p>닉네임: {user.nickname}</p>
                    <p>이메일: {user.email}</p>
                </>
                }
            </UserInfo>
            <div>
                {
                    loginUser === user.id &&
                    <>
                        {isModify ?
                            <Button onClick={() => {
                                onUpdateUser(form);
                                setIsModify(false);
                            }}>적용</Button>
                            :
                            <Button onClick={()=>showModifyForm(user)}>수정</Button>
                        }
                        <Button color="danger" onClick={()=> onDeleteUser(user.id)}>삭제</Button>
                    </>
                }
            </div>

        </StyledUser>
    );
}
const UserInfo = styled.div`
    & > p {
        margin: 0.4rem;
    }
    & > svg {
        float: right;
        cursor: pointer;
    }
    & > input {
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
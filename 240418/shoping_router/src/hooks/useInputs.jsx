import { useCallback, useEffect, useState } from "react";
//이메일 빈칸 있을시 확인
const useInputs = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    });

    // useEffect(()=>{
    //     if(form.email && form.nickname && form.password && form.pwd_chk && (form.password === form.pwd_chk)){
    //         setForm(form => ({...form, validate: true, errMsg:'  '}));
    //     }else {
    //         setForm(form=> ({...form, validate: false, errMsg:" 너입력덜햇어 "}));
    //     }
    // }, [form.email, form.nickname, form.password, form.pwd_chk]);
    useEffect(()=>{
        if(form.email && form.nickname && form.password && form.pwd_chk && (form.password === form.pwd_chk) ){
            setForm(form => ({...form, validate: false, errMsg:'내용을 모두 입력하였습니다. 가입버튼을 눌러주세요'}));
        }
        else if(!form.email){
            setForm(form => ({...form, validate: false, errMsg:'이메일을 입력해주세요'}));
        }
        else if(!form.nickname){
            setForm(form => ({...form, validate: false, errMsg:'닉네임을 입력해주세요 '}));
        }
        else if(!form.password){
            setForm(form => ({...form, validate: false, errMsg:'비밀번호를 입력해주세요'}));
        }
        else if(!form.pwd_chk){
            setForm(form => ({...form, validate: false, errMsg:'비밀번호를 확인해주세요 '}));
        }
        else if(!(form.password === form.pwd_chk) ){
            setForm(form => ({...form, validate: false, errMsg:'비밀번호가 다릅니다 '}));
        }
        else {
            setForm(form=> ({...form, validate: false, errMsg:"모두 작성하셨습니다"}));
        }
    }, [form.email, form.nickname, form.password, form.pwd_chk]);


    const reset = useCallback(() => {
        setForm(initialForm)
    }, [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;
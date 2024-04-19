import { useCallback, useEffect, useState } from "react";

const useInputs = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    });

    useEffect(()=>{
        if(form.email && form.nickname && form.password && form.pwd_chk && (form.password === form.pwd_chk)){
            setForm(form => ({...form, validate: true, errMsg:''}));
        }else {
            setForm(form=> ({...form, validate: false, errMsg:"너입력덜햇어"}));
        }
    }, [form.email, form.nickname, form.password, form.pwd_chk]);

    const reset = useCallback(() => {
        setForm(initialForm)
    }, [initialForm]);
    
    return [form, onChange, reset];
}

export default useInputs;
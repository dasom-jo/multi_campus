import { useEffect, useState } from "react";

const Greeting = () => {
    //state 언제사용될까
    //1.사용자와 상호작용이 필요할때
    //2.상태가 변경되어서 새롭게 re-rendering이 필요할때
    //3.컴포넌트가 마운트되어서 초기값을 필요로할때
    //4.컴포넌트가 언마운트되어서 정리가 필요할때
    //5.동적인 데이터가 필요할때(데이터를 받아올때)
    
    const [msg , setMsg ] = useState("");
    const [color, setColor] = useState("black");

    const onClickEnter = () => ( setMsg('안뇽') );
    const onClickExit =()=> ( setMsg('잘가') );
    return (
        <>
        <button onClick={onClickEnter }>입장</button>
        <button onClick={onClickExit }>나가기</button>

        <h1 style={{ color }}>{msg}</h1>

        <button onClick={()=>{ setColor('red') }} style={{color: "red"}}>빨강</button>
        <button onClick={()=>{ setColor('green') }} style={{color: "green"}}>초록</button>
        <button onClick={()=>{ setColor('blue') }} style={{color: "blue"}}>파랑</button>
        </>
    );
}

export default Greeting;
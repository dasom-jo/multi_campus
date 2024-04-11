import { useState } from "react";

const Counter = () => {
    // State
    // 컴포넌트에서 관리하는 값 (변경될 수 있는 값!)
    // State가 변경되면 컴포넌트가 다시 렌더링된다.

    // 함수형 컴포넌트에서는 state를 사용할 수 있도록
    // useState hook을 제공한다.
    // useState 함수의 인자는 초기값을 전달한다.
    // useState 함수는 배열을 반환한다. [상태값, 상태변경함수]

    const [number, setNumber] = useState(1);
    const handleNumberPlus = () => {
        // setNumber(number + 1)
        setNumber((prevNum) => prevNum + 1);
    }
    return ( 
        <div>
            <h1>{number}</h1>
            <button onClick={handleNumberPlus}>더하기</button>
        </div>
    );
}

export default Counter;
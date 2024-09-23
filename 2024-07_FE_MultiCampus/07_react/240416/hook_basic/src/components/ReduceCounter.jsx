// useReducer : useState보다 더 다양한 컴포넌트 상태 관리가 가능하다.
// 컴포넌트의 상태 업데이트 로직을 컴포넌트 밖에서 관리
import React, { useReducer } from 'react';

// reducer 함수 생성
const reducer = (state, action) => {
    // action.type에 따라서 각각 다른 작업을 수행하도록 할 수 있다.
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 }; // 새로운 state를 return
        case "DECREMENT":
            return { value: state.value - 1 }; // 새로운 state를 return
        case "RESET":
            return { value: 0 }; // 새로운 state를 return
        default:
            break;
    }
}

const ReduceCounter = () => {
    const [state, dispatch] = useReducer(reducer, { value : 0 })
    // const [state, dispatch] = useReducer(reducer, initialValue);
    // 첫번째 매개변수 : reducer 함수 (* state, action을 매개로 하여, 새로운 state를 반환)
    // 두번째 매개변수 : state의 초기값

    // const [상태, dispatch 함수] = useReducer(reducer 함수, 초기값);
    // dispatch 함수 (* action 객체를 파라미터로 받아서, reducer 함수를 호출)
    return ( 
        <div>
            <h1>숫자 상태 : { state.value }</h1>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
            <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
        </div>
    );
}

/* 
    useReducer는 setState 대신에 dispatch로 액션을 넘기고,
    reducer로 해당 액션에 따른 상태를 변경한다.
*/

export default ReduceCounter;
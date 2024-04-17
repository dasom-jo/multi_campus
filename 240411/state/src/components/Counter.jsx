import { useState } from "react";

const Counter  = () => {
{/*State:컴포넌트에서 관리하는 값(변경될수잇는값)
State가 변경되면 컴포넌트가 다시 렌더링 된다
클래스 카운터 복잡해서 이거쓰느게 좋음*/}

//함수형 컴초넌트에서는 state를 사용할수잇도록
//useState hook 을 제공한다.
//useState  함수의 인자는 초기값을 전달한다
//useState 함수는 배열을 반환한다[상태값, 상태변경함수]


    const [number, setNumber] = useState(1); //배열 = 초기값
    const handleNumberPlus = () =>
        { setNumber(number+1);
        console.log(number)}; {/*전번호가 찍힘 */}
    return (
        <div>
            <div>
                <h1>{number}</h1> {/*.초기값 */}
                <button onClick={handleNumberPlus}>+</button> {/*.상태변경함수 */}
                {/*</div>button onClick={() => setNumber((prevNum)=> prevNum + 1)}>+</>*/}
                <button onClick={()=>{ setNumber(number-1) }}>-</button>
            </div>
        </div>
    );
}

export default Counter;
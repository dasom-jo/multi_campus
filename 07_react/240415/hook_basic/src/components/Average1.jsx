import React, { useState, useMemo } from 'react';
import { useCallback } from 'react';

// useCallback
// useMemo와 비슷한 함수
// 렌더링 성능을 최적화할 때 주로 사용 (함수를 재사용)
// useMemo로 값을 재사용!!!
// useCallback으로 함수를 재사용!!!

// useCallback(콜백함수, [의존성배열])
// 특정 함수를 새로 만들지 않고, 재사용하고자 할 때 사용

const Average1 = () => {
    const [numList, setNumList] = useState([]);
    const [number, setNumber] = useState(0);

    const getAvg = list => {
        console.log('평균 계산 중...');
        if (list.length === 0) return 0;
        const sum = list.reduce((acc, cur) => acc + cur, 0);
        return sum / list.length;
    }

    const avg = useMemo(() => getAvg(numList), [numList]);

    const onChange = useCallback((e) => setNumber(parseInt(e.target.value)), []);

    const onClick = useCallback(() => {
        setNumList(list => list.concat(number))
        setNumber(0);
    }, [number]);
    
    return ( 
        <div>
            <input
                type='number'
                value={number}
                onChange={onChange}
            />
            <button onClick={onClick}>등록</button>

            <ul>
                {
                    numList.map((n, idx)=> (
                        <li key={idx}>{n}</li>
                    ))
                }
            </ul>

            <h1>평균값 : {avg}</h1>
        </div>
    );
}

export default Average1;
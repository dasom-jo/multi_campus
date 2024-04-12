import React, { useState, useRef } from 'react';

const SearchRef = () => {
    const [result, setResult] = useState("검색 결과가 없습니다.");

    const prevKeywordRef = useRef("");
    const inputRef = useRef(null);

    const handleSearch = () => {
        if (prevKeywordRef.current !== inputRef.current.value) {
            console.log(`서버에 검색 요청... 검색어는 ${inputRef.current.value}`);
            setResult(`${inputRef.current.value}에 대한 검색결과 5000건 입니다.`);
            prevKeywordRef.current = inputRef.current.value;
        }
    };

    return (
        <div>
            <input
                type='text'
                ref={inputRef}
            />
            <button onClick={handleSearch}>검색</button>
            <div>
                {result}
            </div>
        </div>
    );
}

export default SearchRef;
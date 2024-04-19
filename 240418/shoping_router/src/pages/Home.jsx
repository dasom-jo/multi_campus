import { useState } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom'

// useSearchParams 함수: URL의 쿼리 매개변수를 가져오는 데 사용됩니다. 쿼리 매개변수는 주소창에 "?" 뒤에 오는 변수들을 말합니다. 예를 들어, "example.com?search=apple"에서 "search"는 쿼리 매개변수입니다.

const Home = () => {
    const [detail, setdetail] = useState("");
    const [searchParams,setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const detailInfo = searchParams.get('detail');
    // console.log(detail);
    return (
        <>
        <h1>home</h1>
        <input type="text"
                value={detail}
                onChange={(e)=>setdetail(e.target.value)}
        />
        <button onClick=
                // {()=>{setSearchParams({detail : detail});
                // searchParams();
                // }}
                {()=>{navigate({
                        pathname:'',
                        search:`detail=${detail}`
                    })
                        setdetail('')
                }}
        >이동</button>

        {/*detail에 detail을 값을넣음//거기 입력하면 서치파람으로 이동되는거같음 */}
        <h2>현재 state: {detail}</h2>
        <h2>serchparam을 통해 가져온값:{detailInfo}</h2>

        </>
    );
}

export default Home;
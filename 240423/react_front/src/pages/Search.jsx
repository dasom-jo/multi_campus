import axios from "axios";
import { useForm } from "react-hook-form";

const Search = () => {
    const {
        register, //입력요소를 form에 등록하는 함수
        handleSubmit, //폼 제출시 함수를 호출할 함수
        watch,//입력요소의 값을 감시하고 필요에다라 해당값을 가져오는함수
        reset,//폼의 값을 초기화하느느함수
        formState: { errors }, //폼의 유효성 검사 오류를 포함하는객체
    } = useForm();

    const onSearch = async (data) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts?hashtag=${data.hashtag}`);
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
            //     params : data
            // });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSearch)}>
                <input type="text" {...register("hashtag")} />
                <button type='submit'>검색</button>
            </form>
        </>
    );
}

export default Search;
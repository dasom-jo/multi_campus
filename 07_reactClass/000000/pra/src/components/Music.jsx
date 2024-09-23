import { useState } from 'react';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";

const Music = ({music, idx, setMusicList, musicList}) => {
    const { id, title } = music;
    //좋아요 코드
    const [like, setLike] = useState(0);
    const onClick = (e) => setLike(like + 1);

    //수정코드
    const editMusic = (e) => {
        //newTitle에 새제목을 받음
        const newTitle = prompt('새 제목을 입력하세요');
        //얉은복사(원본불변성)
        const copy = [...musicList]
        //복사객체를 통해 타이틀 추출
        copy[idx].title = newTitle;
        //업데이트
        setMusicList(copy);
    };

    //삭제코드
    const deleteMusic = () => {
        const copy = musicList.filter((m)=>{
            return m.id !== id
        })
        setMusicList(copy)
    }



    return (
        <div>
            {/* 타이틀 여기서 뿌려줌 */}
            <span id="musictitle" >{title}</span>
            <span className='btn' onClick={onClick}> {<FaHeartCirclePlus />}</span>
            <span className='btn'> {like}</span>
            <button className='btn' onClick={editMusic}>{<TbExchange />}</button>
            <button className='btn' onClick={deleteMusic}>{<FaTrashAlt />}</button>
        </div>
    );
}

export default Music;
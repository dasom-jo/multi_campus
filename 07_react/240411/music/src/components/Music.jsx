const Music = ({ music, idx, musicList, setMusicList }) => {
    const { id, title, like } = music;

    const addLike = () => {
        const copy = [...musicList];
        copy[idx].like++;
        setMusicList(copy);
    }
    
    const editMusic = () => {
        const newTitle = prompt('새 제목을 입력하세요');
        const copy = [...musicList]
        copy[idx].title = newTitle;
        setMusicList(copy);
    }

    const deleteMusic = () => {
        const copy = musicList.filter((m) => {
            return m.id != id
        })
        setMusicList(copy);
    }

    return ( 
        <div>
            <h2>{title}</h2>
            <div>
                <span style={{ "cursor": "pointer" }} onClick={addLike}> 👍 </span>
                <span> 좋아요 : {like}</span>
            </div>
            <button onClick={editMusic}>수정</button>
            <button onClick={deleteMusic}>삭제</button>
        </div>
    );
}

export default Music;
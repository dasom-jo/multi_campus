const Music = ({ music, idx, musicList, setMusicList }) => {
    return ( 
        <div>
            <h2>{music.title}</h2>
            <span style={{ "cursor": "pointer" }} onClick={() => {
                const copy = [...musicList];
                copy[idx].like++;
                setMusicList(copy);
            }}> 👍 </span>
            <span> 좋아요 : {music.like}</span>
        </div>
    );
}

export default Music;
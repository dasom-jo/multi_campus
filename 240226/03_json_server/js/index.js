const cmtInput = document.querySelector('#commentInput');
const addCmtbtn = document.querySelector('#addCommentBtn');
const cmtList = document.querySelector('#commentList');


// let getComment = ()=> {
//     fetch('http://localhost:3000/comments')
//         .then(Response => Response.json())
//         .then(data => console.log(data));
// }
// getComment();

// let getComment = ()=> {
//     fetch('http://localhost:3000/comments')
//         .then(Response => {
//             if(Response.ok) Response.json()
//             else throw new Error('서버오류 : ' + Response.status);
//         }).then(data => {//데이터화면에 고곱게 뿌려주기 
//             }).catch (error =>console.error('초기댓글 갖벼오기 오류',error))
// }
// getComment();

function createElement {let getComment = ()=> {
    fetch('http://localhost:3000/comments')
        .then(Response => {
            if(Response.ok) Response.json()
            else throw new Error('서버오류 : ' + Response.status);
        }).then(comments => {//데이터화면에 고곱게 뿌려주기
            comments.forEach (comments =>{
                const li = document.createElement('li');
                li.classList.add('comment');
                li.innerHTML =`
                        <div>${comments.msg}</div>
                        <div class='actions'>
                            <button class=:"edit">삭제</button>
                        </div>`;
                    const editBtn = li.querySelector('.edit');
                    const deleteBtn = li.querySelector('.delete');
            
                    cmtList.appendChild(li)
})})}.catch(console.error('cjr;eptrmf rkwudhlt dhfb' , error));
            }

getComment();
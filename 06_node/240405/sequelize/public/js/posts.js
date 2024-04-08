const postForm = document.querySelector('#post-form')

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userId = e.target.writerId.value;
    const content = e.target.content.value;
    const postData = {
        userId,
        content
    }
    const response = await axios.post('/posts', { postData })
    if (response.status == 200) {
        window.location.reload();
    }
});

const postModBtns = document.querySelectorAll('.post_mod_btn');
postModBtns.forEach(btn => {
    btn.addEventListener('click', async() => {
        const postId = btn.dataset.postId;
        const content = prompt('수정할 내용을 입력하세요');
        const response = await axios.put(`/posts/${postId}`, { content });
        if (response.status == 200) {
            window.location.reload();
        }
    });
});

const postDelBtns = document.querySelectorAll('.post_del_btn');
postDelBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
        const postId = btn.dataset.postId;
        const response = await axios.delete(`/posts/${postId}`);
        if (response.status == 200) {
            window.location.reload();
        }
    });
});
function getDate() {
    fetch('http://localhost:3000/contacts')
        .then(Response => Response.json())
        .then(result => {
            console.log(result);
            const tbody = document.querySelector('#contacts');
            tbody.innerHTML = '';
            for(let contact of result){
                let row = document.createElement('tr');
                let id_col = document.createElement('td');
                id_col.innerText = contact.id;
                let name_col = document.createElement('td');
                name_col.innerText = contact.name;
                let tel_col = document.createElement('td');
                tel_col.innerText = contact.tel;
                let addr_col = document.createElement('td');
                addr_col.innerText = contact.address;
                let del_col = document.createElement('td');
                let del_btn = document.createElement('button');
                del_btn.innerText = '삭제';
                del_btn.addEventListener('click',()=>{
                    console.log(contact.id);
                    deleteDate(contact.id);
                })
                del_col.appendChild(del_btn);
                let mod_col = document.createElement('td');
                let mod_btn = document.createElement('button');
                mod_btn.innerText = '수정';
                mod_col.appendChild(mod_btn);
                mod_btn.addEventListener('click',()=>{
                    let newContact = {
                        name: '최인규',
                        tel: '010-0000--000',
                        address: '미국'
                    }
                    modifyDate(contact.id, newContact)
                })
            }
        })
}
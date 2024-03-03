function getDate() {
    fetch('http://localhost:3000/contacts')
        .then(Response => Response.json())//서버로부터 받은 응답
        .then(result => {
            console.log(result);
            const tbody = document.querySelector('#contacts');
            tbody.innerHTML = '';//새로운 html 생성
            for(let contact of result){
                let row = document.createElement('tr');
                let id_col = document.createElement('td');
                id_col.innerText = contact.id;//id 선언
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
                row.appendChild(id_col);
                row.appendChild(name_col);
                row.appendChild(tel_col);
                row.appendChild(addr_col);
                row.appendChild(del_col);
                row.appendChild(mod_col);
                tbody.appendChild(row);
            }
        });
}

function modifyDate(id, newObj){
    fetch('http://localhost:3000/contacts/' + id, {
        method: 'PUT',
        hearders : {'content-Type' : 'application/json'},
        body: JSON.stringify(newObj)
    }).then(response =>{
        console.log(response);
            if (response.ok) {
                getDate();
            }else { 
                throw new Error('수정에러')
        }
    }).catch(e => console.error(e))
}

function deleteDate(id) {
    fetch('http://localhost:3000/contacts/' + id, { method : 'DELETE'})
        .then(response => {
            console.log(response);
            if(response.ok) {
                getDate();
            }else {
                throw new Error('삭제에러')
            }
        }).catch(e => console.error(e))
}

function createDate(obj) {
    fetch("http://localhost:3000/contacts", {
        method : 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(obj)
    }).then(response => {
        console.log(response);
        if(response.ok){
            getDate();
        }else {
            throw new Error('등록에러')
        }
    }).catch(e=> console.error(e))
}

getDate();

document.querySelector('#addBtn').addEventListener('click', ()=>{
    const name = document.querySelector('#name').value;
    const tel = document.querySelector('#tel').value;
    const address = document.querySelector*('#addr').value;

    const newContact = {name, tel, address};
    createDate(newContact);
})
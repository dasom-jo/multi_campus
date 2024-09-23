function getData() {
    fetch('http://localhost:3000/contacts')
        .then(response => response.json())
        .then(result => {
            console.log(result);
            const tbody = document.querySelector('#contacts');
            tbody.innerHTML = '';
            for (let contact of result) {
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
                del_btn.addEventListener('click', () => {
                    console.log(contact.id);
                    deleteData(contact.id);
                })
                del_col.appendChild(del_btn);
                let mod_col = document.createElement('td');
                let mod_btn = document.createElement('button');
                mod_btn.innerText = '수정';
                mod_col.appendChild(mod_btn);
                mod_btn.addEventListener('click', () => {
                    let newContact = {
                        name: '최인규',
                        tel: '010-9999-9999',
                        address: '미국'
                    }
                    modifyData(contact.id, newContact);
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

function modifyData(id, newObj) {
    fetch('http://localhost:3000/contacts/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
    }).then(response => {
        console.log(response);
        if (response.ok) {
            getData();
        } else {
            throw new Error('수정 에러')
        }
    }).catch(e => console.error(e))
}

function deleteData(id) {
    fetch('http://localhost:3000/contacts/' + id, { method: 'DELETE'  })
        .then(response => {
            console.log(response);
            if (response.ok) {
                getData();
            } else {
                throw new Error('삭제 에러')
            }
        }).catch(e => console.error(e))
}

function createData(obj) {
    fetch("http://localhost:3000/contacts", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then(response => {
        console.log(response);
        if (response.ok) {
            getData();
        } else {
            throw new Error('등록 에러')
        }
    }).catch(e => console.error(e))
}

getData();

document.querySelector('#addBtn').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const tel = document.querySelector('#tel').value;
    const address = document.querySelector('#addr').value;

    const newContact = { name, tel, address };
    createData(newContact);
})
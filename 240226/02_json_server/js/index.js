fetch('http://localhost:3000/contacts')
    .then(Response => Response.json())
    .then(result => {
        console.log(result);
                    const tbody =  document.querySelector('#contact')
                    
                    for(let contact of result) {
                        let row = document.createElement('tr');
                        let htmlString = `
                        <td>${contact.name}</td>
                        <td>${contact.tel}</td>
                        <td>${contact.address}</td>
                        `
                        row.innerHTML=htmlString;
                        tbody.appendChild(row);
                    }}); //전체조회

    document.querySelector('addBtn').addEventListener('click',()=>{
        const name = document.querySelector('#name').value;
        const tel = document.querySelector('#tel').value;
        const addr = document.querySelector('#addr').value;

        const newContact = {name, tel, address};

        fetch('http://localhost:3000/contacts',{
            method: 'POST',
            headers:{'content-Type' : 'application/json'},
            body: JSON.stringify(newContact)}
            .then(Response => console.log(Response)))
    });//추가하라고 요청보내느것


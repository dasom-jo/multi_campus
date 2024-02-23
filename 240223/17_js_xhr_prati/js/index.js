
let xhr = new XMLHttpRequest();
xhr.open('GET',"./data/student.json");
xhr.send();
const result = document.querySelector("#result");
xhr.onreadystatechange=()=> {
    
    if(xhr.readyState === 4 && xhr.status ===200){
        let student = JSON.parse(xhr.responseText);
    
        for(let i = 0; i <9; i++ ){
        result.innerHTML+=`<ul>
                        <li id="name">${student[i].name}</li>
                        <li>${student[i].gender}</li>
                        <li>${student[i].address}</li>
                        </ul>`
        }
        console.log(student)
        
    };
}


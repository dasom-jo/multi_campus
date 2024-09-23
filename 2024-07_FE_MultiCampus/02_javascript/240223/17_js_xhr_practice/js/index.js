const xhr = new XMLHttpRequest();
xhr.open('GET', "./data/students.json");
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const studentsArr = JSON.parse(xhr.responseText);
        const resultDiv = document.querySelector('#result');

        const resultSet = randomSelect(studentsArr, 3);
        for (const student of resultSet) {
            const studentDiv = document.createElement('div');
            studentDiv.classList.add('student');
            studentDiv.innerHTML = `
                <p>${maskName(student.name)}</p>
                <p>성별 : ${student.gender}</p>
                <p>주소 : ${student.address}</p>
            `;
            resultDiv.appendChild(studentDiv);
        }
    }
}

function randomSelect(arr, count) {
    const resultSet = new Set([]);

    while (resultSet.size != count) {
        const randomIdx = Math.floor(Math.random() * arr.length);
        resultSet.add(arr.splice(randomIdx, 1)[0])
    }
    return resultSet;
}

function maskName(name) {
    const midIdx = Math.floor(name.length / 2);
    let result = ''
    if (name.length % 2 == 0) {
        result = name.substring(0, midIdx - 1);
    } else {
        result = name.substring(0, midIdx);        
    }
    result += "*".repeat(midIdx) + name.substring(midIdx + 1);
    return result;
}
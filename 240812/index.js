// //문서객체생성하기
// document.addEventListener('DOMContentLoaded',()=>{
//     //'DOMContentLoaded' 웹 브라우저가 문서 객체를 모두읽고 나서 실행하는 이벤트
//     const header = document.createElement('h1') //h1태그생성

//     //생성태그 조작
//     header.textContent= '문서 객체 동적으로 생성하기'
//     header.setAttribute('data-custom','사용자 정의 속성')
//     header.style.color = 'white'
//     header.style.backgroundColor='black'

//     document.body.appendChild(header)

//     const divA = document.querySelector('#first')
//     const divB = document.querySelector('#second')
//     const h1 = document.createElement('h1')
//     h1.textContent = '이동하는 태그'

//     const toFirst = () =>{
//         divA.appendChild(h1)
//         setTimeout(toSecond,1000)
//     }
//     const toSecond = () =>{
//         divB.appendChild(h1)
//         setTimeout(toFirst,1000)
//     }
//     toFirst()

// })

// //문서객체 제거하기
// //부모객체.removeChild(자식객체)
// //appendChild() 메소드 등으로 부모객체와 이미연결이 완료된 문서 객체인경우 parentNode
// //문서객체.parentNode.reomveChild(문서객체)

// document.addEventListener('DOMContentLoaded',()=>{
//     setTimeout(()=>{
//         const h2 = document.querySelector('h2')
//         h2.parentNode.removeChild('h2')
//     },3000)
// })

// //이벤트설정하기
// //문서객체.addEventListener(이벤트이름, 콜백함수(이벤트리스너or이벤트핸들러))
// document.addEventListener('DOMContentLoaded',()=>{
//     let counter = 0
//     const h3 = document.querySelector('h3')

//     h3.addEventListener('click',(event)=>{
//         counter++
//         h3.textContent = `클릭횟수:${counter}`
//     })
// })
// //이벤트 취소하기
// //문서객체.removeEventListener(이벤트이름,이벤트리스너)

// //이벤트활용
// //이벤트 모델

// document.addEventListener('DOMContentLoaded',()=>{
//     const textarea = document.querySelector('textarea')
//     const h4 = document.querySelector('h4')

//     textarea.addEventListener('keyup',(event)=>{
//         const length = textarea.value.length
//         h4.textContent = `글자수:${length}`
//     })
// })

// document.addEventListener('DOMContentLoaded',()=>{
//     const select = document.querySelector('select')
//     const p = document.querySelector('p')

//     select.addEventListener('change',(event)=>{
//         const options = event.currentTarget.options
//         const list = []
//         for(const option of options){
//             if(option.selected){
//                 list.push(option.textContent)
//             }
//         }
//         p.textContent = `선택:${list.join(',')}`
//     })
// })

//체크할때만 링크 활성화
// document.addEventListener('DOMContentLoaded',()=>{
//     let status = false

//     const checkbox = document.querySelector('input')
//     checkbox.addEventListener('change',(event)=>{
//         status=event.currentTarget.checked
//     })

//     const link = document.querySelector('a')
//     link.addEventListener('click',(event)=>{
//         if(!status){
//             event.preventDefault()
//         }
//     })
// })

//할일목록만들기
document.addEventListener('DOMContentLoaded',()=>{
    //문서객체를 가져옵니다
    const input = document.querySelector('#todo')
    const todoList = document.querySelector('#todo-list')
    const addButton = document.querySelector('#add-button')

    //변수를 선언합니다
    let keyCount = 0
    //함수를 선언합니다
    const addTodo = () =>{
        //입력양식에 내용이 없으면 추가하지않습니다
        if(input.value.trim() === ""){
            alert('할일을 입력해주세요')
            return
        }
        //문서 객체를 설정합니다
        const item = document.createElement('div')
        const checkbox = document.createElement('input')
        const text = document.createElement('span')
        const button = document.createElement('button')
        //문서객체를 식별할 키를 생성합니다
        const key = keyCount
        keyCount += 1
        //item객체를 조작하고 추가합니다
        item.setAttribute('data-key', key)
        item.appendChild(checkbox)
        item.appendChild(text)
        item.appendChild(button)
        todoList.appendChild(item)
        //checkbox 객체를 조작합니다
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change',(event)=>{
            item.style.textDecoration
                =event.target.checked ? 'line-through':""
        })
        //text객체를 조작합니다
        text.textContent = input.value
        //button 객체를 조작합니다
        button.textContent = '제거하기'
        button.addEventListener('click',()=>{
            removeTodo(key)
        })
        //입력양식의 내용을 비웁니다
        input.value = ''
    }
    const removeTodo = (key) =>{
        const item  = document.querySelector(`[data-key = "${key}"]`)
            todoList.removeChild(item)
    }
    addButton.addEventListener('click',addTodo)
    input.addEventListener('keyup',(event) =>{
        const ENTER = 13
        if(event.keyCode === ENTER) {
            addTodo()
        }
    })

})
//예전방식
import React, { Component } from 'react'
//state
export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:1,
        }
    }
    render() {
        const {number} = this.state;
        return (
                <div>
                    <h1>값:{number}</h1>
                    <button onClick={
                        //클래스형 컴포넌트에서 state 사용
                        //state를 업데이트 하기위해서는 setState를사용
                        //방법1.this.setState 함수에 객체를 인자로 넣는다
                        //방법1의 방식은 여러번 호출해도 한번만동작,왜냐면 비동기 동작이기때문에
                        //()=>this.setState({number : number+1})
                        //방법2. this.setState함수에 객체대신 함수자체를 인자로 넣는다
                        //()=>{this.setState((이전상태)=>{number:이전상태.number+1})}
                        //여러번 호출하면 같이 올라감,동기로 동작하기때문
                        ()=>{
                            this.setState((prevState)=>{
                                return{number:prevState.number+1}
                            });
                            //여러번호출
                            // this.setState((prevState)=>{
                            //     return{number:prevState.number+1}
                            // });
                        }
                    }>+</button>
            </div>
        )
    }
}

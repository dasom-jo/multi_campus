import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        }
    }

    render() {
        const {number} = this.state;

        return (
            <div>
                <h1>값 : {number}</h1>
                <button onClick={
                    // 클래스형 컴포넌트에서 state 사용
                    // state를 업데이트하기 위해서는 setState를 사용한다.
                    
                    // 방법1) this.setState 함수에 객체를 인자로 넣는다.
                    // 위의 방법은 여러 번 호출해도 한 번만 동작한다.
                    // 비동기로 동작하기 때문에...
                    // () => {
                    //     this.setState({ number: number + 1 })
                    //     this.setState({ number: number + 1 })
                    //     this.setState({ number: number + 1 })
                    // }

                    // 방법2) this.setState 함수에 객체 대신 함수 자체를 인자로 넣는다.
                    // 여러 번 호출해도 여러 번 동작한다.
                    // 동기로 동작하기 때문에...
                    () => {
                        this.setState((prevState) => {
                            return { number: prevState.number + 1 }
                        });
                        this.setState((prevState) => {
                            return { number: prevState.number + 1 }
                        });
                        this.setState((prevState) => {
                            return { number: prevState.number + 1 }
                        });
                    }
                }>+</button>
            </div>
        )
    }
}

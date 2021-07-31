import React, {Component} from 'react';

const Problematic =  () => {
    throw (new Error ("버그가 나타났다!"));
    return(
        <div></div>
    );
};

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props)
        console.log('constructor');
    }

    // 화면이 나가기 직전
    componentWillMount() {
        console.log("componentWillMount (deprecated)");
    }

    // 화면이 나가면
    componentDidMount() {
        console.log("componentDidMount"); 
    }

    // 최적화용 컴포넌트 업데이트 제어
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        if(nextState.number % 5 === 0) return false;
        return true;
    }
    
    // shouldComponentUpdate 에서 true 를 던져준 경우에만, 이거 다음이 render() 호출
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    // render() 호출 이후, 이 시점에서 this.props 와 this.state 가 바꾸어 있음 prevProps, prevState 로 이전 값 확인 가능 snapshot 도 확인 가능
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }


    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        if(this.state.error) return (<h1>에러발생!</h1>);
        
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                { this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

// this.props.onClick(); -> 함수에 전달되지 않았을 때
// this.props.object.value; -> 객체가 존재하지 않을 때
// this.props.array.length; -> 배열이 존재 하지 않을 때
class Sample extends Component {
    static defaultProps = {
        onIncrement: () => console.warn('onIncrement is not defined'),
        object: {},
        array: []
    }

    render() {
        if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
    }
}
export default Counter;
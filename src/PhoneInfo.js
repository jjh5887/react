import React, { Component } from "react";

class PhoneInfo extends Component {
    static defaultProps = {
      info: {
        name: '이름',
        phone: '010-0000-0000',
        id: 0
      },
    }

    state = {
        // 수정 버튼을 누르면 editing: false => true
        // true 일 때는, 기존의 테스트 형태로 보여주던 값들을 input 형태로 보여줌
        editing: false,

        // input 값은 유동적, input 값을 담기 위해서 각 필드를 위한 값도 설정
        name: '',
        phone: '',

    }
  
    handleRemove = () => {
      // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
      const { info, onRemove } = this.props;
      onRemove(info.id);
    }

    // editing 값을 반전시키는 함수
    // true => false, false => true
    handleToggleEdit = () => {
        const { editing } = this.state
        this.setState({
            editing: !editing
        });
    }

    // input 에서 onChange 이벤트가 발상 될 때 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // editing 바뀔 시 처리되는 로직
        // 수정을 눌렀을땐, 기존의 값이 input 에 나타남
        // 수정을 적용할땐, input 의 값들을 부모한테 전달
        
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing: false -> true
            // info 의 값을  state 에 넣어준다.
            this.setState({
                name: info.name,
                phone: info.phone
            })
        } 

        if(prevState.editing && !this.state.editing) {
            // editing: true -> false
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } 
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info) {
            return false;
        }

        return true;
    }
  
    render() {  
    console.log('render PhoneInfo ' + this.props.info.id);

      const style = {
        border: '1px solid black',
        padding: '8px',
        margin: '8px'
      };
      
      const { editing } = this.state;

      if(editing) {
        return (
            <div style={style}>
                <div>
                    <input 
                        value={this.state.name}
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}></input>
                </div>
                <div>
                    <input 
                        value={this.state.phone}
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}></input>
                </div>
                <button onClick={this.handleToggleEdit}>적용</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
      }

      const {
        name, phone
      } = this.props.info;

      return (
        <div style={style}>
          <div><b>{name}</b></div>
          <div>{phone}</div>
          <button onClick={this.handleToggleEdit}>수정</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }
  }
  

export default PhoneInfo;
import React, { Component } from 'react';

class MyName extends Component {
    static defaultProps = {
        name: '기본이름'
    }
    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        )
    }
}
// 외부에서 기본값 설정하는 방식
// MyName.defaultProps = {
//     name: '기본이름'
// }

export default MyName;
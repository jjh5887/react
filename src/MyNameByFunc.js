import React, { Component } from 'react';

// 클래스형과의 차이점은 state 와 LifeCycle 이 빠져있음
const MyNameByFunc = ({ name }) => {
    return(
        <div>
            안녕하세요! 제 이름은 {name} 입니다.
        </div>
    );
};

export default MyNameByFunc;
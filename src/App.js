import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render(){
    return (
      <div>
        {/* <input> */}
        {/* eroor #1   항상 태그를 닫아줘야함! 의무! */}
      </div>
      // <div></div>
      // error #2   항상 하나의 태그안에 감싸져 있어야함!
      
    )
  }

  // error #2 해결방법 1
  render(){
    return(
      <div>
        <div>
          이런식으로 두개의 태그 사용
        </div>
        <div>

        </div>
      </div>
    ) 
  }
// error #2 해결방법 2
  render(){
    return(
      <Fragment>
        <div>

        </div>
        <div>

        </div>
      </Fragment>
    )
  }


  // 자바스크립트
  render(){
    // 값 사용
    const name = "react";
    return(
      <div>
        hello {name}
      </div>
    );

    // var scope -> 함수 단위
    function foo() {
      var a = "hello";
      if(true) {
        var a = 'bye';
        console.log(a); // bye
      }
      console.log(a) // bye
    }

    // const, let scope -> 블록 단위
    function foo2() {
      let a = "hello";
      if(true) {
        let a = 'bye';
        console.log(a); // bye
      }
      console.log(a) // hello
    }
  }


  // 조건부 렌더링
  render() {
    const value = 1;
    return(
      <div>
        {/* 삼항 연산자 */}
        {
          1 + 1 === 2
          ? (<div>맞아요!</div>)
          : (<div>틀려요!</div>)
        }

        {/* AND 연산자 */}
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }

        {/* IIFE */}
        {
          (function() {
            if (value === 1) return (<div>하나</div>)
            if (value === 2) return (<div>둘</div>)
            if (value === 3) return (<div>셋</div>)
          })()
          
          // 화살표 함수
          (() => {
            if (value === 1) return (<div>하나</div>)
            if (value === 2) return (<div>둘</div>)
            if (value === 3) return (<div>셋</div>)
          })()
        }
      </div>

      
    );
  }

  // style
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there
      </div>
    );
  }

  // class -> className
  render() {
    return (
      <div className="App">
        리액트
      </div>
    );
  }

}

export default App;

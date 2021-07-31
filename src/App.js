import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
      <MyName name="리액트" />
      <Counter></Counter>
      </Fragment>
    );
  }
}
export default App;

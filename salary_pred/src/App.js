import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './component/main.component';
import About from './component/about.component';

// import { useSelector, useDispatch } from 'react-redux';
// import { increment,decrement } from './redux/counter.action'

function App() {
  // const counter = useSelector(state => state.counter);
  // const dispatch = useDispatch();
  return (
    <>
      <Main />     
    <About />
    </>
  );
}


export default App;

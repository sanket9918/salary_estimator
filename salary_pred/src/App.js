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
      {/* <div style={{ margin: `auto`, textAlign: `center` }}>
        <h3>Counter = {counter} from the functional component</h3>
        <button onClick={() => { dispatch(increment()) }}>+</button>
        <button onClick={() => { dispatch(decrement()) }}>-</button>
        <h3>Another container to display the states : {counter}</h3>
      </div> */} 
    <About />
    </>
  );
}


export default App;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, isLogged } from './actions';

const App = () => {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div classeName="App">
      <h1>Counter - {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;

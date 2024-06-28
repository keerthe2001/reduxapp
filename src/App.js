import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './state/Counter/CounterSlice';
function App() {
  let count = useSelector((state)=>state.counter.value)
  const dispatch =  useDispatch();
  return (
    <>
      <div>
        {count}
      </div>
      <button onClick={()=>dispatch(increment())}>plus</button>
      <button onClick={()=>dispatch(decrement())}>minus</button>
    </>
  );
}

export default App;

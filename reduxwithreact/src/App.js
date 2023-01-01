import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './Provider/Store';
import CounterContainer from './Components/Counter.component';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;

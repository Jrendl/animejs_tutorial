import logo from './logo.svg';
import './App.css';
import { FrogJumps } from './animations/FrogJumps'
import ControlledDemo from './animations/ControlledDemo';


function App() {
  return (
    <div className="App">
      <h2 id='header'>Animations!</h2>
      <div id='animationBox'>
        <ControlledDemo />
      </div>
    </div>
  );
}

export default App;

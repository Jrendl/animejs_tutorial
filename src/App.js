import logo from './logo.svg';
import './App.css';
import { FrogJumps } from './animations/FrogJumps'

function App() {
  return (
    <div className="App">
      <h2 id='header'>Animations!</h2>
      <div id='animationBox'>
        <FrogJumps></FrogJumps>
      </div>
    </div>
  );
}

export default App;

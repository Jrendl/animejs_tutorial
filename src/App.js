import logo from './logo.svg';
import './App.css';
// import FrogJumps from './animations/FrogJump';
import Controls from './animations/Controls';


function App() {
  return (
    <div className="App">
      <h2 id='header'>Animations!</h2>
      <div id='animationBox'>
        <div>
          <Controls/>
        </div>
      </div>
    </div>
  );
}

export default App;

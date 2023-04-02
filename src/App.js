import './App.css';
import FrogJumps from './animations/FrogJump';


function App() {
  return (
    <div className="App">
      <h2 id='header'>Animations!</h2>
      <div id='animationBox'>
        <div>
          <FrogJumps/>
        </div>
      </div>
    </div>
  );
}

export default App;

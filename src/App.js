import logo from './logo.svg';
import './App.css';


import Stagger from './animations/Stagger';

function App() {
  return (
    <div className="App">
      <h2 id='header'>Animations!</h2>
      <div id='animationBox'>
        <div>
          <Stagger/>
          
        </div>
      </div>
    </div>
  );
}
//<Stagger/>
export default App;

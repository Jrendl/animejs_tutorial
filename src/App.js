import logo from './logo.svg';
import './App.css';
import ReactAnime from 'react-animejs';
import ControlledDemo from './ControlledDemo';

const {Anime, stagger} = ReactAnime;


function App() {
  return (
    <div className="App">
      {/* <Anime
        initial={[
          {
            targets: "#Box",
            translateX: 50,
            easing: "linear"
          }
        ]}
      >
        <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} />
      </Anime> */}
      {/* <Anime
        initial={[
          {
            targets: "#Box",
            keyframes: [
              {
                translateX: 50
              },
              {
                translateY: 50
              },
              {
                translateX: 0
              },
              {
                translateY: 0
              }
            ],
            // easing:'spring',
            duration: 3500,
            loop: true
          }
        ]}
      > */}
      {/* <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} /> */}
      {/* <Anime
        initial={[
          { //1st segment
            targets: ".tl_square",
            translateX: 250
          },
          { //2nd
            targets: ".tl_circle",
            translateX: 250
          },
          { //3rd
            targets: ".tl_triangle",
            translateX: 250
          }
        ]}
      >
          <div className="tl_square" style={{ height: 50,  width:50, background:'#d3f454'}}  ></div>
          <div className="tl_circle" style={{ height: 50, width:50, background:'#d3f454', borderRadius: '50%'}}></div>
          <div className="tl_triangle" style={{height: 50,  width:50, background:'#d3f454', clipPath: 'polygon(50% 0, 0 100%, 100% 100%)'}}></div>
      </Anime> */}

      <ControlledDemo />

      
    </div>
  );
}

export default App;

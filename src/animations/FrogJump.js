import ReactAnime from "react-animejs";
import { useState } from "react";
const {Anime} = ReactAnime;


export default function FrogJumps() {
    const [control, setControl] = useState(null); //controller state
  
    const [meta, setMeta] = useState({
      //meta state of the player
      control: control,
      progress: 0,
      currentTime: 0,
      duration: 0
    });


    return(
        <div>
            <Anime
                controls = {control}
                setMeta = {setMeta}
                animeConfig={{
                    autoplay: false,
                    duration: 1500,
                    easing: "easeInOutSine"
                  }}
                initial={[
                    // {
                        // targets: ".jumpingFrog",
                        // loop: true,
                        // duration: 1000,
                        // easing: "linear",

                        // keyframes: [
                        {
                            targets: ".jumpingFrog",
                            translateX: 50,
                            translateY: 50,
                            scale: 1.25
                        },
                        {
                            targets: ".jumpingFrog",
                            translateX: 0,
                            translateY: 0,
                            scale: 1
                        },
                        {
                            targets: ".jumpingFrog",
                            translateX: -50,
                            translateY: 50,
                            scale: 1.25
                        },
                        {
                            targets: ".jumpingFrog",
                            translateX: 0,
                            translateY: 0,
                            scale: 1
                        }
                        // ]
    
                    // }
                ]}
            >
                <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
            </Anime>
            <div
                className="button"
                onClick={() => {
                    setControl("play");
                }}
            >
                Play
            </div>
            <div
                className="button"
                onClick={() => {
                    setControl("pause");
                }}
            >
                Pause
            </div>
            <div
                className="button"
                onClick={() => {
                    setControl("restart");
                }}
            >
                Restart
            </div>
            <input
                type="range"
                min="1"
                max="100"
                value={meta.progress || 0}
                className="slider"
                id="myRange"
                onChange={e => console.log(setControl(["seek", e.currentTarget.value]))}
            />
        </div>
        

    );
}
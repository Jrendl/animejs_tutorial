 import ReactAnime from "react-animejs";
import FrogJumps from "./FrogJump";
import { useState } from "react";

const {Anime} = ReactAnime;

export default function Controls() {
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
            <div className="controls"> 
                <Anime
                    type="button"
                    onClick={() => {
                        setControl("play");
                    }}
                >
                    Play
                </Anime>
                <Anime
                    type="button"
                    onClick={() => {
                        setControl("pause");
                    }}
                >
                    Pause
                </Anime>
                <Anime
                    type="button"
                    onClick={() => {
                        setControl("restart");
                    }}
                >
                    Restart
                </Anime>
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
            <FrogJumps
                control={control}
                setMeta={setMeta} // important to pull state of the player
            />
        </div>
            
        
       
    )
}
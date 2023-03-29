import ReactAnime from "react-animejs";
import { useState } from "react";
const {Anime} = ReactAnime;


export default function FrogJumps(props) {
    return(
        <div>
            
            <Anime
                control = {props.control}
                setMeta = {props.setMeta}
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
            
        </div>
        

    );
}
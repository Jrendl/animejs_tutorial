import drop from '../drop.svg';
import ReactAnime from "react-animejs";
import { useState } from 'react';
// import React, { createElement } from 'react';


const {Anime, stagger} = ReactAnime;

//create raindrop component
const Drop = ({children}) => {
    return <img className='dropStagger' src={ drop } alt="raindrop">{children}</img>
}

const MAX = 50;
function storm () {
    <Drop/>
}


export default function Demo() {
    // const [drops, setItems] = useState([]);
    // setItems(addDrops => [...addDrops, Drop]);

   return(
    <>
        {/* <Anime
        
            initial={[
                {
                        targets: "#drop0",
                        translateY: "200",
                        duration: 2000,
                        easing: "linear",
                }
            ]}
        >
            <img className='drop' id="drop0" src='drop.svg' alt="raindrop"></img>
        </Anime>

       <Anime
           
           initial={[
               {
                    targets: "#drop1",
                    loop: true,
                    duration: 1000,
                    easing: "linear",
                    rotate: '1turn'
               }
           ]}
       >
           <img className='drop' id="drop1" src='drop.svg' alt="raindrop"></img>
       </Anime>

        <Anime 
                             
            initial={
                [
                {
                    targets: '#drop2',
                    translateX: [
                    { value: 250, duration: 1000, delay: 500 },
                    { value: 0, duration: 1000, delay: 500 }
                    ],
                    translateY: [
                    { value: 0, duration: 500 },
                    { value: 80, duration: 500, delay: 1000 },
                    { value: 40, duration: 500, delay: 1000 }
                    ],
                    scaleX: [
                    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                    { value: 1, duration: 900 },
                    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                    { value: 1, duration: 900 }
                    ],
                    scaleY: [
                    { value: [1.75, 1], duration: 500 },
                    { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                    { value: 1, duration: 450 },
                    { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                    { value: 1, duration: 450 }
                    ],
                    easing: 'easeOutElastic(1, .8)',
                    loop: true                    
                } 
                ]
            }>
            <img className='drop' id='drop2' src={ drop } alt="raindrop"></img>

        </Anime> */}

        <Anime 
            _onClick={[{
                targets: '.dropStagger',
                translateY: 800,
                easing: 'linear',
                scale: .0005,
                delay:stagger(600)
            }]}

            _onMouseEnter={[{
                targets: '.dropStagger',
                translateY: 500,
                easing: 'spring',
                delay:stagger(100)
            }]}

            _onMouseLeave={[{
                targets: '.dropStagger',
                translateY: 0,
                easing: 'spring',
                delay:stagger(200)
            }]}

            
            >
            <span className='dropStagger'><Drop/><Drop/><Drop/><Drop/><Drop/><Drop/></span>
            
            {/* <button onClick={storm}>Storm</button> */}
            {/* <span id='storming'>{<Drop/>}</span>
            <Drop/> */}
            

            
        </Anime>
        
       </>
   )
}
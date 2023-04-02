/////////////// *********DEMO PURPOSE ONLY***********////////////

import ReactAnime from "react-animejs";
const {Anime, stagger} = ReactAnime;

//create frog component so image is consistent
const Frog = ({children}) => {
    return <img className='frogComp' src='frog.png' height="60px" width="60px" alt="frog">{children}</img>
}



export default function FrogDemo() {

    let columns = Math.floor(document.body.clientWidth / 50),
        rows = Math.floor(document.body.clientHeight / 50);
    
    const createTiles = index => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        return tile;
    }
  
    createTiles(6 * 6);

   return(
    <>
        <div className="container" id="img0">
               <Anime
                
                initial={[
                    {
                        targets: "#frog0",
                        translateY: '30vh',
                        duration: 600,
                        loop: 40,
                        direction: 'alternate',
	                    easing: 'easeOutQuad',
                        scaleY: {
                            value: .85,
                            duration: 20,
                            delay: 200
                        },
                        scaleX: {
                            value: 1.15,
                            duration: 40,
                            delay: 100
	                    }

                    }
                ]}
            >
                <img className='frogs' id="frog0" src='frog.png' alt="frog"></img>
            </Anime>
           </div>
           
                   <div className="container" id="img2">
            <Anime 
                                
                initial={
                    [
                    {
                        targets: '#frog2',
                        translateX: [
                            { value: 0, duration: 600, delay: 100 },
                            { value: 800, duration: 600, delay: 100 },
                            { value: 0, duration: 600, delay: 100}
                        ],
                        translateY: [
                            { value: 0, duration: 500 },
                            { value: -400, duration: 1000, delay: 500 }
                        ],

                        scaleY: [
                            { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                            { value: 1, duration: 900 },
                            { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                            { value: 1, duration: 900 }
                        ],
                        scaleX: [
                            // { value: [.75, 1], duration: 500 },
                            { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                            { value: 1, duration: 450 },
                            { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                            { value: 1, duration: 450 }
                        ],
                        easing: 'easeOutExpo(1, .8)',
                        loop: true                    
                    } 
                    ]
                }>
                <img className='frogs' id="frog2" src='frog.png' alt="frog"></img>

               </Anime>
           </div>
           
        {/* https://www.sitepoint.com/get-started-anime-js/ */}
           <div className="container" id="img1">
            <Anime

                initial={[
                    {
                        targets: '#rod',
                        rotate: [60, -60],
                        duration: 3000,
                        easing: 'easeInOutSine',
                        direction: 'alternate',
                        loop: true

                    }
                   ]}

                   _onMouseEnter={[{
                       targets: '#frog1',
                       translateY: '-15vh',
                       delay: 0,
                        duration: 600,
                        loop: true,
                        direction: 'alternate',
	                    easing: 'easeOutQuad',
                        scaleY: {
                            value: 1.15,
                            duration: 20,
                            delay: 100
                        },
                        scaleX: {
                            value: .85,
                            duration: 40,
                            delay: 100
	                    }
                   }
                   ]}

            >
                   <div id="rodDemo">
                        <div id="rod">
                           <div id="pivot"></div>
                           <Anime
                                _onClick={[{
                                    targets: '#ball',
                                    translateY: '1800',
                                        duration: 600,
                                        easing: 'linear',
                                        scaleY: {
                                            value: 0,
                                            duration: 400,
                                        },
                                        scaleX: {
                                            value: 0,
                                            duration: 400,
                                        }
                                }
                               ]}
                           >
                                <div id="ball"></div>
                           </Anime>
                       </div>                          
                   </div>
                   <div><img className='frogs' id="frog1" src='frog.png' alt="frog"></img></div>

            </Anime>
        </div>
        

<div>
<Anime 
            _onMouseEnter={[{
                targets: '#Frog',
                translateY: 100,
                easing: 'spring',
                delay:stagger(80)
            }]}

            _onMouseLeave={[{
                targets: '#Frog',
                translateY: 0,
                easing: 'spring',
                delay:stagger(80)
            }]}
            >
            <Frog/><Frog/><Frog/><Frog/><Frog/><Frog/><Frog/><Frog/><Frog/><Frog/><Frog/><Frog/><Frog/>    
               </Anime>
               </div>
       </>
   )
}
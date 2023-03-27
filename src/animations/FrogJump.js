import ReactAnime from "react-animejs";
const {Anime} = ReactAnime;

export default function FrogJumps(props) {
    return(
        <Anime
            controls = {props.controls}
            setMeta = {props.setMeta}
            initial={[
                {
                    targets: ".jumpingFrog",
                    loop: true,
                    duration: 1000,
                    easing: "linear",

                    keyframes: [
                        {
                            translateX: 50,
                            translateY: 50,
                            scale: 1.25
                        },
                        {
                            translateX: 0,
                            translateY: 0,
                            scale: 1
                        },
                        {
                            translateX: -50,
                            translateY: 50,
                            scale: 1.25
                        },
                        {
                            translateX: 0,
                            translateY: 0,
                            scale: 1
                        }
                    ]
 
                }
            ]}
        >
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
        </Anime>

    )
}
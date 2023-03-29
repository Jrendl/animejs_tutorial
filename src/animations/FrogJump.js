import ReactAnime from "react-animejs";
const {Anime, stagger } = ReactAnime;

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
                    delay: stagger(100),
                    rotate: stagger([-360,360]),
                    easing: 'easeInOutQuad'

                    
                }
            ]}
        >
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
        </Anime>

    )
}
import ReactAnime from "react-animejs";
const {Anime, stagger } = ReactAnime;

export default function FrogJumps(props) {
    let tl = timeline
    return(
        <Anime
            control = {props.control}
            setMeta = {props.setMeta}
            initial={[
                {
                    targets: ".jumpingFrog",
                    translateX: 50,
                    translateY: 50,
                    scale: 1.25,
                    delay: stagger(100)
                },
                {
                    targets: ".jumpingFrog",
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    delay: stagger(100)
                },
                {
                    targets: ".jumpingFrog",
                    translateX: -50,
                    translateY: 50,
                    scale: 1.25,
                    delay: stagger(100)
                },
                {
                    targets: ".jumpingFrog",
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    delay: stagger(100)
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
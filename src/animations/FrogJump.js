import ReactAnime from 'react-animejs'
const {Anime} = ReactAnime

export default function FrogJumps() {
    return (
        <Anime
            initial={[
                {
                    targets: ".jumpingFrog",
                    translateY: -50,
                    duration: 2000,
                    loop: true
                }
            ]}
        >
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
        </Anime>
    )
}

/*
keyframes: [
    {
        translateX: 50,
        translateY: 50,
    },
    {
        translateX: 0,
        translateY: 0,
    },
    {
        translateX: -50,
        translateY: 50,
    },
    {
        translateX: 0,
        translateY: 0,
    }
],
*/
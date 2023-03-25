import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime

export default function FrogJumps() {
    return (
        <Anime
            initial={[
                { //1st segment
                    targets: ".jumpingFrog",
                    keyframes: [
                        {
                            translateX: 50,
                            translateY: 50
                        },
                        {
                            translateX: 0,
                            translateY: 0
                        },
                        {
                            translateX: -50,
                            translateY: 50
                        },
                        {
                            translateX: 0,
                            translateY: 0
                        }
                    ],
                    duration: 2000,
                    loop: true
                }
            ]}
        >
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
        </Anime>
    )
}

import ReactAnime from "react-animejs";
const {Anime, stagger } = ReactAnime;

export default function Stagger(props) {
    return(
        <Anime
            
            initial={[
                {
                    targets: ".jumpingFrog",
                    translateY:-200,
                    direction: 'alternate',
                    scale: [
                            {value: .1, easing: 'easeOutSine', duration: 500},
                            {value: 1, easing: 'easeInOutQuad', duration: 1200}
                          ],
                          delay: stagger(200, {grid: [9, 4], from: 'center'})
                },
                
            ]}
        >
            <img className='jumpingFrog' width='200rem' src='frog.png' alt='frog'></img>
            

        </Anime>

    )
}
//1 delay = (100 * index)ms make a row of 9 for first
//delay: stagger(100) 
//2 range [-360,360], -360 + ((360-(-360))/num_targets) * index, evenly distribute between two values
// rotate: staggger([-90, 90])
//3 from center, last, index
// , {from: 2}
//4 easing
// , {easing: 'easeInExpo'}
// , {easing: 'easeOutExpo'}
//5 grid, 4 rows of 9
// scale: [
//     {value: .1, easing: 'easeOutSine', duration: 500},
//     {value: 1, easing: 'easeInOutQuad', duration: 1200}
//   ],
//   delay: stagger(200, {grid: [9, 4], from: 'center'})
//6 Timeline, activate animations when you want them by creating a timeline of events

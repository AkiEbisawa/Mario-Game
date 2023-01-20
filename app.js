const screen = document.querySelector('#screen');

const scrMxWidth = parseInt(getComputedStyle(screen).width)
const scrMxHeight = parseInt(getComputedStyle(screen).height)


const ScoureCountElem = document.getElementById('score');
let ScoreCount = 0;

ScoureCountElem.innerText = `Score: ${ScoreCount}`;
document.body.insertBefore(ScoureCountElem,screen);


function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
// score





// function ScoreCounter () {
//     var x = 0;
//     x = document.createElement('#score')
//     x = innerHtml = 'score : ${score}';
//     document.body.insertBefore( x );
//     addEventListener(() => {
//         if(isTouching){
//             score ++;
//             x.innerHtml = 'score{x}'
//         }
//     })
// }

const init = () => {
    //get the avatar
    const avatarSrc = document.getElementById('#avatar');
    //get the coin
    const coinSrc = document.getElementById('#coin');

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 150);
        }
        if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -150);
        }
        if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveHorizontal(avatar, -150);
        }
        if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveHorizontal(avatar, 150);
        }
        if(isTouching(avatar,coin)){
            ScoreCount++;
        moveCoin();
          
        ScoureCountElem.innerText = `Score: ${ScoreCount}`;
        document.body.insertBefore(ScoureCountElem,screen);
        }
    });
}

const moveHorizontal = (element, amount) => {
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth)
    // const y = ?
    const y = Math.floor(Math.random() * window.innerHeight)
    coin.style.top = `${x}px`;
    // coin.style.?? = ??
    coin.style.left = `${y}px`
}


init();
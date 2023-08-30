const circleEl = document.querySelector('.circle');
const bodyEl = document;
let dx = 0;
let dy = 0;


function getRandomCoordinates() {
    let Y = Math.floor(Math.random() * 500);
    let X = Math.floor(Math.random() * 1400);
    circleEl.style.transform = `translate(${X}px, ${Y}px)`;
    circleEl.style.transition = '0s';
}


function setCoordinates ( event ) {
    dx = event.clientX;
    dy = event.clientY;
    console.log(`X=${dx}, Y=${dy}`);
    circleEl.style.transform = `translate(${dx}px, ${dy}px)`;
    circleEl.style.transition = 'transform 1s linear';

}

function move() {
    return new Promise(function(resolve, reject) {
        bodyEl.addEventListener('mousedown', setCoordinates);
    })
}

move();
getRandomCoordinates();
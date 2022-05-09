/*
- Enable/Disable img iteration
*/

const funky = true;

const nav = document.querySelector('nav')
const navUl = document.querySelector('nav ul')
const resizeEvent = () => {
    navUl.style.height = window.getComputedStyle(nav).height;
}
resizeEvent();
window.addEventListener('resize', resizeEvent)

let images = [
    'media/bacteriophage-vs-bacterium-755x1024.png', 
    'media/bacteriophageInfared.jpg',
]
const imgIteration = document.querySelector('#imgIteration');
let currentImg = 0;
function changeImg (link) {
    imgIteration.style.backgroundImage = `url('${link}')`;
}
let imgIterationInterval = setInterval(() => {
    if (currentImg === 0) {
        changeImg(images[1])
        currentImg = 1;
    } else {
        changeImg(images[0])
        currentImg = 0;
    }
}, 5000);
const imgIterationBtn = document.querySelector('#imgIteration button')
imgIterationBtn.addEventListener('click', () => {
    clearInterval(imgIterationInterval);
});


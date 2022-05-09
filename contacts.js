const nav = document.querySelector('nav')
const navUl = document.querySelector('nav ul')
const resizeEvent = () => {
    navUl.style.height = window.getComputedStyle(nav).height;
}
resizeEvent();
window.addEventListener('resize', resizeEvent)

const form = document.querySelector('form');
const formSubmit = form.querySelector('#submit')
formSubmit.addEventListener('click', e => {
    e.preventDefault();
});
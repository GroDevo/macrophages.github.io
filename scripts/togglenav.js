const main = document.querySelector('main');
const navigation = document.querySelector('nav');
const navBtn = document.querySelector('.nav_button');
const navBtnClasses = navBtn.classList;
let currentNavClass = true;
navBtn.addEventListener('click', () => {
    if (navBtnClasses[1] == 'show') {
        navBtn.className = 'nav_button hide';
    } else {
        navBtn.className = 'nav_button show';
    }
    currentNavClass = (navBtnClasses[1] == 'show') ? true:false;
    console.log(currentNavClass)
    if (currentNavClass) {
        navigation.style.opacity = '1'
        setTimeout(() => {
            navigation.style.display = 'flex'
            main.style.gridColumn = '4/-1'
        }, 0300)
       
    } else {
        navigation.style.opacity = '0'
        setTimeout(() => {
            navigation.style.display = 'none'
            main.style.gridColumn = '2/-1'
        }, 0300)
    }
})
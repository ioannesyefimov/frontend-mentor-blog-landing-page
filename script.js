const header = document.querySelector('.header-bg')
const hamburger = document.querySelector('.hamburger')
const hamburgerIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const navMenu = document.querySelector('.menu')
const navTitle = document.querySelector('.header-title')
const navBar = document.querySelector('.nav-bar')
const navLogo = document.querySelector('.logo')
const main = document.querySelector('main')


hamburger.addEventListener('click', () => {
    header.classList.toggle('header-bg-black')
    hamburgerIcon.classList.toggle('hidden')
    closeIcon.classList.toggle('hidden')
    navTitle.classList.toggle('hidden')
    navMenu.classList.toggle('hidden')
    navMenu.style.marginBlock = '5rem'
    main.classList.toggle('hidden')
})



function getScreenWidth() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0]
  
    return w.innerWidth || e.clientWidth || g.clientWidth
  }
  
  function wheelListener() {
    console.log(getScreenWidth())
  }
  
  window.onresize = function() {
    if (getScreenWidth() >= 756) {
        navMenu.classList.remove('hidden')
        header.classList.remove('header-bg-black')
        navTitle.classList.remove('hidden')
        closeIcon.classList.add('hidden')
        hamburgerIcon.classList.remove('hidden')
        main.classList.remove('hidden')
        navMenu.style.marginBlock = '0'
    } else {
        navMenu.classList.add('hidden')

    }
  }
  
  // to apply when the window loaded
  window.onresize()
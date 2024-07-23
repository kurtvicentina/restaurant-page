import './style.css'
import { mainBackground } from './app/home'
import { loadOverview } from './app/home'
import { loadMenu } from './app/menu'
import { cleanDom } from './app/cleanDom'
import { loadFooter } from './app/footer'
import { loadAbout } from './app/about'

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')


function loadHomePage() {
    cleanDom()
    mainBackground()
    loadOverview()
    loadFooter()
}

function loadMenuPage() {
    cleanDom()
    loadMenu()
    loadFooter()
}

function loadAboutPage(){
    cleanDom()
    loadAbout()
    loadFooter()
}

loadHomePage()

homeButton.addEventListener('click', loadHomePage)
menuButton.addEventListener('click', loadMenuPage)
aboutButton.addEventListener('click', loadAboutPage)

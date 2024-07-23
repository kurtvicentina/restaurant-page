const mainContainer = document.querySelector('.content');
const aboutContainer = document.createElement('div')
import aboutBanner from '../assets/images/about-banner.jpg'
import fact1 from '../assets/images/fact-1.jpg'
import fact2 from '../assets/images/fact-2.jpg'
import fact3 from '../assets/images/fact-3.jpg'
const aboutBannerImg = new Image()
aboutBannerImg.src = aboutBanner
const fact1Img = new Image()
fact1Img.src = fact1
const fact2Img = new Image()
fact2Img.src = fact2
const fact3Img = new Image()
fact3Img.src = fact3


export function loadAbout(){
    const aboutBanner = document.createElement('div')
    aboutBanner.setAttribute('class', 'about-banner')

    aboutBanner.append(aboutBannerImg)
    mainContainer.append(aboutBanner)
    const aboutTitle = document.createElement('h1')
    aboutTitle.setAttribute('class', 'about-title')
    aboutTitle.textContent = 'About'

    mainContainer.append(aboutTitle)
    aboutContainer.innerHTML = ''
    showFacts(fact1Img, 'Friends of Angel’s, did you know that Angel’s Burger now has over 1,000 branches NATIONWIDE?! 🙊')
    showFacts(fact2Img, 'With perseverance, you will surely succeed! ❤️ Before there was the “Burger ng Bayan,” the couple who dared to start the business first tried setting up a gotohan and bulalohan. Due to their continuous hard work and perseverance, #AngelsBurger is now 25 years old!')
    showFacts(fact3Img, 'Angels Burger first opened on November 19, 1997, in Krus na Ligas, Quezon City! Do you still remember which branch you first tasted the #BurgerNgBayan?')

    mainContainer.append(aboutContainer)
}

function showFacts(image, text){
    const factContainer = document.createElement('div')
    factContainer.setAttribute('class', 'fact-container')
    const factImg = document.createElement('div')
    factImg.setAttribute('class', 'fact-image')
    factImg.append(image)
    const factTextContainer = document.createElement('div')
    factTextContainer.setAttribute('class', 'fact-text')
    const factText = document.createElement('p')
    factText.append(text)
    factTextContainer.append(factText)

    factContainer.append(factImg)
    factContainer.append(factTextContainer)

    aboutContainer.append(factContainer)
}
const mainContainer = document.querySelector('.content');
import logoSrc from '../assets/images/angels-burger-logo.jpg'
const footerLogo = new Image()
footerLogo.src = logoSrc

export function loadFooter(){
    const footer = document.createElement('div')
    footer.setAttribute('class', 'footer')
    const logo = document.createElement('div')
    logo.setAttribute('class', 'footer-logo')
    logo.append(footerLogo)

    const disclaimer = document.createElement('div')
    disclaimer.setAttribute('class', 'disclaimer')
    const disclaimerText = document.createElement('p')
    disclaimerText.textContent = '⚠️ Disclaimer, this is not the official website of Angel\'s Burger'

    const socialLinks = document.createElement('div')
    socialLinks.setAttribute('class', 'social-links')
    const socialText = document.createElement('p')
    const links = document.createElement('div')
    links.setAttribute('class', 'links')
    const facebook = document.createElement('a')
    facebook.setAttribute('class', 'facebook')
    const instagram = document.createElement('a')
    instagram.setAttribute('class', 'instagram')
    const github = document.createElement('a')
    github.setAttribute('class', 'github')
    socialText.textContent = 'Follow their official social media accounts'
    facebook.href = 'https://www.facebook.com/angelsburgerph'
    instagram.href = 'https://www.instagram.com/angelsburgerph/'
    github.href = 'https://github.com/kurtvicentina'
    facebook.textContent = 'Facebook'
    instagram.textContent = 'Instagram'
    github.textContent = 'My Github'
    socialLinks.append(socialText)
    links.append(facebook)
    links.append(instagram)
    links.append(github)
    socialLinks.append(links)

    disclaimer.append(disclaimerText)
    footer.append(logo)
    footer.append(disclaimer)
    footer.append(socialLinks)
    
    mainContainer.append(footer)
}
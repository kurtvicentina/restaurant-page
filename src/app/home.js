const mainContainer = document.querySelector('.content');
const overviewContainer = document.createElement('div');
import background from '../assets/images/burger-main-background.jpg';
import buildBurgerImg from '../assets/images/build-ur-burger.jpg';
import img1 from '../assets/images/burgers.jpg';
import img2 from '../assets/images/footlong.jpg';
import img3 from '../assets/images/hungarian.jpg';
import img4 from '../assets/images/quad-cheese-burger.jpg';
const banner = new Image();
banner.src = background;
const buildUrBurger = new Image();
const image1 = new Image();
const image2 = new Image();
const image3 = new Image();
const image4 = new Image();
buildUrBurger.src = buildBurgerImg;
image1.src = img1;
image2.src = img2;
image3.src = img3;
image4.src = img4;

export function mainBackground(){
    banner.classList.add('banner');
    return mainContainer.append(banner);
}

export function loadOverview(){
    overviewContainer.setAttribute('class', 'overview-container')
    const overviewTitle = document.createElement('h1');
    overviewTitle.setAttribute('class', 'overview-title')
    overviewTitle.textContent = 'Home';
    mainContainer.append(overviewTitle)
    mainContainer.append(overviewContainer)
    overviewContainer.innerHTML = ''
    loadOverviewImages();
    latestNews();
}

function loadOverviewImages(){
    const images = [image1,image2,image3,image4]
    for(let image of images){
        let div = document.createElement('div');
        div.setAttribute('class', 'overview-image')
        div.append(image);
        overviewContainer.append(div);
    }
}

function latestNews(){
    const newsContainer = document.createElement('div');
    newsContainer.setAttribute('class', 'news-container');
    const newsTextContainer = document.createElement('div');
    newsTextContainer.setAttribute('class', 'news-text-container');
    const newsHeader = document.createElement('h1');
    const newsText = document.createElement('p');
    const newsDesc = document.createElement('div');
    newsDesc.setAttribute('class', 'news-desc');
    newsHeader.textContent = 'build YOUR own burger';
    newsText.textContent = 'Do you want to test your creativity? We are now offering for a limited time only, BUILD YOUR OWN BURGER! Where the ingredients is on your hands, it is up to you to satisfy your cravings.';
    const punchLine = document.createElement('p');
    punchLine.textContent = 'Are you ready to build?';
    const hr = document.createElement('br');
    newsTextContainer.append(newsHeader);
    newsTextContainer.append(newsDesc);
    newsDesc.append(newsText);
    newsDesc.append(hr);
    newsDesc.append(punchLine);
    newsContainer.append(buildUrBurger);
    newsContainer.append(newsTextContainer);
    mainContainer.append(newsContainer);
}
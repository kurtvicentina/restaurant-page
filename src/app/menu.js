const mainContainer = document.querySelector('.content')
const menuContainer = document.createElement('div')
const mainFoodContainer = document.createElement('div')
mainFoodContainer.setAttribute('class', 'main-food-container')
import burgerMan from '../assets/images/burger-man.jpg'
import footLong from '../assets/images/footlong.jpg'
import buildBanner from '../assets/images/build-ur-burger-banner.jpg'
import buy1take1 from '../assets/images/buy-1-take-1.jpg'
import doubleHotdog from '../assets/images/double-hotdog.jpg'
import chori from '../assets/images/chori.jpg'
import hungarian from '../assets/images/hungarian.jpg'
const cashier = new Image()
cashier.src = burgerMan
const footLongImg = new Image()
footLongImg.src = footLong
const buildBurgerBanner = new Image()
buildBurgerBanner.src = buildBanner
const buy1take1Img = new Image()
buy1take1Img.src = buy1take1
const doubleHotdogImg = new Image()
doubleHotdogImg.src = doubleHotdog
const choriImg = new Image()
choriImg.src = chori
const hungarianImg = new Image()
hungarianImg.src = hungarian

export function loadMenu(){
    // cashier.setAttribute('class', 'cashier')
    buildBurgerBanner.setAttribute('class', 'build-banner')
    menuContainer.setAttribute('class', 'menu-container')
    menuContainer.append(buildBurgerBanner)
    const menuTitle = document.createElement('h1')
    menuTitle.textContent = 'Menu'
    menuTitle.setAttribute('class', 'menu-title')
    mainContainer.append(menuContainer)
    mainContainer.append(menuTitle)
    mainFoodContainer.innerHTML = ''    
    loadFoods(footLongImg, 'Footlong', 'At Angel\'s Burger, our footlong is a mouthwatering delight, packed with juicy meats, melty cheeses, crisp vegetables, and flavorful condiments. Perfect for satisfying your cravings, this beloved Filipino sub is a feast for your taste buds, crafted just the way you like it.')
    loadFoods(buy1take1Img, 'Regular Burger', 'At Angel\'s Burger, our Buy 1 Take 1 regular burger deal is a crowd favorite, offering double the deliciousness at an unbeatable price. Enjoy two juicy, perfectly seasoned burgers with fresh toppings and flavorful sauces, making it the perfect treat to share with a friend or savor all by yourself.')
    loadFoods(choriImg, 'Chori Burger', 'At Angel\'s Burger, our chori burger is a flavorful twist on a classic favorite, featuring a savory chorizo patty that\'s bursting with rich, smoky goodness. Topped with fresh veggies and our special sauce, this burger offers a unique and satisfying taste experience that’s sure to delight your taste buds.')
    loadFoods(hungarianImg, 'Hungarian Burger', 'Angel\'s Burger serves up a Hungarian burger that\'s a true flavor sensation, featuring a juicy, spiced Hungarian sausage patty with a perfect blend of bold and savory seasonings. Paired with fresh toppings and our signature sauce, this burger offers a deliciously unique twist that\'s sure to spice up your meal.')
}

function loadFoods(image,title,desc){
    const foodContainer = document.createElement('div')
    foodContainer.setAttribute('class', 'food-container')
    const foodPic = document.createElement('div')
    foodPic.append(image)
    foodPic.setAttribute('class', 'food-pic')
    const foodText = document.createElement('div')
    foodText.setAttribute('class', 'food-text')
    const foodTitle = document.createElement('h2')
    foodTitle.textContent = title
    foodTitle.setAttribute('class', 'food-title')
    const foodDesc = document.createElement('p')
    foodDesc.textContent = desc
    foodDesc.setAttribute('class', 'food-desc')

    foodText.append(foodTitle)
    foodText.append(foodDesc)

    foodContainer.append(foodPic)
    foodContainer.append(foodText)

    mainFoodContainer.append(foodContainer)

    mainContainer.append(mainFoodContainer)
}
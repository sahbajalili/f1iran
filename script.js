let doc = document

let body = doc.querySelector('body')
let header = doc.querySelector('header')
let headerMenu = doc.querySelector('.header-menu')
let menuList = doc.querySelector('.menu-list')
let hambergerbutton
let newMenuList 

if (window.innerWidth <= 530) {
    menuList.remove()
    hambergerbutton = doc.createElement('button')
    hambergerbutton.innerHTML = '<i class="fa fa-bars"></i>'
    headerMenu.append(hambergerbutton)
}

hambergerbutton.addEventListener('click' , showMenu)
hambergerbutton.addEventListener('ontouchstart' , showMenu)

function showMenu() {
   if (hambergerbutton.innerHTML == '<i class="fa fa-bars"></i>') {
    header.append(menuList)
    menuList.style.flexDirection = 'column'
    menuList.style.marginTop = '10px'
    hambergerbutton.innerHTML = '<i class="fa fa-x"></i>'
   } else {
    menuList.remove()
    hambergerbutton.innerHTML = '<i class="fa fa-bars"></i>'
   }
}
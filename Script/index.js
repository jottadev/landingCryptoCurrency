let menuIcon = document.querySelector('#menu_mobile_icon')

menuIcon.addEventListener('click', (e)=>{
    e.preventDefault()
    let menuMobile = document.querySelector('.menu_mobile ul')
    if(menuMobile.classList.contains('show_menu')){
        menuMobile.classList.remove('show_menu')
    } else{
        menuMobile.classList.add('show_menu')
    }
})
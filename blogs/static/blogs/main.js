// NAV
const navItems = document.querySelector('.nav-items')
const navItemsOpenBtn = document.querySelector('.nav-items-open-btn')
const navItemsCloseBtn = document.querySelector('.nav-items-close-btn')



const handleEvents = function(event){
    if(event.currentTarget == navItemsOpenBtn){
        navItems.classList.add("show-nav-items")
        navItemsOpenBtn.style.display = "none"
        navItemsCloseBtn.style.display = "inline-block"
    }
    if(event.currentTarget == navItemsCloseBtn){
        navItems.classList.remove("show-nav-items")
        navItemsOpenBtn.style.display = "inline-block"
        navItemsCloseBtn.style.display = "none"
    }
}





navItemsOpenBtn.addEventListener('click', handleEvents)
navItemsCloseBtn.addEventListener('click', handleEvents)

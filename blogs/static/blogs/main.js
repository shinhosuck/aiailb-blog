const mobileMenuItems = document.querySelector('.mobile-menu-items')
const barsBtn = document.querySelector('.bars-btn')
const closeBtn = document.querySelector('.close-btn')
const navItems = document.querySelector('.nav-items')
const barsBtn2 = document.querySelector('.bars-btn-2')
const closeBtn2 = document.querySelector('.close-btn-2')
const mobileSearchForm = document.querySelector('.mobile-search-form')
const mobileSearch = document.querySelector('.mobile-search')
const userProfile = document.querySelector('.user-profile')
const userInfo = document.querySelector('.user-info')
const scrollUpContainer = document.querySelector('.scroll-up-container')
const scrollUp = document.querySelector('.scroll-up')
const profileContainerChevron = document.querySelector('.profile-container-chevron')



window.onscroll = function(){
    if(window.pageYOffset >= 303) {
        scrollUpContainer.classList.add('show-scroll-up-container')
    }
    if(window.pageYOffset <= 303) {
        scrollUpContainer.classList.remove('show-scroll-up-container')
    }
}

let clickEvents = function handleClickEvents(event) {
    if(event.currentTarget == barsBtn) {
        mobileMenuItems.classList.toggle('show-mobile-menu-items')
        closeBtn.style.display = 'inline-block'
        barsBtn.style.display = 'none'
    }
    if(event.currentTarget == closeBtn) {
        mobileMenuItems.classList.toggle('show-mobile-menu-items')
        closeBtn.style.display = 'none'
        barsBtn.style.display = 'inline-block'
        mobileSearchForm.classList.remove('show-mobile-search-form')
    }
    if(event.currentTarget == barsBtn2) {
        navItems.classList.toggle('show-nav-items')
        barsBtn2.style.display = 'none'
        closeBtn2.style.display = 'inline-block'
    }
    if(event.currentTarget == closeBtn2) {
        navItems.classList.remove('show-nav-items')
        barsBtn2.style.display = 'inline-block'
        closeBtn2.style.display = 'none'
    }
    if(event.currentTarget == mobileSearch) {
        event.preventDefault()
        mobileSearchForm.classList.toggle('show-mobile-search-form')
    }
    if(event.currentTarget == userProfile) {
        userInfo.classList.toggle('show-user-info')
        if(window.innerWidth >= 1150) {
            event.preventDefault()
        }
        if(userInfo.classList.contains('show-user-info')) {
            profileContainerChevron.style.transform = 'rotate(540deg)'
            profileContainerChevron.style.transition = 'transform 0.3s linear'
        }
        else {
            profileContainerChevron.style.transform = 'initial'
            
        }
    }
    if(event.currentTarget == scrollUp) {
        scrollUpContainer.classList.remove('show-scroll-up-container')
    }
    else if(event.target == window) {
        if(window.innerWidth > 780) {
            closeBtn.style.display = 'none'
            barsBtn.style.display = 'inline-block'
            mobileMenuItems.classList.remove('show-mobile-menu-items')
        }
        if(window.innerWidth > 1150 || window.innerWidth < 770) {
            closeBtn2.style.display = 'none'
            barsBtn2.style.display = 'inline-block'
            navItems.classList.remove('show-nav-items')
        }
        if(window.innerWidth < 1150) {
            userInfo.classList.remove('show-user-info')
            profileContainerChevron.style.transform = 'initial'
        }
    }
}

barsBtn.addEventListener('click', clickEvents)

closeBtn.addEventListener('click', clickEvents)

window.addEventListener('resize', clickEvents)

barsBtn2.addEventListener('click', clickEvents)

closeBtn2.addEventListener('click', clickEvents)

mobileSearch.addEventListener('click', clickEvents)

userProfile.addEventListener('click', clickEvents)

scrollUp.addEventListener('click', clickEvents)

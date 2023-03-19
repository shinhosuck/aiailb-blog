/*============
NAVIGATION BAR
==============*/
const openMobileNavItems = document.querySelector(".open-mobile-nav-items")
const navItemsContainer = document.querySelector(".nav-items-container")
const closeMobileNavItems = document.querySelector(".close-mobile-nav-items")
const mobileSearchMenu = document.querySelector(".mobile-search-menu")
const mobileSearchClose = document.querySelector(".mobile-search-close")
const mobileSearchFormContainer = document.querySelector(".mobile-search-form-container")
const postFormContainer = document.querySelector(".post-form-container")
const newPost = document.querySelector(".new-post")
const postFormClose = document.querySelector(".post-form-close")


const handleNavEvents = function(event) {
    if(event.currentTarget == openMobileNavItems) {
        navItemsContainer.classList.toggle("show-nav-items-container")
        document.body.classList.add("body-disable-scroll")
    }
    if(event.currentTarget == closeMobileNavItems) {
        navItemsContainer.classList.toggle("show-nav-items-container")
        document.body.classList.remove("body-disable-scroll")
    }
    if(event.currentTarget == mobileSearchMenu) {
        event.preventDefault()
        mobileSearchFormContainer.classList.toggle("show-mobile-search-form-container")
        navItemsContainer.classList.toggle("show-nav-items-container")
        document.body.classList.add("body-disable-scroll")
    }
    if(event.currentTarget == mobileSearchClose) {
        mobileSearchFormContainer.classList.toggle("show-mobile-search-form-container")
        document.body.classList.remove("body-disable-scroll")
    }
    if(event.currentTarget == newPost) {
        event.preventDefault()
        postFormContainer.classList.toggle("show-post-form-container")
        navItemsContainer.classList.toggle("show-nav-items-container")
        document.body.classList.add("body-disable-scroll")
    }
    if(event.currentTarget == postFormClose) {
        postFormContainer.classList.toggle("show-post-form-container")
        document.body.classList.remove("body-disable-scroll")
    }

}


openMobileNavItems.addEventListener("click", handleNavEvents)
closeMobileNavItems.addEventListener("click", handleNavEvents)
mobileSearchMenu.addEventListener("click", handleNavEvents)
mobileSearchClose.addEventListener("click", handleNavEvents)
newPost.addEventListener("click", handleNavEvents)
postFormClose.addEventListener("click", handleNavEvents)


// WINDOW ON RESIZE
window.addEventListener("resize", function(){
    mobileSearchFormContainer.classList.remove("show-mobile-search-form-container")
    navItemsContainer.classList.remove("show-nav-items-container")
})


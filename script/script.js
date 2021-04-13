"use strict";
// =====================================================================
// nav pseudo element hover
const ulNav =document.querySelector(".header-nav-list");
ulNav.addEventListener("mouseover", function(evt){
    const links = evt.target.querySelectorAll(".nav-list-link");
    console.log(links);
})

// =====================================================================
// our services tabs

const tab = document.querySelector(".service-list-tabs");
const tabLi = document.querySelectorAll(".js-tab-trigger");
tab.addEventListener("click", function(evt){
    const dataTab = evt.target.getAttribute("data-tab");
    const content = document.querySelectorAll(".js-tab-content");
    tabLi.forEach(function(item){
        item.classList.remove("active");
    })
    evt.target.classList.add("active");
    content.forEach(article => {
        let atr = article.getAttribute("data-tab");
        if (atr === dataTab) {
            article.classList.add("active");            
        }
        else{
            article.classList.remove("active");
        }
    });
});

// =====================================================================
// our amazing work tabs

// const tabThemesUl = document.querySelector(".topic-switch");
// const tabThemesLi = document.querySelectorAll(".topic-element");
// tabThemesUl.addEventListener("click", function(evt){
//     const dataTab = evt.target.getAttribute("data-tab");
//     const content = document.querySelectorAll(".js-tab-content");
//     tabLi.forEach(function(item){
//         item.classList.remove("active");
//     })
//     evt.target.classList.add("active");
//     content.forEach(article => {
//         let atr = article.getAttribute("data-tab");
//         if (atr === dataTab) {
//             article.classList.add("active");            
//         }
//         else{
//             article.classList.remove("active");
//         }
//     });
// });




// =====================================================================
// our amazing work onmouseover
// const imageWrapper = document.querySelector(".image-wrapper");
// imageWrapper.addEventListener("mouseover", function(evt){
//     const dataTab = evt.target;
//     const div = document.querySelector(".creative-design");
//     div.classList.add("active");
//     dataTab
    
// })




// =====================================================================
// our amazing work load more
const loadMore = document.querySelector(".load-more");
loadMore.addEventListener("click", function(evt){
    evt.preventDefault();
    const wrapper = document.querySelector(".hidden_wrapper");
    const section = document.querySelector(".amazing-work");
    let stepOpacity = 0;
    let stepHeight = 1212;
    function animationFade(){
        wrapper.style.opacity=stepOpacity;
        stepOpacity+=0.1;
        section.style.height = stepHeight+"px";
        stepHeight+=55;
        if (stepOpacity>=1) {
            clearInterval(some);
            return;
        }
    }
    wrapper.style.display="flex";

    let some = setInterval(animationFade, 20);
    loadMore.style.opacity = 0;
})

// what people say slider
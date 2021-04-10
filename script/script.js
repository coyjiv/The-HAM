"use strict";
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
const imageWrapper = document.querySelector(".image-wrapper");
imageWrapper.addEventListener("mouseover", function(evt){
    const dataTab = evt.target;
    
})




// =====================================================================
// our amazing work load more


// what people say slider
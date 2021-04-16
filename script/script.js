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
// our amazing work load more
const loadMore = document.querySelector(".load-more");
let change =0;
loadMore.addEventListener("click", function(evt){
    change=1;
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
// =====================================================================
// our amazing work tabs
const filtersUl = document.querySelector(".topic-switch");
const filters = document.querySelectorAll(".topic-element");
filtersUl.addEventListener("click", function(evt){
    filters.forEach(function(item){
        item.classList.remove("active");
    })
    evt.target.classList.add("active");
});
    for (let filter of filters) {
    filter.addEventListener('click', function() {

    let topic = filter.getAttribute('data-topic');
    let itemContainer = document.querySelectorAll('.item-wrapper-container');

    itemContainer.forEach(function(c) {

      if (topic === 'all') {
        c.classList.remove('hide');
        loadMore.style.opacity = 1;
        const section = document.querySelector(".amazing-work");
        if (change===1) {
            section.style.height='1762px';
        }
        else section.style.height='1212px';
      } else {
        const section = document.querySelector(".amazing-work");
        if (change===1) {
            section.style.height='840px';   
        }
        else{section.style.height='760px';}
          
        loadMore.style.opacity = 0;
        if (c.getAttribute('data-top') !== topic) {
          c.classList.add('hide');
        } else {
          c.classList.remove('hide');
        }
      }

    })

  });
}





// what people say slider


const next = document.querySelector(".button__next");
const previous = document.querySelector(".button__previous");

const personNameList = document.querySelectorAll(".changable-name");
const proffessionList = document.querySelectorAll(".profession");
const quotes = document.querySelectorAll(".quote");
const chosenAvaGlobal = document.querySelectorAll(".displayable-avatar");
const chosenAvaSmall = document.querySelectorAll(".quote-element");
let stepSmallAva = 2;
let stepAva = 2;

next.addEventListener("click", function(evt){
    evt.preventDefault();
    if (stepAva===3) {
        stepAva=-1;
    }
    if (stepSmallAva===4) {
        stepSmallAva=0;
    }
    personNameList.forEach(element =>{element.classList.remove("active")});
    proffessionList.forEach(element =>{element.classList.remove("active")});
    chosenAvaGlobal.forEach(element =>{element.classList.remove("active")});
    quotes.forEach(element =>{element.classList.remove("active")});
    chosenAvaSmall.forEach(element=>{element.classList.remove("active")});
    stepAva++;
    stepSmallAva++;
    if (chosenAvaSmall[stepSmallAva].hasAttribute("data-first")) {
        chosenAvaSmall[0].classList.add("active");
        chosenAvaSmall[4].classList.add("active");
        
    }
    personNameList[stepAva].classList.add("active");
    proffessionList[stepAva].classList.add("active");
    chosenAvaGlobal[stepAva].classList.add("active");
    quotes[stepAva].classList.add("active");
    chosenAvaSmall[stepSmallAva].classList.add("active");
})
previous.addEventListener("click", function(evt){
    evt.preventDefault();
    if (stepAva===0) {
        stepAva=4;
    }
    if (stepSmallAva===0) {
        stepSmallAva=4;
    }
    personNameList.forEach(element =>{element.classList.remove("active")});
    proffessionList.forEach(element =>{element.classList.remove("active")});
    chosenAvaGlobal.forEach(element =>{element.classList.remove("active")});
    quotes.forEach(element =>{element.classList.remove("active")});
    chosenAvaSmall.forEach(element=>{element.classList.remove("active")});
    stepAva--;
    stepSmallAva--;
    if (chosenAvaSmall[stepSmallAva].hasAttribute("data-first")) {
        chosenAvaSmall[0].classList.add("active");
        chosenAvaSmall[4].classList.add("active");
        
    }
    personNameList[stepAva].classList.add("active");
    proffessionList[stepAva].classList.add("active");
    chosenAvaGlobal[stepAva].classList.add("active");
    quotes[stepAva].classList.add("active");
    chosenAvaSmall[stepSmallAva].classList.add("active");
})

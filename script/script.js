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

const topicUl = document.querySelector(".topic-switch");
const tabTopicLi = document.querySelectorAll(".topic-element");
topicUl.addEventListener("click", function(evt){

    const dataTab = evt.target.getAttribute("data-topic");
    const content = document.querySelectorAll(".item-wrapper-container");
    tabTopicLi.forEach(function(item){
        item.classList.remove("active");
    })
    evt.target.classList.add("active");
    content.forEach(imageCont => {
        imageCont.classList.add("hide");
        let atr = imageCont.getAttribute("data-topic");
        if (atr === dataTab) {
            imageCont.classList.add("active");            
        }
        else{
            imageCont.classList.remove("active");
        }
    });
});


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

// по клику снимаем всем класс актив, выдаем элементам, у которых индекс совпадает с счетчиком

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

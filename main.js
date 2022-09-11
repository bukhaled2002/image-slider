// set items
let slidermages=Array.from(document.querySelectorAll('.slider-container img'));
let slidesCount=slidermages.length;
let currentSlide = 1;
let slideNumberElement= document.getElementById("slider-number");
let indicators=document.getElementById("indicators")
let prevButton=document.getElementById("prev");
let nextButton=document.getElementById("next");
//set onclick event
prevButton.onclick=prevSlide;
nextButton.onclick=nextSlide;
let ul =document.createElement('ul');
ul.id=`pagination-ul`;
for (let i = 1; i <= slidesCount; i++) {
    let li = document.createElement('li');
    li.innerHTML=`${i}`
    li.setAttribute('data-index',i)
    ul.appendChild(li);
}
indicators.appendChild(ul);
let lis = Array.from(document.querySelectorAll("#pagination-ul li"));
//triger the checker
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick=function () {
        currentSlide=(i+1)
        checker();
    }
    
}


checker();
//function
function prevSlide() {
    if (currentSlide>1) {
        currentSlide--
        checker();
}
}
function nextSlide() {
    if (currentSlide<slidesCount) {
        currentSlide++
        checker();
    }
}
function checker() {
    slideNumberElement.innerHTML=`index: ${currentSlide}`;
    removeActive();
    slidermages[currentSlide-1].classList="active";
    ul.children[currentSlide-1].classList="active"
}
function removeActive() {
    lis.forEach(function (bullet) {
        bullet.classList.remove("active")
    })
    slidermages.forEach(function (img) {
        img.classList.remove("active")
    })
    if(currentSlide==1){
        prevButton.classList.add('disabled')
    }else{
        prevButton.classList.remove('disabled')
    }
    if(currentSlide==slidesCount){
        nextButton.classList.add('disabled')
    }else{
        nextButton.classList.remove('disabled')
    }
}
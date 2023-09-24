var responsiveSlider = function(){

// Form----------------------------
const addressBtn = document.querySelector("#location-form");
addressBtn.addEventListener("click", function () {
    document.querySelector(".location-form").style.display = "flex";
});

const addressCloseBtn = document.querySelector("#location-form-close");
addressCloseBtn.addEventListener("click", function () {
    document.querySelector(".location-form").style.display = "none";
});   

//Slider----------------------------
const rightbtn  = document.querySelector(".fa-chevron-right");
const leftbtn =document.querySelector(".fa-chevron-left");
const imgNum=document.querySelectorAll(".slider-content-left-pic img")
let index=0;

rightbtn.addEventListener("click",function(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
})

leftbtn.addEventListener("click",function(){
    index=index-1;
    if(index<=0)
    {
        index=imgNum.length-1;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100+"%";
})
//----------------------------------
const imgNumberLi=document.querySelectorAll(".slider-content-left-text li")

imgNumberLi.forEach(function(image,index){

    image.addEventListener("click",function(){
        document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
        removeactive()
        image.classList.add("active")

    })
})
function removeactive(){
    let imgactive = document.querySelector(".active")
    imgactive.classList.remove("active")
}

//-----------------------------------

function imgAuto(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    removeactive()
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto,3000)






}
window.onload = function() {
    responsiveSlider();  
  }



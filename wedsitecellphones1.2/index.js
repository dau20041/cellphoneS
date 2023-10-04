var responsiveSlider = function(){

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
/*
function imgAuto(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
}
setInterval(imgAuto,3000)
*/

}
window.onload = function() {
    responsiveSlider();  
  }
  function hien()
  {
      document.getElementById("hide1").style.display ="block";
  }
  function an()
  {
      document.getElementById("hide1").style.display ="none";
  }
  function hien1()
  {
      document.getElementById("hide2").style.display ="block";
  }
  function an1()
  {
      document.getElementById("hide2").style.display ="none";
  }
function hien2()
{
    document.getElementById("hide3").style.display ="block";
}
function an2()
{
    document.getElementById("hide3").style.display ="none";
}
function hien3()
{
    document.getElementById("hide4").style.display ="block";
}
function an3()
{
    document.getElementById("hide4").style.display ="none";
}

var sliderIndex = ()=>{

//Slider----------------------------
const rightbtn  = document.querySelector(".fa-chevron-right");
const leftbtn =document.querySelector(".fa-chevron-left");
const imgNum=document.querySelectorAll(".slider-content-left-pic img")
const imgNumberLi=document.querySelectorAll(".slider-content-left-text li")
let index=0;
console.log(rightbtn)

rightbtn.addEventListener("click",function(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
    removeactive()
    imgNumberLi[index].classList.add("active")
})

leftbtn.addEventListener("click",function(){
    index=index-1;
    if(index<=0)
    {
        index=imgNum.length-1;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100+"%";
    removeactive()
    imgNumberLi[index].classList.add("active")
})
// --------------------
function removeactive(){
    let imgactive = document.querySelector(".active")
    imgactive.classList.remove("active")
}
imgNumberLi.forEach(function(image,index){

    image.addEventListener("click",function(){
        document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
        removeactive()
        image.classList.add("active")

    })
})
function imgAuto(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    console.log(index) 
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
    imgNumberLi[index].classList.add("active")
}


// ----------------------
const rightbtntwo  = document.querySelector(".fa-chevron-right-two");
const leftbtntwo =document.querySelector(".fa-chevron-left-two");
const imgNubertwo=document.querySelectorAll(".slider-product-one-content-items")


rightbtntwo.addEventListener("click",function () {
    index=index+1;
    if(index>imgNubertwo.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index* 100 +"%";
})

leftbtntwo.addEventListener("click",function (){
    index=index-1;
    if(index<=0)
    {
        index=imgNubertwo.length-1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index* 100+"%";
})
// ----------------

function imgAuto1(){
    index=index+1;
    if(index>imgNubertwo.length-1)
    {
        index=0;
    }
    console.log(index) 
    document.querySelector(".slider-product-one-content-items-content").style.right = index* 100 +"%";
}
setInterval(imgAuto1,3000)

// ----------------
const rightbtntwoo  = document.querySelector(".fa-chevron-right-twoo");
const leftbtntwoo =document.querySelector(".fa-chevron-left-twoo");
const imgNubertwoo=document.querySelectorAll(".container-sale-one-content-items")


rightbtntwoo.addEventListener("click",function () {
    index=index+1;
    if(index>imgNubertwoo.length-1)
    {
        index=0;
    }
    document.querySelector(".container-sale-one-content-items-content").style.right = index* 100 +"%";
})

leftbtntwoo.addEventListener("click",function (){
    index=index-1;
    if(index<=0)
    {
        index=imgNubertwoo.length-1;
    }
    document.querySelector(".container-sale-one-content-items-content").style.right = index* 100+"%";
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
window.onload =function () {
    sliderIndex();
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
function hien4()
{
    document.getElementById("hide5").style.display ="block";
}
function an4()
{
    document.getElementById("hide5").style.display ="none";
}
function hien5()
{
    document.getElementById("hide6").style.display ="block";
}
function an5()
{
    document.getElementById("hide6").style.display ="none";
}
function hien6()
{
    document.getElementById("hide7").style.display ="block";
}
function an6()
{
    document.getElementById("hide7").style.display ="none";
}
function hien7()
{
    document.getElementById("hide8").style.display ="block";
}
function an7()
{
    document.getElementById("hide8").style.display ="none";
}
function hien8()
{
    document.getElementById("hide9").style.display ="block";
}
function an8()
{
    document.getElementById("hide9").style.display ="none";
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content');
    const moreContent = document.querySelector('.more-content');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            button.innerText = 'Thu gọn';
        } else {
            moreContent.style.display = 'none';
            button.innerText = 'Xem thêm';
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question');
    const moreContent = document.querySelector('.more-content-question');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question1');
    const moreContent = document.querySelector('.more-content-question1');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question2');
    const moreContent = document.querySelector('.more-content-question2');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question3');
    const moreContent = document.querySelector('.more-content-question3');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question4');
    const moreContent = document.querySelector('.more-content-question4');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

 function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }
 
let selectedElement = null;
 document.addEventListener("DOMContentLoaded", function() {
     const initialElement = document.querySelector('.sort-btn');
     toggleColorSee(initialElement);
 });

 function toggleColorSee(element) {
     if (selectedElement !== element) {
         // Nếu phần tử được nhấp vào khác với phần tử đã chọn trước đó
         if (selectedElement) {
             selectedElement.style.border = "1px solid black";
             selectedElement.querySelector(".sort-click").style.opacity = "0";
         }

         element.style.border = "1px solid red";
         element.querySelector(".sort-click").style.opacity = "1";

         selectedElement = element;
     } else {
         // Nếu phần tử được nhấp vào là phần tử đã chọn trước đó, thì ẩn nó
         element.style.border = "1px solid black";
         element.querySelector(".sort-click").style.opacity = "0";
         selectedElement = null;
     }
 }

 let selectedElement2 = null;
 document.addEventListener("DOMContentLoaded", function() {
     const initialElement2 = document.querySelector('.sort-btn-2');
     toggleColorSee2(initialElement2);
 });

 function toggleColorSee2(element) {
     if (selectedElement2 !== element) {
         // Nếu phần tử được nhấp vào khác với phần tử đã chọn trước đó
         if (selectedElement2) {
             selectedElement2.style.border = "1px solid black";
             selectedElement2.querySelector(".sort-click-2").style.opacity = "0";
         }

         element.style.border = "1px solid red";
         element.querySelector(".sort-click-2").style.opacity = "1";

         selectedElement2 = element;
     } else {
         // Nếu phần tử được nhấp vào là phần tử đã chọn trước đó, thì ẩn nó
         element.style.border = "1px solid black";
         element.querySelector(".sort-click-2").style.opacity = "0";
         selectedElement2 = null;
     }
 }
 
 let selectedElement3 = null;
 document.addEventListener("DOMContentLoaded", function() {
     const initialElement3 = document.querySelector('.sort-btn-3');
     toggleColorSee3(initialElement3);
 });

 function toggleColorSee3(element) {
    if (selectedElement3 !== element) {
        // Nếu phần tử được nhấp vào khác với phần tử đã chọn trước đó
        if (selectedElement3) {
            selectedElement3.style.background = "white";
            selectedElement3.style.color = "grey";
            selectedElement3.querySelector(".sort-click-3").style.opacity = "0";
        }

        element.style.background = " red";
        element.style.color = " white";
        element.querySelector(".sort-click-3").style.opacity = "1";

        selectedElement3 = element;
    } else {
        // Nếu phần tử được nhấp vào là phần tử đã chọn trước đó, thì ẩn nó
    }
}
let selectedElement4 = null;
document.addEventListener("DOMContentLoaded", function() {
    
    toggleColorSee4(initialElement4);
});

function toggleColorSee4(element) {
   if (selectedElement4 !== element) {
       // Nếu phần tử được nhấp vào khác với phần tử đã chọn trước đó
       if (selectedElement4) {
           selectedElement4.style.background = "white";
           selectedElement4.querySelector(".sort-click-4").style.opacity = "0";
       }

       element.style.background = " red";
       element.style.color = " black";
       element.querySelector(".sort-click-4").style.opacity = "1";

       selectedElement4 = element;
   } else {
       // Nếu phần tử được nhấp vào là phần tử đã chọn trước đó, thì ẩn nó
       element.style.background = " white";
       element.querySelector(".sort-click-4").style.opacity = "0";
       selectedElement4 = null;
   }
}
function toggleColorSee5(element) {
    if (selectedElement5 !== element) {
        // Nếu phần tử được nhấp vào khác với phần tử đã chọn trước đó
        if (selectedElement5) {
            selectedElement5.style.border = "1px solid black";
            selectedElement5.querySelector(".sort-click-5").style.opacity = "0";
        }

        element.style.border = "1px solid red";
        element.querySelector(".sort-click-5").style.opacity = "1";

        selectedElement5 = element;
    } else {
        // Nếu phần tử được nhấp vào là phần tử đã chọn trước đó, thì ẩn nó
        element.style.border = "1px solid black";
        element.querySelector(".sort-click-5").style.opacity = "0";
        selectedElement5 = null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-cmt');
    const moreContent = document.querySelector('.more-content-cmt');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            button.innerText = 'Thu gọn';
        } else {
            moreContent.style.display = 'none';
            button.innerText = 'Xem thêm 3 bình luận';
        }
    })
});



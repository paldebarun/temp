let slideIndex=0;
let burgerButton=document.getElementById('burger-button-icon');
let sideBar=document.getElementsByClassName('sidebar');
sildeshow();

function showSideBarHandler(){
  
  
    sideBar[0].classList.add('active');
    

}

function closeSideBarHandler(){
    sideBar[0].classList.remove('active');
}


function nextSlide() {
   slideIndex+=1;
  }
function prevSlide(){
    slideIndex-=1;
}  

function sildeshow(params) {

    function nextSlide() {
        slideIndex+=1;
       }
     function prevSlide(){
         slideIndex-=1;
     }  
    const slides=document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slideIndex++;
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    if(slideIndex>slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display="flex";
    dots[slideIndex-1].className += " active";
    setTimeout(sildeshow,5000);


}
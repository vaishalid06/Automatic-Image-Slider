let slides = document.getElementsByClassName("slides");
let navlinks = document.getElementsByClassName("dot");
let currentSlide = 0; //stores the changes slide

document.getElementById("next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  console.log("c",currentSlide);
  //slide=5, slides-index=0,1,2,3,4
  if (moveTo >= slides.length) {
    //[NEXT] if we go further(after 5..6,7) then moveto 0 index slide which is slide1(0)
    moveTo = 0; //slide1(index 0)
  }

  if (moveTo < 0) {
    //[PREV] if we go back(before 1..-1,-2) then moveto slides.length-1(5-1=4) index slide which is slide5(4)
    moveTo = slides.length - 1; //slide5(index 4)
  }

  //toggle=like on/off switch
  
  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("activeDot");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("activeDot");
  currentSlide = moveTo; 
}

// if user click on prev or next dot to change Slide then user clicked cetain index display that index slide
// bullet=all each dots(5) , bulletIndex=index of dots(0,1,2,3,4)
document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    //bullet=each dot,user clickrd on bullet then if that bullet(bulletIndex) not equal to that Currentslide then changeSlide & display user bulletIndex slide
    if (currentSlide !== bulletIndex) {
      //if 4th slide is displaying, if user click on (prev) 2nd dot then changeSlide & display 2nd slide
      changeSlide(bulletIndex);
    }
  });
});

//for automatic image slider
window.onload = setInterval(function () {
  changeSlide(currentSlide + 1); //for next next slide
}, 3000); //for every 0.3 second slide will change


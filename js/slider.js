const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
let dot = document.querySelector('.dots').children;
    
function nextSlide() {
  if (index == slides.length-1) {
      index = 0;
    } else {
      index++;
    }
  changeSlide();
}

function prevSlide() {
  if (index == 0) {
      index = slides.length-1;
    } else {
      index--;
    }
  changeSlide();
}

function changeSlide() {
  for (let index = 0; index < slides.length; index++) {
    slides[index].classList.remove('active');
    dot[index].classList.remove('active');
  }
  slides[index].classList.add('active');
  dot[index].classList.add('active');
}

next.addEventListener('click', function () {
  nextSlide();
  resetTimer();
});

prev.addEventListener('click', function () {
  prevSlide();
  resetTimer();
});

// SLIDE CHANGER BY DOTS START
function dotChanger() {
  
  let dotone = document.getElementById('dotone');
  let dottwo = document.getElementById('dottwo');
  let dotthree = document.getElementById('dotthree');
  
  dotone.addEventListener('click', function() { 
    stop();
    
    for (let index = 0; index < slides.length; index++) {
    slides[index].classList.remove('active');
    dot[index].classList.remove('active');
  }
    slides[0].classList.add('active');
    dot[0].classList.add('active');
  });

dottwo.addEventListener('click', function() {
  stop();
  
    for (let index = 0; index < slides.length; index++) {
    slides[index].classList.remove('active');
    dot[index].classList.remove('active');
  }
    slides[1].classList.add('active');
    dot[1].classList.add('active');
  });

dotthree.addEventListener('click', function() { 
  stop();
  
    for (let index = 0; index < slides.length; index++) {
    slides[index].classList.remove('active');
    dot[index].classList.remove('active');
  }
    slides[2].classList.add('active');
    dot[2].classList.add('active');
  });
}

dotChanger();
// END OF SLIDE CHANGER BY DOT CLICK

// AUTOPLAY

let timer = setInterval(autoPlay, 4000);

function resetTimer() {
  clearInterval(timer);
  
  timer = setInterval(autoPlay, 4000);
}

function autoPlay () {
  var auto = true;
  if(auto == true) {
  nextSlide(); 
  }
}

function stop () {
  clearInterval(timer);
  }

// MOBILE!

const touchplace = document.getElementById('touch');
let position = 0;
let slide = 0;

touchplace.addEventListener("touchstart", function() {
	position = event.touches[0].clientX;
}, false);

touchplace.addEventListener("touchend", function() {
	slide = event.changedTouches[0].clientX - position;

  if (slide < 0) {
  	nextSlide();
    resetTimer();
  } else if (slide > 0) {
    prevSlide();
    resetTimer();
  } else {
  	console.log('only one touch');
  }
}, false);  
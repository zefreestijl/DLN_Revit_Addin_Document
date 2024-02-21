var swiper = null;


window.onload = (function () {

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  

  var text_total1 = document.getElementsByClassName('swiper-slide').length;  


  swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    mousewheel: true,
    
    direction: "vertical",    
    slidesPerView: "auto",
    
    autoHeight: true,
    
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,

    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar",
      progressbarOpposite: false,
    },

    zoom: {
      maxRatio: 1.1,
      minRatio: 0.3,
    },

    /*
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    */

    on: {
      autoplayTimeLeft(s, time, progress) {

        if (time <0) time = 0;

        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;

        text_steps1.innerText = this.realIndex+1 + " / " + text_total1;

        if (this.autoplay.paused)
        {    
          try
          { $("#control_pause1")[0].classList.remove("bx-pause-circle"); }
          finally{}
          try
          { $("#control_pause1")[0].classList.remove("bx-play-circle"); }
          finally{}
      
          $("#control_pause1")[0].classList.add("bx-play-circle");

        }
        else
        {    
          try
          { $("#control_pause1")[0].classList.remove("bx-pause-circle"); }
          finally{}
          try
          { $("#control_pause1")[0].classList.remove("bx-play-circle"); }
          finally{}
      
          $("#control_pause1")[0].classList.add("bx-pause-circle");

        }
        
      },

    }


  });

  document.swiper1 = swiper;

  // Custom Events - Button Zoom
  $("#control_plus1").on('click', function(){
    var scale1 = swiper.zoom.scale + .1;    
    swiper.zoom.in(scale1);

    swiper.autoplay.pause();
  });

  $("#control_minus1").on('click', function(){
    var scale1 = swiper.zoom.scale - .1;    
    swiper.zoom.in(scale1);

    swiper.autoplay.pause();
  });

  $("#control_all1").on('click', function(){
    swiper.zoom.in(1);
    
    swiper.autoplay.pause();
  });



  // Custom Events - Button Playback
  $("#control_up1").on('click', function(){
    swiper.slidePrev(0, true);
    swiper.autoplay.resume();
  });

  $("#control_down1").on('click', function(){
    swiper.slideNext(0, true);
    swiper.autoplay.resume();
  });


  $("#control_pause1").on('click', function(){
    func_togglePause();
  });





  // Custom Events - Swiper
  swiper.on('click', function () {
    //console.log(swiper);
    func_togglePause();
    

  });

  swiper.on('slideChange', function() {
    
    swiper.zoom.zoomedSlideClass = 'swiper-slide-zoomed';
    swiper.zoom.in(1);
    isPaused1 = false;
    
  });

}); 


  
function func_togglePause()
{

  // 1. Switch States & Icon
  if (swiper.autoplay.paused) 
  {
    swiper.autoplay.resume();

  }
  else  
  {
    swiper.autoplay.pause();

  }
}



var startX1 = null; var endX1 = null;

document.addEventListener("touchstart", function(e){ startX1 = e.touches[0].clientX; } )
document.addEventListener("touchend", function(e){ func_slideCheck(e) } )

function func_slideCheck(e)
{
  var left0b = this.top.document.getElementsByClassName('left0b')[0];

  endX1 = e.changedTouches[0].clientX;
  if (endX1 - startX1 > 30)
  {
    if (window.getComputedStyle(left0b).width == "0px")
    {
        left0b.style.width = "22rem";
        left0b.style.opacity = 1;
        
    }
        
  }
    
}

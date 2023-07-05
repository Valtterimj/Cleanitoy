const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// title scrolling animation 

const mainContent = document.querySelector('.main__content');
const mainContentText = document.querySelector('.main__content__text');
const aboutSection = document.querySelector('.about');

const mainContentRect = mainContent.getBoundingClientRect();
const mainContentTextRect = mainContentText.getBoundingClientRect();
const aboutSectionRect = aboutSection.getBoundingClientRect();


const lockInPoint = aboutSectionRect.top - mainContentTextRect.bottom;


window.addEventListener('scroll', function() {

    const text = document.querySelector(".main__content__text");
    const show = document.querySelector(".showcase")

    const textRect = text.getBoundingClientRect();
    const showRect = show.getBoundingClientRect();

    if (textRect.bottom < showRect.bottom || lockInPoint > this.window.pageYOffset){
        const txt = document.querySelector('.main__content');
        let position = window.pageYOffset;
        txt.style.transform = 'translateY(' + (position) * .6 + 'px)';
        if (textRect.bottom <= showRect.bottom) {
            text.style.opacity = '0.5';
        }
        if (lockInPoint > this.window.pageYOffset) {
            text.style.opacity = '1';
        }
    }
    


});






//about us read more
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Enemmän"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Vähemmän"; 
      moreText.style.display = "inline";
    }
}

function readMoreUs() {
    var dots = document.getElementById("us-dots");
    var moreText = document.getElementById("us-more");
    var btnText = document.getElementById("usBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Enemmän"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Vähemmän"; 
      moreText.style.display = "inline";
    }
}

//about us text fade animation
window.addEventListener("scroll", function(){
    const aboutElements = document.querySelectorAll(".about__text");
    aboutElements.forEach(e => {
        const position = e.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (position.top < windowHeight * 0.7) {
            e.style.opacity = "1";
        } else {
            e.style.opacity = "0.2";
        }
    })
    

    // Palvelu description fade animation
    const elements = this.document.querySelectorAll(".description");
    elements.forEach(e => {
        const position = e.getBoundingClientRect();
        const windowHeight = this.window.innerHeight;
        if (position.top < windowHeight * 0.7) {
            e.style.opacity = "1";
        } else {
          e.style.opacity = "0.2";
        }
    })

    // Service text scroll animation
    const parallaxPic = document.querySelector('.column__left');
    let scrollPosition = window.pageYOffset;

    parallaxPic.style.transform = 'translateY(' + (-scrollPosition + 1000) * .4 + 'px)';


   
});

 //Service image-track parallax animation 
        const imgTrackPos = document.querySelector('.image-track');
        const imgTrackSpic = document.querySelectorAll('.sPic');
        imgTrackPos.addEventListener("scroll", event => {
            let maxWidth =   imgTrackPos.scrollWidth - window.innerWidth
            let nextPercent = 100 - imgTrackPos.scrollLeft / maxWidth * 100 
            imgTrackSpic.forEach(i => {
                i.animate({
                    objectPosition: `${nextPercent}% center`
                }, {duration: 1200, fill: "forwards"});
            }, {passive: true});
        
        });
    
        document.addEventListener('DOMContentLoaded', function() {
            var images = document.querySelectorAll('.image-track img');
            
            for (var i = 0; i < images.length; i++) {
              images[i].addEventListener('contextmenu', function(e) {
                e.preventDefault(); // Prevents the default right-click menu
              });
            }
          });
          

       



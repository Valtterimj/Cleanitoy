const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//animation for title to stick to screen until the next section comes enough to the screen.
const firstSection = document.querySelector('.showcase')
const mainContent = document.querySelector('.main__content');

const titleObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            mainContent.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
        threshold: 0.90,
    }
)

titleObserver.observe(firstSection);


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
        if (position.top > windowHeight * 0.8) {
            e.style.opacity = "0.2";
        } else if (position.top <= windowHeight * 0.15) {
             e.style.opacity = "0.5";
        } else {
            e.style.opacity = "1";
        }
    })

    // Service text scroll animation
    const parallaxPic = document.querySelector('.column__left');
    let scrollPosition = window.pageYOffset;

    console.log(scrollPosition)

    parallaxPic.style.transform = 'translateY(' + (-scrollPosition + 1000) * .5 + 'px)';


   
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

       



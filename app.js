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

//about us text fade animation
window.addEventListener("scroll", function(){
    const element = document.querySelector(".about__text");
    const position = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (position.top < windowHeight * 0.7) {
        element.style.opacity = "1";
    } else {
        element.style.opacity = "0.2";
    }
});

window.addEventListener("scroll", function(){
    const elements = this.document.querySelectorAll(".description");
    elements.forEach(e => {
        const position = e.getBoundingClientRect();
        const windowHeight = this.window.innerHeight;
        if (position.top < windowHeight * 0.8) {
            e.style.opacity = "1";
        } else {
            e.style.opacity = "0.2";
        }
    })
});


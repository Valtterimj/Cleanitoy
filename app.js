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

    parallaxPic.style.transform = 'translateY(' + (-scrollPosition + 1000) * .3 + 'px)';


   
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

//contact form dropZone
        document.querySelectorAll(".drop__zone__input").forEach(inputElement => {
            const dropZoneElement = inputElement.closest(".drop__zone__image");



            dropZoneElement.addEventListener("click", e => {
                inputElement.click();
            })
        
            inputElement.addEventListener("change", e => {
                if (inputElement.files.lenght){
                    updateThumbnail(dropZoneElement, inputElement.files[0]);
                }
            });

            
            dropZoneElement.addEventListener("dragover", e => {
                e.preventDefault();
                dropZoneElement.classList.add("drop__zone__image--over");
            });

            ["dragleave", "dragend"].forEach(type => {
                dropZoneElement.addEventListener(type, e => {
                    dropZoneElement.classList.remove("drop__zone__image--over");
                });               
            });

            dropZoneElement.addEventListener("drop", e => {
                e.preventDefault();

                if (e.dataTransfer.files.lenght) {
                    inputElement.files = e.dataTransfer.files;
                    updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
                }

                dropZoneElement.classList.remove("drop__zone__image--over");
            });
        
        });



            

            
        /**
         * Updates the thumbnail on a drop zone element
         * 
         *  @param {HTMLElement} dropZoneElement
         *  @param {File} file
         * 
         */
            


        function updateThumbnail(dropZoneElement, file) {
            let thumbnailElement = dropZoneElement.querySelector(".drop__zone__image__thumb");

            //First time - remove the prompt
            if (dropZoneElement.querySelector(".drop__zone__prompt")) {
                dropZoneElement.querySelector(".drop__zone__prompt").remove();
            }

            //First time - there is no thumbnail element, so lets create it
            if (!thumbnailElement) {
                thumbnailElement = document.createElement("div");
                thumbnailElement.classList.add("drop__zone__image__thumb");
                dropZoneElement.appendChild(thumbnailElement);
            }

            thumbnailElement.dataset.label = file.name;

            //show thumbnail for image files
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = () => {
                    thumbnailElement.style.backgroundImage = `url('${ reader.result } ')`;
                };

            } else {
                thumbnailElement.style.backgroundImage = null;
            }
        }


       



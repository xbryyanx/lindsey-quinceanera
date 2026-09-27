document.addEventListener("DOMContentLoaded", () => {


/* ==========================================
   LOADING SCREEN
========================================== */


const loader = document.getElementById("loader");


window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);


    },1500);

});


/* ========================================== MUSIC ========================================== */ 
const music = document.getElementById("music"); const musicButton = document.createElement("div"); musicButton.className = "music-control"; musicButton.innerHTML = "🎵"; document.body.appendChild(musicButton); let playing = false;





/* ========================================== OPEN INVITATION BUTTON ========================================== */ 
const openButton = document.getElementById("openBtn"); const welcome = document.getElementById("welcome"); if (openButton && welcome) { openButton.addEventListener("click", () => { 
  
  
  
   /* ------------------------------------------ START MUSIC ------------------------------------------ */
    if (music) { music.volume = 0.7; const playPromise = music.play(); if (playPromise !== undefined) { playPromise .then(() => { playing = true; musicButton.innerHTML = "⏸️"; }) .catch((error) => { console.log( "Music could not start:", error ); }); } }
    
    
    
    
    /* ------------------------------------------ OPEN INVITATION ------------------------------------------ */ 
     welcome.style.transition = "1.5s ease"; welcome.style.transform = "translateY(-100vh)"; 
   
   
   
     /* ------------------------------------------ START VISUAL EFFECTS ------------------------------------------ */ 
     createPetals(); 
     createSparkles();
   const message = document.createElement("div");

message.className = "welcome-message";

message.innerHTML = `
    <h2>
    A beautiful journey to fifteen begins here… ✨


    Scroll down to discover Lindsey's special day.
    </h2>
  
`;

document.body.appendChild(message);
setTimeout(() => {
    message.style.opacity = "0";

    setTimeout(() => {
        message.remove();
    }, 1000);

}, 6000);

   
   
   }); }


      /* ========================================== MUSIC PLAY / PAUSE BUTTON ========================================== */ 
      musicButton.addEventListener("click", () => { if (!music) { return; } if (music.paused) { const playPromise = music.play(); if (playPromise !== undefined) { playPromise .then(() => { playing = true; musicButton.innerHTML = "⏸️"; }) .catch((error) => { console.log( "Music could not start:", error ); }); } } else { music.pause(); musicButton.innerHTML = "🎵"; playing = false; } }); 
      /* ========================================== COUNTDOWN TIMER NOVEMBER 7, 2026 - 2:00 PM ========================================== */ 
      const eventDate = new Date("November 7, 2026 14:00:00").getTime(); function updateCountdown() { const now = new Date().getTime(); const distance = eventDate - now; if (distance <= 0) { const days = document.getElementById("days"); const hours = document.getElementById("hours"); const minutes = document.getElementById("minutes"); const seconds = document.getElementById("seconds"); if (days) days.innerHTML = "0"; if (hours) hours.innerHTML = "0"; if (minutes) minutes.innerHTML = "0"; if (seconds) seconds.innerHTML = "0"; return; } const days = Math.floor( distance / (1000 * 60 * 60 * 24) ); const hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ); 
      const minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) ); const seconds = Math.floor( (distance % (1000 * 60)) / 1000 ); 
      const daysElement = document.getElementById("days"); const hoursElement = document.getElementById("hours"); const minutesElement = document.getElementById("minutes"); const secondsElement = document.getElementById("seconds"); if (daysElement) daysElement.innerHTML = days; if (hoursElement) hoursElement.innerHTML = hours; if (minutesElement) minutesElement.innerHTML = minutes; if (secondsElement) secondsElement.innerHTML = seconds; } setInterval( updateCountdown, 1000 ); updateCountdown(); 
      /* ========================================== CREATE ROSE PETALS ========================================== */ 
      function createPetals() { setInterval(() => { const petal = document.createElement("div"); petal.className = "petal"; petal.innerHTML = "🌸"; petal.style.left = Math.random() * 100 + "vw"; petal.style.animationDuration = (5 + Math.random() * 5) + "s"; document.body.appendChild( petal ); setTimeout(() => { petal.remove(); }, 10000); }, 500); } 
      /* ========================================== CREATE SPARKLES ========================================== */
       function createSparkles() { setInterval(() => { const sparkle = document.createElement("div"); sparkle.className = "sparkle"; sparkle.style.left = Math.random() * 100 + "vw"; sparkle.style.top = Math.random() * 100 + "vh"; document.body.appendChild( sparkle ); setTimeout(() => { sparkle.remove(); }, 2000); }, 300); }
        
       
/* ==========================================
   PREMIUM PHOTO GALLERY CAROUSEL
========================================== */

const gallerySlides =
    document.querySelectorAll(".gallery-slide");

const prevButton =
    document.querySelector(".gallery-prev");

const nextButton =
    document.querySelector(".gallery-next");

const galleryDots =
    document.querySelector(".gallery-dots");

let currentSlide = 0;

let galleryTimer;

let touchStartX = 0;
let touchEndX = 0;


/* ==========================================
   CREATE PHOTO DOTS
========================================== */

if (gallerySlides.length > 0 && galleryDots) {

    gallerySlides.forEach((slide, index) => {

        const dot =
            document.createElement("button");

        dot.className = "gallery-dot";

        dot.setAttribute(
            "aria-label",
            `View photo ${index + 1}`
        );

        dot.addEventListener("click", () => {

            showSlide(index);

            restartGalleryTimer();

        });

        galleryDots.appendChild(dot);

    });

}


/* ==========================================
   SHOW PHOTO
========================================== */

function showSlide(index) {

    if (gallerySlides.length === 0) {
        return;
    }


    if (index >= gallerySlides.length) {

        currentSlide = 0;

    }

    else if (index < 0) {

        currentSlide =
            gallerySlides.length - 1;

    }

    else {

        currentSlide = index;

    }


    gallerySlides.forEach(slide => {

        slide.classList.remove("active");

    });


    const dots =
        document.querySelectorAll(".gallery-dot");


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    gallerySlides[currentSlide]
        .classList.add("active");


    if (dots[currentSlide]) {

        dots[currentSlide]
            .classList.add("active");

    }

}


/* ==========================================
   NEXT PHOTO
========================================== */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* ==========================================
   PREVIOUS PHOTO
========================================== */

function previousSlide() {

    showSlide(currentSlide - 1);

}


/* ==========================================
   ARROW BUTTONS
========================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            nextSlide();

            restartGalleryTimer();

        }
    );

}


if (prevButton) {

    prevButton.addEventListener(
        "click",
        () => {

            previousSlide();

            restartGalleryTimer();

        }
    );

}


/* ==========================================
   AUTOMATIC SLIDESHOW
========================================== */

function startGalleryTimer() {

    galleryTimer =
        setInterval(() => {

            nextSlide();

        }, 5000);

}


function stopGalleryTimer() {

    clearInterval(galleryTimer);

}


function restartGalleryTimer() {

    stopGalleryTimer();

    startGalleryTimer();

}


/* ==========================================
   PAUSE WHEN MOUSE IS OVER GALLERY
========================================== */

const gallery =
    document.querySelector(".gallery-carousel");


if (gallery) {

    gallery.addEventListener(
        "mouseenter",
        stopGalleryTimer
    );


    gallery.addEventListener(
        "mouseleave",
        startGalleryTimer
    );

}


/* ==========================================
   MOBILE SWIPE
========================================== */

if (gallery) {

    gallery.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

            stopGalleryTimer();

        },
        { passive: true }
    );


    gallery.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleGallerySwipe();

            startGalleryTimer();

        },
        { passive: true }
    );

}


function handleGallerySwipe() {

    const swipeDistance =
        touchEndX - touchStartX;


    /* Swipe left = next */

    if (swipeDistance < -50) {

        nextSlide();

    }


    /* Swipe right = previous */

    if (swipeDistance > 50) {

        previousSlide();

    }

}


/* ==========================================
   START GALLERY
========================================== */

if (gallerySlides.length > 0) {

    showSlide(0);

    startGalleryTimer();

}
       
       /* ========================================== IMAGE LIGHTBOX ========================================== */ 
        const images = document.querySelectorAll( ".gallery img" ); images.forEach(image => { image.addEventListener( "click", () => { const box = document.createElement("div"); box.className = "lightbox"; box.innerHTML = ` <img src="${image.src}"> `; document.body.appendChild( box ); box.addEventListener( "click", () => { box.remove(); } ); } ); });
         /* ========================================== SCROLL REVEAL ========================================== */ 
         const revealElements = document.querySelectorAll( "section" ); function reveal() { revealElements.forEach(section => { const position = section .getBoundingClientRect() .top; const screen = window.innerHeight - 120; if (position < screen) { section.classList.add( "reveal" ); setTimeout(() => { section.classList.add( "active" ); }, 100); } }); } window.addEventListener( "scroll", reveal ); reveal(); 
         /* ========================================== CONFETTI FUNCTION ========================================== */ 
         window.createConfetti = function () { for ( let i = 0; i < 80; i++ ) { const piece = document.createElement("div"); piece.className = "confetti"; piece.style.left = Math.random() * 100 + "vw"; piece.style.background = [ "#d4af37", "#f8d7e8", "#ffffff", "#e8a6b8" ][ Math.floor( Math.random() * 4 ) ]; piece.style.animationDuration = (2 + Math.random() * 3) + "s"; document.body.appendChild( piece ); setTimeout(() => { piece.remove(); }, 5000); } }; });
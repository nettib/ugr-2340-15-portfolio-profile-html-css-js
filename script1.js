//slider 1

const slides = document.querySelectorAll(".swiperWrapper figure");

let slideIndex = 0;
// let intervalId = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        slides[slideIndex].classList.add("bounceInDown");
        // intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0
    }

    else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
        slide.classList.remove("fadeInLeft");
        slide.classList.remove("fadeInRight");
        slides[slideIndex].classList.add("bounceInDown");
    })

    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide() {
    // clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    slides[slideIndex].classList.add("fadeInLeft");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    slides[slideIndex].classList.add("fadeInRight");
}





//slider 2

const slides2 = document.querySelectorAll(".photoWrapper figure");

let slideIndex2 = 0;
// let intervalId = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2() {
    if (slides2.length > 0) {
        slides2[slideIndex2].classList.add("displaySlide2");
        slides2[slideIndex2].classList.add("bounceInDown");
        // intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide2(index) {
    if (index >= slides2.length) {
        slideIndex2 = 0
    }

    else if(index < 0) {
        slideIndex2 = slides2.length - 1;
    }

    slides2.forEach(slide => {
        slide.classList.remove("displaySlide2");
        slide.classList.remove("fadeInLeft");
        slide.classList.remove("fadeInRight");
        slides2[slideIndex2].classList.add("bounceInDown");
    })

    slides2[slideIndex2].classList.add("displaySlide2")
}

function prevSlide2() {
    // clearInterval(intervalId);
    slideIndex2--;
    showSlide2(slideIndex2);
    slides2[slideIndex2].classList.add("fadeInLeft");
}

function nextSlide2() {
    slideIndex2++;
    showSlide2(slideIndex2);
    slides2[slideIndex2].classList.add("fadeInRight");
}



//slider 3

const slides3 = document.querySelectorAll(".quotesWrapper blockquote");

let slideIndex3 = 0;
// let intervalId = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider3);

function initializeSlider3() {
    if (slides3.length > 0) {
        slides3[slideIndex3].classList.add("displaySlide3");
        slides3[slideIndex3].classList.add("bounceInDown");
        // intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide3(index) {
    if (index >= slides3.length) {
        slideIndex3 = 0
    }

    else if(index < 0) {
        slideIndex3 = slides3.length - 1;
    }

    slides3.forEach(slide => {
        slide.classList.remove("displaySlide3");
        slide.classList.remove("fadeInLeft");
        slide.classList.remove("fadeInRight");
        slides3[slideIndex3].classList.add("bounceInDown");
    })

    slides3[slideIndex3].classList.add("displaySlide3")
}

function prevSlide3() {
    // clearInterval(intervalId);
    slideIndex3--;
    showSlide3(slideIndex3);
    slides3[slideIndex3].classList.add("fadeInLeft");
}

function nextSlide3() {
    slideIndex3++;
    showSlide3(slideIndex3);
    slides3[slideIndex3].classList.add("fadeInRight");
}


// let movies = document.querySelector(".movies");
// let photos = document.querySelector(".photos");
// const footer = document.querySelector("footer"); // Select the footer

// function favourites() {
//   if (window.matchMedia("(min-width: 1024px)").matches) {
//     // Check if .favour already exists to avoid duplication
//     if (!document.querySelector(".favour")) {
//       const favour = document.createElement("div");
//       favour.className = "favour";

//       // Append the existing articles to the favour div
//       favour.appendChild(movies);
//       favour.appendChild(photos);

//       // Insert the favour div before the footer
//       footer.parentNode.insertBefore(favour, footer);
//     }
//   } else {
//     // Remove .favour and restore movies and photos before the footer
//     const favour = document.querySelector(".favour");
//     if (favour) {
//       // Remove the favour container
//       favour.remove();

//       // Insert movies and photos directly before the footer
//       footer.parentNode.insertBefore(movies, footer);
//       footer.parentNode.insertBefore(photos, footer);
//     }
//   }
// }

// // Attach the function to the window resize event
// window.addEventListener("resize", favourites);

// // Call it initially to handle the current screen size
// favourites();






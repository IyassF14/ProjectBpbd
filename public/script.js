function toggleprofileDropdown() {
    let prfDropdown = document.querySelector('#profileDropdown');
    prfDropdown.classList.toggle("is-visible");
}

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('#profileDropdown');
    const toggleButton = document.querySelector('#profileDropdownBtn');
    if (!toggleButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("is-visible");
    }
});

function toggleppidDropdown() {
    let pidDropdown = document.querySelector('#ppidDropdown');
    pidDropdown.classList.toggle("is-visible");
}

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('#ppidDropdown');
    const toggleButton = document.querySelector('#ppidDropdownBtn');
    if (!toggleButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("is-visible");
    }
});

function toggleinfoDropdown() {
    let infDropdown = document.querySelector('#infoDropdown');
    infDropdown.classList.toggle("is-visible");
}

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('#infoDropdown');
    const toggleButton = document.querySelector('#infoDropdownBtn');
    if (!toggleButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("is-visible");
    }
});

function toggleservcDropdown() {
    let svcDropdown = document.querySelector('#servcDropdown');
    svcDropdown.classList.toggle("is-visible");
}

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('#servcDropdown');
    const toggleButton = document.querySelector('#servcDropdownBtn');
    if (!toggleButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("is-visible");
    }
});

function togglegalDropdown() {
    let glrDropdown = document.querySelector('#galDropdown');
    glrDropdown.classList.toggle("is-visible");
}

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('#galDropdown');
    const toggleButton = document.querySelector('#galDropdownBtn');
    if (!toggleButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("is-visible");
    }
});


let slideIndex = 0; // Start from the first slide
let autoAdvance = true; // Flag to control automatic advancement
let slideInterval; // Variable to hold the setInterval reference
showSlides(); // Show the first slide

function plusSlides(n) {
    autoAdvance = false; // Stop automatic advancement when manually navigating
    showSlides(slideIndex += n); // Change slide index by n
    resetAutoAdvance(); // Reset auto advance after manual navigation
}

function currentSlide(n) {
    autoAdvance = false; // Stop automatic advancement when manually navigating
    showSlides(slideIndex = n); // Set slide index to n
    resetAutoAdvance(); // Reset auto advance after manual navigation
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Reset slideIndex if it goes out of bounds
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    // Automatically change slide every 2 seconds if autoAdvance is true
    if (autoAdvance) {
        slideInterval = setTimeout(() => {
            slideIndex++;
            if (slideIndex >= slides.length) { slideIndex = 0; }
            showSlides(slideIndex);
        }, 10000); // Change image every 2 seconds
    }
}

function resetAutoAdvance() {
    // Clear the existing timeout if any
    clearTimeout(slideInterval);
    // Set autoAdvance to true after a short delay
    setTimeout(() => {
        autoAdvance = true;
        showSlides(slideIndex); // Call showSlides to continue the automatic slideshow
    }, 2000); // Resume auto advance after 2 seconds
}


const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
};

scrollToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

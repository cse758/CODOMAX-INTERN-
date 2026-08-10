

const learnMoreBtn = document.getElementById("learnMoreBtn");
const learnMoreText = document.getElementById("learnMoreText");

const scrollTopBtn = document.getElementById("scrollTopBtn");


// =========================================
// LEARN MORE BUTTON EVENT
// =========================================

learnMoreBtn.addEventListener("click", function () {

    // Show / hide additional content
    learnMoreText.classList.toggle("hidden");


    // Change button text
    if (learnMoreText.classList.contains("hidden")) {

        learnMoreBtn.textContent = "Learn More";

    } else {

        learnMoreBtn.textContent = "Show Less";

    }

});


window.addEventListener("scroll", function () {

    // Show scroll button after scrolling 300px

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});




scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


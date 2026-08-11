const learnMoreBtn = document.getElementById("learnMoreBtn");
const learnMoreText = document.getElementById("learnMoreText");
const scrollTopBtn = document.getElementById("scrollTopBtn");

learnMoreBtn.addEventListener("click", function () {

    learnMoreText.classList.toggle("hidden");

    if (learnMoreText.classList.contains("hidden")) {
        learnMoreBtn.textContent = "Learn More";
    } else {
        learnMoreBtn.textContent = "Show Less";
    }

});

window.addEventListener("scroll", function () {

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
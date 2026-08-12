const learnMoreBtn = document.getElementById("learnMoreBtn");
const learnMoreText = document.getElementById("learnMoreText");
const scrollTopBtn = document.getElementById("scrollTopBtn");

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

learnMoreBtn.addEventListener("click", function () {

    learnMoreText.classList.toggle("hidden");

    if (learnMoreText.classList.contains("hidden")) {
        learnMoreBtn.textContent = "Learn More";
    } else {
        learnMoreBtn.textContent = "Show Less";
    }

});

function setError(input, errorElement, message) {
    input.classList.add("error");
    input.classList.remove("success");
    errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
    input.classList.remove("error");
    input.classList.add("success");
    errorElement.textContent = "";
}

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {
        setError(nameInput, nameError, "Please enter your name.");
        return false;
    }

    if (name.length < 3) {
        setError(nameInput, nameError, "Name must contain at least 3 characters.");
        return false;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        setError(nameInput, nameError, "Please enter a valid name.");
        return false;
    }

    setSuccess(nameInput, nameError);
    return true;
}

function validateEmail() {

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        setError(emailInput, emailError, "Please enter your email.");
        return false;
    }

    if (!emailPattern.test(email)) {
        setError(emailInput, emailError, "Please enter a valid email address.");
        return false;
    }

    setSuccess(emailInput, emailError);
    return true;
}

function validatePhone() {

    const phone = phoneInput.value.trim();

    if (phone === "") {
        setSuccess(phoneInput, phoneError);
        return true;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        setError(phoneInput, phoneError, "Phone number must contain 10 digits.");
        return false;
    }

    setSuccess(phoneInput, phoneError);
    return true;
}

function validateSubject() {

    const subject = subjectInput.value.trim();

    if (subject === "") {
        setError(subjectInput, subjectError, "Please enter a subject.");
        return false;
    }

    if (subject.length < 3) {
        setError(subjectInput, subjectError, "Subject must contain at least 3 characters.");
        return false;
    }

    setSuccess(subjectInput, subjectError);
    return true;
}

function validateMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        setError(messageInput, messageError, "Please enter your message.");
        return false;
    }

    if (message.length < 10) {
        setError(messageInput, messageError, "Message must contain at least 10 characters.");
        return false;
    }

    setSuccess(messageInput, messageError);
    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
subjectInput.addEventListener("input", validateSubject);
messageInput.addEventListener("input", validateMessage);

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const subjectValid = validateSubject();
    const messageValid = validateMessage();

    if (
        nameValid &&
        emailValid &&
        phoneValid &&
        subjectValid &&
        messageValid
    ) {

        successMessage.style.display = "block";
        successMessage.textContent = "Message sent successfully! Thank you for contacting me.";

        contactForm.reset();

        nameInput.classList.remove("success");
        emailInput.classList.remove("success");
        phoneInput.classList.remove("success");
        subjectInput.classList.remove("success");
        messageInput.classList.remove("success");

        setTimeout(function () {
            successMessage.style.display = "none";
        }, 5000);

    } else {

        successMessage.style.display = "none";

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
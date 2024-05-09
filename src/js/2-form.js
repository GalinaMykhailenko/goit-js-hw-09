const formData = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[type="email"]');
const textarea = form.querySelector("textarea");

form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("input", handleInput);
textarea.addEventListener("input", handleInput);
populateTextarea();

function handleSubmit(event) {
    event.preventDefault();

    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (!emailValue || !messageValue) {
        alert("Fill please all fields");
        return;
    }

    const formDataObject = {
        email: emailValue,
        message: messageValue
    };

    console.log(formDataObject);
    event.target.reset();
    localStorage.setItem(formData, JSON.stringify(formDataObject));
}


function handleInput() {
    const formDataObject = {
        email: emailInput.value.trim(),
        message: textarea.value.trim()
    };
    localStorage.setItem(formData, JSON.stringify(formDataObject));
}

function populateForm() {
    const savedFormData = localStorage.getItem(formData);

    if (savedFormData) {
        const { email, message } = JSON.parse(savedFormData);
        emailInput.value = email;
        textarea.value = message;
    }
}


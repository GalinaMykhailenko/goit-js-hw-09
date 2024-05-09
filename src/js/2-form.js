const formData = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[type="email"]');
const textarea = form.querySelector("textarea");

form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("input", handleInput);
textarea.addEventListener("input", handleInput);

function handleSubmit(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const messageValue = textarea.value.trim();

    if (!emailValue || !messageValue) {
        alert("Please fill in all fields");
        return;
    }

    const formDataObject = {
        email: emailValue,
        message: messageValue
    };

    console.log(formDataObject);
    event.target.reset();
    localStorage.setItem(formData, JSON.stringify(formDataObject));

    localStorage.removeItem(formData);
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


populateForm();
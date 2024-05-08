const formData = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", handleSubmit);
textarea.addEventListener("input", handleInput);
populateTextarea();

function handleSubmit(event) {
    event.preventDefault();

    const { email, message } = event.target.elements;
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (!emailValue || !messageValue) {
        alert("Fill please all fields");
        return;
    }

    console.log({
        email: emailValue,
        message: messageValue
    });
    event.target.reset();
    localStorage.removeItem(formData);
}


function handleInput(event) {
    const messageInput = event.target.value;
    localStorage.setItem(formData, messageInput);
}

function populateTextarea() {
    const saveMessage = localStorage.getItem(formData);

    if (saveMessage) {
        textarea.value = saveMessage;
    }
}
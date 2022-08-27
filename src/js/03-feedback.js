import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const inputEl = document.querySelector('input');

const textareaEl = document.querySelector('textarea');

let feedbackFormState = {
  email: inputEl.value,
  message: textareaEl.value,
};

formEl.addEventListener('input', throttle(onForm, 500));

function onForm(event) {
  try {
    const emailValue = event.currentTarget.elements.email.value;
    const messageValue = event.currentTarget.elements.message.value;

    feedbackFormState.email = emailValue;
    feedbackFormState.message = messageValue;

    const feedbackFormStateStr = JSON.stringify(feedbackFormState);
    localStorage.setItem('feedback-form-state', feedbackFormStateStr);
  } catch (error) {
    // console.error(error.message);
  }
}

window.onload = function (e) {
  // console.log('веб-сторінку завантажено');
  try {
    if (localStorage.getItem('feedback-form-state')) {
      const inputElValueObj = localStorage.getItem('feedback-form-state');

      feedbackFormState = JSON.parse(inputElValueObj);

      inputEl.value = feedbackFormState.email;
      textareaEl.value = feedbackFormState.message;
    } else inputEl.value = feedbackFormState.email;
    textareaEl.value = feedbackFormState.message;
  } catch (error) {
    console.log(error.message);
  }
};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.log(feedbackFormState);
  if (localStorage.getItem('feedback-form-state')) {
    console.log(feedbackFormState);
    localStorage.removeItem('feedback-form-state');
  }
  inputEl.value = '';
  textareaEl.value = '';
}

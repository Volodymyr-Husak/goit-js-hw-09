function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`)
  }
}
// const btnSubmitEl = document.querySelector("button[type='submit']");
const form = document.querySelector('.form');
// console.log(btnSubmitEl);
// formEl.addEventListener('submit', onFormSubmit);
form.addEventListener('submit', onSubmit);
// console.log('Hi');
function onSubmit(event) {
  // preventDefault();
  event.preventDefault();
  // console.log('Hi');
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  // event.target;
  console.log(delay.value);
}

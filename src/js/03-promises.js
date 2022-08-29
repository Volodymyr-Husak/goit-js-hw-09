import Notiflix from 'notiflix';

let positionProm = 0;
let delayValue = 0;
let stepValue = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  positionProm = 0;

  delayValue = Number(delay.value);
  stepValue = Number(step.value);
  setInterval(() => {
    positionProm += 1;
    if (positionProm > amount.value) {
      return;
    }

    createPromise(positionProm, delayValue)
      .then(resolve => {
        Notiflix.Notify.success(resolve);
      })
      .catch(reject => {
        Notiflix.Notify.failure(reject);
      });

    delayValue += stepValue;
  }, stepValue);
}

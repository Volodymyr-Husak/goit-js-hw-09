// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// console.log(selectedDates[0]);
let dateSelected = 0;
let dateNow = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // const dateSelected = new Date(selectedDates[0]).getTime();
    dateSelected = new Date(selectedDates[0]).getTime();
    dateNow = new Date().getTime();

    if (dateSelected < dateNow) {
      window.alert('Please choose a date in the future');
    } else btnStartEl.disabled = false;
  },
};
// const date = new Date();
// console.log(date.getTime());
const btnStartEl = document.querySelector('button[data-start');
const inputEl = document.querySelector('input[type="text"]');
const valueElArr = document.querySelectorAll('.value');
// console.log(valueElArr);

const fp = flatpickr(inputEl, options); // flatpickr

btnStartEl.disabled = true;

btnStartEl.addEventListener('click', onClick);

function onClick() {
  //   dateNow = new Date().getTime();
  //   const dateDifference = dateSelected - dateNow;
  //   //   console.log(dateDifference);
  //   //   console.log(convertMs(dateDifference));
  //   const dateObj = convertMs(dateDifference);
  //   const { days, hours, minutes, seconds } = dateObj;
  //   valueElArr[0].textContent = days;
  //   valueElArr[1].textContent = hours;
  //   valueElArr[2].textContent = minutes;
  //   valueElArr[3].textContent = seconds;

  setInterval(() => {
    dateNow = new Date().getTime();
    const dateDifference = dateSelected - dateNow;
    if (dateSelected < dateNow) {
      return;
    }
    //   console.log(dateDifference);
    //   console.log(convertMs(dateDifference));
    const dateObj = convertMs(dateDifference);
    const { days, hours, minutes, seconds } = dateObj;
    valueElArr[0].textContent = days;
    valueElArr[1].textContent = hours;
    valueElArr[2].textContent = minutes;
    valueElArr[3].textContent = seconds;
  }, 1000);
}

function addLeadingZero(value) {
  //   return Number(String(value).padStart(2, '0'));
  return String(value).padStart(2, '0');
}
// console.log(addLeadingZero(2));

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// ==========================================================
const timerEl = document.querySelector('.timer');
// console.log(timerEl);
timerEl.style.display = 'flex';
timerEl.style.justifyContent = 'center';
const fieldsEl = document.querySelectorAll('.field');
// console.log(fieldsEl);
fieldsEl.forEach(field => {
  //   field.style.display = 'block';
  field.style.outline = 'solid';
  field.style.backgroundColor = 'tomato';
  field.style.margin = '20px';
  field.style.padding = '5px';
  field.style.borderRadius = '5px';
  field.style.fontWeight = 'bold';
});
// ==========================================================

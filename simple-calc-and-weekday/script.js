const result = document.querySelector('.result');
const btns = document.querySelectorAll('.btn');
const dayBtn = document.querySelector('.day-btn');
const dayInput = document.querySelector('.day-input');
const insertDayContainer = document.querySelector('.insert-day-container');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.textContent === '0') {
      result.textContent = 0;
    }
    const btnValue = e.target.textContent;
    const total = result.textContent;
    const newTotal = Number(total) + Number(btnValue);
    result.textContent = newTotal;
  });
});

dayBtn.addEventListener('click', e => {
  e.preventDefault();
  const day = dayInput.value.toLowerCase();
  const result = document.createElement('p');
  result.classList.add('result-day');

  insertDayContainer.querySelectorAll('p').forEach(p => {
    p.remove();
  });

  insertDayContainer.appendChild(result);

  if (day === '') {
    result.textContent = 'Please enter a day';
    result.classList.add('invalid');
  } else if (day === 'sunday') {
    result.textContent = 'Sunday is the best day';
  } else if (day === 'monday') {
    result.textContent = 'Monday is the worst day';
  } else if (day === 'tuesday') {
    result.textContent = 'Tuesday is the best day';
  } else if (day === 'wednesday') {
    result.textContent = 'Wednesday is the best day';
  } else if (day === 'thursday') {
    result.textContent = 'Thursday is the best day';
  } else if (day === 'friday') {
    result.textContent = 'Friday is the best day';
  } else if (day === 'saturday') {
    result.textContent = 'Saturday is the best day';
  } else {
    result.textContent = 'Please enter a valid day';
    result.classList.add('invalid');
  }

  dayInput.value = '';
});

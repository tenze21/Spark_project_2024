const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menu li');
const countryEl = document.querySelector('#country');
const flag = document.querySelector('.flag');

// Function to update flag based on country name
const updateFlag = (countryName) => {
  const option = Array.from(options).find(opt => opt.innerText.toLowerCase() === countryName.toLowerCase());
  if (option) {
    const countryCode = option.dataset.val;
    flag.src = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
  }
};

select.addEventListener('click', () => {
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
});

options.forEach(option => {
  option.addEventListener('click', () => {
    const countryCode = option.dataset.val;
    countryEl.value = option.innerText;
    flag.src = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');

    options.forEach(option => {
      option.classList.remove('active');
    });
    option.classList.add('active');
  });
});

document.addEventListener('click', (event) => {
  if (!select.contains(event.target)) {
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');
  }
});

// Event listener to detect changes in the country input field (including autofill)
countryEl.addEventListener('input', (event) => {
  updateFlag(event.target.value);
});

// Optionally, to handle cases where the input is autofilled and no 'input' event is triggered,
// we can use a MutationObserver to detect changes to the input's value attribute.
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
      updateFlag(countryEl.value);
    }
  });
});

// Start observing the input element for changes to its attributes
observer.observe(countryEl, { attributes: true });

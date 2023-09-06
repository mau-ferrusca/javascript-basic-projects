let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const classList = e.currentTarget.classList;
    // console.log(e);
    if (classList.contains('decrease')) {
      count--;
    }
    else if (classList.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = 'black';
    }

    value.textContent = count;
  })
})
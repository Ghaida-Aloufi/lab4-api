let buttons = document.querySelectorAll('button');
let input = document.querySelector('.input');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let width = button.getAttribute('data-width');
    let height = button.getAttribute('data-height');
    let url = input.value;

    window.open(url, '_blank', `width=${width},height=${height}`);
  });
});
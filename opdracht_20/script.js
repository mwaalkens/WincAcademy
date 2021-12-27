const button = document.querySelector('#mybutton');
button.addEventListener('click', function () { alert('button clicked') });

const button2 = document.querySelector('#mybutton2');
button2.addEventListener('click', function toggleColor() {
    button2.parentElement.classList.toggle('blue-background')
    button2.parentElement.classList.toggle('red-background')
})
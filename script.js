var placeholder = document.querySelectorAll('.placeholder'),
    submit = document.querySelectorAll('.submit'),
    input = document.getElementById('input');

input.addEventListener('keydown', function() {
  placeholder[0].style.opacity = "0";
});
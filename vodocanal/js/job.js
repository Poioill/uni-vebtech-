
var togButtons = document.getElementsByClassName('jobb-btn');

Array.from(togButtons).forEach(function (button) {
  button.addEventListener('click', function () {
    var content = button.nextElementSibling;
    if (content.classList.contains('is-active')) {
      content.classList.remove('is-active');
    } else {
      content.classList.add('is-active');
    }
  });
});




tippy('.link', {
  placement: 'bottom'
})

const toggle    = document.querySelector('.js-change-theme');
const body      = document.querySelector('body');
const card      = document.getElementById('card');
const formDiv   = document.getElementById('form-div');
const pLocation = document.getElementById('p-location')


toggle.addEventListener('click', () => {

  if (body.classList.contains('text-gray-900')) {
    toggle.innerHTML = "☀️";
    body.classList.remove('text-gray-900');
    body.classList.add('text-gray-100');
    pLocation.classList.remove('text-gray-900');
    pLocation.classList.add('text-gray-100');
    card.classList.remove('bg-white');
    card.classList.add('bg-gray-900');
    formDiv.classList.remove('bg-white');
    formDiv.classList.add('bg-gray-900');
    body.style.backgroundImage = "url('./src/assets/images/51787.jpg')";
  } else {
    toggle.innerHTML = "🌙";
    body.classList.remove('text-gray-100');
    body.classList.add('text-gray-900');
    pLocation.classList.remove('text-gray-100');
    pLocation.classList.add('text-gray-900');
    card.classList.remove('bg-gray-900');
    card.classList.add('bg-white');
    formDiv.classList.remove('bg-gray-900');
    formDiv.classList.add('bg-white');
    body.style.backgroundImage = "url('./src/assets/images/890075.jpg')";
  }
});

// form //

document.getElementById("button").addEventListener("click", toggleError);
const errMessages = document.querySelectorAll("#error");

function toggleError() {
  errMessages.forEach((element) => {
    element.classList.toggle("hidden");
  });

  const allBorders = document.querySelectorAll(".border-gray-200");
  const allTexts = document.querySelectorAll(".text-gray-500");
  allBorders.forEach((element) => {
    element.classList.toggle("border-red-600");
  });
  allTexts.forEach((element) => {
    element.classList.toggle("text-red-600");
  });
}
 
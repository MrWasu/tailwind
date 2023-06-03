
tippy('.link', {
  placement: 'bottom'
})

const toggle = document.querySelector('.js-change-theme');
const body = document.querySelector('body');
const profile = document.getElementById('profile');
const pLocation = document.getElementById('p-location')

console.log(123)

toggle.addEventListener('click', () => {

  if (body.classList.contains('text-gray-900')) {
    toggle.innerHTML = "☀️";
    body.classList.remove('text-gray-900');
    body.classList.add('text-gray-100');
    pLocation.classList.remove('text-gray-900');
    pLocation.classList.add('text-gray-100');
    profile.classList.remove('bg-white');
    profile.classList.add('bg-gray-900');
  } else {
    toggle.innerHTML = "🌙";
    body.classList.remove('text-gray-100');
    body.classList.add('text-gray-900');
    pLocation.classList.remove('text-gray-100');
    pLocation.classList.add('text-gray-900');
    profile.classList.remove('bg-gray-900');
    profile.classList.add('bg-white');
  }
});


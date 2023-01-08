const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get('page');

document.querySelector(`#page-${page}`).classList.add("active")
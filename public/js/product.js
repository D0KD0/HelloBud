const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get('page');
if (!page) {
    document.querySelector(`#page-1`).classList.add("active")
} else {
    document.querySelector(`#page-${page}`).classList.add("active")
}
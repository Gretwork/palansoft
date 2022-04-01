document.addEventListener('DOMContentLoaded', result)

function result() {
  let URL = window.location.pathname
  let page = URL.split('/').pop().split('.').shift()
  document.querySelector('body').classList.add(`page${page}`)
}

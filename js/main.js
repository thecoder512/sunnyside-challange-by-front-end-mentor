const haumburger = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-list')

haumburger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    haumburger.classList.toggle('active')
  })
//show men
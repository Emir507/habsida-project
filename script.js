const burgerMenuOpen = document.querySelector('.burger-menu')
const burgerMenuClose = document.querySelector('.sidebar--close')
const sidebar = document.querySelector('.sidebar')


burgerMenuOpen.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-slide-out')
  sidebar.classList.add('sidebar-slide-in')
})
burgerMenuClose.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-slide-in')
  sidebar.classList.add('sidebar-slide-out')
})
const burgerMenuOpen = document.querySelector(".burger-menu");
const burgerMenuClose = document.querySelector(".close-menu-btn");
const sidebar = document.querySelector(".sidebar");
const body = document.body;

function toggleSidebar() {
  sidebar.classList.toggle("sidebar--visible");
  toggleOverlay();
}
function toggleOverlay() {
  body.classList.toggle("overlay");
}
function hideSidebarAndOverlayOnVoidClick(e) {
  if (e.target.classList.contains("overlay")) {
    toggleSidebar();
  }
}
function toggleOnOverlayClickEvent() {
  if (sidebar.classList.contains("sidebar--visible")) {
    body.addEventListener("click", hideSidebarAndOverlayOnVoidClick, true);
  } else {
    body.removeEventListener("click", hideSidebarAndOverlayOnVoidClick, true);
  }
}

burgerMenuOpen.addEventListener("click", () => {
  toggleSidebar();
  toggleOnOverlayClickEvent();
});

burgerMenuClose.addEventListener("click", () => {
  toggleSidebar();
  toggleOnOverlayClickEvent();
});

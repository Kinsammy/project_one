const toggleButton = document.querySelector(".toggle-button");
const navMenu = document.querySelector(".nav-menu");

toggleButton.addEventListener("click", () =>{
  toggleButton.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
  toggleButton.classList.remove("active");
  navMenu.classList.remove("active");
}))
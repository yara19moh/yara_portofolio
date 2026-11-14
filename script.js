const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
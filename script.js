var btn = document.getElementById("btn");
var light = document.getElementById("light");
function togglebtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
}
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}
// Function to handle smooth scrolling
function smoothScroll(targetId) {
    const targetElement = document.querySelector(targetId);
    const offset = 80; // Adjust based on your navbar height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
}

// Add click event listeners to all navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        smoothScroll(targetId);
    });
});

// Handle external navigation to #home
if (window.location.hash) {
    setTimeout(() => {
        smoothScroll(window.location.hash);
    }, 100); // Delay to ensure page is loaded
}

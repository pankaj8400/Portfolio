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

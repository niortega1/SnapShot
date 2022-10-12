const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
    document.body.classList.toggle ("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src="./Resources/dark theme icon/sun.png";
    } else {
        icon.src="./Resources/dark theme icon/moon.png";
    }
})
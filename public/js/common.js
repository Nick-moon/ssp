const switcher = document.getElementById("themeSwitcher");
const body = document.body;

function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24*60*60*1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

const savedTheme = getCookie("theme");

if (savedTheme) {
    body.setAttribute("data-bs-theme", savedTheme);
    switcher.innerHTML = savedTheme === "light"
        ? '<i class="bi bi-moon-fill"></i>'
        : '<i class="bi bi-sun-fill"></i>';
}

switcher.addEventListener("click", () => {
    const current = body.getAttribute("data-bs-theme");
    const next = current === "light" ? "dark" : "light";

    body.setAttribute("data-bs-theme", next);
    setCookie("theme", next);

    switcher.innerHTML = next === "light"
        ? '<i class="bi bi-moon-fill"></i>'
        : '<i class="bi bi-sun-fill"></i>';
});
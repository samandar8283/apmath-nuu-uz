// === custom menu js start ===
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const customToggleBtn = document.querySelector('.custom-dropdown-toggle');
    const customDropdownMenu = document.querySelector('.custom-dropdown-menu');

    customToggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        customDropdownMenu.classList.toggle('d-none');
        if(dropdownMenu.classList.contains("show")) {
            dropdownMenu.classList.remove("show");
            toggleBtn.classList.remove("show");
        }
    });

    document.addEventListener('click', function (e) {
        if (!customDropdownMenu.contains(e.target) && !customToggleBtn.contains(e.target)) {
            customDropdownMenu.classList.add('d-none');
        }
    });
});
// === /custom menu js end ===

document.addEventListener('DOMContentLoaded', function () {
    if(localStorage.getItem("user")) {
        document.getElementById("header-sign-in").addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = "./../profile";
        })
    }
});
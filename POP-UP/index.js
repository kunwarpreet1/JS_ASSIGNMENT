// document.addEventListener("DOMContentLoaded", function () {
//     const hamburger = document.querySelector(".hamburger");
//     const navBar = document.querySelector(".nav-bar");

//     hamburger.addEventListener("click", function () {
//         navBar.style.display = navBar.style.display === "flex" ? "none" : "flex";
//     });

    
// });

// Function to toggle the visibility of the hamburger menu (for mobile view)
function toggleMenu() {
    let menu = document.querySelector(".nav-bar");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";  // Toggle between none and block
}

// Function to toggle the dropdown visibility for each menu item
function toggleDropdown(event) {
    // Prevent the event from propagating to the parent
    event.stopPropagation();
    
    let dropdown = event.currentTarget.querySelector(".dropdown");
    if (dropdown) {
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";  // Toggle between none and block
    }
}

// Close dropdown when clicking outside the menu
document.addEventListener("click", function(event) {
    let dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});



function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.querySelectorAll('input').forEach(input => input.value = "");
}

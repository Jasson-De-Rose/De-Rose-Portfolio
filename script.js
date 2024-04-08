
let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".hamburger");
let ham = document.querySelector(".ham");
let cross = document.querySelector(".cross");

cross.style.display = "none";

hamburger.addEventListener('click', ()=>{
    sidebar.classList.toggle("sidebarGo");

    if (sidebar.classList.contains("sidebarGo")) {
        ham.style.display = "inline";
        cross.style.display = "none";
    } else {
        ham.style.display = "none";
        cross.style.display = "inline";
    }
})
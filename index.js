const menuBar = document.getElementById("menu-bar");
const crossMenu = document.getElementById("cross-menu");
const menus = document.querySelector("#menus")
menuBar.addEventListener("click",function(){
    menus.style.display = "flex";
    menus.classList.add("menu-show")
    menuBar.style.display = "none";
    crossMenu.style.display = "block";
})
crossMenu.addEventListener("click",function(){
   menus.style.display = "none";
   menuBar.style.display = "block";
   crossMenu.style.display = "none";
})
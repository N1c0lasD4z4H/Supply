hamburger = document.querySelector(".hamburger");
login = document.querySelector(".navbar-button");

hamburger.onclick= function(){
    navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
}


login.addEventListener("click", function(){
    window.location.href = "views/login.html"
})
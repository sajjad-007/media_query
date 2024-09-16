let navBars = document.querySelector(".nav_bars")
let sideBar = document.querySelector(".side_bars")

navBars.addEventListener("click",function () {
    sideBar.style.top = "0";
});
sideBar.addEventListener("click",function () {
    sideBar.style.top = "-443px"
})
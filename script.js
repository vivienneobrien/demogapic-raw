// When you deal with javascript its good to make sure the DOM is fully load!
document.addEventListener("DOMContentLoaded", function () {

  const body = document.querySelector("body");
  const sidebar = document.getElementById("mySidenav");
  const main = document.getElementById("main");
  const openNav = document.querySelector(".openNav"); 
  const closeNav = document.querySelector(".closebtn");

// Animation file to extend/customize 
  var animation = bodymovinit.loadAnimation({
    container: document.getElementById('animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "animations/landinganimation/22807-people-morph-flow.json"
})

// so when this file is added in your table page at this line your code get error 
// and stop the script file so rest of code will not executed!

// Seprate logic! Add animation object inline to home page and remove it from 
// here or have a seprate js file for that. 

// Navigation
openNav.addEventListener('click', (e) => {
    sidebar.style.width = "250px"
    main.style.marginLeft = "250px" 
  })

closeNav.addEventListener('click', (e) => {
    sidebar.style.width = "0"
    main.style.marginLeft = "0"
  })

})
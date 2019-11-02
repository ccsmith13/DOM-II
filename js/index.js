// Top banner img turns opaque when hovered over 
let bannerImg = document.querySelector('.intro > img');
function hazyImg(){
    bannerImg.style.opacity = "0.5";
}
bannerImg.addEventListener('mouseenter', hazyImg, false);
bannerImg.addEventListener('mouseleave', () =>{
    bannerImg.style.opacity = "1";
});

// All paragraphs turn hot pink on double click, and white on mouse leave 
let allParagraphs =  document.querySelectorAll("p");
for (let i = 0 ; i < allParagraphs.length; i++) {
    allParagraphs[i].addEventListener('dblclick' , () =>{
        allParagraphs[i].style.backgroundColor = "hotpink"
        event.stopPropagation(); 
    }) ;

    allParagraphs[i].addEventListener('mouseleave', () =>{
        allParagraphs[i].style.backgroundColor = "white"
        event.stopPropagation(); 
    });
};

// Entire background is highlighted when any key is pressed down 
let body = document.querySelector('body');
body.addEventListener('keydown', () => {body.style.backgroundColor = "yellow"}, false);

//Entire background is set back to white when wheel is used
body.addEventListener('wheel', () => {body.style.backgroundColor = "white"}, false);

// On resize, an alert is triggered
function sizeChange(){
    alert("Why are you changing the window size?");
};
window.addEventListener('resize', sizeChange, false);

// When the page loads, welcomes the user to the page
function greeter(){
    alert("Hello, welcome to the Fun Bus website!");
};
window.addEventListener('load', greeter, false);

// Sign up buttons turn red then back to white on keydown / keyup
let signUpButtons = document.querySelector(".btn");
function redbg(){
    signUpButtons.style.backgroundColor = "red";
}
function whitebg(){
    signUpButtons.style.backgroundColor = "white";
}
signUpButtons.addEventListener('keydown', redbg, false);
signUpButtons.addEventListener('keyup', whitebg, false);

// When the nav link tags are clicked a popup appears, refresh is prevented
let navTag = document.querySelectorAll(".nav > .nav-link");
for (let i = 0 ; i < navTag.length; i++) {
    navTag[i].addEventListener('click' , () =>{
        event.preventDefault();
        alert("These pages are not ready for viewing yet :)")});

};

// When you right-click on the second image, it switches to a different image
let mapImg = document.querySelector(".content-section > .img-content > img");
mapImg.addEventListener('contextmenu', ()=>{mapImg.src = "https://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg"});
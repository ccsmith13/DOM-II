let rocketContainerParent = document.querySelector('.blocks');
let rocketContainer = document.querySelectorAll('.blocks > div');
let newRocket = document.createElement("div");
for(let i=0; i<rocketContainer.length; i++){
    let poppedRocket = rocketContainer[i];
    let imgOffset = 0;
    rocketContainer[i].style.position = "relative";
    rocketContainer[i].addEventListener('mousedown',()=> {
        rocketContainerParent.prepend(newRocket.nodeValue = rocketContainer[i]);
    });
    rocketContainer[i].addEventListener('mousedown',()=>{
        imgOffset += 100;
        rocketContainer[i].style.left = imgOffset + "px";
    });
};
var moveX = 0;
var count = 0;
var image = document.querySelector(".image");
var back_image = document.querySelector("#inner-container");
var container = document.querySelector(".container");
container.addEventListener("keyup",movebg);

function movebg(){
    key = event.keyCode;
    // console.log(key);

if(key== 39){
    moveX = -8;
    count+= moveX;
    console.log(count);

    back_image.style.backgroundPosition = count + 'px 0px';
    image.style.transform = 'rotateY(0deg)';
}
if(key== 37){
    moveX = 8;
    count+= moveX;
    console.log(count);

    back_image.style.backgroundPosition = count + 'px 0px';
    image.style.transform = 'rotateY(180deg)';
}

else if(key==38||key== 32){
    jump();
    function jump(){
        image.style.bottom = "32%";
        setTimeout (function(){
            image.style.bottom = "21%";
        },500);
    }
}
};




// function moveBg() {
//     key = event.keyCode;
//     console.log(key);
//     if (key == 39) {
//         moveX = -7;
//         count += moveX;
//         console.log(count);

//         background_image.style.backgroundPosition = count + 'px 0px';
//         image.style.transform = 'rotateY(0deg)';

//     }
//     if (key == 37) {
//         moveX = 7;
//         count += moveX;
//         console.log(count);

//         background_image.style.backgroundPosition = count + 'px 0px';
//         image.style.transform = 'rotateY(180deg)';
//     } else if (key == 38 || key == 32) {
//         jumpImage();
//     }

// }


// function jumpImage() {
//     image.style.bottom = "25%";
//     setTimeout(function() {
//         image.style.bottom = "10%";

//     }, 500);
// }
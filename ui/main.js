console.log('Loaded!');
//Move the image
var img =document.getElementById('mad');
var marginLeft = 0;
function moveRight () {
    marginLeft =marginLeft =1;
    img.style.marginLeft = marginLeft + 'px';
}
img onclick = function () {
    var interval = setInterval(moveRight, 25);
};
var plaatje = document.querySelector('.image');
var overlay = document.querySelector('.overlay');

document.onkeydown = function(event) {
    if(event.keyCode == 69) {
        console.log('expand button');
        plaatje.classList.toggle("expand");
    }
}


plaatje.addEventListener('click', function () {
    console.log('Expand click');
    plaatje.classList.toggle("expand");
});



plaatje.addEventListener("mouseenter", function( event ) {
    overlay.classList.add("zichtbaar");

    }, false);


plaatje.addEventListener("mouseout", function( event ) {
    overlay.classList.remove("zichtbaar");

    }, false);

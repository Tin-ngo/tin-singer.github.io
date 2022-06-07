// function red() {
//     var buttonElement = document.querySelector('.button');
//     var randomTop = Math.round(Math.random() * 500);
//     var randomLeft = Math.round(Math.random() * 80);
//     buttonElement.style.backgroundColor = 'blue';
//     buttonElement.style.top = randomTop + 'px';
//     buttonElement.style.left = randomLeft + '%';
// }
var audio_duck = new Audio('./assets/sound/duck.mp3');
var audio_zoom = new Audio('./assets/sound/ZoominZoomout.mp3');
var aud = document.getElementById("au1");
aud.onended = function() {
    setTimeout(function() {
        document.querySelector('.modal').style.display = 'none';
    }, 2000);

};

function no_ok() {
    audio_duck.play();
    audio_duck.play();
    var buttonElement = document.querySelector('.button');
    var randomTop = Math.round(Math.random() * 500) + 360;
    if (randomTop > 500) {
        randomTop = 500;
    }
    var randomLeft = Math.round(Math.random() * 80);
    buttonElement.classList.toggle('red');
    buttonElement.classList.toggle('orange');
    buttonElement.style.top = randomTop + 'px';
    buttonElement.style.left = randomLeft + '%';
}

function ok() {
    audio_zoom.play();
    var modal2 = document.querySelector('.modal2');
    modal2.style.display = 'flex';
}

function thoat() {
    var modal2 = document.querySelector('.modal2');
    audio_zoom.pause();
    modal2.style.display = 'none';
}
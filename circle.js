startPos = 0;
startSpeed = 0;
currPosY = 0;
currSpeedY = 0;
accelerationY = 10;
timeInterval = 0.01;
timePassed = 0.0;
direction = 1;
userModifier = 1;

slider = document.getElementById('slider');
// slider.addEventListener('oninput', function() {
//     userModifier = slider.value;
// });
function sliderInput() {
    userModifier = slider.value;
    accelerationY = slider.value;
}

circle = document.getElementById('circle');


function callback() {
    sliderInput();
    max = $(window).height() - 30

    if (currPosY >= max) {
        direction = -1;
    }
    if (currPosY < 0) {
        direction = 1;
        timePassed = 0
    }
    // speedAdded = (accelerationY / timeInterval) * userModifier;
    // speedAdded = accelerationY;
    // currSpeedY += speedAdded;
    currSpeedY = (accelerationY * timePassed);
    var endLocation = currPosY + (direction * currSpeedY * timePassed) + (0.5 * accelerationY * timePassed * timePassed);

    circle.style.top = endLocation + "px";

    // timePassed += 1 / timeInterval;
    currPosY = endLocation;
}

function restart() {
startPos = 0;
startSpeed = 0;
currPosY = 0;
currSpeedY = 0;
accelerationY = 10;
timeInterval = 0.01;
timePassed = 0.0;
circle.style.top = 0;
}

timeAccuracy = 0.001;
setInterval(function(){
    timePassed += timeAccuracy;
}, timeAccuracy);

id = setInterval(callback, timeAccuracy);

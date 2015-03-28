// Orientation Change
var handleOrientationOutputTarget = document.getElementById('orientationOutput');

var handleOrientation = function (e) {
    var orientation = window.orientation;

   handleOrientationOutputTarget.innerHTML = 'orientation: ' + orientation;
}

handleOrientation();




// Device Orientation
var handleDeviceOrientationOutputTarget = document.getElementById('deviceOrientationOutput');

var handleDeviceOrientation = function (e) {
    var absolute = e.absolute,
        alpha    = parseInt(e.alpha, 10),
        beta     = parseInt(e.beta, 10),
        gamma    = parseInt(e.gamma, 10);

    handleDeviceOrientationOutputTarget.innerHTML = 'absolute: ' + absolute + '<br/> alpha: ' + alpha + '<br/> beta: ' + beta + '<br/> gamma: ' + gamma;
};




// Device Motion
var handleDeviceMotionOutputTarget = document.getElementById('deviceMotionOutput');

var handleDeviceMotion = function (e) {
    var accelerationX = parseInt(e.acceleration.x, 10),
        accelerationY = parseInt(e.acceleration.y, 10);

    handleDeviceMotionOutputTarget.innerHTML = 'acceleration X: ' + accelerationX + '<br/> acceleration Y: ' + accelerationY;
};



// Listeners
window.addEventListener('deviceorientation', function (e) {
    handleDeviceOrientation(e);
}, true);

window.addEventListener('orientationchange', function (e) {
    handleOrientation(e);
}, false);

window.addEventListener('devicemotion', handleDeviceMotion, true);

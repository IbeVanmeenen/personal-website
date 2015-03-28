var demoWater = document.getElementById('demo-pool-water'),
    demoOutput = document.getElementById('demo-pool-output');

var handleDemo = function(e) {
    var change = 0;

    if (window.orientation === 0) {
        var gamma = parseFloat(e.gamma);

        if (gamma > 70) {
            //gamma = 70;
            return false;
        }
        if (gamma < -70) {
            //gamma = -70;
            return false;
        }

        change = - parseFloat(gamma / 4);

        demoOutput.innerHTML = 'gamma: ' + parseInt(gamma, 10) + ' (max 70 or -70)' + '<br> change: ' + parseInt(change, 10);

    } else {
        var beta = parseFloat(e.beta / 4);

        if (beta > 70) {
            beta = 70;
        }
        if (beta < -70) {
            beta = -70;
        }

        change = - parseFloat(beta);

        demoOutput.innerHTML = 'beta: ' + parseInt(beta, 10) + ' (max 70 or -70)' + '<br> change: ' + parseInt(change, 10);
    }

    demoWater.style.transform = 'rotate(' + change + 'deg)';
}

var handleDemoOrientation = function() {
    if (window.orientation === 0) {
        demoWater.style.background = '#BDE2F9';
        demoWater.style.bottom = '-50vh';
    } else {
        demoWater.style.background = '#A7D3CB';
        demoWater.style.bottom = '-30vh';
    }
}
handleDemoOrientation();




// Listeners
window.addEventListener('deviceorientation', function (e) {
    if(e.absolute) {
        handleDemo(e);
    }
}, true);

window.addEventListener('orientationchange', function (e) {
    handleDemoOrientation();
}, false);

//window.addEventListener('devicemotion', handleDeviceMotion, true);

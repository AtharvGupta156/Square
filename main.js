
noseX = 0;
noseY = 0;

leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,400);
    canvas.position(600,100);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("poseNet is intialized");
}

function gotPoses(results) {
if (results.length>0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

    difference = floor(leftWristX-rightWristX);
}
}

function draw() {
    background('#bea5d2');
    fill('blue');
    stroke('red');
    square(noseX,noseY,difference);
}
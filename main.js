nose_x = 0;
nose_y = 0;

left_wrist_x = 0;
right_wrist_x = 0;

difference = 0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded() {
    console.log("poseNet is initialised")
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
    }
}

function draw() {
    background("black");
    stroke("aquamarine");
    fill("aquamarine");
    text("Font",nose_x, nose_y);
    textSize(difference);
}
var angle = 0;
var branchLength = 0;
var angleSlider;
var branchLengthSlider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 100);
    stroke(random(100), 80, 100);
    angleSlider = createSlider(0, 180, 20);
    angleSlider.addClass("slider");
    angleSlider.position(windowWidth / 15, windowHeight / 1.2);
    branchLengthSlider = createSlider(1, 100, 350);
    branchLengthSlider.addClass("slider");
    branchLengthSlider.position(windowWidth / 15, windowHeight / 1.15);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background("#1b1b1b");
    textSize(32);
    fill("#5cdb4e");
    stroke(0);
    angle = angleSlider.value();
    branchLength = branchLengthSlider.value();
    text(("000" + angle).slice(-3), angleSlider.x - 60, angleSlider.y + angleSlider.height / 0.9);
    text(("000" + branchLength).slice(-3), branchLengthSlider.x - 60, branchLengthSlider.y + branchLengthSlider.height / 0.9);
    text("angle", angleSlider.x + angleSlider.width + 20, angleSlider.y + angleSlider.height / 0.9);
    text("branch length", branchLengthSlider.x + branchLengthSlider.width + 20, branchLengthSlider.y + branchLengthSlider.height / 0.9);
    translate(width / 2, height);
    branch(30 + branchLength * 3.7);
}

function branch(length) {
    stroke(length / 1, 80, 100);
    line(0, 0, 0, -length);
    translate(0, -length);
    if (length > 4) {
        push();
        rotate(degToRad(angle));
        branch(length * 0.7);
        pop();
        push();
        rotate(degToRad(-angle));
        branch(length * 0.7);
        pop();
    }
}

function degToRad(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}

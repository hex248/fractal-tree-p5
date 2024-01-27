var depth = 10;
var rotateAngle = 0;
var slider;

function setup() {
    createCanvas(700, 700);
    colorMode(HSB, 100);
    stroke(random(100), 80, 100);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
    background(10);
    rotateAngle = slider.value();
    translate(width / 2, height);
    branch(height / 4);
}

function branch(length) {
    stroke(length / 1, 80, 100);
    line(0, 0, 0, -length);
    translate(0, -length);
    if (length > 4) {
        push();
        rotate(rotateAngle);
        branch(length * 0.7);
        pop();
        push();
        rotate(-rotateAngle);
        branch(length * 0.7);
        pop();
    }
}

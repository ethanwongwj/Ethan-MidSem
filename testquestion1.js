function setup() {
    new Canvas(600,400);
    background(0);
}
function draw() {
    fill(0);
    strokeWeight(10);
    stroke("red")
    circle(150,200,100);
    triangle(250,250,350,250,300,150);
    rect(400,150,100,100)
}
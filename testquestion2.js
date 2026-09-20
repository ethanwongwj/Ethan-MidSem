let circleY = 50
let circleX = 50
let fillCol = 0
function setup() {
    new Canvas(600,600);
    background(220);
    for(let i = 0 ; i < 10 ; i++){
        fill(fillCol);
        circle(circleX , circleY , 50);
        circleX = circleX + 50;
        circleY = circleY + 50;
        fillCol = fillCol + 26
    }
}
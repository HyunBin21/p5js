let circleX = 150;  // 원의 초기 x 위치
let circleY = 100;  // 원의 초기 y 위치
let speed = 5;      // 원의 이동 속도

function setup() {
  createCanvas(400, 400);
  stroke(0);
  fill(30);
}

function draw() {
  background(200);

  // 키가 눌려져 있으면 원을 움직임
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      circleX = max(circleX - speed, 25); // 왼쪽 경계 제한
    } else if (keyCode === RIGHT_ARROW) {
      circleX = min(circleX + speed, width - 25); // 오른쪽 경계 제한
    } else if (keyCode === UP_ARROW) {
      circleY = max(circleY - speed, 25); // 위쪽 경계 제한
    } else if (keyCode === DOWN_ARROW) {
      circleY = min(circleY + speed, height - 25); // 아래쪽 경계 제한
    }
  }

  // 원 그리기
  ellipse(circleX, circleY, 50, 50);
}

const getTrafficCar = function(){
  let trafficCars = ['trafficCar1','trafficCar2','trafficCar3','trafficCar4','trafficCar5'];
  let index = Math.floor(Math.random()*trafficCars.length);
  return trafficCars[index];
}


const trafficMovement = function(){
  let trafficCar = getTrafficCar();
  let gameArea = document.getElementById('gameArea');
  let outPos = gameArea.offsetWidth;
  let speed = 0.2;
  let initPos = 0;
  let carId = document.getElementById(trafficCar);
  car = new TrafficCar(trafficCar,speed,initPos,outPos);
  setInterval(()=>{car.move();
    carId.style.right = car.pos+'px';
  },1)
};

const moveTraffic = function(){
  trafficMovement();
  setInterval(trafficMovement,20000);
};

let carPos = 333;

const carMovement = function(event){
  let myCar = document.getElementById('car');
  let gameArea = document.getElementById('gameArea');
  let topPos =14;
  let bottomPos= (gameArea.offsetHeight-myCar.offsetHeight)-14;
  let speed = 160;
  let car = new Car(speed,carPos,topPos,bottomPos);
  car.move(event.key);
  carPos = car.pos;
  myCar.style.top = car.pos+"px";
};

const moveSportCar = function(){
  document.addEventListener('keydown',carMovement);
};

let pressEnter = true;

let startGame = function(event){
  if(event.keyCode==13 && pressEnter){
    moveSportCar();
    moveTraffic();
    setInterval(updateScore,500);
    pressEnter = false;
  }
};

document.addEventListener('keydown',startGame);

let updateScore = function(){
  let score = +document.getElementById('myScore').innerText;
   score += 1;
   document.getElementById('myScore').innerText = score
};

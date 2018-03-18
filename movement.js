let pressEnter = true;
let pressSpace = false;

let startGame = function(event){
  if(event.keyCode==13 && pressEnter){
    setCommonds();
    moveTrafficCars();
    setInterval(updateScore,500);
    pressEnter = false;
    pressSpace = true;
  }
};

let stopGame = function(event){
  if(event.keyCode==32 && pressSpace){
    alert('\tGAME PAUSED\nCLICK OK TO RESUME !');
  }
};

document.addEventListener('keydown',startGame);
document.addEventListener('keydown',stopGame);

let carMove = function(event){
  let car = document.getElementById("car");
  let speed = 160;
  let direction = {
    ArrowUp: moveUp,
    ArrowDown:moveDown
  }
  if(direction[event.key])
  direction[event.key](car,speed);
};

let setCommonds = function(){
  document.addEventListener('keydown',carMove);
}

let moveDown = function(car,speed){
  let currPos = +car.style.top.slice(0,-2);
  let gameArea = document.getElementById('gameArea');
  let initPos = (gameArea.offsetHeight-car.offsetHeight);
  let newPos = currPos || initPos/2;
  newPos += speed;
  setCarStyle(car,newPos,initPos);
};

let moveUp = function(car,speed){
  let currPos = +car.style.top.slice(0,-2);
  let gameArea = document.getElementById('gameArea');
  let initPos = (gameArea.offsetHeight-car.offsetHeight);
  let newPos = currPos || initPos/2;
  newPos -= speed;
  //setCarStyle(car,newPos,10);
  if(newPos<13)
  car.style=`top:${13}px`;
  else
  car.style=`top:${newPos}px`;
};

let setCarStyle = function(car,newPos,initPos){
  let pos =initPos-13
  if(newPos>pos)
  car.style=`top:${pos}px`;
  else
  car.style=`top:${newPos}px`;
}

let updateScore = function(){
  let score = +document.getElementById('myScore').innerText;
   score += 1;
   document.getElementById('myScore').innerText = score
};

let trafficCar1 = function(){
  let car = document.getElementById("car");
  let oppCar = document.getElementById("trafficCar1");
  let currPos = +oppCar.style.right.slice(0,-2);
  let newPos = currPos || 0;
  newPos += 2;
  let carPos = car.style.top.slice(0,-2);
  let oppCarPos = gameArea.offsetWidth-(car.offsetWidth+oppCar.offsetWidth);
  let startPos = -oppCar.offsetWidth;
  if(carPos<130 && newPos>oppCarPos) wreckCar();
  manageTrafficPos(oppCar,startPos,newPos);
};

let trafficCar2 = function(){
  let oppCar = document.getElementById("trafficCar2");
  let currPos = +oppCar.style.right.slice(0,-2);
  let newPos = currPos || 0;
  newPos += 2;
  let carPos = car.style.top.slice(0,-2);
  let oppCarPos = gameArea.offsetWidth-(car.offsetWidth+oppCar.offsetWidth);
  let startPos = -oppCar.offsetWidth;
  if((carPos>30 && carPos<300) && newPos>oppCarPos) wreckCar();
  manageTrafficPos(oppCar,startPos,newPos);
};

let trafficCar3 = function(){
  let oppCar = document.getElementById("trafficCar3");
  let currPos = +oppCar.style.right.slice(0,-2);
  let newPos = currPos || 0;
  newPos += 2;
  let carPos = car.style.top.slice(0,-2);
  let oppCarPos = gameArea.offsetWidth-(car.offsetWidth+oppCar.offsetWidth);
  let startPos = -oppCar.offsetWidth;
  if(carPos>200 && carPos<460 && newPos>oppCarPos) wreckCar();
  manageTrafficPos(oppCar,startPos,newPos);
};

let trafficCar4 = function(){
  let oppCar = document.getElementById("trafficCar4");
  let currPos = +oppCar.style.right.slice(0,-2);
  let newPos = currPos || 0;
  newPos += 2;
  let carPos = car.style.top.slice(0,-2);
  let oppCarPos = gameArea.offsetWidth-(car.offsetWidth+oppCar.offsetWidth);
  let startPos = -oppCar.offsetWidth;
  if(carPos>360 && carPos<620 && newPos>oppCarPos) wreckCar();
  manageTrafficPos(oppCar,startPos,newPos);
};

let trafficCar5 = function(){
  let oppCar = document.getElementById("trafficCar5");
  let currPos = +oppCar.style.right.slice(0,-2);
  let newPos = currPos || 0;
  newPos += 2;
  let carPos = car.style.top.slice(0,-2);
  let oppCarPos = gameArea.offsetWidth-(car.offsetWidth+oppCar.offsetWidth);
  let startPos = -oppCar.offsetWidth;
  if(carPos>530 && newPos>oppCarPos) wreckCar();
  manageTrafficPos(oppCar,startPos,newPos);
};

let cars =[trafficCar1,trafficCar2,trafficCar3,trafficCar4,trafficCar5];
let moveTrafficCars = function(){
  let carIndex = Math.round(Math.random()*(cars.length-1));
  setInterval(cars[carIndex],10);
};

let wreckCar = function(){
  alert('\t   GAME OVER !\n \t\t  RETRY\nBETTER LUCK FOR NEXT TIME');
  location.reload();
};

let manageTrafficPos = function(car,startPos,newPos){
  let gameArea = document.getElementById('gameArea');
  let outPos = gameArea.offsetWidth;
  if(newPos>outPos){
    clearInterval(car);
    moveTrafficCars();
    car.style=`right:${startPos}px`;
  }
  else
  car.style=`right:${newPos}px`;
};

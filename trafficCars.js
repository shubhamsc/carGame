const TrafficCar = function(name,speed,pos,outPos){
  this.name = name;
  this.speed = speed;
  this.pos = pos;
  this.outPos = outPos;
};
TrafficCar.prototype.move = function(){
  this.pos = moveLeft(this.pos,this.speed,this.outPos);
}

const moveLeft = function(pos,speed,outPos){
  let newPos = pos+speed;
  return setCarPos(newPos,outPos);
};


const setCarPos = function(newPos,outPos){
  if(newPos>outPos)
  return 0;
  return newPos;
};

// module.exports = TrafficCar;

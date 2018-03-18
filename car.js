const Car = function(speed,pos,topPos,bottomPos){
  this.pos=pos;
  this.speed=speed;
  this.topPos=topPos;
  this.bottomPos=bottomPos;
};

Car.prototype.move = function(direction){
  let directions = {
    ArrowUp: moveUp,
    ArrowDown: moveDown
  }
  if(directions[direction])
  this.pos = directions[direction](this.speed,this.pos,this.topPos,this.bottomPos);
};

const moveDown = function(speed,pos,topPos,bottomPos){
  let newPos = pos+speed;
  let outPos = bottomPos;
  return setCarInBottom(newPos,outPos);
};

const moveUp = function(speed,pos,topPos,bottomPos){
  let newPos = pos-speed;
  let outPos = topPos;
  return setCarInTop(newPos,outPos);
};

const setCarInTop= function(newPos,outPos){
  if(newPos<outPos)
  return outPos;
  return newPos;
};

const setCarInBottom = function(newPos,outPos){
  if(newPos>outPos)
  return outPos;
  return newPos;
};

// module.exports = Car;

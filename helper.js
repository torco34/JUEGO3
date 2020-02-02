

let getRandomNumber = size => {
  return Math.floor(Math.random() * size);

}

//get the distance de two points
let getDistance = (e, target) => {

  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//return 
let getDistanceHint = distance => {
  if(distance < 30){
    return "Clientes";

  } else if (distance < 40) {
    return "Really Hot muy caliente";

  }else if (distance < 60) {
    return "Hot caliente";


  }else if (distance < 100) {
    return "warm bajo";


  }else if (distance < 180) {
    return "cold frio";

  }else if (distance < 360) {
    return "Really cold muy frio";

  }else {
    return "freezing cogelado!";
  }
}



alert('hola mami')


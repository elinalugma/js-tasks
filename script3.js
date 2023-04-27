function power(param1, param2){
  let theNumber = param1;
  for(let i = 1; i < param2; i++){
    param1= param1 * theNumber;
  }
  console.log(param1);
}
power();
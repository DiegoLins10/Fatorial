//@Author Diego Lins

function fatorial(num){
    var multi = 1;
    if(num == 0){
      return 1;
    }else{
    for(var i = num; i != 0; i-- ){
       multi *= i;
    }
    }
  return multi;
  }
  
  console.log(fatorial(0));
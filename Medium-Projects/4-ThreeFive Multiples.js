function ThreeFiveMultiples(num) { 

  let toplam = 0 ;
  for(i=0 ; i<num ; i++){
    if(i%3==0){
      //console.log(i)
      toplam=toplam+i;
    }
    else if(i%5==0){
      toplam=toplam+i
      //console.log(i)
    }
  } 
  return toplam; 

}
   
// keep this function call here 
console.log(ThreeFiveMultiples(readline()));
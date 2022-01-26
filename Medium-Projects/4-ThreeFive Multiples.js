function ThreeFiveMultiples(num) { 

  let toplam = 0 ;
  for(i=0 ; i<num ; i++){
    if(i%3==0){
      
      toplam=toplam+i;
    }
    else if(i%5==0){
      toplam=toplam+i
      
    }
  } 
  return toplam; 

}
 
console.log(ThreeFiveMultiples(readline()));

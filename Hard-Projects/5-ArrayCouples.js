function ArrayCouples(arr) { 

  let firstPair=[]
  let secondPair=[]

  for(i=0 ; i<arr.length ; i=i+2){
    firstPair[0]=arr[i]
    firstPair[1]=arr[i+1]
    for(j=i+2 ; j<arr.length ; j=j+2){
      secondPair[0]=arr[j]
      secondPair[1]=arr[j+1]
      if(firstPair[1]==secondPair[0] && firstPair[0]==secondPair[1]){
        delete arr[i];
        delete arr[i+1]
        delete arr[j]
        delete arr[j+1]
      }
    }
    

  }
  if(arr.length>1){
    return "yes" 
  }
  else{
    let s=""
    for(k=0 ; k<arr.length ; k++){
      
        s=s+arr[k]+","
      
    }
    console.log(s)
    return s 
  }
  
}
   
// keep this function call here 
console.log(ArrayCouples(readline()));
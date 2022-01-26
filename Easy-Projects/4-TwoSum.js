function TwoSum(arr) { 

  let first = arr[0] ;
  let l= arr.length ;
  let couple = [] ;
  let t ;
  let flag=0 ;

  for(i=1 ; i<l ; i++){
    for(j=i+1 ; j<l ; j++){
      t=arr[i]+arr[j]
      if(t==first){
        couple.push(arr[i])
        couple.push(arr[j])
        flag=1
      }

    }


  }
  if(flag=0){
    return -1
  }else{
    let c="";
    for(a=0 ; a<couple.length ; a=a+2){
      c=c+couple[a]+","+couple[a+1]+" "

    }
    return c ;
  }
}
   

console.log(TwoSum(readline()));

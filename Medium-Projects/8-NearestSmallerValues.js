function NearestSmallerValues(arr) { 

  let newarr =[]
  flag=0
  for(i=0 ; i<arr.length ; i++){
    if(i==0){
      newarr.push("-1")
    }else if(arr[i]<arr[i-1]){
      j=i-1
      while(-1<j){
        if(arr[i]>arr[j] || arr[i]==arr[j]){
          newarr.push(arr[j])
          flag=1
          break
        }
        
        j=j-1
      }
      if(flag==0){
        newarr.push("-1")
      }
    }
    else if(arr[i]>arr[i-1]){
      newarr.push(arr[i-1])
    }
  }  
  let s=""
  for(k=0 ; k<newarr.length ; k++){
    s=s+newarr[k]+" "
  }
  //console.log(newarr)
  return s; 

}
   
// keep this function call here 
console.log(NearestSmallerValues(readline()));
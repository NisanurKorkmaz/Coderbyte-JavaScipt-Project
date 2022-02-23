function HappyNumbers(num) { 
  
  s=num.toString()
  sum=0
  for( i=0 ; i<s.length; i++){
    
    sum=sum+s[i]*s[i]

  }
  //console.log(sum)
  if(sum==1){
    return "true"
  }else{
    return "false"
  }
  

}
   
// keep this function call here 
console.log(HappyNumbers(readline()));
function SimpleEvens(num) { 
  let s=num.toString()
  for(i=0 ; i<s.length ; i++){
    if(s[i]%2!=0){
      return "false"
    }
  } 
  return "true"; 

}
   
// keep this function call here 
console.log(SimpleEvens(readline()));
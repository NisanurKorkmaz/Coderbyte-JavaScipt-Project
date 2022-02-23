function FibonacciChecker(num) { 

  let f=[0,1,1,2]
  let fl = f.length
  let yenisayi 
  while(num>f[fl-1]){
    yenisayi=f[fl-1]+f[fl-2]
    f.push(yenisayi)
    fl=f.length
  }
  if(f[fl-1]==num){
    return "yes"
  }else{
    return "no"
  }
  

}
   
// keep this function call here 
console.log(FibonacciChecker(readline()));
function EvenPairs(str) { 

  let sayi1=1;
  let sayi2=1;
  let sayilar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let s1;
  let s2;

  for(i=0 ; i<str.length ; i++){
    if(str[i] in sayilar){
      if(str[i]%2==0 && str[i+1]%2==0){
        sayi1=str[i]
        sayi2=str[i+1]
        return true 
      }
      else if(str[i+1] in sayilar && str[i+2] in sayilar){
        s1=str[i]
        s2=str[i+1]+str[i+2]
        if(s1%2==0 && s2%2==0){
          sayi1=s1
          sayi2=s2
          return true 
        }
        s1=str[i]+str[i+1]
        s2=str[i+2]
        if(s1%2==0 && s2%2==0){
          sayi1=s1
          sayi2=s2
          return true 
        }
      }
    }

  }

  return false ; 

}
   
// keep this function call here 
console.log(EvenPairs(readline()));
function NumberReverse(str) { 
  
  let s=""
  let liste =[]
  liste=str.split(" ")
  l=liste.length
  //console.log(liste)
  while(l>0){
    s=s+liste[l-1]+" "
    l=l-1
  }
  return s ;

}
   
// keep this function call here 
console.log(NumberReverse(readline()));
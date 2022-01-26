function ParallelSums(arr) { 

  let a1 = [];
  let a2 = [];
  let toplam=0;

  for(a=0 ; a<arr.length ; a++){
    toplam=toplam+arr[a]
  }

  let yarisi=toplam/2;
  //console.log(yarisi);

  for(i=0 ; i<arr.length ; i=i+2){
    a1.push(arr[i]);
    a2.push(arr[i+1]);
  }
  let t1=0 ;
  for(b=0 ; b<arr.length ; b++){
    for(c=0 ; c<a1.length ; c++){
        t1=t1+a1[c]
    }
    
    if(t1==yarisi){
      
      let a="";
      for(k=0 ; k<a1.length ; k++){
        a=a+a1[k]+","
      }
      for(l=0 ; l<a2.length ; l++){
        if(l==(a2.length-1)){
          a=a+a2[l]
        }else{
          a=a+a2[l]+","
        }
      }
      
      return a
    }else{
      //iki array arasi eleman degisimi 
      let temp;
      temp=a1[b]
      a1[b]=a2[b]
      a2[b]=temp
    }
    t1=0
  }



  return -1; 

}
   

console.log(ParallelSums(readline()));

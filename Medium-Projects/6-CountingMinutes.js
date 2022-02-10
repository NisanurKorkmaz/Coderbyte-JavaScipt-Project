function CountingMinutes(str) { 
  var time = str.split("-")
  var saat1 = time[0]
  var saat2 = time[1]

  function hesaplayici(s){
    
    var saat=s.split(':');
    var dakika=saat[1].slice(0,2);
    var ampm=saat[1].slice(2);
    var toplamdakika=0;

    var pmdakika = ampm === 'am' ? 720 : 0 ;

    var toplamdakika=Number(saat[0])*60 + Number(dakika) + pmdakika ;

    return toplamdakika
  }
  var sonuc=hesaplayici(saat2)-hesaplayici(saat1)

  if(sonuc<0){
    return (1440+sonuc)
  }
    
  else {
    return sonuc;
  }
  

}
   
// keep this function call here 
console.log(CountingMinutes(readline()));
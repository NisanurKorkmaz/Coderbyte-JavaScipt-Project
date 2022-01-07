//metin icinde kac tane sesli harf oldugunu arama

var m = "Kleopatra"
m=m.toLowerCase()
m2=m.split("")
console.log(m2)
alfabet=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","w","v","x","y","z"]
c=0

for(i=0 ; i<m2.length; i++){
    for(j=0 ; j<alfabet.length; j++){
        if(m2[i]==alfabet[j]){
            c=c+1
        }

    }

}
console.log(c)

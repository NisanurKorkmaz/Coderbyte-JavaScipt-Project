//verilen sayinin asal olup olmadigini soyleyen program

a=200
temp=0

for(i =2 ; i<a ; i++){
    if(a%i==0){
        temp++
    }
}

if(temp>0){
    console.log("false")
}else{
    console.log("true")
}

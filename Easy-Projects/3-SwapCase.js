function SwapCase(str) {

    let s="";
    let strLen=str.length;    

    for(i=0 ; i<strLen ; i++){
        if(str[i]==str[i].toUpperCase()){
            s=s+str[i].toLowerCase();
        }else{
            s=s+str[i].toUpperCase();
        }

    }
    return s ;

}

console.log(SwapCase("Hello DuDDE !"));
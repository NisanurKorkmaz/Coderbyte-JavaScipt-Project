function CheckNums(num1, num2){
    
    if(num1>num2){
        return false ;
    }else if(num1<num2){
        return true ;
    }else{
        return -1 ;
    }
}

console.log(CheckNums(21,89));


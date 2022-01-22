function stepWalking(num){
    if(num==1)
        return 1 ;
    if(num==2)
        return 2 ;
    return stepWalking(num-2) + stepWalking(num-1);
    
    
}

console.log(stepWalking(5));

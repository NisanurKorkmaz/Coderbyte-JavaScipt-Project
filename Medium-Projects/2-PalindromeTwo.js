function PalindromeTwo(str){



    str= str.toLowerCase();

    let s ="";

    for(i=0 ; i<str.length ; i++){
        for(j=0 ; j<alfabets.length ; j++){
            if(str[i]==alfabets[j]){
                s=s+str[i];
            }
        }
    }

    sl=s.length ;
    let temp=0 ;

    for(a=0 ; a<sl ; a++){
        if(s[a] == s[sl-a-1]){
            temp++;
        }
    }

    if(temp== sl){
        return true ;
    }
    else{
        return false ;
    }
}

console.log(PalindromeTwo("Are you serious ?"));


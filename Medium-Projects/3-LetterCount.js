function LetterCount(str) {
    
    let temp1 = 0 ;
    let max = 0 ;
    let greatest = "" ;
    str=str.toLowerCase();
    arr=str.split(' ');

    for(i=0 ; i<arr.length ; i++){
        word=arr[i]
        for(j=0 ; j<word.length ; j++){
            for(k=j+1 ; k<word.length ; k++){
                if(word[j]==word[k]){
                    temp1=temp1+1
                }
            }
        }

        if(temp1>max){
            max=temp1
            greatest=word
        }
        temp1=0

    }

    if(max>0){
        return greatest
    }
    else{
        return -1 
    }




}

console.log(LetterCount("Hello apple pie"));
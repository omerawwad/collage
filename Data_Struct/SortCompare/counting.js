function countingSort (inputarr){
    counter=0;

    let b = [];
    

    /*ntiate c array with zeros*/

    let k = Math.max(...inputarr)+1;
    counter++;

    let c =[];
    counter++;
    for (let i=0 ; i<k ; i++){
        c[i] = 0 ;  
        counter++;
    }

    /*counting intergers in Main Array*/
    
    for (let j=0 ; j<inputarr.length ; j++){
        c[inputarr[j]]++ ; 
        counter++;
    }

    /*incrementing c Array*/ 

    for (let i=1 ; i<k ; i++){
        c[i] = c[i] + c[i-1] ;
        counter++;
    }

    /*sorting into output array b*/

    for (let j=(inputarr.length-1) ; j>=0 ; j--){  //iterating on input array
        b[c[inputarr[j]]-1] = inputarr[j];
        counter++;
        c[inputarr[j]]--;
        counter++;
    }

    return counter ;

    console.log(b);
}
function countingSort (inputarr){

    let b = [];
    

    /*intiate c array with zeros*/

    let k = Math.max(...inputarr)+1;

    let c =[];
    for (let i=0 ; i<k ; i++){
        c[i] = 0 ;  
    }

    /*counting intergers in Main Array*/
    
    for (let j=0 ; j<inputarr.length ; j++){
        c[inputarr[j]]++ ; 
    }

    /*incrementing c Array*/ 

    for (let i=1 ; i<k ; i++){
        c[i] = c[i] + c[i-1] ;
    }

    /*sorting into output array b*/

    for (let j=(inputarr.length-1) ; j>=0 ; j--){  //iterating on input array
        b[c[inputarr[j]]-1] = inputarr[j];
        c[inputarr[j]]--
    }

    // return b ;

    console.log(b);
}
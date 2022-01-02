function radixSort (inputarr){
    let d = 1 ;
    let k = Math.max(...inputarr);

    while(k > 10){
        d++;
        k = k / 10 ;
    }

    let n = 1;
    let b = [];

    while(d>0){
        let m = []
        for (let i=0 ; i<inputarr.length ; i++){
            m[i] = Math.floor((inputarr[i] % (10 * n)) / n) ;           
        }

        /* ---------- counting sort for each digit ---------- */
         
         /* intiate c array with zeros */
     
         let q = Math.max(...m)+1;
     
         let c =[];
         for (let i=0 ; i<q ; i++){
             c[i] = 0 ;  
         }
     
         /*counting intergers in Main Array*/
         
         for (let j=0 ; j<m.length ; j++){
             c[m[j]]++ ; 
         }
     
         /*incrementing c Array*/ 
     
         for (let i=1 ; i<q ; i++){
             c[i] = c[i] + c[i-1] ;
         }
     
         /*sorting into output array b*/
     
         for (let j=(m.length-1) ; j>=0 ; j--){  //iterating on input array
             b[c[m[j]]-1] = inputarr[j];
             c[m[j]]--
         }
     
        
        
        for (let j=0 ; j<inputarr.length ; j++){
            inputarr[j] = b[j];
        }
        d--;
        n = n * 10 ;
        console.log("output of each iteration");
        console.log(b); 
    }
    console.log("final output");
    console.log(b); 
    //return b ;
    }



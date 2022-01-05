function radixSort (arr){

    let inputarr = [];
    for (let i = 0 ; i<arr.length ; i++){
        inputarr[i] = arr[i];
    }

    counter =0;
    let d = 1 ;
    let k = Math.max(...inputarr);

    while(k > 10){
        d++;
        counter++;
        k = k / 10 ;
        counter++;
    }

    let n = 1;
    counter++;
    let b = [];
    counter++;

    while(d>0){
        let m = []
        counter++;
        for (let i=0 ; i<inputarr.length ; i++){
            counter++;
            m[i] = Math.floor((inputarr[i] % (10 * n)) / n) ;           
        }

        /* ---------- counting sort for each digit ---------- */
         
         /* intiate c array with zeros */
     
         let q = Math.max(...m)+1;
         counter++;
     
         let c =[];
         counter++;
         for (let i=0 ; i<q ; i++){
             c[i] = 0 ;  
             counter++;
         }
     
         /*counting intergers in Main Array*/
         
         for (let j=0 ; j<m.length ; j++){
             c[m[j]]++ ; 
             counter++;
         }
     
         /*incrementing c Array*/ 
     
         for (let i=1 ; i<q ; i++){
             c[i] = c[i] + c[i-1] ;
             counter++;
         }
     
         /*sorting into output array b*/
     
         for (let j=(m.length-1) ; j>=0 ; j--){  //iterating on input array
             b[c[m[j]]-1] = inputarr[j];
             counter++;
             c[m[j]]--
             counter++;
         }
     
        
        
        for (let j=0 ; j<inputarr.length ; j++){
            inputarr[j] = b[j];
        }
        d--;
        n = n * 10 ;
        //console.log("output of each iteration");
        //console.log(b); 
    }
    //console.log("final output");
    //console.log(b); 
    return counter ;
    }



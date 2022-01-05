
function insertion(inputarr){
    counter=0;
    let arr = [];
    for (let i = 0 ; i<inputarr.length ; i++){
        arr[i] = inputarr[i];
    }
    
    let n = arr.length;
    for(let i = 1; i<n; i++){
        let k = arr[i];
        
        counter++;
        let j = i-1;
        counter++;
        while((j>-1) && ( k<arr[j])){
            counter++;
            arr[j+1]=arr[j];
            counter++;
            j--;
            counter++;
        }

        arr[j+1] = k;
        counter++;
    }

    
    return counter;

     
}
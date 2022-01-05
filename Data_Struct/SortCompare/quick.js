function quickSort(inputarr){
    let arr = [];
    for (let i = 0 ; i<inputarr.length ; i++){
        arr[i] = inputarr[i];
    }
    
    let p = 0;
    counter++;
    let r = inputarr.length-1 ;
    counter++;
    quickSorting(arr,p,r);
    //console.log(inputarr);
    //return inputarr;
}
function quickSorting(inputarr,p,r){
    
    if (p < r){
        q = Partition(inputarr,p,r);
        counter++;
        quickSorting(inputarr,p,q-1);
        counter++;
        quickSorting(inputarr,q+1,r);
        counter++;        
    }
}

function Partition(arr,p,r){
    let x = arr[r];
    counter++;
    let i = p-1 ;
    counter++;

    for (let j=p ; j<=(r-1) ; j++){
        if (arr[j] <= x){
            counter++;
            i++;
            counter++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,r);
    return i+1;
}

function swap (arr,i,j){
    let key = arr[j] ; 
    counter++;
    arr[j] = arr[i] ;
    counter++;
    arr[i] = key ;
    counter++;
}


function quickMain(inputarr){
    counter=0;
    quickSort(inputarr);
    return counter;

}
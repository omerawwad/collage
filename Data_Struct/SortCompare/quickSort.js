function quickSort(inputarr){
    let p = 0;
    let r = inputarr.length-1 ;

    quickSorting(inputarr,p,r);
    console.log(inputarr);
    //return inputarr;
}
function quickSorting(inputarr,p,r){
    if (p < r){
        q = Partition(inputarr,p,r);
        quickSorting(inputarr,p,q-1);
        quickSorting(inputarr,q+1,r);
        
    }
}

function Partition(arr,p,r){
    let x = arr[r];
    let i = p-1 ;

    for (let j=p ; j<=(r-1) ; j++){
        if (arr[j] <= x){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,r);
    return i+1;
}

function swap (arr,i,j){
    let key = arr[j] ; 
    arr[j] = arr[i] ;
    arr[i] = key ;
}
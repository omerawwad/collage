
function maxHeapify(arr, i,n){
    let l = 2*i;
    let r =2*i+1;
    let max;

    if(r<n){
        counter++;
        if(arr[l]>=arr[r]){
            counter++;
            max=l;
        }else{
            counter++;
            max=r;
        }
    }else if(l<n){
        counter++;
        max=l;
    }else{
        return;
    }

    if(arr[i]<arr[max]){
        counter++;
        let temp = arr[i];
        counter++;
        arr[i]=arr[max];
        counter++;
        arr[max]=temp;
        counter++;
        maxHeapify(arr,max,n);
    }

}

function heapSort(inputarr){

    let arr = [];
    for (let i = 0 ; i<inputarr.length ; i++){
        arr[i] = inputarr[i];
    }

    let n = arr.length;
    counter++;
    for(let i= Math.floor(n/2)-1; i>=0;i--){
        counter++;
        maxHeapify(arr,i,n);
    }

    for(let i=n-1;i>=0;i--){
        counter++;
        let temp = arr[0];
        counter++;
        arr[0]=arr[i];
        counter++;
        arr[i]=temp;
        counter++;
        maxHeapify(arr,0,i);
    }
    return arr;
}




function heapMain(arr){
    counter=0;
    heapSort(arr);
    return counter;

}
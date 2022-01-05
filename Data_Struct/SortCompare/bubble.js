function bubble(inputarr){

    let arr = [];
    for (let i = 0 ; i<inputarr.length ; i++){
        arr[i] = inputarr[i];
    }

    counter=0;
    let n = arr.length;
    counter++;
    for(let i =0;i<n;i++){
        counter++;
        for(let j=0;j<n-i-1;j++){
            counter++;
            if(arr[j]>arr[j+1]){
                counter++;
                let temp = arr[j];
                counter++;
                arr[j]=arr[j+1];
                counter++;
                arr[j+1]=temp;
                counter++;
            }

        }
    }

    return counter;
}
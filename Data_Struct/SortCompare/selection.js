function selection(inputarr){

    let arr = [];
    for (let i = 0 ; i<inputarr.length ; i++){
        arr[i] = inputarr[i];
    }

    counter=0;
    let n = arr.length;

        for(let i=0;i<n;i++){
            counter++;
            let min=i;
            counter++;
            for(let j=i+1;j<n;j++){
                counter++;
                if(arr[j]<arr[min]){
                    counter++;
                    min=j;
                }
            }
            if(min!=i){
                counter++;
                let tmp =arr[i];
                counter++;
                arr[i]=arr[min];
                counter++;
                arr[min]=tmp;
                counter++;
            }
        }
        return counter;
}
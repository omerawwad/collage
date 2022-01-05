
function merge(l, r){
    let arr = [];
    counter++;

    while(l.length && r.length){
        counter++;

        if(l[0]<r[0]){
            counter++;
            arr.push(l.shift());
        }else{
            counter++;
            arr.push(r.shift());
        }
    }

    while (l.length) {
        counter++;
        arr.push(l.shift())
      }
      while (r.length) {
        counter++;
        arr.push(r.shift())
      }

        return arr;


}



function mergeSort(inputarr){

    let arr = [];
    for (let i = 0 ; i<inputarr.length ; i++){
        arr[i] = inputarr[i];
    }
    
    let n = arr.length;
    counter++;

    if(arr.length<2){
        //alert(counter)
        return arr;
    }

    let m = Math.floor(arr.length/2);
    counter++;
    let l = arr.slice(0,m);
    counter++;
    let r = arr.slice(m);
    counter++;


    return merge(mergeSort(l),mergeSort(r))

}

function mergeMain(arr){
    counter=0;
    mergeSort(arr);
    return counter;

}
let counter=0;
let myChart=null;
function main(){
    const sizes = [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000,
        7000,
        8000,
        9000,
        10000
      ];

      // data of steps 

      let d1=[];
      let d2=[];

      //Choosing algorithm from Select and pushing steps into arrays of data

      for(let i=0;i<sizes.length;i++){
            let data = generateNumbers(sizes[i]);
            let fv = document.getElementById("firstAlgo").value;
            let sv = document.getElementById("secondAlgo").value;

            if(fv != "none" && sv != "none"){
                if(fv==sv){
                    let temp = selector(data,fv);
                    d1.push(temp);
                    d2.push(temp);
                }
                else{
                    d1.push(selector(data,fv));
                    d2.push(selector(data,sv));
                }
                //Compare Between Each Other;

            }else if(fv != "none"){
                //First Only
                d1.push(selector(data,fv));
            }else{
                //Second Only
                d2.push(selector(data,sv));
            }
            
      }
/*  draw( data 1 , data 2 , lable 1 , lable 2 )      */
    draw(d1,d2,"First Algorithm","Second Algorithm");


}

//excuting graphs

function selector(arr,s){
    switch(s){
        case "insertion" :
            return insertion(arr);
        break;
        case "selection" :
            return selection(arr);
        break;       
        case "bubble" :
            return bubble(arr);
        break;
        case "merge" :
            return mergeMain(arr);
        break;
        case "heap" :
            return heapMain(arr);
        break;
        case "counting" :
            return countingSort(arr);
        break;
        case "radix" :
            return radixSort(arr);
        break;
        case "quick" :
            return quickMain(arr);
        break;
    }
}
    

function generateNumbers(n){
    let arr=[];

    for(let i =0;i<n;i++){
        arr.push(Math.floor(Math.random() * n));
    }

    //console.log(arr);

    return arr;
}

function draw(d1,d2,l1,l2){

   



    const labels = [
        '1000',
        '2000',
        '3000',
        '4000',
        '5000',
        '6000',
        '7000',
        '8000',
        '9000',
        '10000',
      ];

      const data = {
        labels: labels,
        datasets: [{
          label: l1,
          backgroundColor: 'rgb(231, 76, 60)',
          borderColor: 'rgb(231, 76, 60)',
          data: d1,
        },{
            label: l2,
            backgroundColor: 'rgb(52, 152, 219)',
            borderColor: 'rgb(41, 128, 185)',
            data: d2,
          }]
      };

      const config = {
        type: 'line',
        data: data,
        options: {}        
      };


      
      

      if(myChart == null){
        myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
      }else{
        myChart.destroy();
        myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
      }


}






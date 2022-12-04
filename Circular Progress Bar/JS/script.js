let number = document.getElementById("number");
let count = 0;

setInterval(()=>{
    if(count==100){
        clearInterval();
    }
    else{
        count+=1;
        number.innerHTML=`${count}%`;
    }
},87);
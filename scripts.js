const decrease=document.getElementById("decrease-btn");
const reset=document.getElementById("reset-btn");
const increase=document.getElementById("increase-btn");
const num=document.querySelector(".num");
let count=0

decrease.addEventListener("click",function(){
    count-=1;
    num.textContent=count;
    if(count<0){
        num.style.color="red";
    }
    else if(count>0){
        num.style.color="green";
    }
});

reset.addEventListener("click",function(){
    count=0;
    num.textContent=count;
    if(count===0){
        num.style.color="black";
    }
});

increase.addEventListener("click",function(){
    count+=1;
    num.textContent=count;
    if(count<0){
        num.style.color="red";
    }
    else if(count>0){
        num.style.color="green";
    }
});
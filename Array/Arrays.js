//UC1
let arr = new Array();
for(let i =1 ;i<10;i++){
    let digit1 = Math.floor(Math.random()*900)+100;
    arr.push(digit1);
}
console.log(arr);
let maximum=Number.MIN_VALUE;
let minimum=Number.MAX_VALUE;
for(let i=0;i<arr.length;i++){
    maximum = Math.max(maximum,arr[i]);
    minimum = Math.min(minimum,arr[i]);
}
let secondMax=Number.MIN_VALUE;
let secondMinimum=Number.MAX_VALUE;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=maximum){
        secondMax = Math.max(secondMax,arr[i]);
    }
}
for(let i=0;i<arr.length;i++){
    if(arr[i]!=minimum){
        secondMinimum = Math.min(secondMinimum,arr[i]);
    }
}

console.log("Second maximum number is: "+secondMax);
console.log("Second minimum number is: "+secondMinimum);

//UC2
let arr = new Array();
for(let i =1 ;i<10;i++){
    let digit1 = Math.floor(Math.random()*900)+100;
    arr.push(digit1);
}
console.log(arr);

arr.sort();

console.log("Second largest element is: "+arr[arr.length-2]);
console.log("Second smallest element is: "+arr[1]);
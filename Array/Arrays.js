//UC1,2
let arr = new Array();
for(let i =1 ;i<10;i++){
    let digit1 = Math.floor(Math.random()*900)+100;
    arr.push(digit1);
}
console.log(arr);

arr.sort();

console.log("Second largest element is: "+arr[arr.length-2]);
console.log("Second smallest element is: "+arr[1]);

// UC3
let n = 36;
let array = new Array();

for(let i=2; i<=Math.sqrt(n);i++){
    if(n%i==0){
        array.push(i);
        n /= i;
    }
}
if(array.length==0){
    array.push(n);
}
console.log(array);

//UC4
let arr1 = [0, -1, 2, -3, 1];
arr1.sort();
let size = arr1.length;
for(let i = 0;i<size;i++){
    let left = i+1;
    let right = size -1;
    let x = arr1[i];
    while(left<right){
        if(x+arr1[left]+arr1[right]==0){
            console.log("Three numbers with addition zero are: "+x+" "+arr1[left]+" "+arr1[right]);
            left++;
            right--;
        }
        else if(x+arr1[left]+arr1[right]<0){
            left++;
        }
        else{
            right--;
        }
    } 
}
//UC5
let arr2= new Array();
for(let i = 10;i<100;i++){
    let a = i%10;
    let x = Number.parseInt(i/10);
    let b = x%10;
    if(a==b){
        arr2.push(i);
    }
}
console.log(arr2);
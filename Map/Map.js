//UC1
let diceMap = new Map();

for(let i = 1;i<7;i++){
    diceMap.set(i,0);
} 
function checkGoal(map){
    for (let [key, value] of map){
        if(value==10){
            return key;
         } 
    } 
    return 0;
}
while(true){
    let dice = Math.floor((Math.random()*10)%6)+1;
    diceMap.set(dice, (diceMap.get(dice))+1);
    let ans =  checkGoal(diceMap);
    if(ans!=0){
        console.log(ans+" reached max limit goal");
        break;
    }
}

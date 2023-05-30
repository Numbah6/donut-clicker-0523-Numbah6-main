// Iteration 1 //

let donutCount = 100;
let autoClickerCount = 1;
let autoClickerCost = 100;
let taxIncrease = 0.1;
let clickPriceNow = autoClickerCost;
let displayDonut = document.getElementById('donutCount');
let countOfClick = document.getElementById('clickCount');
let displayAutoClickerCount = document.getElementById('autoClickerCount');


function addDonut(){
    countOfClick.innerText = Math.floor(donutCount);
    displayDonut.innerText = Math.floor(donutCount++);
}

function buyAutoOven(){
    if(donutCount >= autoClickerCost){
        donutCount -= autoClickerCost;
        autoClickerCost = autoClickerCost + (autoClickerCost * taxIncrease);
        clickPriceNow = Math.floor(autoClickerCost);
        document.getElementById('autoClickerCost').innerText = clickPriceNow;
        setInterval(addDonut, 100);
        displayDonut.innerText = donutCount; 
        displayAutoClickerCount.innerText = autoClickerCount++; 
    }


}



document.getElementById('buyAutoOven').addEventListener('click', buyAutoOven);

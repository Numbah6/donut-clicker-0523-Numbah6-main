// Iteration 1 //

var donutCount = 100;
let autoClickerCount = 1;
var autoClickerCost = 100;
let clickPriceNow = autoClickerCost;
let displayDonut = document.getElementById('donutCount');
let countOfClick = document.getElementById('clickCount');
let displayAutoClickerCount = document.getElementById('autoClickerCount');


function addDonut(){
    countOfClick.innerText = donutCount;
    displayDonut.innerText = donutCount++;
}

function buyAutoOven(){
    if(donutCount >= autoClickerCost){
        donutCount -= autoClickerCost;
        autoClickerCost = autoClickerCost + (0.1 * autoClickerCost);
        clickPriceNow = autoClickerCost;
        document.getElementById('autoClickerCost').innerText = clickPriceNow;
        setInterval(addDonut, 100);
        displayDonut.innerText = donutCount; 
        displayAutoClickerCount.innerText = autoClickerCount++;       
    }
}

document.getElementById('buyAutoOven').addEventListener('click', buyAutoOven);

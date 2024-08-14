
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');
const btn = document.getElementById('btn');
const countDisplay = document.getElementById('count');

let count =0;
function updateCount() {
    if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
        count++;
    } else {
        count = 0;
    }
    countDisplay.textContent =count;
}

btn.addEventListener('click',updateCount);

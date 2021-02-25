document.getElementById('out');
let sum = " ";

for (let i = 1; i <= 100; i = i + 1) {
    sum = sum + i + '<br>';
}

out.innerHTML = sum;
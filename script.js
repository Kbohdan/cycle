var a = +prompt("Введите первое число");
var n = +prompt("Введите второе число");
var sum = 0;

while (a <= n) {
    sum += a;
    a++;
}

alert(sum)
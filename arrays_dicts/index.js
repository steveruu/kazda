const data1 = [1, 56, 211, 783, 4567, 6969, 16];

let data = data1.filter(function (num) {
    return num % 2 == 0;
})

let data2 = data1.map(function(num) {
    return num * 2;
})

console.log(data1);
console.log(data);
console.log(data2);

for (const num of data1) {
    console.log(num);
}

console.log(data1.shift(), data1);
console.log(data1.pop(), data1);

let a = 541632;

let dict = {"a": 1, "b": 2, "c": 3}

for (const index in dict) {
    console.log(dict[index])
}

console.log(typeof(data));
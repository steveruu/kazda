let data = [1, 5, 7, 9, 8, 4, 3, 2, 6,123123,021,12];
let iteration = 0;

for (let k = 0; k < 1000; k++) {
    data.push(Math.round(Math.random() * 100000));
}

function swap(data, index1, index2) {
    let temp = data[index1];
    data[index1] = data[index2];
    data[index2] = temp;
    return data;
}

while (!arraySortedOrNot(data)) {
    for (const key in data) {
        let index = Number(key); // index
    
        if (index < data.length - 1) {
            let nextValue = data[index + 1];
            let value = data[index]; // value
            
            if (value > nextValue) {
                data = swap(data, index, index + 1);
            }
        }
    }
    iteration += 1;
}
// console.log(data);

let sude = data.filter(function (num) {
    return num % 727 == 0;
})

console.log(sude);
console.log(iteration);

function arraySortedOrNot(arr) {
    let n = arr.length;
    if (n == 0 || n == 1) {
        return true;
    }

    for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

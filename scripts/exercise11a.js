/*
const nums = [10, 20, 30];
nums[2] = 99;

function getLastValue(array) {
    let lastIndex = array[array.length - 1];
    console.log(lastIndex);
}

getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

function arraySwap(array) {
    let newArray = [];
    for (let i = 1; i <= array.length; i++) {
        newArray.push(array[array.length-i]);
    }
    console.log(newArray);
};



arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);

function evenIndexArray(array) {
    let anArray = [];

    for (let i = 0; i < array.length -1; i += 2) {
        anArray.push(array[i]); 
    }
    console.log(anArray);
};

evenIndexArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

for (let i = 5; i >= 0; i--) {
    console.log(i)
}
    */

/*
let i = 0
while (i <= 10) {
    console.log(i);
    i += 2;
}

let i = 5;
while (i >= 0) {
    console.log(i);
    i--;
}

let plusOneArray = [];
let newArray = [1, 2, 3];
for (let i = 0; i < newArray.length; i++) {
    plusOneArray.push(newArray[i] + 1);
}
console.log(plusOneArray);

function addOne(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 1);
    }
    console.log(newArray);
};

addOne([3, 6, 9]);
addOne([1, 2, 3]);
addOne([-2, -1, 0, 99]);

function addNum(array, num) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + num);
    }
    console.log(newArray);
};

addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);

function addArrays(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }
    console.log(newArray);
};

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);

let nums = 0;
function countPositive(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            newArray = array.splice(array[i]);
            console.log(newArray);

        } else {
        newArray.push(array[i]);
        console.log(newArray);
        array[i++];
    }
    }
    console.log(newArray)
        nums = newArray.length;
        console.log(nums)

        
    
};

countPositive([1, -3, 5, 4]);

countPositive([-2, 3, -5, 7, 10]);

*/

function minMax(array) {
    let min = 0;
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= array[i++]) {
            min = array[i];
            array[i++];
            console.log(min);
        }
        }

    for (let i = 0; i < array.length; i++) {
        if (array[i++] <= array[i]) {
                max = array[i]
                array[i++];
                console.log(max);
        }
        let num = {
            'min': min,
            'max': max
        }
        console.log(num);
        
    }
};
minMax([1,-3, 5]);
minMax([6, 8, 5, 9, 2, 4]);

minMax([]);

function countWords() {
    for (let i = 0; array[i] === array[i++]; i++) {
        
    }
}
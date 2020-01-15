// ---------------1 задание----------------

function sequence(start = 0, step = 1) {
    counter.count = start;

    function counter() {

        if (step == 1) return counter.count++;

        let tmp = counter.count;

        counter.count += step;

        return tmp;
    }

    return counter;
}

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8

// ---------------2 задание----------------

function take(gen, x) {
    let arr = [];

    for (let i = 0; i < x; i++) {
        arr[i] = gen();
    }
    return arr;
}

let gen2 = sequence(0, 2);
console.log(take(gen2, 5));

// ---------------3 задание----------------

function square(x) {
    return x * x;
}

function map(fn, arr) {
    if (arr.length < 1) return arr;
    let tmpArr = [];        
    arr.forEach(element => {
        tmpArr.push(fn(element))        
    });        
    return tmpArr;
}

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// ---------------4 задание----------------

function add(a, b) {
    return a + b;
}

function fmap(a, gen) {
    return function () {
        let args = [];
        for (let i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);            
        }
        return a(gen.apply(null, args));
    }
}


let squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
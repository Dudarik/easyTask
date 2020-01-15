/*
Нужно разобраться с декораторами и привязкой контекста...
Ибо ваще нихера не понятно с первого раза.
*/
function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) { //если кеш содержит такой х
            return cache.get(x); //читаем из него результат
        }

        let result = func(x); //иначе, вызываем функцию

        cache.set(x, result); //и кешируем результат
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log("Again:" + slow(1));

/*************************************/

function say(phrase) {
    console.log(this.name + ": " + phrase);
}

let user = {
    name: "Alex"
};

say.call(user, "Hello");

/*************************************/

let worker = {
    someMethod() {
        return 2;
    },

    slow(x) {
        console.log(`Called with ${x}`);
        return x * this.someMethod();
    }
};

function cachingDecorator2(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator2(worker.slow);

console.log(worker.slow(2));
console.log(worker.slow(2));


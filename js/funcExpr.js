function confirm(bool = true) {
    return bool;
}

function ask(q, yes, no) {
    if(confirm(q)) yes();
    else no();
}

function showOk() {
    console.log("Согласны");    
}

function showCancel() {
    console.log("Не согласны");    
}

function doHomework(subj, callback) {
    console.log(`Start my ${subj} homework.`);    
    callback();
}

function doDo(q, callback) {
    console.log(`Просто выводим q = ${q} `);
    let x = callback(q);
    console.log(`x после clalback = ${x}`);    
}

function cb(x) {
    console.log(x*x);    
    return x*=x;
}

let multiply = new Function('a1', 'a2', 'return a1 * a2');
console.log(multiply(2,3));

function getRandom(start, end, callback) {
    let res = Math.ceil(Math.random() * (start - end) + end);        
    callback(res);
}

getRandom(5, 15, function (num) {
    console.log(`callback called ${num}`);    
})

ask(true, showOk, showCancel);
ask(false, showOk, showCancel);

doHomework('math', function () {
    console.log('Finished my homework');    
});

doDo(10, cb);
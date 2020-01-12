/*Стрелочные функции:

Не имеют this.
Не имеют arguments.
Не могут быть вызваны с new.*/

let sum = (a, b) =>  a + b;

let double = n => n * 2;

let logToConsole = () => console.log("Log to console");

let confirm = () => {return true;}

let ask = (q, y, n) => {
    if (confirm(q)) y();
    else n();
}
let y = () => console.log('y');
let n = () => console.log('n');

ask('a', y, n)


let ask2 = (q, y, n) =>{
    if (confirm(q)) y();
    else n();
}

ask2 ('a', () => console.log('y'), () => console.log('n'));


let ask3 = (q, y, n) => confirm(q) ? y() : n();
ask3 ('a', () => console.log('y'), () => console.log('n'));



let group ={
    title: "Our Group",
    students: ['Alex', 'John', 'Natasha'],

    showList(){
        this.students.forEach(
            student => console.log(`${this.title}:${student}`)            
        );
    }
};

group.showList();


function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)        
    };
}

function sayHi(who) {
    console.log(`Hello, ${who}`);    
}

let sayHiDeffered = defer(sayHi, 2000);
sayHiDeffered('ALex');
for (let i = 0; i < 10; i++) {

var first = Math.ceil(Math.random() * 10);
var second = Math.ceil(Math.random() * 10);
var operand = Math.ceil(Math.random() * 4);
var results;

switch (operand) {
    case (1): 
        results = first + second;
        console.log(first+ ' + ' +second+ ' = ' +results);
    break;
    case (2): 
        results = first - second;
        console.log(first+ ' - ' +second+ ' = ' +results);
    break;
    case (3): 
        results = first * second;
        console.log(first+ ' * ' +second+ ' = ' +results);
    break;
    case (4): 
        results = first / second;
        console.log(first+ ' / ' +second+ ' = ' +results);
    break;
    default: 
        console.log('Nothing to see here');
    break;
};
}

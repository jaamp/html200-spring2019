var results;
for (let i = 0; i < 3; i++) {

    console.log('Round: ' + (i + 1));

    var first = Math.ceil(Math.random() * 10);
    var second = Math.ceil(Math.random() * 10);

            results = first + second;
            console.log(first+ ' + ' +second+ ' = ' +results);

            results = first - second;
            console.log(first+ ' - ' +second+ ' = ' +results);
    
            results = first * second;
            console.log(first+ ' * ' +second+ ' = ' +results);

            results = first / second;
            console.log(first+ ' / ' +second+ ' = ' +results);
}

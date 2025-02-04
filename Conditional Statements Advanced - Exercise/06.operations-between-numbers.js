// function operationsWithNumbers(num1, num2, operation) {
//     let result = 0;
//     switch (operation) {
//         case '+': result = num1 + num2; break;
//         case '-': result = num1 - num2; break;
//         case '*': result = num1 * num2; break;
//         case '/':
//             if (num2 === 0) {
//                 console.log(`Cannot divide ${num1} by zero`);
//                 return;
//             }
//             result = num1 / num2;
//         break;
//         case '%':
//             if (num2 === 0) {
//                 console.log(`Cannot divide ${num1} by zero`);
//                 return;
//             }
//             result = num1 % num2;
//         break;
//     }
    
//     let evenOrOdd = '';
//     if (operation === '+' || operation === '-' || operation === '*') {
//         if (result % 2 == 0) {
//             evenOrOdd = 'even';
//         } else {
//             evenOrOdd = 'odd';
//         }
//         console.log(`${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`);
//     } else if (operation === '/') {
//         console.log(`${num1} ${operation} ${num2} = ${result.toFixed(2)}`);
//     } else if (operation === '%'){
//         console.log(`${num1} ${operation} ${num2} = ${result}`);
//     }
// }

// operationsWithNumbers(10, 0, '%');

function operationsWithNumbers(num1, num2, operation) {
    let result = 0;
    let evenOrOdd = '';
    
    switch (operation) {
        case '+':
            result = num1 + num2;
            evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
            console.log(`${num1} + ${num2} = ${result} - ${evenOrOdd}`);
            break;

        case '-':
            result = num1 - num2; 
            evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
            console.log(`${num1} - ${num2} = ${result} - ${evenOrOdd}`);
            break;
            
        case '*':
            result = num1 * num2;
            evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
            console.log(`${num1} * ${num2} = ${result} - ${evenOrOdd}`);
            break;

        case '/':
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
                return;
            }
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            break;

        case '%':
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
                return;
            }
            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);
            break;
        }
    }
    
    operationsWithNumbers(10, 0, '%');
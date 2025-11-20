  /*    let entry = {
    one: '1', two: '2', three: '3', four: '4', five: '5', six: '6',
    seven: '7', eight: '8', nine: '9', plus: '+'
};      
        */

let result = JSON.parse(localStorage.getItem('result')) || {
    calculation: ''
};

let newEntry = '';
function updateCalculation(entry){
    
    if(entry != '+' && '='){

        newEntry += entry;

        console.log(newEntry);

        document.querySelector('.js-calculation')
            .innerHTML = `Calculation: ${newEntry}`;
        
        return newEntry;
    } else if('+'){
        let add = `${newEntry} + `;
        
        newEntry = add;

        document.querySelector('.js-calculation')
            .innerHTML = `Calculation: ${newEntry}`;

        console.log(add);
        return newEntry;
    }

   

console.log(result.calculation);   
    

return newEntry;
};

function calculateAnswer() {
if(newEntry){
        result.calculation = eval(newEntry);
        document.querySelector('.js-calculation')
            .innerHTML = `Calculation: ${newEntry} = ${result.calculation}`;
            }
};

localStorage.setItem('result', JSON.stringify(result));



/*
const array1 = ['hello', 'world', 'search', 'good'];
    for(let i = 0; i <= array1.length; i++) {
        if('search' === array1[i]) {
            console.log(i);
        }
    };
    const array2 = ['not', 'found'];
    for(let i = 0; i <= array2.length; i++) {
        if('search' === array2[i]) {
            console.log(i);
        }else {
            console.log('Not Found')
        }
    };

    const array3 = ['hello', 'world', 'search', 'good', 'search'];
    for(let i = 0; i <= array3.length; i++) {
        if('search' === array3[i]) {
            console.log(i);
            break;
           
        }
    }; 
    


    function findIndex(array, word) {
        for(let i = 0; i <= array.length; i++) {
            if(word === array[i]) {
                console.log(i);
                return i; 
            }
        };

        for(let i = 0; i <= array.length; i++) {
            if(word != array[i]) {
                return -1; 
            }
        }
    }

    console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));

    console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));


    function removeEgg(array) {
        let newArray = [];
        for(let i = 0; i < array.length; i++) {
            if('egg' === array[i]) {
                continue; 
            }
           console.log(i);
           console.log(array[i]);
           newArray.push(array[i]);
           console.log(newArray);
        };
    };

    removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);

    */
    function removeTwoEggs(array) {
        let newArray = [];
        for(let i = 0; i < array.length; i++) {
            let index = 0;
            while(index < array.length) {
                if('egg' === array[index]) {
                    index++;
                    continue;
                }
                newArray.push(array[index]);
            console.log(newArray);
            }
            

           //console.log(i);
          // console.log(array[i]);
         //  newArray.push(array[i]);
          // console.log(newArray);
        };
    }

    removeTwoEggs(['egg', 'apple', 'egg', 'egg', 'ham']);


function firstTrue(){  // длинновато написано
    let a = true;

    function changeA(){
        if(a === true) {
            a = undefined;
            return (true);
        }
        else{
            return (undefined);
        }
    }
    return changeA;
}

const b = firstTrue()

let variable = [1];

let firstTrue1 = () => {
   let intoVariable = variable;
   if (intoVariable == true){
       intoVariable.pop()
       return true;
   }
   else return undefined;
}

console.log(firstTrue1())
console.log(firstTrue1())

// alert(b())
// alert(b())


// больше в голову идей не пришло. 
// В интернете тоже не нашел вариантов
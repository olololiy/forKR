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

// alert(b())
// alert(b())


// больше в голову идей не пришло. 
// В интернете тоже не нашел вариантов
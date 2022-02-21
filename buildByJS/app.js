let makeBlocks = (numberOfBlocks) => {
    let i = 1;
    let container = document.querySelector('.container')
    let hexagon = (i) => {
        return`<div class="block" style="background-color: transparent;">
            <p class="num">${i}</p>
            <div class="hexagon">
                <div class="hexagon__top"></div>
                <div class="hexagon__mid"></div>
                <div class="hexagon__bottom"></div>
            </div>
        </div>`
    }
    let rectangle = (i) => {
        return ` <div class=\"block\"><p class="num">${i}</p></div>`
    }
    let rectangleWithQuads = (i) => {
        return `<div class="block">
            <div class="whiteQuadrateTop"> </div>
            <p class="num">${i}</p>
            <div class="whiteQuadrateBottom"></div>
        </div>`
    }
    let addBlock = () => {
        container.insertAdjacentHTML("beforeend",
            hexagon(i))
    }

    for (i = 1; i <= numberOfBlocks; i++){
        if (i === 5){
            addBlock()
        }
        else if(i % 3 === 0){
            container.insertAdjacentHTML("beforeend",
                rectangleWithQuads(i))
        }
        else {
            container.insertAdjacentHTML("beforeend",
                rectangle(i))
        }
        }
}
makeBlocks(9);

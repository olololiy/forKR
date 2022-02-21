let makeBlocks = (numberOfBlocks) => {
    let i = 1;
    let container = document.querySelector('.container')
    let hexagon = (i) => {
        return `<div class="block block_transparent">
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
            <div class="quadrature quadrature_left-top quadrature_white-yellow"> </div>
            <p class="num">${i}</p>
            <div class="quadrature quadrature_right-bottom quadrature_white-yellow"></div>
        </div>`
    }
    let addBlock = (figure) => {
        container.insertAdjacentHTML("beforeend", figure)
    }

    for (i = 1; i <= numberOfBlocks; i++) {
        (i === 5) ? addBlock(hexagon(i)) :
            (i % 3 === 0) ? addBlock(rectangleWithQuads(i)) :
                addBlock(rectangle(i))
    }
}
makeBlocks(9);

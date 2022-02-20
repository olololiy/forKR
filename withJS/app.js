let makeBlocks = (numberOfBlocks) => {
    let i;
    let container = document.querySelector('.container')

    for (i = 1; i <= numberOfBlocks; i++){

        if (i === 5){
            container.insertAdjacentHTML("beforeend",
                `<div class="block" style="background-color: transparent;">
            <p class="num">${i}</p>
            <div class="hexagon">
                <div class="hexagon__top"></div>
                <div class="hexagon__mid"></div>
                <div class="hexagon__bottom"></div>
            </div>
        </div>`)
        }
        else if(i % 3 === 0){
            container.insertAdjacentHTML("beforeend",
                `<div class="block">
            <div class="whiteQuadrateTop"> </div>
            <p class="num">${i}</p>
            <div class="whiteQuadrateBottom"></div>
        </div>`)
        }
        else {
            container.insertAdjacentHTML("beforeend",
                ` <div class=\"block\"><p class=\"num\">${i}</p></div>`)
        }
        }
}
makeBlocks(9);

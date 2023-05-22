

createTiles(320);
autoChangeColor(2000);

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}



// setColor('--primary-color', '#ff0000');
function createTiles(n) {
    let section = $('section');
    for(let i = 0; i < n; i++) {
        let tile = $("<div class = 'sp'></div>");
        // tile.addClass('sp');
        section.append(tile);
    }
}

function setColor(cssVar, color) {
    $(':root').css(cssVar, color);
    // or
    // document.documentElement.style.setProperty(cssVar, color);
}

function setRandomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor('--primary-color', '#'+randomColor);
}

async function autoChangeColor(millis) {
    
    await sleep(millis);
    setRandomColor();
    autoChangeColor(millis);
}
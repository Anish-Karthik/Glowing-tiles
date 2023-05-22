const shadesOfBlackAndGray = new Set([
  '#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666',
  '#777777', '#888888', '#999999', '#aaaaaa', '#bbbbbb', '#cccccc', '#dddddd',
  '#eeeeee', '#f1f1f1', '#f4f4f4', '#f7f7f7', '#fafafa', '#ffffff'
]);

createTiles(320);
autoChangeColor(2000);
isFocused();
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
    let randomColor = '#000000';
    while(shadesOfBlackAndGray.has(randomColor)) {
        randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    setColor('--primary-color', randomColor);
}

async function autoChangeColor(millis) {
    
    await sleep(millis);
    setRandomColor();
    isFocused();
    autoChangeColor(millis);
}

function isFocused() {
    $('#usn').focus(function() {
        $(':root').css('--translation-y', '0px');
        console.log('focus');
    });
    $('#pwd').focus(function() {
        $(':root').css('--translation-y', '0px');
        console.log('focus');
    });
}

createTiles(320);
function createTiles(n) {
    let section = $('section');
    for(let i = 0; i < n; i++) {
        let tile = $("<div class = 'sp'></div>");
        // tile.addClass('sp');
        section.append(tile);
    }
}
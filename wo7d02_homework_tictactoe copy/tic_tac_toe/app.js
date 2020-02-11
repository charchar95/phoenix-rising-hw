$(() => {


const makeGrid = () => {
    for (i=1; i<10; i+=1) {
        const $square = $('<div>').addClass('grid');
        $square.attr("id", i);
        $('#container').append($square);
        console.log(i);
    }
}
makeGrid();



})
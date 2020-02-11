$(() => {


const addListItem = () => {
    console.log( $("#input-box").val() );
    $newItem = $("#input-box").val();
    $listItemDiv = $("<div>").addClass("to-do-item")
    $p = $("<p>").text($newItem);
    $button = $("<button>").addClass("completed")
    $button.text("completed");
    $button.on("click", completeToDo);
    $listItemDiv.append($p)
    $listItemDiv.append($button);
    $("#to-do-list").append($listItemDiv);
    $("#input-box").val("");
}


const completeToDo = (event) => {
$done = $(event.currentTarget).parent();
$done.removeClass("to-do-item")
$done.addClass("done-item").css('background-color', "rgb(136,185,138)")
$('#to-complete').prepend($done)
$(event.currentTarget).text("remove")
$(event.currentTarget).on("click", () => {
    $done.detach();
})
}


$("#submit").on("click", addListItem);


});
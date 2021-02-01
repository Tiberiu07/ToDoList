// Check Off Specific ToDos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete ToDo
$("ul").on("click", "span", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});

$("input[type=text]").keypress(function (event) {
    if (event.which === 13) {
        var toDoText = $(this).val();
        if (toDoText === "") {
            $(this).attr("placeholder", "Insert a Non-Empty To-Do")
        }
        else {
            $(this).attr("placeholder", "Add New To-Do")
            $(this).val("");
            $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + toDoText + "</li>");
        }
    }
})

$("#plus").click(function () {
    $("input[type=text]").fadeToggle();
})
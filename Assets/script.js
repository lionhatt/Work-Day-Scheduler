var d = moment()
var date = moment().format("L");

$("#currentDay").text(d.format('dddd, MMMM Do'));

//function to create TimeBlocks
for (var i = 0; i < 23; i++) {
    var newDiv = $("<div></div>");
    var newP = $("<p></p>");
    var newTextArea = $("<textarea></textarea>");
    $(newTextArea).attr("id", i);
    var newButton = $("<button></button>");
    var newI = $("<i></i>");
    $(newDiv).addClass("time-block row");
    $(newP).addClass("hour");
    $(newButton).addClass("saveBtn");
    $(newI).addClass("far fa-save");
    $(newButton).append(newI);
    $(newButton).attr("value", i)
    $(newDiv).append(newP, newTextArea, newButton);

    if (i >= 9 && i < 12) {
        $(newP).text(i + "AM");
        timeTheme();
        $(".container").append(newDiv);

    } else if (i === 12) {
        $(newP).text(i + "PM");
        timeTheme();
        $(".container").append(newDiv);

    } else if (i > 12 && i <= 17) {
        $(newP).text(i - 12 + "PM");
        timeTheme();
        $(".container").append(newDiv);
    }
}

// function to change the css.background color on textareas base on the time of the day
function timeTheme() {
    if (i < d.format("HH")) {
        $(newTextArea).addClass("past");
    } else if (i === d.format("HH")) {
        $(newTextArea).addClass("present");
    } else if (i > d.format("HH")) {
        $(newTextArea).addClass("future");
    }
}

//click event to store textarea input into localstorage
$("button").on("click", function () {
    event.preventDefault();
    var setTime = $(this).val();
    var text = $(this).siblings("textarea").val();
    localStorage.setItem("Date " + date + ": " + setTime, text)
})

//retireve date from localsotrage on the current date
$(document).ready(function () {
    for (var k = 0; k < 23; k++){
        $("#"+ k).val(localStorage.getItem("Date " + date + ": "+k))
    }
})
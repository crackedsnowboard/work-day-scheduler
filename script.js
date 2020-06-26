$(document).ready(function () {
// Display current date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
})


// get local storage for previoulsy entered items
$(`#${9}`).val(JSON.parse(localStorage.getItem("9")));
$(`#${10}`).val(JSON.parse(localStorage.getItem("10")));
$(`#${11}`).val(JSON.parse(localStorage.getItem("11")));
$(`#${12}`).val(JSON.parse(localStorage.getItem("12")));
$(`#${13}`).val(JSON.parse(localStorage.getItem("13")));
$(`#${14}`).val(JSON.parse(localStorage.getItem("14")));
$(`#${15}`).val(JSON.parse(localStorage.getItem("15")));
$(`#${16}`).val(JSON.parse(localStorage.getItem("16")));
$(`#${17}`).val(JSON.parse(localStorage.getItem("17")));

// Shade color based on past, present, and future
function highlightTime() {
    var hour = parseInt(moment().format("H"));
    console.log(hour);
    
    $(".time-block").each(function () {

        var hourBlock = parseInt($(".buttonRead").attr("data-button"));
        console.log(hourBlock);
        
        if (hourBlock < hour) {
            $(this).addClass("past");
        }
        else if (hourBlock === hour) {
            $(this).removeClass("past");
            $(this).addClass('present');
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
}


$(".buttonRead").on("click", function () {
        event.preventDefault()
        var dataAttribInfo = $(this).attr("data-button");
        var inputUser = $(`#${dataAttribInfo}`).val()
        localStorage.setItem(dataAttribInfo, JSON.stringify(inputUser))
    }
    ); 

    highlightTime();
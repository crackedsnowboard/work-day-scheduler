$(document).ready(function () {
    // #1 Display current date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
})

localStorage.getItem(JSON.parse("9"))

var inputRow = 
JSON.parse(localStorage.getItem(10));


for (var i = 9; i < 19; i++) {
JSON.parse(localStorage.getItem(i));
};


function highlightTime() {
    var hour = parseInt(moment().format("H"));
    console.log(hour);
    
    $(".time-block").each(function () {

        // var hourBlock = parseInt($(this).attr("id"));
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

    // var lastUser = JSON.parse(localStorage.getItem("user")); 

    highlightTime();
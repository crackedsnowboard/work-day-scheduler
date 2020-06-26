$(document).ready(function () {
    // #1 Display current date
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




var inputRow9 = JSON.parse(localStorage.getItem("9"));
console.log(inputRow9);
var inputRow10 = JSON.parse(localStorage.getItem("10"));
console.log(inputRow10);
var inputRow11 = JSON.parse(localStorage.getItem("11"));
console.log(inputRow11);
var inputRow12 = JSON.parse(localStorage.getItem("12"));
console.log(inputRow12);
var inputRow13 = JSON.parse(localStorage.getItem("13"));
console.log(inputRow13);
var inputRow14 = JSON.parse(localStorage.getItem("14"));
console.log(inputRow14);
var inputRow15 = JSON.parse(localStorage.getItem("15"));
console.log(inputRow15);
var inputRow16 = JSON.parse(localStorage.getItem("16"));
console.log(inputRow16);
var inputRow17= JSON.parse(localStorage.getItem("17"));
console.log(inputRow17);

// var input9 = document.querySelector(9);
// input9.textContent = inputRow9

$(`#${9}`).val(JSON.parse(localStorage.getItem("9")));
// $(`#${9}`).text(JSON.parse(localStorage.getItem("9")));
var rownine = $("#row").find("input");
console.log(rownine)
$()
$(".textarea").text("yo");  
$(".hourInput").text("sup");
$("data-time").text("enthe");




for (var i = 9; i < 19; i++) {
JSON.parse(localStorage.getItem(i));
};


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
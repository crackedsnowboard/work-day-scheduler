$(document).ready(function () {
    // #1 Display current date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

})

// #2 figure out Present timeblocks in html via js



// #3 figure out how to shade time blocks based on past, present future. past grey, current hour red, future green

function highlightTime () {
var hour = moment().format("H");
console.log(hour);
var hourInteger = parseInt(hour);
console.log(hourInteger);

// var hourBlock = parseInt($(this).attr("id"));
var hourBlock = $(this).attr("id");
var hourBlockInteger = parseInt(hourBlock);
console.log(hourBlock);
console.log(hourBlockInteger);


// .addClass

}


// function; loop - set green; grey


//  #4 - click time block can enter text event
//  #5 save the event for the that timeblock. Aylay local session storage. // 04 - code drills. 04-signin-localstorage review local storage 
$(".buttonRead").on("click", function () {
    event.preventDefault()
    console.log(this); 

    var dataAttribInfo = $(this).attr("data-button");
    console.log(dataAttribInfo);
    
    var inputUser = $(this).parent().parent().find(".hourInput");
    console.log(inputUser);                   

    var inputAttribInfo = $(this).attr("data-button");
    console.log(inputAttribInfo.val())

    localStorage.setItem("data", JSON.stringify(dataAttribInfo))
    localStorage.setItem("plans", JSON.stringify(inputUser));
}
);

// var lastUser = JSON.parse(localStorage.getItem("user"));


//  #6 when page refresh the saved events persist. local will persist. 

highlightTime();
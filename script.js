$(document).ready(function () {
    // #1 Display current date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

})

// #2 figure out Present timeblocks in html via js
// $("#container").html("hello");
// $("#container")


// #3 figure out how to shade time blocks based on past, present future. past grey, current hour red, future green
var hour = moment().format("h");
console.log(hour);
// function; loop - set green; grey


//  #4 - click time block can enter text event



//  #5 save the event for the that timeblock. Aylay local session storage. // 04 - code drills. 04-signin-localstorage review local storage 
$("button").on("click", function () {
    var inputInfo = event.target;
    console.log(event.target)
    var inputUser = $("#userinput").value()
    localStorage.setItem("plans", JSON.stringify(inputUser));

}
);

//  #6 when page refresh the saved events persist. local will persist. 


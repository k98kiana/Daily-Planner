// The current day will be the first thing displayed.
$("#currentDay").text(new Date());

// Creating variables so program can recognize the current time, and have hours to reporesent a standard 9 to 5.
var currenthour = new Date().getHours();
var standardhours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function dayplanner() {
    for (var i = 0; i < standardhours.length; i++) {
        createtimeblock();
    }

    function createtimeblock(){

        //Creating area for the time blocks to be in.
        var timeblock = $("<div>").addClass("time row");
        $(".container").append(timeblock);

        //Creating the time block and appending it to the section.
        var hourrow = $("<div>").addClass("hour");
        timeblock.append(hourrow);

        hour.text(standardhours[i] + ":00");
    }
}
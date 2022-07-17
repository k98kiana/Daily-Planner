// The current day will be the first thing displayed.
$("#currentDay").text(new Date());

// Creating variables so program can recognize the current time, and have hours to reporesent a standard 9 to 5.
var currenthour = new Date().getHours();
var standardhours = [09, 10, 11, 12, 13, 14, 15, 16, 17];

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

        hourrow.text(standardhours[i] + ":00");

        // Creating a textbox that will be used to add events for each hour.
        var timeevent = $("<textarea>").addClass("description").attr("id", i);
        timeblock.append(timeevent);

        //Creating a save button
        var savebutton = $("<button>").addClass("saveBtn");
        timeblock.append(savebutton);

        var saveBtn = $("<i>").addClass("saveTask fa fa-save");
        savebutton.append(saveBtn);

        // This function will make each hour a certain color to represent if it is in the present, past, or future.
        if (currenthour === standardhours[i]) {
            timeevent.addClass("present");

         } else if (currenthour > standardhours[i]) {
                timeevent.addClass("past");

          } else {
            timeevent.addClass("future");
          }
    }

//Saving all events added to times
$("container").click(function(event) {
    var planinput = event.target;
   
    if (planinput.matches(".saveTask") === true) {
        event.preventDefault();

        var getparent = planinput.parentNode;

        var getplan = getparent.previousElementSibling.value;

        var storage = JSON.parse(localStorage.getItem("taskplan"));
        storage.push(getplan);
        localStorage.setItem("taskplan", JSON.stringify(storage));
        rendertask();
    }
});
}
//Saving events even when page is refresed
function rendertask () {
var storage = JSON.parse(localStorage.getItem("taskplan"));
for (var i = 0; i < storage.length; i++) {
("#" + i).text(storage[i]);
}  
}

//Create time schedule
dayplanner();

// A local storage will be created if there isn't one already
if (localStorage.getItem("taskplan") === null) {
localStorage.setItem("taskplan", JSON.stringify([]));
}


rendertask();


var apppointText = "";
var appointTime = "";
var currentDate;
var currentTime;
var currentContainer;
var tempArray = [];
var storedAppointments;
var returnedAppointments;


$(window).on("load", function (){
    currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
    $('#currentDay').append(currentDate);
    currentTime = moment().format("H");

    function renderAppointments() {
        storedAppointments = JSON.parse(localStorage.getItem("appointments"));
        if (storedAppointments !==null){
            for (let i = 0; i < storedAppointments.length; i++) {
                returnedAppointments = storedAppointments[i];
                details = returnedAppointments.details;
                timeIndex = returnedAppointments.time;
                timeIndex = timeIndex.replace(":00",'');
                if (details !== null) {
                    $("#"+ timeIndex).children('div').children('div').children('textarea').val(details);
                }
                
            }
        }
    }

    renderAppointments();

    for (i = 0; i <=23; i++) {
        currentContainer = i;
        if (currentTime == i) {
            $('#' + currentContainer).addClass("present");
            $('#' + currentContainer).children('div').children('div').children("textarea").addClass("past");}
        }
        else if (currentTime > i) {
            $('#' + currentContainer).addClass("past");
            $('#' + currentContainer).children('div').children('div').children("textarea").addClass("present");
        }
        else  {
            $('#' + currentContainer).addClass("future");
            $('#' + currentContainer).children('div').children('div').children("textarea").addClass("future");
        }
    }   
})

$
var dateEl = document.querySelector("#currentDay");
var currentDate = moment().format('dddd, MMMM Do YYYY');
var currentHour = moment().hours();

// display the date
dateEl.innerHTML = currentDate;

function timeOfDay() {
    $("textarea").each(function(){
        var timeBlock = parseInt($(this).attr("hour"));
        // console.log(timeBlock);
        if(timeBlock < currentHour){
            $(this).addClass("past")
        } else if (timeBlock === currentHour) {
            $(this).addClass("present")
        } else if (timeBlock > currentHour) {
            $(this).addClass("future")
        }
    })
}; 
timeOfDay();

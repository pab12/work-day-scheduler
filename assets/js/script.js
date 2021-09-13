var dateEl = document.querySelector("#currentDay");
var currentDate = moment().format('dddd, MMMM Do YYYY');
var currentHour = moment().hours();

// display the date
dateEl.innerHTML = currentDate;

function timeOfDay() {
    $("textarea").each(function(){
        var timeBlock = parseInt($(this).attr("hour"));
        
        if(timeBlock < currentHour){
            $(this).addClass("past")
        } else if (timeBlock === currentHour) {
            $(this).addClass("present")
        } else if (timeBlock > currentHour) {
            $(this).addClass("future")
        }
    })
}; // save the value of the specific time block when clicked on
$(".saveBtn").on("click", function(){
   var textValue=  $(this).siblings("textarea").val();
   var timeValue = $(this).siblings("textarea").attr("hour");
   console.log(timeValue);
   console.log(textValue);

   localStorage.setItem(timeValue, textValue)
});

// display each task when first appearing on page or refreshing
function getStoreVal() {
    var array = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    array.forEach(function(e){
        $("textarea[hour='" + e + "']").val(localStorage.getItem(e))
    })
};


timeOfDay();
getStoreVal();
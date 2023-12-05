// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('MMMM DD, YYYY'));

var currentHour =  dayjs().hour();
$(".time-block").each(function () {
    var blockHour = $(this).attr('id').split("-")[1];
    
    var textEntry = localStorage.getItem(blockHour);
    var textarea = $(this).find(".description");
    textarea.val (textEntry);

    if (blockHour < currentHour) {
        $(this).find(".description").addClass("past");
    } else if (blockHour == currentHour) {
        $(this).find(".description").addClass('present');
    } else {
        $(this).find(".description").addClass('future');
    }
  });
  
  $('.saveBtn').on('click', function(){
    var key = $(this).parent().attr("id").split("-")[1];

    var value = $(this).parent().find(".description").val();
    localStorage.setItem(key,value);
  });
//The import and export statements have been standardized in ES2015. Although they are not supported in most browsers yet, webpack does support them out of the box.
import jquery_editable_select from 'jquery-editable-select';
require("jquery-editable-select/dist/jquery-editable-select.css");
require("../css/new-event.css");

$(function() {
  // jquery-editable-select is required for this line to work
  $('.event-type').editableSelect();
  $('.event-type.es-input').attr('placeholder','Choose or enter event type');  
  
  var start = new Date();  
  var end = new Date();
  start.setHours(start.getHours() + 1); //next hour for default event start time
  end.setHours(end.getHours() + 2);
  
  //set default event time
  var frmStart = formatDate(start);
  
  var startDInput = $('.event-start .date').val(frmStart).attr('min',frmStart);
  var endDInput = $('.event-end .date').val(formatDate(end)).attr('min',frmStart);
  var startTInput = $('.event-start .time').val(formatTime(start.getHours(),0));  
  var endTInput = $('.event-end .time').val(formatTime(end.getHours(),0));
  
  startDInput.blur(checkEndDatetime);
  startTInput.blur(checkEndDatetime);

  //validate and save event
  $('#submit').click(function () {
    $(".form").addClass("submitted");
    if ($(".form input:invalid").length == 0) 
      alert("All of your information was valid\n\nThanks for your submission!");
  });  
  
  function checkEndDatetime() {    
    try {
      var tStart = startTInput.val() === '' ? [0,0] : startTInput.val().split(':');
      var tEnd = endTInput.val() === '' ? [0,0] : endTInput.val().split(':');
      
      var dtStart = new Date(startDInput.val());
      dtStart.setHours(tStart[0],tStart[1]);    
      var dtEnd = new Date(endDInput.val());
      dtEnd.setHours(tEnd[0],tEnd[1]);  
  
      if (dtEnd < dtStart) {
        dtEnd = dtStart;
        dtEnd.setHours(dtEnd.getHours() + 1);
        var frmEnd = formatDate(dtEnd); 
        endDInput.val(frmEnd).attr('min',formatDate(dtStart));
        endTInput.val(formatTime(dtEnd.getHours(), dtEnd.getMinutes()));   
      }
    }
    catch(e) { 
      console.log("can't convert input: " + e);
    }   
  }

});

/* function isDateSupported() {
  var test = document.createElement("div");
  test.innerHTML = "<input type='date'>";  
  return (test.firstChild.type === 'date');
} */

function formatDate(dt) {
  var year = dt.getFullYear();
  var month = dt.getMonth()+1;
  var day = dt.getDate();
  return year + '-' + (month>9 ? month : '0' + month) + '-' + (day>9 ? day : '0' + day);
}

function formatTime(h,m) {
  return (h>9 ? h : '0' + h) + ':' + (m>9 ? m : '0' + m);
}




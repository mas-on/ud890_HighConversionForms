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
  
  startDInput.blur(function() {
    checkMinValue(startDInput, startTInput);
    checkEndDatetime();
  });

  startTInput.blur(function() {
    checkMinValue(startDInput, startTInput);
    checkEndDatetime();
  });

  endDInput.blur(function() {
    checkMinValue(endDInput, endTInput);
    checkEndDatetime();
  });

  endTInput.blur(function() {
    checkMinValue(endDInput, endTInput);
    checkEndDatetime();
  });

  //validate on blur
  $('.form input,textarea,select').filter('[required]:visible')
    .blur(function() {      
      if (this.checkValidity())
        $(this).removeClass("invalid");
      else
        $(this).addClass("invalid");
    });

  //validate and save event
  $('#submit').click(function () {
    $(".form").addClass("submitted");
    //add validation report

    if ($(".form input:invalid").length == 0) 
      alert("All of your information was valid\n\nThanks for your submission!");
  });  
  
  function checkEndDatetime() {            
    var dtStart = getAndFixDateFrom(startDInput, startTInput);
    var dtEnd =  getAndFixDateFrom(endDInput, endTInput);

    if (dtEnd !== undefined && dtEnd < dtStart) {
      dtEnd = dtStart;
      var frmEnd = formatDate(dtEnd); 
      endDInput.val(frmEnd).attr('min',formatDate(dtStart));
      endTInput.val(formatTime(dtEnd.getHours(), dtEnd.getMinutes()));   
    }    
  }

  function getAndFixDateFrom(dateInput, timeInput) {
    
    var dt = new Date(dateInput.val());      
    if (!isValidDate(dt)) {
      if (dateInput.prop('required')) {
        dt = new Date();
        dt.setMinutes(dt.getMinutes() + 1);
        dateInput.val(formatDate(dt));
      }
      else {
        dt = undefined;
        dateInput.val('');
      }
    }

    var t = (timeInput.val() === '' || timeInput.val() === undefined) ? [0,0] : timeInput.val().split(':');
    if (t.length != 2 || t[0].length != 2 || t[1].length != 2) {
      if (timeInput.prop('required')) {
        timeInput.val(formatTime(0,0));
      }
      else {
        timeInput.val('');
      }
      t = [0,0];
    }
    if (dt !== undefined)
      dt.setHours(t[0],t[1]);
        
    return dt;
  }

  function checkMinValue(dateInput, timeInput) {
    var now = new Date();
    var dt = getAndFixDateFrom(dateInput, timeInput);
    if (dt !== undefined && dt<now) {
      dateInput.val(formatDate(now));
      timeInput.val(formatTime(now.getHours(), now.getMinutes()));
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

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}



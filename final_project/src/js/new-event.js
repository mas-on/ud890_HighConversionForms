//The import and export statements have been standardized in ES2015. Although they are not supported in most browsers yet, webpack does support them out of the box.
import jquery_editable_select from 'jquery-editable-select';
import _db from './lib/estorage.js';
import _cmn from './lib/common.js';

require("jquery-editable-select/dist/jquery-editable-select.css");
require("../css/new-event.css");

$(function () {
  var eType = $('#event-type');
  var eTypeText = $('#event-type.es-input');

  var startDInput = $('.event-start .date');
  var endDInput = $('.event-end .date');
  var startTInput = $('.event-start .time');
  var endTInput = $('.event-end .time');

  var submit = $('#submit');
  var errmsg = $("#err-msg");

  //set event type options
  if (checkStorage())
    fillEventTypes(eType);

  eType.editableSelect();
  eTypeText.attr('placeholder', 'Choose or enter event type');

  setDefaultDateTime();
  setDateTimeCheckers();

  //validate on blur
  $('.form input,textarea,select').filter('[required]:visible')
    .blur(function () {
      if (this.checkValidity())
        $(this).removeClass("invalid");
      else
        $(this).addClass("invalid");
    });

  //validate and save event
  submit.click(function () {
    errmsg.val("");
    $(".form").addClass("submitted");

    if ($(".form input:invalid").length > 0) {
      errmsg.val("Please, fill required fields");
    }
    else {
      if (!checkStorage())
        return;

      checkType();
      saveEventDetails();
      location.href = 'events.html';
    }

    return false;
  });

  /*********functions*****************/
  function fillEventTypes(el) {
    var types = _db.get_from_storage('evt-types');
    $.each(types, function (i, t) {
      el.append($("<option></option>")
        .attr("value", t)
        .text(t));
    });
  }

  function setDefaultDateTime() {
    var start = new Date();
    var end = new Date();
    start.setHours(start.getHours() + 1); //next hour for default event start time
    end.setHours(end.getHours() + 2);

    var frmStart = _cmn.formatDate(start);
    startDInput.val(frmStart).attr('min', frmStart);
    endDInput.val(_cmn.formatDate(end)).attr('min', frmStart);
    startTInput.val(_cmn.formatTime(start.getHours(), 0));
    endTInput.val(_cmn.formatTime(end.getHours(), 0));
  }

  function setDateTimeCheckers() {
    startDInput.blur(function () {
      checkMinValue(startDInput, startTInput);
      checkEndDatetime();
    });

    startTInput.blur(function () {
      checkMinValue(startDInput, startTInput);
      checkEndDatetime();
    });

    endDInput.blur(function () {
      checkMinValue(endDInput, endTInput);
      checkEndDatetime();
    });

    endTInput.blur(function () {
      checkMinValue(endDInput, endTInput);
      checkEndDatetime();
    });
  }
  function checkEndDatetime() {
    var dtStart = getAndFixDateFrom(startDInput, startTInput);
    var dtEnd = getAndFixDateFrom(endDInput, endTInput);

    if (dtEnd !== undefined && dtEnd < dtStart) {
      dtEnd = dtStart;
      var frmEnd = _cmn.formatDate(dtEnd);
      endDInput.val(frmEnd).attr('min', _cmn.formatDate(dtStart));
      endTInput.val(_cmn.formatTime(dtEnd.getHours(), dtEnd.getMinutes()));
    }
  }

  function getAndFixDateFrom(dateInput, timeInput) {
    var dt = new Date(dateInput.val());

    if (!isValidDate(dt)) {
      if (dateInput.prop('required')) {
        dt = new Date();
        dt.setMinutes(dt.getMinutes() + 1);
        dateInput.val(_cmn.formatDate(dt));
      }
      else {
        dt = undefined;
        dateInput.val('');
      }
    }

    var t = (timeInput.val() === '' || timeInput.val() === undefined) ? [0, 0] : timeInput.val().split(':');
    if (t.length != 2 || t[0].length != 2 || t[1].length != 2) {
      if (timeInput.prop('required')) {
        timeInput.val(_cmn.formatTime(0, 0));
      }
      else {
        timeInput.val('');
      }
      t = [0, 0];
    }
    if (dt !== undefined)
      dt.setHours(t[0], t[1]);

    return dt;
  }

  function checkMinValue(dateInput, timeInput) {
    var now = new Date();
    var dt = getAndFixDateFrom(dateInput, timeInput);
    if (dt !== undefined && dt < now) {
      dateInput.val(_cmn.formatDate(now));
      timeInput.val(_cmn.formatTime(now.getHours(), now.getMinutes()));
    }
  }

  function checkStorage() {
    if (!_db.supports_local_storage()) {
      errmsg.val("Please, try another browser");
      return false;
    }
    return true;
  }

});





function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

function checkType() {  
  var types = _db.get_from_storage('evt-types');
  var tested = $("#event-type").val();
  if ($.inArray(tested, types) === -1)
    types.push(tested);

  _db.save_to_storage('evt-types', types);
}

function composeDatetime(parent) {
  var d = parent.find(".date").first().val();
  var t = parent.find(".time").first().val();
  return d + "T" + t + ":00";
}

function saveEventDetails() {
  var events = _db.get_from_storage('events');
  var evt = {};
  $(".form input,textarea:visible").not(".date,.time").each(function () {
    evt[$(this).attr('id')] = $(this).val();
    evt["uid"] = uniqId();
  });
  
  //dates
  evt["event-start"] = composeDatetime($(".form .event-start"));
  evt["event-end"] = composeDatetime($(".form .event-end"));

  events.push(evt);
  _db.save_to_storage('events', events);
}

function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}


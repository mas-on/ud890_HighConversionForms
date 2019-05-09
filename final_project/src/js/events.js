import _db from './estorage.js';
require("../css/events.css");

function fillEvents(events) {
    var errmsg = $("#err");
    
    if (events.length === 0)
        errmsg.text("No events yet");

    events.sort(function (a, b) {
        var aStart = new Date(a["start-date"]);
        var bStart = new Date(b["start-date"]);
        return ((aStart < bStart) ? -1 : ((aStart > bStart) ? 1 : 0));
    });
    
    $.each(events, function (i, e) {
        var id = e["uid"];
        var name = e["event-name"];
        
        var hid = $("<span class='hidden'></span>").text(id);
        var info = $("<span></span>").text(name);
        var del = $("<a href='#' class='right'>Delete</a>")
            .click(function () {
                if (window.confirm("Are you sure you want to delete " + name + "?")) {
                    var e = getEvents().filter(function (item) {
                        return item["uid"] !== id;
                    });
                    saveEvents(e);
                    $("#event-list").empty();
                    fillEvents(e);
                }
                return false;
            });
        
        var item = $("<li></li>").addClass("event-item").append(hid, info, del);
        $("#event-list").append(item);
    });
}

$(function () {
    var errmsg = $("#err");
    if (!_db.supports_local_storage()) {
        errmsg.text("Please, try another browser");
        return;
    }

    var events = getEvents();
    fillEvents(events);

});

function getEvents() {
    return _db.get_from_storage('events');
}

function saveEvents(events) {
    _db.save_to_storage('events', events);;
}



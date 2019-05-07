import _db from './estorage.js';
require("../css/events.css");

$(function() { 
    var errmsg = $("#err");
    if (!_db.supports_local_storage()) {
        errmsg.text("Please, try another browser");
        return;
    }   

    var events = _db.get_from_storage('events');
    if (events.length === 0)
        errmsg.text("No events yet");
    $.each(events, function(i,e) {
        $("#event-list").append($("<li></li>").text(e["event-name"]));
    })
    
});

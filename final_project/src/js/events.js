import _db from './lib/estorage.js';
import _cmn from './lib/common.js';

require("../css/base.css");
require("../css/events.css");

//help functions
function appendHtml(dateEvents) {
    $.each(dateEvents, function (d, evts) {
        var dayItems = $("<ul></ul>").addClass("g-items");

        $.each(evts, function (i, e) {
            //data
            var id = e["uid"];
            var name = e["event-name"];
            var estart = new Date(e["event-start"]);

            //caption elements
            var hid = $("<span></span>").addClass("hidden").text(id);
            var time = _cmn.formatTime(estart.getHours(), estart.getMinutes());
            var info = $("<span title='Click to see details'></span>")
                .text(time + " " + name)
                .addClass("clickable")
                .click(function () {
                    $(this).parent().siblings('.item-details').toggleClass("hidden");
                    return false;
                });
            var del = $("<a href='#'>Delete</a>")
                .addClass("right")
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
            var caption = $("<div></div>").addClass("item-caption").append(del, hid, info);

            //details elements
            var details = $("<div></div>").addClass("item-details hidden");

            if (e["event-end"] !== undefined && e["event-end"].length > 0) {
                var dtEnd = new Date(e["event-end"]);
                var ld = dtEnd.toLocaleDateString();
                var dt = _cmn.formatTime(dtEnd.getHours(), dtEnd.getMinutes());
                //if same day show only time
                if (ld !== d) {
                    dt = ld + " " + dt;
                }
                var end = $("<span></span>").text("until " + dt);
                details.append(end);
            }
            var type = $("<div></div>").text("type: " + e["event-type"]);
            var place = $("<div></div>").text("place: " + e["event-location"]);
            var host = $("<div></div>").text("host: " + e["event-host"]);
            details.append(type, place, host);

            if (e["event-msg"] !== undefined && e["event-msg"].length > 0)
                details.append($("<div></div>").text("info: " + e["event-msg"]));

            if (e["event-guests"] !== undefined && e["event-guests"].length > 0)
                details.append($("<div></div>").text("guests: " + e["event-guests"]));

            //parent elements            
            var item = $("<li></li>").addClass("event-item").append(caption, details);
            if (estart < new Date())
                item.addClass("past");
            dayItems.append(item);
        });

        var day = $("<span></span>").addClass("group-name").text(d);
        var ditem = $("<li></li>").addClass("event-group").append(day, dayItems);
        if (dayItems.children().not(".past").length === 0)
            ditem.addClass("hidden past");

        $("#event-list").append(ditem);
        if ($("#event-list").children().not(".hidden").length === 0)
            $("#show-past").removeClass("hidden");
    });
}

function fillEvents(events) {
    var errmsg = $("#err");

    if (events.length === 0) {
        errmsg.text("No events yet");
        return;
    }

    //sort events by time
    events.sort(function (a, b) {
        return new Date(a["event-start"]) - new Date(b["event-start"]);
    });

    //group events to dictionary (key=date)
    var dateEvents = events.reduce(function (acc, e) {
        var key = new Date(e["event-start"]).toLocaleDateString();
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(e);
        return acc;
    }, {});

    appendHtml(dateEvents);
}

function getEvents() {
    return _db.get_from_storage('events');
}

function saveEvents(events) {
    _db.save_to_storage('events', events);
}

//on load
$(function () {
    var errmsg = $("#err");
    if (!_db.supports_local_storage()) {
        errmsg.text("Please, try another browser");
        return;
    }

    $("#show-past").click(function(){
        $(this).toggleClass("hidden");
        $("#hide-past").removeClass("hidden");
        $("#event-list").children().removeClass("hidden");
    });

    $("#hide-past").click(function(){
        $(this).toggleClass("hidden");
        $("#show-past").removeClass("hidden");
        $.each($("#event-list .g-items"), function(i,el) {
            if ($(el).children().not(".past").length === 0)
                $(el).parent().addClass("hidden");
        });
        
    });

    var events = getEvents();
    fillEvents(events);    
});


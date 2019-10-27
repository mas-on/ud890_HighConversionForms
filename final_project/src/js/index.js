import * as _cmn from './lib/common.js';
import * as _db from './lib/estorage.js';

require("../css/base.css");


//on load
$(function () {    

    if (_cmn.isIE())
        _cmn.removePlaceholders();
  
    //validate on blur
    _cmn.validateOnBlur('.form input'); 

    var errmsg = $("#err-msg");

    //validate and redirect
    $('#submit').click(function () {        
        errmsg.text("");
        $(".form").addClass("submitted");
        if ($(".form :invalid").length > 0) {
            errmsg.text("Please, fill required fields");
        }
        else {
            if (!checkStorage()) return;

            var email = $(".form .email").val();
            var hashRes = _cmn.hash($(".form .pwd").val());
            if (hashRes.then)
                hashRes.then(function(p) { 
                    checkPwd(email, p); 
                });
            else //IE11 
                checkPwd(email, hashRes);                      
        }

        return false;
    });

    function checkStorage() {
        if (!_db.supports_local_storage()) {
          errmsg.text("Please, try another browser");
          return false;
        }
        return true;
    }

    function checkPwd(email, hPwd) {
        alert(hPwd);
        var uPwd = _db.get_from_storage("user");
        if (uPwd == [] || uPwd["email"] !== email || uPwd["pwdhash"] !== hPwd) {
            errmsg.text("Wrong email or password, check, please");
            return;
        }
        else {            
            redirect();
        }
    }

    function redirect(){
        location.href = 'events.html';
    }
});
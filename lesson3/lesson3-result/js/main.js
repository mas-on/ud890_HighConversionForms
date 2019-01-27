$(document).ready(function() { 
    //submit imitation     
    $('#submit').click(function () {
        $(".form").addClass("submitted");
        if ($(".form input:invalid").length == 0) 
          alert("All of your information was valid\n\nThanks for your submission!");
    });    
    
    $('#dif-billing-address').change(function() {
      $('.billing-address').toggleClass('invisible');
    });

    $('#cc-info .cc-number').blur(function() { 
      var ccType = getCreditCardType(this.value);
      if (ccType === 'unknown')
        ccType = "Unknown Type";
      $('#cc-info .cc-type').val(ccType);
    });

    //change progress bar state
    $('input[required]').blur(function() { 
      var cnt = $('input[required]').filter(function () {
        return this.value.length > 0; 
      }).length;
      $('#progbar').val(cnt);
    })

    //get country
    $.ajax({
      url: "http://ip-api.com/json",
      type: 'GET',
      success: function(json) {
        $('input.country').val(json.country);
      },
      error: function(err) {
        console.log("Request failed, error= " + err);
      }
    });
  });
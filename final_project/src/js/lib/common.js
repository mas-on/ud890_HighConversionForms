function formatDate(dt) {
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    return year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day);
  }

function formatTime(h, m) {
    return (h > 9 ? h : '0' + h) + ':' + (m > 9 ? m : '0' + m);
}

function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

function uniqArr(a) {
  var seen = {};
  return a.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

function validateOnBlur(selector) {    
  $(selector).filter(':visible')
    .blur(function () {
      if (this.checkValidity())
        $(this).removeClass("invalid");
      else
        $(this).addClass("invalid");
    });
  }

export default { formatDate, formatTime, uniqId, uniqArr, validateOnBlur }
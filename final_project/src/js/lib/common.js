function isIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  return (msie > 0 || (/Trident\/7\./).test(ua) || document.documentMode == 11);
}

function removePlaceholders() {
  $('[placeholder]:not(.date,.time)').each(function() {    
    var ph = $(this).attr('placeholder');
    this.removeAttribute('placeholder');
    
    var isOpt = ph.indexOf('[optional]') > 0;
    if (isOpt) {
      ph = ph.replace('[optional]','').trim();
    }            
    var lbl = '<div>' + ph + ':</div>';
    if (isOpt) {
      lbl = lbl + '<span class="lbl-tip">optional</span>';
    }
    $(this).before(lbl);
  });
}

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

function hexString(buffer) {
  // convert hash to byte array
  var byteArray = new Uint8Array(buffer); 
  var hashArray = [].slice.call(byteArray);
  // convert bytes to hex string
  var hashHex = hashArray.map(function(value) {
    return ('00' + value.toString(16)).slice(-2);
  });
  return hashHex.join('');
}

//not for long strings
function utf8encode_ie(str) {
  var strUtf8 = unescape(encodeURIComponent(str));
  var arr = new Uint8Array(strUtf8.length);
  for (var i = 0; i < strUtf8.length; i++) {
      arr[i] = strUtf8.charCodeAt(i);
  }
  return arr;
}

function textEncode(msg) {
  if (window.TextEncoder) {
    return new TextEncoder('utf-8').encode(msg);
  }
  //for IE:
  return utf8encode_ie(msg);
}

function hash(message) {
  const data = textEncode(message);
  
  var cryptoObj = window.crypto || window.msCrypto; // IE11
  var digest = cryptoObj.subtle.digest('SHA-256', data);
  
  if (digest.oncomplete !== undefined) { //IE11
    var res = '';
    setTimeout(function() { //gets result synchronously
      res = hexString(digest.result);}, 10); 
    return res;
  } 
  else { //all except IE
    return digest.then(function(value){
      return hexString(value);
    });    
  }  
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

export { isIE, removePlaceholders, formatDate, formatTime, uniqId, uniqArr, hash, validateOnBlur };
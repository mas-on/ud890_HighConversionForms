function formatDate(dt) {
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    return year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day);
  }

function formatTime(h, m) {
    return (h > 9 ? h : '0' + h) + ':' + (m > 9 ? m : '0' + m);
}

export default { formatDate, formatTime }
// Utils.js _ START
function get_query(url) {
  // Source: http://fellowtuts.com/jquery/getting-query-string-values-in-javascript/
  var url = url || document.location.href;
  if (url.indexOf('?') == -1) return false;
  var qs = url.substring(url.indexOf('?') + 1).split('&');
  for (var i = 0, result = {}; i < qs.length; i++) {
    qs[i] = qs[i].split('=');
    result[qs[i][0]] = decodeURIComponent(qs[i][1].replace(/\+/g, '%20'));
  }
  return result;
}

function getSelectionText() {

  return text;
}

function post_file(title) {
  var d = new Date()
  var dd = d.getDate()
  if (dd < 10) dd = '0' + dd;
  var mm = d.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  var yyyy = d.getFullYear();
  filename = yyyy + '-' + mm + '-' + dd;
  if (!title) {
    filename = filename + '-' + +d.getTime();
  } else {
    var slugified = title.toLowerCase().replace(/\W+/g, '-');
    if (slugified != '-') {
      filename = filename + '-' + slugified;
    } else {
      filename = filename + '-' + d.getTime();
    }
  }
  return filename
}

function post_date() {
  var d = new Date()
  return d.toISOString()
}

// Utils.js _ END

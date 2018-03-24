function newWindow(e) {
  var h = 500,
    w = 380;
  window.open(e, '', 'scrollbars=1,height='+Math.min(h, screen.availHeight)+',width='+Math.min(w, screen.availWidth)+',left='+Math.max(0, (screen.availWidth - w)/2)+',top='+Math.max(0, (screen.availHeight - h)/2));
}

// Math.max(x1, x2, x3) возвращает большее из чисел

function newWindowTweet(e) {
  var h = 500,
    w = 1050;
  window.open(e, '', 'scrollbars=1,height='+Math.min(h, screen.availHeight)+',width='+Math.min(w, screen.availWidth)+',left='+Math.max(0, (screen.availWidth - w)/2)+',top='+Math.max(0, (screen.availHeight - h)/2));
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
function calculateTime() {
  var now = moment();
  var weddingDate = moment('2017-11-30');
  var days = weddingDate.diff(now, 'days');
  var hours = weddingDate.diff(now, 'hours');
  var minutes = weddingDate.diff(now, 'minutes');
  var seconds = weddingDate.diff(now, 'seconds');

  $('#days').val(days);
  $('#minutes').val(minutes);
  $('#hours').val(hours);
  $('#seconds').val(seconds);
}

setInterval(calculateTime, 1000)
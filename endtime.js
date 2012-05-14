var endTime = function(time, expr) {
  var timeWas = time;
  if (expr.tag === 'note') {
    return timeWas+expr.dur;
  } else if (expr.tag === 'seq') {
    time += endTime(timeWas, expr.left);
    time += endTime(timeWas, expr.right);
  }

  return time;
};
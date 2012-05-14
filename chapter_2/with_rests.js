var compile = function(musexpr) {
  notes = [];
  startTime = {timer:0};
  compileToNOTE(notes, startTime, false, musexpr);

  return notes;
};

var compileToNOTE = function(notes, startTime, isPar, musexpr) {
  if (musexpr.tag === "note") {
    musexpr.start = startTime.timer;
    if (!isPar) {
      startTime.timer += musexpr.dur;
    }
    notes.push(musexpr);
  } else if (musexpr.tag === "seq") {
    compileToNOTE(notes, startTime, false, musexpr.left);
    compileToNOTE(notes, startTime, false, musexpr.right);
  } else if (musexpr.tag === "par") {
    compileToNOTE(notes, startTime, true, musexpr.left);
    compileToNOTE(notes, startTime, false, musexpr.right);
  } else if (musexpr.tag === "rest") {
    startTime.timer += musexpr.dur;
  }

  return notes;
};
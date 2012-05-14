var compileT = function(expr, notes) {
  if (!notes) {
    notes = [];
  }

  if (expr.tag === "seq") {
    compileT(expr.left, notes);
    compileT(expr.right, notes);
  } else {
    var offset;
    if (notes.length < 1) {
      offset = 0;
    } else {
      var lastNote = notes[notes.length-1];
      offset = (lastNote.start+lastNote.dur);
    }
    expr.start = offset;
    notes.push(expr);
  }

  return notes;
};

var compile = function(musexpr) {
  return compileT(musexpr);
};



var seq = { tag: 'seq',
  left: 
   { tag: 'seq',
     left: { tag: 'note', pitch: 'a4', dur: 250 },
     right: { tag: 'note', pitch: 'b4', dur: 250 } },
  right:
   { tag: 'seq',
     left: { tag: 'note', pitch: 'c4', dur: 500 },
     right: { tag: 'note', pitch: 'd4', dur: 500 } } }


var easySeq = { tag: 'seq',
  left: {
    tag: 'note',
    dur: 500
  },
  right: {
    tag: 'note',
    dur: 250
  }
}

console.log( compile(seq) );
// compile(seq);
//console.log( compile(easySeq) );
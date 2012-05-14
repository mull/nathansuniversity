var prelude = function(expr) {
  var dNote = {tag: 'note', pitch: 'd4', dur: 500};
  return {
    tag: 'seq',
    left: dNote,
    right: expr
  };
};



var arg = { tag: 'seq',
  left: { tag: 'note', pitch: 'c4', dur: 250 },
  right:
   { tag: 'seq',
     left: { tag: 'note', pitch: 'e4', dur: 250 },
     right: { tag: 'note', pitch: 'g4', dur: 500 } } }

console.log(prelude(arg));
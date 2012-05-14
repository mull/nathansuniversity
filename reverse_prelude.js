var reverse = function(expr) {
  if (expr.tag === 'note') {
    return (expr);
  }

  else if (expr.tag === 'seq') { // We're at the end since it's not a sequence
    return {
      tag: 'seq',
      left: reverse(expr.right),
      right: reverse(expr.left)
    };
  }
};


var tree = { tag: 'seq',
  left: { tag: 'note', pitch: 'c4', dur: 250 },
  right: { 
    tag: 'seq',
    left: { tag: 'note', pitch: 'e4', dur: 250 },
    right: { tag: 'note', pitch: 'g4', dur: 500 } 
  } 
};
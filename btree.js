var count = function(tree) {
  var sum = 0;
  if (tree === null) {
    return 0;
  }
  if (tree.data === null) {
    return sum;
  } else {
    sum++;
  }
  if (tree.left !== null) {
    sum += count(tree.left);
  }

  if (tree.right !== null) {
    sum += count(tree.right);
  }

  return sum;
};

var shrub = {
    data: 'b',
    left: {
        data: 'a',
        left: null,
        right: null
    },
    right: null
};

var single_node = {
    data: 'b',
    left: null,
    right: null
};

console.log(count(single_node));
console.log(count(shrub));
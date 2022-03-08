// testing map()
/*
test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});
*/

// filter:

console.groupCollapsed("filter()")
test("filter([], () => {}) should return an array", () => {
  const actual = filter([], () => {});
  equal(Array.isArray(actual), true);
})

test("filter() should return an error if it doesn't receive exactly two parameters ", () => {
  const actual = filter([]);
  const expected = 'Error: filter() takes exactly two parameters';
  equal(actual, expected);
});

test("filter() with fn = () => {true}, should return the array itself", () => {
  const actual = filter([1], () => {return true});
  const result = [1];
  equal(actual[0], result[0])
})

test("filter() should return an error if its first parameter isn't an array", () => {
  const actual = filter('hello', () => {});
  const expected = 'Error: the first parameter passed to filter() must be an array';
  equal(actual, expected);
});

/*
test("filter() should return an error if its second parameter isn't a function", () => {
  const actual = filter([], 'world');
  const expected = 'Error: the second parameter passed to filter() must be a function';
  equal(actual, expected);
})
*/

test("filter() should return an array with just [1] if [1,2] entered and fn = (x) => {x<2}", () => {
  const actual = filter([1,2], (x) => x < 2);
  const expected = [1];
  equal(actual[0],expected[0]);
});

test("filter() should return [1, 2] if [1,2,3] entered and fn = (x) => {x<3}", () => {
  const actual = filter([1,2,3], (x) => x < 3);
  const expected = [1,2];
  equal(actual[0],expected[0]);
  equal(actual[1],expected[1]);
});

test("filter() should return [1,3] if [1,2,3] entered and fn = (x) => x % 2 === 1", () => {
  const actual = filter([1,2,3], (x) => x % 2 === 1);
  const expected = [1,3];
  equal(actual[0],expected[0]);
  equal(actual[1],expected[1]);
})

test("filter() should return the original array if the callback function returns a truthy value", () => {
  const actual = filter([1, 2, 3, 4], (x) => { return 1; } );
  const expected = [1, 2, 3, 4];
  equal(actual[0],expected[0]);
  equal(actual[1],expected[1]);
  equal(actual[2],expected[2]);
  equal(actual[3],expected[3]);
});

// console.log([1, 2, 3, 4].filter((x) => { return 1; }));
console.groupEnd();
// End of filter

/* ------------------------------------------------ */

// every:
console.groupCollapsed("every()");

// Test 1:
test("Test 1: every() should return a boolean", () => {
  const actual = every([], () => {});
  equal(typeof actual, 'boolean');
});

// Test 2:
test("Test 2: every() should return an error if it doesn't receive exactly two parameters", () => {
  const actual = every([]);
  const expected = 'Error: every() takes exactly two parameters';
  equal(actual, expected);
});

// Test 3:
test("Test 3: every() should return an error if its first parameter isn't an array", () => {
  const actual = every('hello', () => {});
  const expected = 'Error: the first parameter passed to every() must be an array';
  equal(actual, expected);
});

// Test 4:
test("Test 4: every() should return false if the callback function always returns false", () => {
  const actual = every([1], () => { return false; } );
  equal(actual, false);
});

//Test 5:
test("Test 5: every() should return true if the return value of the function applied to the only element in the array is true", () => {
  const actual = every([1], (x) => { return x === 1; });
  const expected = true;
  equal(actual, expected);
});

// Test 6:
test("Test 6: every() should return false if the return value of the function applied to the first element is true, but applied to the second element is false", () => {
  const actual = every([1, 2], (x) => { return x === 1; });
  const expected = false;
  equal(actual, expected);
});

// Test 7:
test("Test 7: every() should return false if the return value of the function applied to the first and second elements are true, but applied to the third element is false", () => {
  const actual = every([1, 2, 3], (x) => { return x < 3; });
  const expected = false;
  equal(actual, expected);
});

// Test 8:
test("every() should return true if function(all elements) = true, and false if function(any element) = false", () => {
  const actual = every([4, 1, 2, 3, 5], (x) => { return x < 4; });
  const actual2 = every([4, 1, 2, 3, 5], (x) => { return x < 6; });
  const expected = false;
  const expected2 = true;
  equal(actual, expected);
  equal(actual2, expected2);
});

// Test 9:
test("every() should return true for an empty array", () => {
  const actual = every([], () => {return false});
  const expected = true;
  equal(actual, expected);
});

console.groupEnd();
// End of every

/* ------------------------------------------------ */

// some():
console.groupCollapsed("some()");

// Test 1:
test("Test 1: some() should return a boolean value", () => {
  const actual = some([], () => {});
  equal(typeof actual, 'boolean');
});

// Test 2:
test("Test 2: some() should return true if the return value of the callback function on the only element in the array is true", () => {
  const actual = some([1], (x) => { return x === 1; });
  const expected = true;
  equal(actual, expected);
});

// Test 3:
test("Test 3: some() should return true if the return value of the callback function is false for the first element but true for the second element", () => {
  const actual = some([1, 2], (x) => {return x === 2});
  const expected = true;
  equal(actual, expected);
});

// Test 4:
test("Test 4: some() should return false if the return value of the callback function is false for all elements", () => {
  const actual = some([1, 2, 3, 4], (x) => {return x > 4});
  const expected = false;
  equal(actual, expected);
});

// Test 5:
test("Test 5: some() should return false for an empty array", () => {
  const actual = some([], () => {});
  const expected = false;
  equal(actual, expected);
});

// Test 6:
// We need to learn more about this, bind etc. to work this one out :)
/* test("Test 6: some() should take a third parameter: a value to use as this when executing the callback function", () => {
  const foo = {someValue: 3};
  const actual = some([1, 2, 3], (x) => { return x < this.someValue; }, foo);
  const expected = true;
  equal(actual, expected);
}); */

// Test 7:
test("Test 7: some()'s callback function should take an index parameter", () => {
  const actual = some([1, 2, 3], (element, index) => { return element > index; });
  const expected = true;
  equal(actual, expected);
});

// Test 8:
test("Test 8: some()'s callback function should also take the array itself as a parameter", () => {
  const actual = some([1,2,3], (element, index, array) => {
    if (array) {
      return element === array.length;
    }
  });
  const expected = true;
  equal(actual, expected);
});

// Todo: callback function arguments (stretch goal)

console.groupEnd();
// End of some()

/* ------------------------------------------------ */

// find()
console.groupCollapsed("find()");

// Test 1:
test("Test 1: find() should return the first element of an array if the callback function is always true", () => {
  const actual = find([1], () => {return true});
  const expected = 1;
  equal(actual, expected);
});

// Test 2:
test("Test 2: find() should return undefined if the callback function is always false", () => {
  const actual = find([1], () => {return false;});
  const expected = undefined;
  equal(actual, expected);
});

// Test 3:
test("Test 3: find() should return the first element if the callback function is x === 1, with array of [1]", () => {
  const actual = find([1], (x) => {return x === 1});
  const expected = 1;
  equal(actual, expected);
});

// Test 4:
test("Test 4: find() should return the second element if the callback function is x === 2, with array of [1, 2]", () => {
  const actual = find([1, 2], (x) => {return x === 2});
  const expected = 2;
  equal(actual, expected);
});

// Test 5:
test("Test 5: find() should return undefined for a empty array", () => {
  const actual = find([], ()=>{});
  const expected = undefined;
  equal(actual, expected);
});

console.groupEnd();
// End of find()

/* ------------------------------------------------ */

// reduce()
console.groupCollapsed("reduce()");

// Test 0:
test("Test 0: reduce() should produce an error if no callback function is provided", () => {
  const actual = reduce([]);
  const expected = 'Error: no callback function provided';
  equal(actual, expected);
});

// Test 1:
test("Test 1: reduce() should produce an error if the array is empty and no initialValue is provided", () => {
  const actual = reduce([], () => {});
  const expected = 'Error: array contains no elements, and initialValue is not provided';
  equal(actual, expected);
});

// Test 2:
test("Test 2: reduce() should return the first element of a unitary array with no initalValue provided", () => {
  const actual = reduce([1], () => {});
  const expected = 1;
  equal(actual, expected);
});

// Test 3:
test("Test 3: reduce() should return the value returned by the callback function, applied to the first element in a non-unitary array, if no initalValue provided", () => {
  const actual = reduce([1, 2], (x) => { return x * 3; });
  const expected = 3;
  equal(actual, expected);
});

// Test 4:
test("Test 4: reduce() should return the value calculated by the callback function as applied to first and second element, if the array is of length 3, and no initialValue is provided", () => {
  const actual = reduce([1, 2, 3], (x) => { return x * 3; });
  const expected = 9;
  equal(actual, expected);
});

// Test 5:
test("Test 5: reduce() should return the accumulated value calculated by the callback function as applied to first and second element, if the array is of length 3, and no initialValue is provided", () => {
  const actual = reduce([1, 2, 3], (x, y) => { return x + y; });
  const expected = 6;
  equal(actual, expected);
});

// Test 6:
test("Test 6: reduce() should return the the accumulated value calculated by the callback function as applied to all elements of the array, as initialValue is given", () => {
  const actual = reduce([1], (x, y) => {return y - x}, 2);
  const expected = -1;
  equal(actual, expected);
});

// Test 7:
test("Test 7: reduce() should return the the accumulated value calculated by the callback function as applied to all elements of the array, as initialValue is given", () => {
  const actual = reduce([2], (x, y) => {return y**x}, 0);
  const expected = 1;
  equal(actual, expected);
});

// Test 8:
test("Test 8: reduce()'s callback function should take an index parameter", () => {
  const actual = reduce([1, 2], (accumulator, currentElement, index) => { return accumulator + currentElement + index; }, 4);
  const expected = 8;
  equal(actual, expected);
});

// Test 8a:
test("Test 8: reduce()'s callback function should take an index parameter, with no initialValue", () => {
  const actual = reduce([1, 2], (accumulator, currentElement, index) => {
    return accumulator + currentElement + index;
  });
  const expected = 4;
  equal(actual, expected);
});

// Test 9:
test("Test 9: reduce()'s callback function should also take the array itself as a parameter", () => {
  const actual = reduce([1, 2], (accumulator, currentElement, index, array) => {
    if (array) {
      return accumulator + currentElement + index + array.length;
    }
  }, 4);
  const expected = 12;
  equal(actual, expected);
});

// Test 9a:
test("Test 9: reduce()'s callback function should also take the array itself as a parameter, without an initialValue", () => {
  const actual = reduce([1, 2], (accumulator, currentElement, index, array) => {
    if (array) {
      return accumulator + currentElement + index + array.length;
    }
  });
  const expected = 6;
  equal(actual, expected);
});

console.groupEnd();
// End of reduce()

//console.log([1, 2].reduce((x, y, a, b) => { return x + y + a + b.length; }));

/* ------------------------------------------------ */

// flat()
console.group("flat()");

// Test 1:
test("Test 1: flat() should return an array", () => {
  const actual = flat([]);
  const expected = [];
  equal(actual.length, expected.length);
});

// Test 2:
test("Test 2: for a flat array, flat() should return the array", () => {
  const actual = flat([1]);
  const expected = [1];
  equal(actual[0], expected[0]);
});

// Test 3:
test("Test 3: for an array of depth 1, flat() should return the flattened array", () => {
  const actual = flat([1, [2], 3, [4, 5], 6, 7]);
  const expected = [1, 2, 3, 4, 5, 6, 7];
  equal(actual[1], expected[1]);
  equal(actual[3], expected[3]);
  equal(actual[6], expected[6]);
});

// Test 4:
test("Test 4: for an array of depth 2, flat() should return the flattened array", () => {
  const array = [1, [2], 3, [[4, 5], 6], 7, 8, [9, [10]], 11];
  const actual = flat(array);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  //equal(actual[1], expected[1]);
  //equal(actual[3], expected[3]);
  equal(actual[5], expected[5]);
  equal(actual[9], expected[9]);
//  console.log(actual);
//  console.log(array);
});

// Test 5:
test("Test 5: for an array of depth 3, flat() should return the flattened array", () => {
  const array = [1, [2], 3, [[4, 5, [6]], 7], 8, 9, [10, [11], [[12, 13], 14]], 15];
  const actual = flat(array);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  equal(actual[5], expected[5]);
  equal(actual[12], expected[12]);
});

// Test 6:
test("Test 6: for an array of 'arbitrary' depth, flat() should return the flattened array", () => {
  const array = [1, [2, [3, [4, [5, [6, [7, 8], 9], 10], 11], 12], 13], 14];
  const actual = flat(array);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  equal(actual[7], expected[7]);
  equal(actual[13], expected[13]);
});

// Test 7:
test("Test 7: flat() should only flatten as far as specified by the depth parameter", () => {
  const array = [1, [2, [3, [4, [5, [6, [7, 8], 9], 10], 11], 12], 13], 14];
  const actual = flat(array, 4);
  const expected = [1, 2, 3, 4, 5, [[[[[6, [7, 8], 9]]]]], 10, 11, 12, 13, 14];
  // Flattened:
  equal(actual[4], expected[4]);
  equal(actual[6], expected[6]);
  equal(actual[10], expected[10]);
  // Not flattened:
  // need to pick specific sub-array elements to compare!
  equal(actual[5][0][0][0][0], expected[5][0][0][0][0]);
  equal(actual[5][0][0][0][1][1], expected[5][0][0][0][1][1]);
});

//console.log([1].flat());
//console.log([1, [2], 3, [4, 5], 6, 7].join());
//console.log([1, [2], [[3], 4]][2]);
//console.log(...[1, [2], [[3], 4]][2]);
//console.log([1, [2, [3, [4, [5, [6, [7, 8], 9], 10], 11], 12], 13], 14].flat(4));

console.groupEnd();
// End of flat()
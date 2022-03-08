/*
function map(array) {
  return array;
}
*/

// filter():

function filter(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return 'Error: filter() takes exactly two parameters'
  };
  if (Array.isArray(arr) !== true) {
    return 'Error: the first parameter passed to filter() must be an array'
  }
  filteredArr = []
  // if (fn() == true) {
  //   return arr;
  // }
  for (let i = 0; i < arr.length; i++) {
    // JS's built-in .filter isn't strict? :)
    if (fn(arr[i]) == true) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

// End of filter()

/* ------------------------------------------------ */

// every():

// Test 1:
/* function every() {
  return true
} */

// Test 2:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  return true;
} */

// Test 3:
// function every(arr, fn) {
//   if (arr === undefined || fn === undefined) {
//     return "Error: every() takes exactly two parameters";
//   }
//   if (Array.isArray(arr) === false) {
//     return "Error: the first parameter passed to every() must be an array";
//   }
//   return true;
// }

// Test 4:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Test 5:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Test 6:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  if (fn(arr[1]) === false && arr[1] !== undefined) {
    return false;
  }
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Test 7:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  if (fn(arr[2]) === false && arr[2] !== undefined) {
    return false;
  }
  if (fn(arr[1]) === false && arr[1] !== undefined) {
    return false;
  }
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Refactor after test 7:
// function every(arr, fn) {
//   if (arr === undefined || fn === undefined) {
//     return "Error: every() takes exactly two parameters";
//   }
//   if (Array.isArray(arr) === false) {
//     return "Error: the first parameter passed to every() must be an array";
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i]) === false & arr[i] !== undefined) {
//       return false;
//     }
//   }
//   if (fn(arr[0]) === true) {
//     return true;
//   }
//   if (fn() === false) {
//     return false;
//   }
//   return true;
// }

// Test 8:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === false & arr[i] !== undefined) {
      return false;
    }
  }
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Test 9 (cleaning up/removing redunant code):
function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === false) {
      return false;
    }
  }
  // if (fn(arr[0]) === true) {
  //   return true;
  // }
  // if (fn() === false) {
  //   return false;
  // }
  return true;
}

// End of every()

/* ------------------------------------------------ */

// some():

// Test 1:
/* function some() {
  return false;
} */

// Test 2:
/* function some(arr, fn) {
  if (fn(arr[0]) === true) {
    return true;
  }
  return false;
} */

// Test 3:
/* function some(arr, fn) {
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn(arr[1]) === true) {
    return true;
  }
  return false;
} */

// Refactor after test 3:
/* function some(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      return true;
    }
  }
  return false;
} */

// Test 6:
/* function some(arr, fn, thisArg) {
  
  boundFn = fn.bind(thisArg);

  for (let i = 0; i < arr.length; i++) {
    if (boundFn(arr[i]) === true) {
      return true;
    }
  }
  return false;
} */

// Test 7:
/* function some(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i) === true) {
      return true;
    }
  }
  return false;
} */

// Test 8:
function some(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr) === true) {
      return true;
    }
  }
  return false;
}

// End of some()

/* ------------------------------------------------ */

// find()

// Test 1:
/* function find(arr) {
  return arr[0];
} */

// Test 2:
/* function find(arr, fn) {
  if (fn() === true) {
    return arr[0];
  } 
} */

// Test 3:
/* function find(arr, fn) {
  if (fn(arr[0]) === true) {
    return arr[0];
  } 
} */

// Test 4:
/* function find(arr, fn) {
  if (fn(arr[0]) === true) {
    return arr[0];
  }
  if (fn(arr[1]) === true) {
    return arr[1];
  }
} */

// Refactor after test 4:
function find(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      return arr[i];
    }
  }
}

// End of find()

/* ------------------------------------------------ */

// reduce()

// Test 0:
/* function reduce(arr) {
  return 'Error: no callback function provided';
}; */

// Test 1:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  return 'Error: array contains no elements, and initialValue is not provided';
}; */


// Test 2:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    return arr[0];
  }
  return 'Error: array contains no elements, and initialValue is not provided';
};
 */

// Test 3:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    return fn(arr[0]) || arr[0];
  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 4 solution a:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    if (arr.length < 3){
      return fn(arr[0]) || arr[0];
    }
    return fn(fn(arr[0]));
  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 4 solution b:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    if (arr.length === 1){
      return arr[0];
    }
    if (arr.length === 2) {
      return fn(arr[0]);
    }
    return fn(fn(arr[0]));
  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 4 solution c:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    if (arr.length === 1){
      return arr[0];
    }
    if (arr.length === 2) {
      return fn(arr[0]);
    }
    if (arr.length === 3) {
      return fn(fn(arr[0]));
    }
  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 4 solution c refactor:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    let thingToReturn = arr[0]; // = 'arr[0]';

    for (let i = 1; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn);
      //thingToReturn = 'fn(' + thingToReturn + ')';
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 5 solution
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    let thingToReturn = arr[0];

    for (let i = 1; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i]);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 6 solution
/* function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    //console.log(initialValue);

    let thingToReturn = initialValue || arr[0];

    let startValue;

    if (initialValue) {
      startValue = 0;
    } else {
      startValue = 1;
    }

    for (let i = startValue; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i]);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 7 solution
/* function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    //console.log(initialValue);

    let thingToReturn = arr[0];

    let startValue = 1;

    if (initialValue !== undefined) {
      startValue = 0;
      thingToReturn = initialValue;
    }

    for (let i = startValue; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i]);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 8 solution
/* function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    //console.log(initialValue);

    let thingToReturn = arr[0];

    let startValue = 1;

    if (initialValue !== undefined) {
      startValue = 0;
      thingToReturn = initialValue;
    }

    for (let i = startValue; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i], i);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 9 solution
/* function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    //console.log(initialValue);

    let thingToReturn = arr[0];

    let startValue = 1;

    if (initialValue !== undefined) {
      startValue = 0;
      thingToReturn = initialValue;
    }

    for (let i = startValue; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i], i, arr);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Reduce complete
function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    let previousValue = arr[0];

    let counterStartValue = 1;

    if (initialValue !== undefined) {
      counterStartValue = 0;
      previousValue = initialValue;
    }

    for (let i = counterStartValue; i < arr.length; i++) {
      let currentValue = arr[i];
      previousValue = fn(previousValue, currentValue, i, arr);
    }

    return previousValue;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
};

// End of reduce()

/* ------------------------------------------------ */

// flat()

// Test 1 solution:
/* function flat(arr, depth) {
  return [];
} */

// Test 2 solution:
/* function flat(arr, depth) {
  return arr;
} */

// Test 3 solution:
/* function flat(arr, depth) {
  const result = [];
  
  //for (const element of arr) {
  //  if (Array.isArray(element)) {
  //    result.push([element]);
  //  } else {
  //    result.push(element);
  //  }
  //}
 
  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...element);
    } else {
      result.push(element);
    }
  }
  return result;
} */

// Test 4 solution:
/* function flat(arr, depth) {
  // Make an empty array to hold the result to be returned:
  const result = [];
  // Iterate through each element in the provided array:
  for (const element of arr) {
    // For each element (level 0), first ask if it's an array:
    if (Array.isArray(element)) {
      // If it is, iterate through it:
      for (const element2 of element) {
        // And for each element of this sub-array (level 1), again ask if it's an array:
        if (Array.isArray(element2)) {
          // If it is, push it (spread syntax) to the output array:
          result.push(...element2);
        } else {
          // If not, just push it to the output array:
          result.push(element2);
        }
      }
    } else {
      // If the current element (level 0) is *not* an array, just push it to the output array:
      result.push(element);
    }
  }
  return result;
} */

// Test 5:
/* function flat(arr, depth) {
  // Make an empty array to hold the result to be returned:
  const result = [];
  // Iterate through each element in the provided array:
  for (const element of arr) {
    // For each element (level 0), first ask if it's an array:
    if (Array.isArray(element)) {
      // If it is, iterate through it:
      for (const element2 of element) {
        // And for each element of this sub-array (level 1), again ask if it's an array:
        if (Array.isArray(element2)) {
          // If it is, iterate through it:
          for (const element3 of element2) {
            // And for each element of this sub-array (level 2), again ask if it's an array:
            if (Array.isArray(element3)) {
              // If it is, push it (spread syntax) to the output array:
              result.push(...element3);
            } else {
              // If not, just push it to the output array:
              result.push(element3);
            }
          }
        } else {
          // If not, just push it to the output array:
          result.push(element2);
        }
      }
    } else {
      // If the current element (level 0) is *not* an array, just push it to the output array:
      result.push(element);
    }
  }
  return result;
} */

// Test 5 refactor:
/* function flat(arr, depth) {

  const result = [];

  function recurse(input) {

    for (const element of input) {
      if (Array.isArray(element)) {
        recurse(element);
      } else {
        result.push(element);
      }
    }

  }
  
  //for (const element of arr) {
  //  if (Array.isArray(element)) {
  //    for (const element1 of element) {
  //      if (Array.isArray(element1)) {
  //        for (const element2 of element1) {
  //          if (Array.isArray(element2)) {
  //            result.push(...element2);
  //          } else {
  //            result.push(element2);
  //          }
  //        }
  //      } else {
  //        result.push(element1);
  //      }
  //    }
  //  } else {
  //    result.push(element);
  //  }
  //}
  
  recurse(arr);

  return result;

} */

// (Test 6 passes without changes.)

// Test 7:
function flat(arr, depth = Infinity) {
  // Depth seems to be counted from 0, with 0 being the "top" (flat) level, inclusive.
  const result = [];
  let count = 0;

  // This is broken (or could my test be broken? :)
  function recurse(input) {
    for (const element of input) {
      if (count <= depth) {
        if (Array.isArray(element)) {
          recurse(element);
        } else {
          result.push(element);
        }
      } else {
        // Do we need one final check for el/array here, so we can use the spread operator?
        result.push(element);
      }
      count++;
    }
  }

  recurse(arr);
  return result;
}

// End of flat()
function fibs(n) {
  const array = [];

  for (i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      array.push(i);
    } else {
      newnum = array[i - 1] + array[i - 2];
      array.push(newnum);
    }
  }

  console.log(array);
}

fibs(8);

function fibsRec(n, array) {
  if (!array) {
    return fibsRec(n - 2, [0, 1]);
  } else if (n === 0) {
    return console.log(array);
  } else {
    const newArray = array.slice();
    newArray.push(array[array.length - 1] + array[array.length - 2]);
    fibsRec(n - 1, newArray);
  }
}

fibsRec(8);

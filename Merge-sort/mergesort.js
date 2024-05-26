function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const length = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, length));
    const right = mergeSort(array.slice(length));
    const result = [];

    ((l, r) => {
      let i = 0;
      let j = 0;

      while (i < l.length && j < r.length) {
        l[i] < r[j] ? result.push(l[i++]) : result.push(r[j++]);
      }

      while (i < l.length) result.push(l[i++]);
      while (j < r.length) result.push(r[j++]);
    })(left, right);

    return result;
  }
}

const test = mergeSort([0, 5, 2, 1, 4, 3, 6]);

console.log(test);

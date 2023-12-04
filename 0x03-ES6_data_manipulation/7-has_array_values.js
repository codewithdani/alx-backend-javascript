const hasValuesFromArray = (set, array) => {
  for (const item of array) {
    if (set.has(item)) {
      return true;
    }
  }
  return false;
};

export default hasValuesFromArray;

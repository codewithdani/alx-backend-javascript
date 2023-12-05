const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  const cleanedValues = Array.from(set)
    .filter((value) => value && value.startsWith(startString))
    .map((value) => value && value.slice(startString.length))
    .join('-');

  return cleanedValues;
};

export default cleanSet;

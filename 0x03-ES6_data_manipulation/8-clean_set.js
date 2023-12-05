export default function cleanSet(set, startString) {
  // Use Array.from to convert the set to an array
  const arr = Array.from(set);

  // Use filter to keep only the values starting with startString
  const filteredArray = arr.filter((value) => value.startsWith(startString));

  // Use map to append the rest of the string
  const cleanedValues = filteredArray.map((value) => value.slice(startString.length));

  // Join the values with -
  return cleanedValues.join('-');
}

export default function appendToEachArrayValue(array, appendString) {
  const values = [];
  for (const value of array) {
    values.push(appendString + value);
  }

  return values;
}

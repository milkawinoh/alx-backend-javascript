export default function appendToEachArrayValue(array, appendString) {
  let values = [];
  for (let value of array) {
  values.push(appendString + value);
  }

  return values;
}

export default function getListStudentIds(arrObj) {
  if (!Array.isArray(arrObj)) {
    return [];
  }
  const keys = arrObj.map((obj) => obj.id);
  return keys;
}

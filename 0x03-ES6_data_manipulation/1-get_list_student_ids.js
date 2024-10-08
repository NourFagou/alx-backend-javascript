
export default function getListStudentIds(arr) {
  const keyToAccess = 'id';
  if (Array.isArray(arr)) {
    const valuesArray = arr.map((ele) => ele[keyToAccess]);
    return valuesArray;
  }
  return [];
}

export default function getStudentIdsSum(students) {
  const studentIds = students.map((student) => student.id);
  return studentIds.reduce((accumlator, currentValue) => accumlator + currentValue);
}

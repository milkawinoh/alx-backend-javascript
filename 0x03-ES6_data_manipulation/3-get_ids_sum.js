// eslint-disable-next-line import/extensions
import getListStudentIds from './1-get_list_student_ids.js';

export default function getStudentIdsSum(studentlist) {
  const studentIdList = getListStudentIds(studentlist);
  return studentIdList.reduce((accumulator, currentValue) => accumulator + currentValue);
}

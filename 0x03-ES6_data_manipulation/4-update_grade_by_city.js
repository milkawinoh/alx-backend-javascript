export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const updatedStudents = studentList.map((student) => {
    // Check if the student's location matches the specified city
    if (student.location === city) {
      // Check if the student's ID matches the student ID in newGrades
      if (student.id === newGrades.studentId) {
        // Update the student's grade to the new grade
        student.grade = newGrades.grade;
      } else {
        // If student's ID doesn't match, set grade to 'N/A'
        student.grade = 'N/A';
      }
    }
    return student; // Return the updated student
  });

  // Filter and return only the students whose location matches the specified city
  const filteredStudents = updatedStudents.filter((student) => student.location === city);

  return filteredStudents;
}

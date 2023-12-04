export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to get students in the specified city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Use map to update grades based on newGrades
  const updatedStudents = studentsInCity.map((student) => {
    // Find the matching grade object for the student
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Update the student's grade or set it to 'N/A'
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    // Return a new object with the updated grade
    return { ...student, grade };
  });

  return updatedStudents;
}

const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (sum, student) => sum + student.id, 0,
  );
  return id;
};

export default getStudentIdsSum;

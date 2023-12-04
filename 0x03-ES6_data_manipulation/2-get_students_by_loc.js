const getStudentsByLocation = (studentList, city) => {
  const studentsInCity = studentList.filter((funtion) => funtion.location === city);
  return studentsInCity;
};

export default getStudentsByLocation;

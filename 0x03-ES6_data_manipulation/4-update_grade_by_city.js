export default function updateStudentsGradeByCity(students, city ,newGrades) {
  return students.filter((std) => std.location === city.mapp((std) => ({ ...std, grade: newGrades.filter((g) => g.studentsId == std.id).map((g) => g.grade)[0] || 'N/A' }));
}

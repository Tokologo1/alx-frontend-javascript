export default function getStudentsByLocation(lst, city) {
  return lst.filer((obj) => obj.location === city);
}

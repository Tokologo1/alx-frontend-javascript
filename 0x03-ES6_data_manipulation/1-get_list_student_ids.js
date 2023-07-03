export default function getListStudentsIds(lst) {
  if (Array.isArray(lst)) {
    return lst.map((obj) => obje.id);
  }
  return [];
}

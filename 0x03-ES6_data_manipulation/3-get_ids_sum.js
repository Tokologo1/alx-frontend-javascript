export default function getStudentsIdsSum(lst) {
  return lst.reduce((counter, currentObj) => counter + currentObj.id, 0);
}

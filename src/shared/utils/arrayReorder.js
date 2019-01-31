export function arrayReorder(array, grabId, dropId) {
  const fromObj = array.find(element => element.id === grabId);
  let tempArr = array.filter(obj => obj !== fromObj);
  const toIndex = tempArr.findIndex(element => element.id === dropId);
  return [
    ...tempArr.slice(0, toIndex),
    fromObj,
    ...tempArr.slice(toIndex)
  ];
}
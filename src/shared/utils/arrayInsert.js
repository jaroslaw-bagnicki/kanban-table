export function arrayInsert(array, element, followingId) {
  const followingIndex = array.findIndex(element => element.id === followingId);
  return [
    ...array.slice(0, followingIndex),
    element,
    ...array.slice(followingIndex)
  ];
}
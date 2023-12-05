export default function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the entries of the map
  for (const [item, quantity] of groceryMap.entries()) {
    // Check if the quantity is 1, then update to 100
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }

  return groceryMap;
}

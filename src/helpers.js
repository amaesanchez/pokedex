

/** returns a randomly selected item from array of items*/
function choice(items) {
  const itemsLength = items.length;

  const randomVal = Math.floor(Math.random() * itemsLength);

  return items[randomVal];
}

/** removes the first matching item from items,
 * if item exists, and returns it. Otherwise returns undefined.
 */
function remove(items, item) {
  const itemIdx = items.indexOf(item);

  if (itemIdx >= 0) {
    items.splice(itemIdx, 1);
    return item;
  }

  return undefined;
}

export { choice, remove };

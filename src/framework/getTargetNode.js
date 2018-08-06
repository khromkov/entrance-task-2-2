export default (node, func) => {
  let currentNode = node;
  while (currentNode && currentNode !== document) {
    if (func(currentNode)) {
      return currentNode;
    }

    currentNode = currentNode.parentNode;
  }

  return null;
};

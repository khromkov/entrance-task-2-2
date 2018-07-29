export default (node, func) => {
  let currentNode = node;
  while (currentNode && currentNode.tagName !== 'BODY') {
    if (func(currentNode)) {
      return currentNode;
    }

    currentNode = currentNode.parentNode;
  }

  return null;
};

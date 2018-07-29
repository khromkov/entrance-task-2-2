const getClassName = (block, mod, value) => `${block}_${mod}_${value}`;
const getDataKey = (block, mod) => `${block.toLowerCase()}_${mod}`;

export default block => (node, mod, value) => {
  try {
    const dataKey = getDataKey(block, mod);
    node.classList.remove(getClassName(block, mod, node.dataset[dataKey]));
    node.classList.add(getClassName(block, mod, value));
    node.dataset[dataKey] = value; // eslint-disable-line no-param-reassign
  } catch (e) {
    console.error(e);
  }
};

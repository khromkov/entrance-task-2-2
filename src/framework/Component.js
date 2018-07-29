export default class Component {
  constructor(props = {}) {
    this.props = props;
  }
}

Component.isComponent = Type => Type.prototype instanceof Component;

Component.template = (parts, ...args) => {
  let res = parts[0];
  for (let i = 1; i < parts.length; i += 1) {
    if (args[i - 1]) {
      res += args[i - 1];
    }
    res += parts[i];
  }
  return res;
};

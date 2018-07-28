export default (Component, props, children) => new Component({ ...props, children }).render();

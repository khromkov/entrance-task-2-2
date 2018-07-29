import Component from './Component';

const getProps = (Type, props, children) => {
  const defaultProps = (Type && Type.defaultProps) || null;
  const mergedProps = { ...defaultProps, ...props };
  if (children) {
    mergedProps.children = children;
  }

  return mergedProps;
};

export default (Type, props, children) => {
  if (Component.isComponent(Type)) {
    return new Type(getProps(Type, props, children)).render();
  }
  if (typeof Type === 'function') {
    return Type(getProps(Type, props, children));
  }

  throw Error('invalide component');
};

export const ELEMENT_TYPE = {
  TEXT: 'TEXT_ELEMENT',
};

export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      // 如果子节点是文本, 直接创建一个文本虚拟dom, 后面render时直接取 nodeValue 即可
      children: children.map((child) => {
        return typeof child === 'object' ? child : createTextElement(child);
      }),
    },
  };
}

export function createTextElement(text) {
  return {
    type: ELEMENT_TYPE.TEXT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// children 是一个特殊的 prop, 除此之外都需要赋值给当前节点
export function isProperty(key) {
  return key !== 'children';
}

export function render(element, container) {
  const dom = element.type === ELEMENT_TYPE.TEXT ? document.createTextNode('') : document.createElement(element.type);
  const props = element.props || {};

  // 设置属性值
  Object.keys(props)
    .filter(isProperty)
    .forEach((attr) => {
      dom[attr] = props[attr];
    });

  // 递归渲染子节点
  element.props.children.forEach((child) => {
    render(child, dom);
  });

  container.appendChild(dom);
}

export default {
  createElement,
  render,
};

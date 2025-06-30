function customReact(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  properties: {
    href: "https://react.dev",
    target: "_blank",
  },
  Children: "click me to learn React",
};
const mainContainer = document.querySelector("#root");

customReact(reactElement, mainContainer);

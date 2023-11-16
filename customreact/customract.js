// target root element
const mainContainer = document.querySelector("#root");
// create anchor tag attributes
const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blanck",
  },
  children: "click me to visit google",
};
// insert element to root element
function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  // or
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  mainContainer.appendChild(domElement);
}

customRender(reactElement, mainContainer);

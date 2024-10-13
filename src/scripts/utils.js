
const createElement = (element, attributes = {}, children = []) => {
    if (!element) {
      throw new Error('No element type provided');
    }
  
    const el = document.createElement(element);
  
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
  
    if (typeof children === 'string') {
      el.innerText = children;
    } else if (Array.isArray(children)) {
      children.forEach(child => {
        if (child instanceof Element) {
          el.appendChild(child);
        }
      });
    } else if (children instanceof Element) {
      el.appendChild(children);
    }
  
    return el;
  };
  

  const render = (element, target) => {
    if (!(element instanceof Element)) {
      throw new Error('Invalid element to render');
    }
  
    if (!(target instanceof Element)) {
      throw new Error('Invalid target for rendering');
    }
  
    target.appendChild(element);
    return target;
  };
  
  window.UI = {
    createElement: createElement,
    render: render
  };
  

  const h1 = UI.createElement(
    "h1",
    { id: "title" },
    [
      UI.createElement("span", { style: "color: gray" }, "User"),
      UI.createElement("span", { style: "color: lightgray" }, " Info!")
    ]
  );
  
  const target = document.getElementById("app");
  UI.render(h1, target);
  
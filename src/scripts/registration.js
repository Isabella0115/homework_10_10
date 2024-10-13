document.addEventListener("DOMContentLoaded", function () {
    const createElement = (tag, attributes = {}, children = []) => {
      const element = document.createElement(tag);
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
      if (typeof children === "string") {
        element.textContent = children;
      } else {
        children.forEach(child => {
          if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
          } else {
            element.appendChild(child);
          }
        });
      }
      return element;
    };
  

    const header = createElement("header", {}, [
      createElement("a", { href: "home.html" }, "Home"),
      createElement("a", { href: "login.html", style: "margin-left: 10px;" }, "Log in")
    ]);
  

    const form = createElement("form", { class: "registration-form" }, [
      createElement("div", { class: "form-group" }, [
        createElement("label", { for: "first-name" }, "First Name"),
        createElement("input", { type: "text", id: "first-name", name: "first-name", required: true })
      ]),
      createElement("div", { class: "form-group" }, [
        createElement("label", { for: "last-name" }, "Last Name"),
        createElement("input", { type: "text", id: "last-name", name: "last-name", required: true })
      ]),
      createElement("div", { class: "form-group" }, [
        createElement("label", { for: "city" }, "City"),
        createElement("select", { id: "city", name: "city" }, [
          createElement("option", { value: "" }, "Select City"),
          createElement("option", { value: "yerevan" }, "Yerevan"),
          createElement("option", { value: "gyumri" }, "Gyumri"),
          createElement("option", { value: "vanadzor" }, "Vanadzor")
        ])
      ]),
      createElement("div", { class: "form-group" }, [
        createElement("label", {}, "Gender"),
        createElement("div", {}, [
          createElement("input", { type: "radio", id: "male", name: "gender", value: "male" }),
          createElement("label", { for: "male" }, "Male"),
          createElement("input", { type: "radio", id: "female", name: "gender", value: "female", style: "margin-left: 10px;" }),
          createElement("label", { for: "female" }, "Female")
        ])
      ]),
      createElement("div", { class: "form-group" }, [
        createElement("input", { type: "checkbox", id: "email-opt-in", name: "email-opt-in" }),
        createElement("label", { for: "email-opt-in" }, "Send me Email")
      ]),
      createElement("button", { type: "submit" }, "Submit")
    ]);
  

    document.body.appendChild(header);
    document.body.appendChild(form);
  
  });
  
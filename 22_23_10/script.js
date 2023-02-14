const form = document.getElementById("mainForm");

class InputParent {
  constructor(name, type, id) {
    this.name = name;
    this.type = type;
    this.id = id;
  }

  createInput() {
    this.element = document.createElement("input");
    this.element.name = this.name;
    this.element.type = this.type;
  }

  createLabel(text) {
    const label = document.createElement("label");

    label.textContent = text;
    label.setAttribute("for", this.id);
    label.prepend(this.element);

    form.append(label);
  }
}

class Input extends InputParent {
  constructor(name, types, id) {
    super(name, types, id);
  }
  addPlaceholder(placeholder) {
    this.element.placeholder = placeholder;
  }
}

const input = new Input("input", "input", Date.now());
input.createInput();
input.addPlaceholder("First input");
input.createLabel("Input your text");

class Checkbox extends InputParent {
  constructor(name, types, id) {
    super(name, types, id);
  }
}

const checkbox = new Checkbox("checkbox", "checkbox", Date.now());
checkbox.createInput();
checkbox.createLabel("Checked this checkbox");

class Radio extends InputParent {
  constructor(name, types, id) {
    super(name, types, id);
  }
}

const radio = new Radio("contact", "radio", Date.now());
radio.createInput();
radio.createLabel("Select radio");

const radio1 = new Radio("contact", "radio", Date.now());
radio1.createInput();
radio1.createLabel("Select another radio");

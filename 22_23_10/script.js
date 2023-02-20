class FormConstructor {
  constructor() {
    this.form = document.createElement("form");
  }

  createInput(type, name, labelText) {
    const input = document.createElement("input");
    input.type = type;
    input.name = name;

    const label = this.createLabel(labelText);
    this.form.appendChild(label);
    label.appendChild(input);

    return input;
  }

  createCheckbox(name, value, labelText) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;

    const label = this.createLabel(labelText);
    this.form.appendChild(label);
    label.appendChild(checkbox);

    return checkbox;
  }

  createRadio(name, value, labelText) {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;

    const label = this.createLabel(labelText);
    this.form.appendChild(label);
    label.appendChild(radio);

    return radio;
  }

  createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
  }
}

const myForm = new FormConstructor();

const myInput = myForm.createInput("text", "myInputName", "My Input Label");

const myCheckbox = myForm.createCheckbox(
  "myCheckboxName",
  "myCheckboxValue",
  "My Checkbox Label"
);

const myFirstRadio = myForm.createRadio(
  "myRadioName",
  "myRadioValue",
  "My Radio Label"
);
const mySecondRadio = myForm.createRadio(
  "myRadioName",
  "myRadioValue",
  "My Radio Label"
);

document.body.appendChild(myForm.form);

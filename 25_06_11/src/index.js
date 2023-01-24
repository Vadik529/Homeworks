import "./styles/styles.scss";
import $ from "jquery";
import * as bootstrap from "bootstrap";

const entries = {
  name: "Vadim",
  age: 23,
};

const finalObj = {
  ...entries,
  language: "JS",
  frameworks: "React",
};

$(".block").text("Hello from JQ");

console.log(finalObj);

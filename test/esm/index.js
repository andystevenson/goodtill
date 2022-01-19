import node from "detect-node";
import hello from "@andystevenson/goodtill";
import auth from "@andystevenson/goodtill/authentication";
import login from "@andystevenson/goodtill/authentication/login";

let hw = hello;
if (node) {
  hw = hello;
} else {
  document.querySelector("h1").textContent = "hello browser";
}

console.log({ node, hw });
login();

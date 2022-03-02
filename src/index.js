import "./styles/main.scss";

// Create a class property without a constructor
class Setup {
  name = "Basic Webpack setup";
}
const config = new Setup();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `${config.name}.`;

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Ready!";

// Append heading nodes to the DOM
const app = document.querySelector("#root");
app.append(heading, p);

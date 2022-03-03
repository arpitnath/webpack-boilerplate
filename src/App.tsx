import Counter from "./components/Counter";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>OK Dev Server Up | React Typescript Webpack setup </h1>
        <p>
          <code>NODE ENV:</code> <span>{process.env.NODE_ENV}</span>
          <br />
          <code>Base API:</code> <span>{process.env.BASE_API}</span>
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload 🔥.
        </p>
        <Counter />
      </header>
    </div>
  );
};

export default App;

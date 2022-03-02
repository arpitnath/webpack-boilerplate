import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <h1>
        OK Dev Server Up | React Typescript Webpack setup |{" "}
        {process.env.NODE_ENV} | {process.env.BASE_API}{" "}
      </h1>
      <Counter />
    </>
  );
};

export default App;

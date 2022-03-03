import { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const [hexcode, set] = useState("#fff");

  const getRandomColor = (): void => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    set(color);
  };

  const handleOnClick = (): void => {
    setCount((c) => c + 1);
    getRandomColor();
  };

  const styles = {
    backgroundColor: hexcode,
    borderRadius: "4px",
  };

  return (
    <div>
      <button style={styles} onClick={handleOnClick}>
        Count → {count}
      </button>
    </div>
  );
};

export default Counter;

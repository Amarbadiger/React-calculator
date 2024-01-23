import React, { useState } from "react";
import styles from "../components/Calculator.module.css";
const Calculator = () => {
  const [value, setvalue] = useState("");
  const li = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"];
  const readNum = (e) => {
    if (e.target.innerText == "=") {
      e.target.innerText = "";
      setvalue(eval(value));
    }
    setvalue((prev) => prev + e.target.innerText);
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Card}>
        <div className={styles.inputContainer}>
          <input type="text" readOnly className={styles.input} value={value} />
        </div>
        <div className={styles.numContainer}>
          {li.map((num, id) => {
            return (
              <div onClick={readNum} key={id} className={styles.num}>
                {num}
              </div>
            );
          })}
        </div>
        <button className={styles.clear} onClick={() => setvalue("")}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Calculator;

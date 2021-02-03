import React from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.changed}
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={props.changed}
          className={styles.InputElement}
          value={props.value}
        >
          {props.elementConfig.options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div>
      <label className={styles.Label}>{props.name}</label>
      {inputElement}
    </div>
  );
};

export default Input;

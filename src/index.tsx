import React, { FC, ReactElement } from "react";

// Import styling
import "./style.css";

// Setup a list of aliases
const aliases: {[key: string]: string} = {
  " ": "Space",
  "CONTROL": "Ctrl",
  "SHIFT": "Shft",
  "COMMAND": "Cmd",
  "WINDOWS": "Win",
  "OPTION": "Opt",
  "BACKSPACE": "Bksp",
}

declare type KeyProps = {
  value: string;
  state?: "success" | "error" | "pressed";
  size?: number;
  disabled?: boolean;
  showCursor?: boolean;
};

const SIZE = 64;

const Key: FC<KeyProps> = (props: KeyProps): ReactElement => {
  let presentedValue = props.value;

  // Set single chars to uppercase
  if (props.value.length === 1) {
    presentedValue = presentedValue.toUpperCase();
  }

  // Normalize style of string and check aliases
  if (presentedValue.toUpperCase() in aliases) {
    presentedValue = aliases[presentedValue.toUpperCase()];
  }

  // Check if any of the toggle props are present
  const styleClasses = ["styled-key"];
  if (props.showCursor !== undefined && props.showCursor === false) {
    styleClasses.push("no-cursor");
  }

  if (props.disabled !== undefined && props.disabled === true) {
    styleClasses.push("styled-key-disabled");
  }

  // Set the correct style of the key
  switch (props.state) {
    case "success":
      styleClasses.push("styled-key-success");
      break;
    case "error":
      styleClasses.push("styled-key-error");
      break;
    case "pressed":
      styleClasses.push("styled-key-pressed");
      break;
  }

  // Set the size of the button if specified
  const customStyles = {
    height: props.size === undefined ? SIZE : Math.max(SIZE, props.size),
  }

  return (
    <button className={styleClasses.join(" ")} style={customStyles}>
      {presentedValue}
    </button>
  );
};

export default Key;
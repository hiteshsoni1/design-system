//@flow
import React from "react";
import "./Switch.css";

type props = {
  check: boolean,
  onChange: Function,
  size: number,
  color: string,
  id?: string,
  classes?: string,
  disabled?: boolean,
  onClick: Function,
};
const Switch = ({
  check,
  onChange,
  size,
  color,
  id,
  classes,
  disabled,
  onClick,
}: props) => {
  return (
    <input
      type="checkbox"
      checked={check}
      className={`btn-switch`}
      id={id}
      disabled={disabled}
      onChange={onChange}
      onClick={onClick}
      style={{
        backgroundColor: color,
        "--height": `${size / 2}px`,
        "--width": `${size}px`,
        "--borderRadius": `${size / 4}px`,
      }}
    />
  );
};
// Switch.defaultProps = {
//   onChange: undefined,
//   onClick: undefined,
// };

export default Switch;

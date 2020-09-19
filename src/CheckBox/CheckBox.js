import React from "react";
import PropTypes from "prop-types";
import "./CheckBox.css";

/**
 * Primary <Strong>fff</Strong>
 */
// type props = {
//   /**
//    * fdgfhf
//    */
//   check: boolean,
//   onChange: Function,
//   size: 40 | 80,
//   color: "red" | "blue" | "black",
//   id?: string,
//   classes?: string,
//   disabled?: boolean,
//   onClick: Function,
// };
const CheckBox = ({
  check,
  size,
  color,
  disabled,
  classes,
  id,
  onClick,
}: props) => {
  return (
    <input
      className={`btn-checkbox`}
      id={id}
      type="checkbox"
      disabled={disabled}
      checked={check}
      onClick={onClick}
      style={{
        "--size": `${size / 5}px`,
        "--color": color,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

CheckBox.propTypes = {
  /**
   * Value of checkbox checked or not
   */
  check: PropTypes.bool.isRequired,
  /**
   * Color of Checkbox
   */
  color: PropTypes.oneOf(["Red", "Green", "Yellow"]),
  /**
   * How large should be the checkbox
   */
  size: PropTypes.number,
  /**
   * disbale the checkbox
   */
  disabled: PropTypes.bool,

  /**
   * methode to do something on checkbox
   */
  onClick: PropTypes.func.isRequired,
};

CheckBox.defaultProps = {
  size: 24,
  color: "red",
  disabled: false,
};
export default CheckBox;

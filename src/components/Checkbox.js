import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./CheckBox.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

console.log(styles);

function Checkbox({ checked, children, ...rest }) {
  return (
    <div className={cx("checkbox", "outline")}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          {...rest}
          data-testid="checkbox"
        />
        <div className={cx("icon")}>
          {checked ? (
            <MdCheckBox className={cx("checked")} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default Checkbox;
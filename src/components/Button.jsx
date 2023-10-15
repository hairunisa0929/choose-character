import React from "react";

function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");

  return (
    <button className={className.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

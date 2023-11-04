import React from "react";

export default function Child(props) {
  const data = "i am from child component";
  props.onChildData(data);
  return <div></div>;
}

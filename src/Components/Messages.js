import React from "react";
import "../CSS/messages.css";
function Messages(props) {
  return (
    <>
      <div className="messages-wrapper">{props.children}</div>
    </>
  );
}

export default Messages;

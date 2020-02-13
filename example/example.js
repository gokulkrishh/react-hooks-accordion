import React from "react";
import ReactDOM from "react-dom";

import Accordion from "../index.js";

const Example = () => {
  return (
    <Accordion
      className="accordion"
      title="Accordion Title"
      onToggle={visibility => {
        console.log("visibility -->", visibility);
      }}
    >
      <ul>
        <li>
          <span>Hello</span>
        </li>
        <li>
          <span>How are you</span>
        </li>
        <li>
          <span>I am good</span>
        </li>
      </ul>
    </Accordion>
  );
};

ReactDOM.render(<Example />, document.getElementById("root"));

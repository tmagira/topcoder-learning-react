import { useState } from "react";

import "./styles.scss";

function MineSiteInput() {
  const [names] = useState(["", ""]);

  function addMore() {
    alert('Hello!');
  }

  return (
    <div className="mine-site-input">
      Mine Site Input

      <button id="addMoreButton" onClick={addMore}>Add More</button>
      <button id="doneButton">Done</button>

     

      {names.map((val, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            id={`ore${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default MineSiteInput;

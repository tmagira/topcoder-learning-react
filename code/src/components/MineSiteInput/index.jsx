import { useState } from "react";
import { useHistory } from 'react-router-dom';

import "./styles.scss";

function MineSiteInput() {
  const [names, setNames] = useState([""]);
  const [oreValues, setOreValues] = useState([""]);
  const history = useHistory();

  function handleDoneButton(){
    history.push({
      pathname: '/overview',
      state: {oreNames: oreValues}
    });
  }

  return (
    <div className="mine-site-input">
      Mine Site Input


      <button id="addMoreButton" onClick={() => setNames(names => [...names, ""])}>Add More</button>
      <button id="doneButton" onClick={handleDoneButton}>Done</button>


      {names.map((val, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            id={`ore${index + 1}`}
            onChange={(value) => { //tiap ada perubahan dalam input masukkan valuenya
              let ores = [...oreValues]; //copy isi oreValues saat ini
              ores[index] = value.target.value; //masukkan value input ke array sementara
             setOreValues(ores); //masukkan isi array sementara ke oreValues
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default MineSiteInput;

import { useState } from "react";
const Goku = () => {
  const [currentState, setState] = useState("Kaioken");
  return (
    <div>
      <center>
        <br></br>
        <input
          type="checkbox"
          onChange={() =>
            setState(currentState === "Kaioken" ? "SuperSaiyan" : "Kaioken")
          }
        />
        <h1 className="font-bold text-2xl">{currentState}</h1>
      </center>
    </div>
  );
};
export default Goku;

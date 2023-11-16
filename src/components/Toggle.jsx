import { useState } from "react";
const Toggle = () => {
  const [isVisible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <center>
        <button onClick={handleClick}>Show Message</button>
        {isVisible === true ? <p>Hello! How are you?</p> : null}
      </center>
    </div>
  );
};

export default Toggle;

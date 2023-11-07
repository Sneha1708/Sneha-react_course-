import React from "react";

const Main = () => {
  return (
    <div>
      <b>
        {" "}
        <label for="name">Email Id: &emsp;</label>
        <input id="name" type="box" placeholder="Email ID"></input>
        <br></br>
        <br></br>
        <label for="na">Password: &emsp;</label>
        <input id="na" type="box" placeholder="Password"></input>
        <br></br>
        <br></br>
        <label for="n">Submit: &emsp;</label>
        <input id="n" type="box" placeholder="click"></input>
      </b>{" "}
    </div>
  );
};

export default Main;

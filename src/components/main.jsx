import React from "react";

const Main = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://c4.wallpaperflare.com/wallpaper/415/195/652/spots-reflections-soft-light-wallpaper-preview.jpg")',
      }}
    >
      <center>
        {" "}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUDNeQeepYXY_3caT4iMAYx_w_DB5BmSucg&usqp=CAU"></img>
        <br></br>
        <br></br>
        <br></br>
        <b>
          <label for="name">Email Id: &emsp;&emsp;</label>
          <input id="name" type="box" placeholder="Email ID"></input>
          <br></br>
          <br></br>
          <label for="na">Password: &emsp;&emsp;</label>
          <input id="na" type="box" placeholder="Password"></input>
          <br></br>
          <br></br>
          &emsp;
          <button>SUBMIT</button>
        </b>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </center>
    </div>
  );
};

export default Main;

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://c4.wallpaperflare.com/wallpaper/415/195/652/spots-reflections-soft-light-wallpaper-preview.jpg")',
      }}
    >
      <center>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUDNeQeepYXY_3caT4iMAYx_w_DB5BmSucg&usqp=CAU"></img>
        <br></br>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <br></br>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <br></br>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
          <br></br>
          <br></br>
          <br></br>
        </form>
      </center>
    </div>
  );
};

export default Form;

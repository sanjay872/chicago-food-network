import React, { useState } from "react";

function DonorRegister() {
  const [donorForm, setDonorForm] = useState({
    fn: "",
    ln: "",
    mail: "",
    pwd: "",
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setDonorForm((prev) => {
      let a = { ...prev, ...{ [name]: value } };
      return a;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://api.example.com/post-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donorForm),
    })
      // .then((response) => response.json())
      // .then((data) => {
      //   setResponse(data);
      // })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div style={{ marginLeft: "100px", marginTop: "20px" }}>
      <label style={{ paddingRight: "15px" }}>
        First Name
        <input
          type="text"
          name="fn"
          value={donorForm.fn}
          onChange={handleInputChange}
          style={{ marginLeft: "15px" }}
        />
      </label>
      <label
        style={{ paddingRight: "15px", display: "block", marginTop: "15px" }}
      >
        Last Name
        <input
          type="text"
          name="ln"
          value={donorForm.ln}
          onChange={handleInputChange}
          style={{ marginLeft: "15px" }}
        />
      </label>
      <label
        style={{ paddingRight: "15px", display: "block", marginTop: "15px" }}
      >
        E-mail
        <input
          type="text"
          name="mail"
          value={donorForm.mail}
          onChange={handleInputChange}
          style={{ marginLeft: "15px" }}
        />
      </label>
      <label
        style={{ paddingRight: "15px", display: "block", marginTop: "15px" }}
      >
        Password
        <input
          type="text"
          name="pwd"
          value={donorForm.pwd}
          onChange={handleInputChange}
          style={{ marginLeft: "15px" }}
        />
      </label>
      <button style={{ marginTop: "15px" }} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default DonorRegister;

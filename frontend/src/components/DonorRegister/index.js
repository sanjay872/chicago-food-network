import React, { useState } from "react";

function DonorRegister() {
  const [donorForm, setDonorForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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

    fetch("http://localhost:8080/donor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donorForm),
    })
      .then((response) => {
        let a = response.json();
        window.location.href = '/list';
      })
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
          name="firstName"
          value={donorForm.firstName}
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
          name="lastName"
          value={donorForm.lastName}
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
          name="email"
          value={donorForm.email}
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
          name="password"
          value={donorForm.password}
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

import React, { useState } from "react";

function ReceiverRegister() {
  const [receiverForm, setReceiverForm] = useState({
    firstName: "",
    lastName: "",
    orgName: "",
    email: "",
    foodType: "",
    receiverType: "Individual",
    password: "",
    address: "",
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setReceiverForm((prev) => {
      let a = { ...prev, ...{ [name]: value } };
      return a;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {...receiverForm}
    if (receiverForm.receiverType === "individual") {
      data.orgName = "Individual"
    }

    fetch("https://api.example.com/post-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
      <p style={{ display: "inline", paddingRight: "20px" }}>
        Type of Receiver
      </p>
      <label style={{ paddingRight: "15px" }}>
        <input
          type="radio"
          value="food-bank"
          name="receiverType"
          checked={receiverForm.receiverType === "food-bank"}
          onChange={handleInputChange}
        />
        Food bank
      </label>

      <label style={{ paddingRight: "15px" }}>
        <input
          type="radio"
          value="shelter"
          name="receiverType"
          checked={receiverForm.receiverType === "shelter"}
          onChange={handleInputChange}
        />
        Shelter home
      </label>

      <label>
        <input
          type="radio"
          value="individual"
          name="receiverType"
          checked={receiverForm.receiverType === "individual"}
          onChange={handleInputChange}
        />
        Individual
      </label>

      {receiverForm.receiverType != "individual" && (
        <label
          style={{ paddingRight: "15px", display: "block", marginTop: "15px" }}
        >
          Organisation Name
          <input
            type="text"
            name="orgName"
            value={receiverForm.orgName}
            onChange={handleInputChange}
            style={{ marginLeft: "15px" }}
          />
        </label>
      )}
      <label
        style={{ paddingRight: "15px", display: "block", marginTop: "15px" }}
      >
        First Name
        <input
          type="text"
          name="firstName"
          value={receiverForm.firstName}
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
          value={receiverForm.lastName}
          onChange={handleInputChange}
          style={{ marginLeft: "15px" }}
        />
      </label>

      <label
        style={{
          paddingRight: "15px",
          display: "block",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        Address
        <input
          type="text"
          name="address"
          value={receiverForm.address}
          onChange={handleInputChange}
          style={{ marginLeft: "15px" }}
        />
      </label>

      <p style={{ display: "inline", paddingRight: "20px" }}>
        Type of food accepted
      </p>
      <label style={{ paddingRight: "15px" }}>
        <input
          type="radio"
          value="cooked"
          name="foodType"
          checked={receiverForm.foodType === "cooked"}
          onChange={handleInputChange}
        />
        Cooked Food
      </label>

      <label style={{ paddingRight: "15px" }}>
        <input
          type="radio"
          value="uncooked"
          name="foodType"
          checked={receiverForm.foodType === "uncooked"}
          onChange={handleInputChange}
        />
        Uncooked food
      </label>


      <label style={{ paddingRight: "15px" }}>
        <input
          type="radio"
          value="both"
          name="foodType"
          checked={receiverForm.foodType === "both"}
          onChange={handleInputChange}
        />
        Both
      </label>

      <label
        style={{ paddingRight: "15px", display: "block", marginTop: "15px" }}
      >
        E-mail
        <input
          type="text"
          name="email"
          value={receiverForm.email}
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
          value={receiverForm.password}
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

export default ReceiverRegister;

import React, { useState } from "react";

function ReceiverRegister() {
  const [receiverForm, setReceiverForm] = useState({
    fn: "",
    ln: "",
    name: "",
    mail: "",
    foodType: "",
    type: "Individual",
    pwd: "",
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
    if (receiverForm.type === "individual") {
      data.name = "Individual"
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
          name="type"
          checked={receiverForm.type === "food-bank"}
          onChange={handleInputChange}
        />
        Food bank
      </label>

      <label style={{ paddingRight: "15px" }}>
        <input
          type="radio"
          value="shelter"
          name="type"
          checked={receiverForm.type === "shelter"}
          onChange={handleInputChange}
        />
        Shelter home
      </label>

      <label>
        <input
          type="radio"
          value="individual"
          name="type"
          checked={receiverForm.type === "individual"}
          onChange={handleInputChange}
        />
        Individual
      </label>

      {receiverForm.type != "individual" && (
        <label
          style={{ paddingRight: "15px", display: "block", marginTop: "15px" }}
        >
          Organisation Name
          <input
            type="text"
            name="name"
            value={receiverForm.name}
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
          name="fn"
          value={receiverForm.fn}
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
          value={receiverForm.ln}
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

      <label
        style={{ paddingRight: "15px", display: "block", marginTop: "15px" }}
      >
        E-mail
        <input
          type="text"
          name="mail"
          value={receiverForm.mail}
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
          value={receiverForm.pwd}
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

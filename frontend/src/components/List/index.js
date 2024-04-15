import React, { useEffect, useState } from "react";
import "./index.css";

function List() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // private String firstName;
  // private String lastName;
  // private String email;
  // private String password;
  // private String address;
  // private String latitude;
  // private String longitude;
  // private String miscellaneous;
  // private String orgName;
  // private String receiverType;
  // private String foodType;
  const [list, setList] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@nfs.org",
      orgName: "John organisation",
      receiverType: "Food bank",
      foodType: "food",
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@nfs.org",
      orgName: "John organisation",
      receiverType: "individual",
      foodType: "both",
    },
  ]);
  const [foodType, setFoodType] = useState(null);
  const [cooked, setCooked] = useState(false);
  const [uncooked, setUncooked] = useState(false);
  const [receiverType, setReceiverType] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setLatitude(lat);
          setLongitude(lon);
          let url = `http://localhost:8080/re/filter?lat=${lat}&lon=${lon}`;
          if (cooked && uncooked) {
            url = url + `&foodType=both`;
          } else if (cooked) {
            url = url + `&foodType=cooked`;
          } else if (uncooked) {
            url = url + `&foodType=uncooked`;
          }
          if (receiverType) {
            url = url + `&receiverType=${receiverType}`;
          }

          fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              console.log("list");
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [cooked, uncooked, receiverType]);

  const handleFilterFood = (event) => {
    let { name, checked } = event.target;
    if (name == "cooked") {
      setCooked(checked);
    }
    if (name == "uncooked") {
      setUncooked(checked);
    }
  };

  const handleFilterReceiver = (event) => {
    let { name, value } = event.target;
    setReceiverType(value);
  };

  const handleChat = () => {
    window.location.href = '/chat';
  };

  return (
    <div>
      <h2 style={{marginLeft: "50px"}}>List of receivers near you</h2>
      <div style={{ display: "flex" }}>
        <div className="left-bar">
          <div style={{ paddingTop: "20px", paddingLeft: "50px" }}>
            <p>Filter by</p>
            <label style={{ marginBottom: "20px", display: "block" }}>
              <input
                type="checkbox"
                checked={cooked}
                name="cooked"
                onChange={handleFilterFood}
              />
              cooked Food
            </label>
            <label style={{ marginBottom: "20px", display: "block" }}>
              <input
                type="checkbox"
                checked={uncooked}
                name="uncooked"
                onChange={handleFilterFood}
              />
              Uncooked Food
            </label>
            <label>
              Receiver Type
              <label style={{ paddingRight: "15px", display: 'block' }}>
                <input
                  type="radio"
                  value="food-bank"
                  checked={receiverType === "food-bank"}
                  onChange={handleFilterReceiver}
                />
                Food bank
              </label>
              <label style={{ display: 'block' }}>
                <input
                  type="radio"
                  value="shelter"
                  checked={receiverType === "shelter"}
                  onChange={handleFilterReceiver}
                />
                Shelter
              </label>
              <label style={{ display: 'block' }}>
                <input
                  type="radio"
                  value="individual"
                  checked={receiverType === "individual"}
                  onChange={handleFilterReceiver}
                />
                Individual
              </label>
            </label>
          </div>
        </div>
        {list.length ? (
          <ul>
            {list.map((rec) => (
              <li key={rec.receiverId} className="list">
                <div>
                  {rec.receiverType === "individual" ? (
                    <h3>Individual</h3>
                  ) : (
                    <h3>
                      {rec.orgName} <small>({rec.receiverType})</small>
                    </h3>
                  )}
                  <p>
                    Contact person: {rec.firstName} {rec.lastName}
                  </p>
                  {rec.foodType === "both" ? (
                    <p>
                      Food types accepted: <span className="tag">cooked</span>{" "}
                      <span className="tag">uncooked</span>
                    </p>
                  ) : (
                    <p>
                      Food types accepted:{" "}
                      <span className="tag">{rec.foodType}</span>
                    </p>
                  )}
                </div>
                <div style={{ marginLeft: "400px", position: "absolute" }}>
                  <button onClick={handleChat}>Chat</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p>No List</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;

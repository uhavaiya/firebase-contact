import React, { useState } from 'react'

const Reactcontact = () => {
  const [user, setUser] = useState({
    Name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  const { Name, email, phone, address, message } = user;

  const postData = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://reactform-3a8f6-default-rtdb.firebaseio.com/reactcontact.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        email,
        phone,
        address,
        message,
      })
    }
    )
  };

  return (
    <>
      <div className="container-contact100">
        <div className="wrap-contact100">
          <from className="contact100-form" method="POST">
            <span className="contact100-form-title">Contact Us</span>
            <div className="wrap-input100 rs1-wrap-input100">
              <span className="label-input100">Your Name</span>
              <input
                className="input100"
                type="text"
                name="Name"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                autoComplete="off"
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 rs1-wrap-input100">
              <span className="label-input100">Email</span>
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={getUserData}
                autoComplete="off"
                required
              />
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 rs1-wrap-input100">
              <span className="label-input100">Mobile Number</span>
              <input
                className="input100"
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={user.phone}
                onChange={getUserData}
                autoComplete="off"
                required
              />
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 rs1-wrap-input100">
              <span className="label-input100">Address</span>
              <input
                className="input100"
                type="text"
                name="address"
                placeholder="Enter your address"
                value={user.address}
                onChange={getUserData}
                autoComplete="off"
                required
              />
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Message</span>
              <textarea
                className="input100"
                name="message"
                placeholder="Enter your message here..."
                value={user.message}
                onChange={getUserData}>
              </textarea>

              <span className="focus-input100"></span>
            </div>
            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn" onClick={postData}>
                <span>
                  Submit
                  <i className="fa fa-long-right m-l-7"
                    aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </from>

          <span className="contact100-more">
            for any question contact our 24/7 call center:
            <span className="contact100-more-highlight">+91 123 6989</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Reactcontact

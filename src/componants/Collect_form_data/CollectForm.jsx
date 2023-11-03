import React, { useState } from "react";

export default function CollectForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    let info = {
      email,
      password,
    };
    console.log(info);
    event.preventDefault();
  };

  const btnClick = (e) => {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    a.innerHTML = email;
    b.innerHTML = password;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            onChange={handleEmailChange}
            type="email"
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            onChange={handlePasswordChange}
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={btnClick} className="btn btn-primary">
          Submit
        </button>
      </form>
      <h1 id="a"></h1>
      <h1 id="b"></h1>
    </div>
  );
}

import React, { useState } from "react";

export default function StateObject() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEc = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePc = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleSub = (event) => {
    let info = {
      email,
      password,
    };
    console.log(info);
    event.preventDefault();
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSub}>
        <div classamclassName="mb-3">
          <label for="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleEc}
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
          <div className="mb-3">
            <label for="" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handlePc}
              placeholder="abxd@1234"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

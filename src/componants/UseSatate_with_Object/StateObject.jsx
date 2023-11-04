import React, { useState } from "react";

export default function StateObject() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;

  const handleSub = (event) => {
    console.log(user);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
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
            onChange={handleChange}
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
              onChange={handleChange}
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

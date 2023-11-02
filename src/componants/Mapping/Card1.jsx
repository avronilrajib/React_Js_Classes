import React from "react";
const utility = [
  {
    name: "Rajib Dash",
    age: 21,
    phone: [{ office: "01791830152", home: "01823913194" }],
  },
  {
    name: "Sagar Dash",
    age: 22,
    phone: [{ office: "01791830152", home: "01823913194" }],
  },
];
export default function Card1() {
  const phnNumber = (phn, index) => {
    return (
      <div key={index}>
        <p>{phn.office}</p>
        <p>{phn.home}</p>
      </div>
    );
  };
  const mapping = (info, index) => {
    return (
      <div key={index}>
        <h1>{info.name}</h1>
        <p>{info.age}</p>
        <div>{info.phone.map(phnNumber)}</div>
      </div>
    );
  };

  return (
    <>
      <div>{utility.map(mapping)}</div>
    </>
  );
}

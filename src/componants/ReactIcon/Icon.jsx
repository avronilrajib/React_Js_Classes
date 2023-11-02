import React from "react";
import {
  FaFacebook,
  FaHome,
  FaVideo,
  FaWeightHanging,
  FaUserFriends,
  FaOpera,
  FaEnvelope,
  FaYoutube,
  FaUser,
} from "react-icons/fa";
export default function () {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logoSection">
              <FaFacebook className="iconlogo" />
              <input type="text" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="menuSection">
              <ul>
                <li>
                  <a href="">
                    <FaHome className="iconlogo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaVideo className="iconlogo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaWeightHanging className="iconlogo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaUserFriends className="iconlogo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profileIcon">
              <span>
                <FaOpera className="iconlogo" />
              </span>
              <span>
                {" "}
                <FaEnvelope className="iconlogo" />
              </span>
              <span>
                {" "}
                <FaYoutube className="iconlogo" />
              </span>
              <span>
                <FaUser className="iconlogo" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

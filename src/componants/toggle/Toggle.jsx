import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);

  return (
    <div>
      <div style={{ background: "blue", padding: "1rem", color: "white" }}>
        {toggle && (
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            itaque totam cum eos assumenda dicta fuga. Voluptate laudantium,
            nostrum ipsum dolorum rerum iure iusto reprehenderit voluptas,
            laborum ratione quia quibusdam sint! Obcaecati ut dolorum dolore
            labore placeat rem soluta itaque, laboriosam dolor nobis
            consequuntur eius voluptatem cumque aut a architecto. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Quasi quisquam magni
            hic qui voluptatem commodi, excepturi ab facilis expedita neque nisi
            nihil animi ipsa, necessitatibus labore, esse ipsam harum illo?
          </h3>
        )}

        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <div style={{ background: "green", padding: "1rem", color: "white" }}>
        {toggle2 && (
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rerum
            non animi error odit in, libero facilis praesentium dolorem mollitia
            excepturi minima voluptatibus magni modi? Dolor consectetur
            voluptas, saepe ab odit possimus nam aliquam reprehenderit
            laudantium est, id distinctio tenetur officia qui earum doloribus
            autem minima aspernatur fugit alias dolorem.
          </h3>
        )}
        <div>
          <button
            onClick={() => {
              setToggle2(!toggle2);
            }}
          >
            {toggle2 ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toggle;

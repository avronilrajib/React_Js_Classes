import React from "react";

export default function EventBubbling() {
  const update = (event) => {
    console.log("Child Clicked", event);
    event.stopPropagation();
  };
  const parent = (event) => {
    console.log("Parent ", event);
    event.stopPropagation();
  };
  return (
    <div onClick={parent}>
      <h1>hello everyone</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        dolores mollitia velit nam eaque non porro harum atque nostrum autem
        sit, aperiam, molestiae nisi. Dolore nesciunt mollitia eaque dolor
        recusandae totam sit, amet quidem accusantium ipsa corporis minus alias?
        Quaerat earum quisquam fugit at quo explicabo facilis et ab qui in animi
        a reiciendis inventore totam unde quos ullam debitis corporis quam,
        porro voluptatem. Laudantium voluptatem a recusandae tenetur officiis
        dignissimos nobis blanditiis voluptatibus? Ipsam, quibusdam esse
        deleniti, aperiam harum quas ab labore magni eius repellat aliquam
        voluptate laboriosam. Magni dolorem exercitationem perspiciatis
        adipisci, asperiores corrupti explicabo unde ipsa sapiente.
      </p>
      <button onClick={update}>Read More</button>
    </div>
  );
}

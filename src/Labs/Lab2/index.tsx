import Positions from "./Positions";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2 className="wd-blue-background">Lab 2 - Cascading Style Sheets</h2>
      <Positions />
      <h3>Styling with the STYLE attribute</h3>
      <p id="paragraph1" className="wd-blue-background">
        !!!Style attribute allows configuring look and feel right on the
        element. Although it's very convenient it is considered bad practice and
        you should avoid using the style attribute
      </p>
      <p className="wd-blue-background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed
        facere amet aliquid repellat ratione voluptate suscipit temporibus
        expedita nulla, nihil nam fugiat pariatur, dignissimos dolores ipsa
        recusandae, ad id!
      </p>
      <p className="wd-blue-background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed
        facere amet aliquid repellat ratione voluptate suscipit temporibus
        expedita nulla, nihil nam fugiat pariatur, dignissimos dolores ipsa
        recusandae, ad id!
      </p>
      <p
        style={{ backgroundColor: "purple" }}
        className="wd-white-on-black wd-yellow-on-green"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed
        facere amet aliquid repellat ratione voluptate suscipit temporibus
        expedita nulla, nihil nam fugiat pariatur, dignissimos dolores ipsa
        recusandae, ad id!
      </p>
    </div>
  );
}

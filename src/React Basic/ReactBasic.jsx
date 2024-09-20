import React from "react";
import Student from "../props-example/Student"
import ArrayProps from "../props-example/ArrayProps";
import ChildrenProps from "../props-example/ChildrenPropsExample";
import OneofProps from "../props-example/OneofProps";
import FunctionSample from "../props-example/FunctionSample";

const ReactBasic = () => {
  const itemsA = ["item 1", "item 2", "item 3"];

  {/* Array Props Example */}
  const items = [
    {id: 1, name: "Item 1"},
    {id: 2, name: "Item 2"},
    {id: 3, name: "Item 3"},
  ];

  const handleClick = () => (
    alert("Button Clicked!")
  );

  return (
    <>
      {/* Map Function Example  */}
      <div>App</div>
      <ul>
        {itemsA.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Props Example */}
      <Student name="Kiruba" age={27} isMarried={false} />
      <Student />

      {/* Children Props Example */}
      <ChildrenProps>
        <p>Lorem ipsum 1</p>
        <p>Lorem ipsum 2</p>
        <p>Lorem ipsum 3</p>
      </ChildrenProps>

      {/* Array Props Example */}
      <ArrayProps items={items} />

      {/* One of Props Example */}
      <OneofProps color="green" />

      {/* Function Props Example */}
      <FunctionSample handleClick={handleClick}/>

    </>
  );
};

export default ReactBasic

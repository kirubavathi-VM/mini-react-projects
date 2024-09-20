import React from "react";

const ArrayProps = (props) => {
    const {items} = props;
  return (
    <>
      {/* Array Props Example */}
      <h1>Items Lists</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ArrayProps;

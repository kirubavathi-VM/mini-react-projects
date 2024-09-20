import React from "react";

const Student = (props) => {
  return (
    <>
      {/* Props Example */}
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{props.age}</td>
          </tr>
          <tr>
            <td>is Married</td>
            <td>{props.isMarried ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

// Default Props Example

Student.defaultProps = {
    name: "No Name",
    age: 0,
}

export default Student;

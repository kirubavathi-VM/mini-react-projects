import React from "react";
import PropTypes from 'prop-types';

const OneofProps = (props) => {
    const {color} = props
  return (
    <>
      <p style={{backgroundColor: color, color: "white", padding: "20px", margin:"20px"}} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
        dignissimos maxime debitis perspiciatis inventore ipsam minus dolorum
        hic aperiam, enim illum quos rerum eum fugiat tenetur modi ipsum
        consequuntur perferendis. 
      </p>
      <p>{color}</p>
    </>
  );
};

OneofProps.propTypes = {
    color: PropTypes.oneOf(["red", "yellow", "blue"]).isRequired,
}

export default OneofProps;

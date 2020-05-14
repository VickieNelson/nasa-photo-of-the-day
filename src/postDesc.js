import React from "react";
// import "./post.css";
import styled from "styled-components";

export default function PostDesc(props) {
  return (
    <div className='postDescDiv'>
      <div>
        <p>
          <span className='summary'>"Summary:"</span>{" "}
        </p>
      </div>
      <div>
        <p className='postDesc'>{props.desc}</p>{" "}
      </div>
      <div className='button'>
        <button>Visit NASA.gov</button>
      </div>
    </div>
  );
}

/*FOR MY STYLING DESIGN in this section:

add headline      
add date

Font fam
Font size
font color
parag width
text alignment
add and style button to "visit nasa" link https://www.nasa.gov/

*/

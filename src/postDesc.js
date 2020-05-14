import React from "react";
// import "./post.css";
import styled from "styled-components";
import StyledButton from "./button";

export default function PostDesc(props) {
  return (
    <div className='postDescDiv'>
      <div>
        <p>
          <span className='summary'>"Summary:"</span>{" "}
        </p>
      </div>{" "}
      <div>
        <p className='postDesc'>{props.desc}</p>{" "}
      </div>{" "}
      {/* <div a href='https://www.nasa.gov/multimedia/imagegallery/iotd.html'>
        <StyledButton>More images</StyledButton>
      </div> */}
      <div className='button'>
        <StyledButton>
          <a href='https://www.nasa.gov/multimedia/imagegallery/iotd.html'>
            More images{" "}
          </a>
        </StyledButton>
      </div>
    </div> //closes PostDesc
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
add and style button to "more images" should link to new tab https://www.nasa.gov/multimedia/imagegallery/iotd.html

*/

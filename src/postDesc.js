import React from "react";
// import "./post.css";
import styled from "styled-components";
import StyledButton from "./button";

const Title = styled.p`
  font-family: "Roboto Mono", monospace, sans-serif;
  font-size: 1.6rem;
`;

const Paragraph = styled.p`
  font-family: "Roboto Mono", monospace, sans-serif;
  font-size: 1.4rem;
`;

const PostDivContent = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PostContent = styled.div`
  text-align: left;
  color: #ffffff;
  width: 700px;
`;

export default function PostDesc(props) {
  return (
    <PostDivContent className='postDescDiv'>
      <PostContent>
        <Title>
          <span className='summary'>"Summary:"</span>{" "}
        </Title>
      </PostContent>{" "}
      <PostContent>
        <Paragraph className='postDesc'>{props.desc}</Paragraph>{" "}
      </PostContent>{" "}
      <div className='button'>
        <StyledButton>
          <a href='https://www.nasa.gov/multimedia/imagegallery/iotd.html'>
            More images{" "}
          </a>
        </StyledButton>
      </div>
    </PostDivContent> //closes PostDesc
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

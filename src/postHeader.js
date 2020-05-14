import React from "react";

import styled from "styled-components";

export default function PostHeader(props) {
  return (
    <div className='postHeaderDiv'>
      <h3 className='postTitle'>Astronomy Photo of the Day</h3>

      <p className='postDate'>{props.date}</p>
    </div>
  );
}

/*FOR MY STYLING DESIGN in this section:
Font fam
Font size
font color
*/

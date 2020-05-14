import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #3300ff;
  color: #ffffff;
  font-weight: bolder;
  font-size: 18px;
  border-radius: 24px;
  width: 180px;
  height: 52px;
  margin-top: 60px;
  margin-bottom: 32px;

  &:hover {
    background-color: #ffffff;
    border: 2px solid #3300ff;
    color: #3300ff;
    font-weight: bolder;
  }

  a {
    color: #ffffff;
  }
`;

export default StyledButton;

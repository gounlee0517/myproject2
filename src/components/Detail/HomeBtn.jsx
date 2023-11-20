import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeBtnStyle = styled.button`
  margin-bottom: 10vh;
`;

const HomeBtn = () => {
  const navigate = useNavigate();

  return (
    <HomeBtnStyle
      onClick={() => {
        navigate("/");
      }}
    >
      Home
    </HomeBtnStyle>
  );
};

export default HomeBtn;

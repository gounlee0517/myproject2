import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  color: #d2d1d3;
  padding: 20px;
  background-color: #fc3e54;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <h4>Letters to IVE</h4>
      <p>copyright</p>
    </FooterStyle>
  );
};

export default Footer;

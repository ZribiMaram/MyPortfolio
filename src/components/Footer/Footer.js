import React from "react";
import styled from "@emotion/styled";
import FooterSVG from "../../footer_wave.svg"
const FooterSection = styled.div`
  background-image: url(${FooterSVG});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container"/>
    </FooterSection>
  );
}

export default Footer;

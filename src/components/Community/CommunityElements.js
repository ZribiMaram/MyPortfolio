import styled from "styled-components";

export const ContactWrapper = styled.div`
  padding: 50px 0;
  background-color: #f9f9f9;
`;

export const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 30px;
  justify-items: center; /* Centers the images horizontally */
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  max-height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures image maintains aspect ratio */
    border-radius: 10px; /* Optional: add rounded corners */
  }
`;

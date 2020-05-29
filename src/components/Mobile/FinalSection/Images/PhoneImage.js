import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const WrapperImg = styled.figure`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 4rem auto 0;
`;

const StyledImg = styled(Img)`
  width: 75%;
`;

const PhoneImage = () => {
  const data = useStaticQuery(graphql`
    query {
      phoneImage: file(relativePath: { eq: "endItem.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <WrapperImg>
      <StyledImg
        alt="Imagen celular App Mercadito Chiper"
        fluid={data.phoneImage.childImageSharp.fluid}
      />
    </WrapperImg>
  );
};

export default PhoneImage;

import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const WrapperImg = styled.figure`
  width: 100%;
`;

const StyledImg = styled(Img)`
  border-radius: 1rem;
`;

const ThirdSubMenuImg = () => {
  const data = useStaticQuery(graphql`
    query {
      thirdSubMenu: file(relativePath: { eq: "thirdSubMenu.png" }) {
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
        alt="Camión de Chiper"
        fluid={data.thirdSubMenu.childImageSharp.fluid}
      />
    </WrapperImg>
  );
};

export default ThirdSubMenuImg;

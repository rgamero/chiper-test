import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const WrapperImg = styled.figure`
  display: block;
  text-align: center;
  margin: auto;
`;

const StyledImg = styled(Img)`
  width: 100%;
`;

const MercaditoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      mercaditoImage: file(relativePath: { eq: "mercadito.png" }) {
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
        alt="Logo Mercadito Chiper"
        fluid={data.mercaditoImage.childImageSharp.fluid}
      />
    </WrapperImg>
  );
};

export default MercaditoImage;

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

const EvolveImage = () => {
  const data = useStaticQuery(graphql`
    query {
      evolveImage: file(relativePath: { eq: "itemEvolve.png" }) {
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
        alt="Imagen computador personal"
        fluid={data.evolveImage.childImageSharp.fluid}
      />
    </WrapperImg>
  );
};

export default EvolveImage;

import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import StyledComponentMedia from '../../../utils/mediaQueriesUtils';

const WrapperImg = styled.figure`
  width: 100%;
`;

const StyledImg = styled(Img)`
  height: 25rem;
  border-radius: 1rem;
  ${StyledComponentMedia.tablet`
    height: 35rem;
  `};
`;

const MainImage = () => {
  const data = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "first-slide-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <WrapperImg>
      <StyledImg
        alt="Imagen principal Web Chiper"
        fluid={data.mainImage.childImageSharp.fluid}
      />
    </WrapperImg>
  );
};

export default MainImage;

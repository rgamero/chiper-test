import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import StyledComponentMedia from '../../../../../utils/mediaQueriesUtils';

const WrapperImg = styled.figure`
  width: 100%;
  margin: 0;
  ${StyledComponentMedia.tablet`
    width: 50%;
  `};
`;

const StyledImg = styled(Img)`
  border-radius: 1rem;
`;

const FirstSubMenuImg = () => {
  const data = useStaticQuery(graphql`
    query {
      firstSubMenu: file(relativePath: { eq: "firstSubMenu.png" }) {
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
        alt="Celular con la App de Chiper"
        fluid={data.firstSubMenu.childImageSharp.fluid}
      />
    </WrapperImg>
  );
};

export default FirstSubMenuImg;

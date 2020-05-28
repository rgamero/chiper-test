import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import StyledComponentMedia from '../../../../utils/mediaQueriesUtils';

const Wrapper = styled.figure`
  margin: 0;
  width: 4rem;

  ${StyledComponentMedia.tablet`
    width: 6rem;
  `};
`;

const StyledImg = styled(Img)`
  display: block;
`;

const LogoChiper = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logoChiper.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
    </Wrapper>
  );
};

export default LogoChiper;

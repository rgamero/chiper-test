import React from 'react';
// import loadable from '@loadable/component';

import { Media } from '../utils/mediaQueriesUtils';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Image from '../components/image';

// const CustomComponent = loadable(
//   () =>
//     new Promise((resolve, reject) =>
//       setTimeout(() => resolve(import('../components/image')), 1000)
//     )
// );

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Media lessThan="sm">
      <div>Jueputa</div>
    </Media>
    <Media greaterThanOrEqual="sm">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      ></div>
    </Media>
  </Layout>
);

export default IndexPage;

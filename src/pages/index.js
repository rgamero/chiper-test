import React from 'react';
// import loadable from '@loadable/component';

import { Media } from '../utils/mediaQueriesUtils';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import MobileLayout from '../components/Mobile';

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
      <MobileLayout />
    </Media>
    <Media greaterThanOrEqual="sm"></Media>
  </Layout>
);

export default IndexPage;

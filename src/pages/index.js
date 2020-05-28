import React, { Suspense } from 'react';
// import { lazy } from '@loadable/component';

import { Media } from '../utils/mediaQueriesUtils';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

// const CustomComponent = lazy(
//   () =>
//     new Promise((resolve, reject) =>
//       setTimeout(() => resolve(import('../components/image')), 1000)
//     )
// );

const IndexPage = () => (
  <Suspense fallback={<div>Loading</div>}>
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
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </div>
      </Media>
    </Layout>
  </Suspense>
);

export default IndexPage;

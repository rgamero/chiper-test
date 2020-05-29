import React from 'react';

import { Media } from '../utils/mediaQueriesUtils';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import MobileLayout from '../components/Mobile';
import DesktopLayout from '../components/Desktop';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Media lessThan="sm">
      <MobileLayout />
    </Media>
    <Media greaterThanOrEqual="sm">
      <DesktopLayout />
    </Media>
  </Layout>
);

export default IndexPage;

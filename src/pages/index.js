import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Rspv from '@sections/Rspv';
import Details from '@sections/Details';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Details />
    <Rspv />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;

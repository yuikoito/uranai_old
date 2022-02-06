import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Box mt={'-20'}>
        <Form />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

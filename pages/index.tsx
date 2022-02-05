import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import Calender from '../components/Calender';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Box mt={'-20'}>
        <Calender />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

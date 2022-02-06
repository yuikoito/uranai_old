import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import Description from '../components/Description';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Description />
      <Footer />
    </Box>
  );
};

export default Home;

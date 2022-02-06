import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      {/* <Center mt={'-20'}>
        <Form />
      </Center> */}
      <Footer />
    </Box>
  );
};

export default Home;

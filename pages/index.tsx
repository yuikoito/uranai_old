import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Calender from '../components/Calender';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Calender />
    </Box>
  );
};

export default Home;

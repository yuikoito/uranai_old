import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Calender from '../components/Calender';

const Home: NextPage = () => {
  return (
    <Box>
      <Calender />
    </Box>
  );
};

export default Home;

import { Box, Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { BloodType } from '../models/bloodType';
import BloodTypeSelecter from './BloodTypeSelecter';
import Calender from './Calender';

const Form = () => {
  const [date, setDate] = useState<Date>();
  const [bloodType, setBloodType] = useState<BloodType>();
  const getMyrank = () => {
    if (!date || !bloodType) return;
    axios
      .post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}myrank`, {
        blood_type: bloodType,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
      })
      .then(function (response) {
        console.log(response.data);
      });
  };

  return (
    <Box boxShadow="lg" p="6" rounded="md" bg="white" w={'600px'} maxW={'90%'}>
      <Calender date={date} setDate={setDate} />
      <BloodTypeSelecter bloodType={bloodType} setBloodType={setBloodType} />
      <Button onClick={getMyrank}>診断する</Button>
    </Box>
  );
};

export default Form;

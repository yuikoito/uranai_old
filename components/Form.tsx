import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BloodType } from '../models/bloodType';
import BloodTypeSelecter from './BloodTypeSelecter';
import Calender from './Calender';

const Form = () => {
  const [date, setDate] = useState<Date>();
  const [bloodType, setBloodType] = useState<BloodType>();

  return (
    <Box boxShadow="lg" p="6" rounded="md" bg="white">
      <Calender date={date} setDate={setDate} />
      <BloodTypeSelecter bloodType={bloodType} setBloodType={setBloodType} />
    </Box>
  );
};

export default Form;

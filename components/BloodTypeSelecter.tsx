import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { BloodType } from '../models/bloodType';

type Props = {
  bloodType: BloodType | undefined;
  setBloodType: React.Dispatch<React.SetStateAction<BloodType | undefined>>;
};

const BloodTypeSelecter = ({ bloodType, setBloodType }: Props) => {
  const bloodTypeList: BloodType[] = ['A', 'B', 'AB', 'O'];
  return (
    <Stack direction="row" spacing={4} align="center">
      {bloodTypeList.map((type, index) => {
        return (
          <Button
            colorScheme="teal"
            variant={bloodType === type ? 'solid' : 'outline'}
            key={index}
            onClick={() => setBloodType(type)}
          >
            {type}
          </Button>
        );
      })}
    </Stack>
  );
};

export default BloodTypeSelecter;

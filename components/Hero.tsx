import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Form from './Form';

const Hero = () => {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      backgroundImage={'/images/top.jpg'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Center w={'full'} justify={'center'} gap="10" flexDirection="column">
        <Box
          boxShadow="lg"
          p="6"
          rounded="md"
          bg="white"
          w={'600px'}
          maxW={'90%'}
        >
          <Text fontSize="md">
            干支・生年月日・血液型を使った超細かすぎる占いです。
          </Text>
          <Text fontSize="md">
            占い結果は一日に一回更新され、診断結果は驚きの17,532通り！
          </Text>
          <Text fontSize="md">
            生年月日と血液型を入力するだけで簡単に診断できます。
          </Text>
        </Box>
        <Form />
      </Center>
    </Flex>
  );
};

export default Hero;

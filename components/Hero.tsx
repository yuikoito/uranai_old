import { Box, Center, Flex, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={'70vh'}
      backgroundImage={'/images/top.jpg'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Center w={'full'} justify={'center'}>
        <Box boxShadow="lg" p="6" rounded="md" bg="white">
          <Text fontSize="md">
            うらなえーるは干支・生年月日・血液型を使った超細かすぎる占いです。
          </Text>
          <Text fontSize="md">
            占い結果は一日に一回更新され、診断結果は驚きの17,532通り！
          </Text>
          <Text fontSize="md">
            生年月日と血液型を入力するだけで簡単に診断できます。
          </Text>
        </Box>
      </Center>
    </Flex>
  );
};

export default Hero;

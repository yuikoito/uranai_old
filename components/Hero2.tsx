import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Stack
      direction={{ base: 'column-reverse', md: 'row' }}
      w={'full'}
      h={'70vh'}
      backgroundImage={'/images/top.jpg'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Flex
        px={{ base: 4, md: 10 }}
        pt={{ base: 0, md: 10, lg: 14 }}
        pb={{ base: 6, md: 10, lg: 14 }}
        flex={1}
        align={'center'}
        justify={'center'}
      >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text as={'span'} color={'white'}>
              うらなえーる
            </Text>
          </Heading>
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
          {/* <Stack direction={{ base: "column", md: "row" }}>
            <CommonButton onClick={move}> {t.start}</CommonButton>
          </Stack> */}
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/* <Image
          alt={'Image'}
          objectFit={'contain'}
          src={'/images/eyes.gif'}
          w={{ base: '100%', md: '80%' }}
        /> */}
      </Flex>
    </Stack>
  );
};
export default Hero;

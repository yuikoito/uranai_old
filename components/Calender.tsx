import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { AiFillCaretDown } from 'react-icons/ai';

const Calender = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [calenderState, setCalenderState] = useState<
    'year' | 'month' | 'date' | 'selected'
  >('year');
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const formattedDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    return `${yyyy}/${mm}/${dd}`;
  };
  const OriginalDatePicker = () => {
    const onSelect = (date: Date, type: typeof calenderState) => {
      setDate(date);
      setCalenderState(type);
    };

    switch (calenderState) {
      case 'year':
        return (
          <DatePicker
            selected={date}
            onChange={(date) => onSelect(date!!, 'month')}
            showYearPicker
            inline
          />
        );
      case 'month':
        return (
          <DatePicker
            selected={date}
            onChange={(date) => onSelect(date!!, 'date')}
            showMonthYearPicker
            inline
          />
        );
      case 'date':
        return (
          <DatePicker
            selected={date}
            onChange={(date) => {
              onSelect(date!!, 'selected');
              onClose();
            }}
            inline
          />
        );
      default:
        return null;
    }
  };
  return (
    <Box boxShadow="lg" p="6" rounded="md" bg="white">
      <InputGroup
        onClick={() => {
          onOpen();
          setCalenderState('year');
        }}
      >
        <Input
          placeholder="生年月日を選んでください"
          value={formattedDate(date)}
        />
        <InputRightElement>
          <Icon as={AiFillCaretDown} color="green.500" />
        </InputRightElement>
      </InputGroup>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW="90%"
          h="400px"
          alignItems="center"
          justifyContent="center"
        >
          <ModalHeader>{calenderState.toLocaleUpperCase()}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <OriginalDatePicker />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Calender;

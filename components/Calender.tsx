import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiFillCaretDown } from 'react-icons/ai';

const Calender = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [calenderState, setCalenderState] = useState<
    'default' | 'year' | 'month' | 'date' | 'selected'
  >('default');
  const onSelect = (date: Date, type: typeof calenderState) => {
    setDate(date);
    setCalenderState(type);
  };
  const formattedDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    return `${yyyy}/${mm}/${dd}`;
  };
  switch (calenderState) {
    case 'default':
      return (
        <InputGroup onClick={() => setCalenderState('year')}>
          <Input placeholder="生年月日を選んでください" />
          <InputRightElement>
            <Icon as={AiFillCaretDown} color="green.500" />
          </InputRightElement>
        </InputGroup>
      );
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
          onChange={(date) => onSelect(date!!, 'selected')}
          inline
        />
      );
    default:
      return (
        <Input
          value={formattedDate(date)}
          onClick={() => setCalenderState('year')}
        />
      );
  }
};

export default Calender;

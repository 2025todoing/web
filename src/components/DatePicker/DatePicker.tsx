import styled from '@emotion/styled';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker = ({ selectedDate, onDateChange }: DatePickerProps) => {
  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    onDateChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    onDateChange(newDate);
  };

  return (
    <Container>
      <DateButton onClick={handlePrevDay}>
        <span>◀</span>
      </DateButton>
      <DateDisplay>
        <Month>{format(selectedDate, 'M월', { locale: ko })}</Month>
        <DayAndWeek>
          <Day>{format(selectedDate, 'd일', { locale: ko })}</Day>
          <WeekDay>{format(selectedDate, '(EEEE)', { locale: ko })}</WeekDay>
        </DayAndWeek>
      </DateDisplay>
      <DateButton onClick={handleNextDay}>
        <span>▶</span>
      </DateButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  margin: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const DateButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 24px;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    color: #333;
    background: #f0f0f0;
  }
`;

const DateDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 240px;
`;

const Month = styled.div`
  font-size: 20px;
  color: #666;
  margin-bottom: 8px;
`;

const DayAndWeek = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

const Day = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #333;
`;

const WeekDay = styled.div`
  font-size: 20px;
  color: #666;
`;

export default DatePicker; 
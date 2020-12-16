import React , { useState } from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  addDays,
  addMonths,
  getYear,
  getMonth,
  getDate,
  getWeeksInMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 900px;
  justify-content: center;
  align-items: center;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  button {
    cursor: pointer;
    outline: none;
    background: transparent;
    border: none;
    font-size: 50px;
    padding: 30px;
  }

  .showingMonthAndYear_box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    width: 300px;
    height: 80px;
  }
`;

const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);

  .sevenDays_box {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 7%;
  }

  .dayOfWeek_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 7);
    font-size: 16px;
    font-weight: bold;
    background-color: khaki;

    &:first-child {
      color: red;
    }

    &:last-child {
      color: royalblue;
    }
  }

  .month_box {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .week_box {
    display: flex;
    height: calc(100% / 6);
  }

  .date_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% /7);
    border-radius: 50%;
    margin: 10px;
    /* background-color: rgba(0, 0, 0, 0.1); */
    font-size: 30px;
    color: black;

    &.different_month {
      color: rgba(0, 0, 0, 0.3);
    }

    &.same_day {
      border-radius :30%;
      background-color: thistle;
    }
  }
`;

const Calendar = () => {
  const [ date, setDate ] = useState(new Date());
  const [ seletedDate, setSeletedDate ] = useState('');

  const sevenDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  const addMonth = () => {
    const changedDate = addMonths(date, 1);

    const nextYear = getYear(changedDate);
    const nextMonth = getMonth(changedDate);

    setDate(new Date(nextYear, nextMonth));
  };

  const minusMonth = () => {
    const changedDate = subMonths(date, 1);

    const previousYear = getYear(changedDate);
    const previousMonth = getMonth(changedDate);

    setDate(new Date(previousYear, previousMonth));
  };

  const weeksInHeaderMonth = getWeeksInMonth(date);
  const dateRange = Array(7).fill(1);
  const weekRagne = Array(weeksInHeaderMonth).fill(1);
  const showingYearInHeader = getYear(date);
  const showingMonthInHeader = getMonth(date);

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <button onClick={minusMonth}><MdChevronLeft /></button>
        <div className='showingMonthAndYear_box'>
          {format(date, 'MMMM yyyy')}
        </div>
        <button onClick={addMonth}>
          <MdChevronRight />
        </button>
      </CalendarHeader>
      <CalendarBody>
        <div className='sevenDays_box'>
          {
            sevenDays.map(item => {
              return (
                <div className='dayOfWeek_box' key={item}>
                  <span className='text'>{item}</span>
                </div>
              );
            })
          }
        </div>
        <div className='month_box'>
          {
            weekRagne.map((week, nthWeek) => {
              return (
                <div className='week_box' key={nthWeek}>
                  {
                    dateRange.map((date, dateIndex) => {
                      let increasingDays = nthWeek * 7 + dateIndex;
                      let displayDate = addDays(startOfWeek(new Date(showingYearInHeader, showingMonthInHeader)), increasingDays);
                      let currentMonth = getMonth(displayDate);
                      let sameMonth = showingMonthInHeader === currentMonth ? '' : 'different_month';

                      let todayYear = getYear(new Date());
                      let todayMonth = getMonth(new Date());
                      let todayDate = getDate(new Date());
                      let todaySelector = format(displayDate, 'yyyy-MM-d') === format(new Date(todayYear, todayMonth, todayDate), 'yyyy-MM-d') ? 'same_day' : '';
                      return (
                        <div className={`date_box ${sameMonth} ${todaySelector}`}>
                          <span className='text'>{format(displayDate, 'd')}</span>
                        </div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </CalendarBody>
    </CalendarWrapper>
  );
};

export default Calendar;

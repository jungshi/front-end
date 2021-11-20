import React, { useState, useEffect } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import styled from "styled-components";
import { DayPickerSingleDateController } from "react-dates";

const StyledWrapper = styled.div`
  .CalendarDay__highlighted_calendar {
    background: black;
    color: #484848;
  }
  .DateInput {
    width: 30%;
  }
`;

const MultiDatePickerCalendar = ({ datesHandler, old_date }) => {
  const [dates, setDates] = useState(old_date);

  const handleDateChange = (date) => {
    const wasPreviouslyPicked = dates.some((d) => d.isSame(date));
    if (wasPreviouslyPicked) {
      if (dates.length >= 5) {
        window.alert("최대 4일까지만 선택이 가능합니다");
        return;
      }
      setDates((previousDates) => previousDates.filter((d) => !d.isSame(date)));
    } else {
      if (dates.length >= 4) {
        window.alert("최대 4일까지만 선택이 가능합니다");
        return;
      }
      setDates((previousDates) => [...previousDates, date]);
    }
  };

  useEffect(() => datesHandler(dates), [dates, datesHandler]);

  return (
    <StyledWrapper>
      <DayPickerSingleDateController
        onDateChange={handleDateChange}
        isDayHighlighted={(day) => dates.some((d) => d.isSame(day, "day"))}
      />
    </StyledWrapper>
  );
};
export default MultiDatePickerCalendar;

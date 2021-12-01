import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CalendarAdmin() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
      <>
        <DatePicker
          showTimeSelect
          minDate={new Date()}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <DatePicker
          showTimeSelect
          minDate={new Date()}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </>
    );
  };

export default CalendarAdmin
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      minDate={new Date()}
      showTimeSelect 
      selected={startDate} 
      onChange={(date) => setStartDate(date)} 
    />
  );
};

export default Calendar


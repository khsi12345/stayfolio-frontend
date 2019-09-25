import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'Style/custom.scss';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    return (
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => {
          this.props.onChangeDate(startDate, endDate);
          this.setState({ startDate, endDate });
        }}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => {
          this.setState({ focusedInput });
        }}
      />
    );
  }
}

export default DatePicker;

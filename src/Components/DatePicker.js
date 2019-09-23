import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'Style/custom.scss';
import moment from 'moment';

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
    console.log(moment(startDate).format('LL'), '-', moment(endDate).format('LL'));
    return (
      <div className="App">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={startDate}
          endDate={endDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => {
            this.setState({ focusedInput });
          }}
        />
      </div>
    );
  }
}

export default DatePicker;

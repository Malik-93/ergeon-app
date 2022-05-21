import * as React from 'react';
import ReactCalendar, { CalendarProps } from 'react-calendar';
import './styles.css';
type Props = CalendarProps & {
    onChange: any;
    value: any;
}
const defaultProps = {
    onChange: undefined,
    value: undefined
}
const Calendar = (props: Props) => {
    return (
        <div className='calendar-container'>
            <ReactCalendar onChange={props.onChange} value={props.value} />
        </div>
    )
}
Calendar.defaultProps = defaultProps;
export default Calendar;


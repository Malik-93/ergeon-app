import React from 'react';
import 'react-calendar/dist/Calendar.css'
import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header';
import { AutoComplete } from './components/Input/index';
import data from './mockData.json';

function App() {
  const [date, setDate] = React.useState(new Date());
  const [isCalendar, setIsCalendar] = React.useState(true)
  return (
    <div className='app'>
      <Header onClick={setIsCalendar} />
      {
        isCalendar ?
          <>
            <h1 className='text-center'>Calendar</h1>
            <div className='calendar-container'>
              <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
              <span className='bold'>Selected Date:</span>{' '}
              {date.toDateString()}
            </p>

          </>
          :
          <>
            <h1 className='text-center'>Auto complete input</h1>
            <div className='calendar-container'>
          <AutoComplete
            inputStyle={{ backgroundColor: "#fff" }}
            optionsStyle={{ backgroundColor: "#fff" }}
            data={data}
            iconColor="Turquoise"
          />
          </div>
          </>
      }
    </div>
  );
}

export default App;

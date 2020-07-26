import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ScheduleComponent, Inject, Week, Day, Month, DragAndDrop } from '@syncfusion/ej2-react-schedule';


class App extends Component {

  data = {
    dataSource: [
      {
        Id: 1,
        StartTime: new Date(2020, 7, 26),
        EndTime: new Date(2020, 7, 26),
        Subject: 'Justin Clark'
      }
    ]
  }

  render() {
    return (
      <ScheduleComponent eventSettings={this.data} timezone='Asia/Kolkata'>
        <Inject services={[Week, Day, Month, DragAndDrop ]} />
      </ScheduleComponent>
    );
  }
}

export default App;
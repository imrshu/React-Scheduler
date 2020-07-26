import React, { Component } from 'react';
import './App.css';

import { ScheduleComponent, Inject, Week, Day, Month, DragAndDrop } from '@syncfusion/ej2-react-schedule';


class App extends Component {
  render() {
    return (
      <ScheduleComponent
       quickInfoTemplates={{header: '#headerTemplate', content: '#contentTemplate', footer: '#footerTemplate'}}
       timezone='Asia/Kolkata'>
        <Inject services={[Week, Day, Month, DragAndDrop ]} />
      </ScheduleComponent>
    );
  }
}

export default App;
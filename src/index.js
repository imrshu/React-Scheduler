import { Schedule, Day, Week, WorkWeek, DragAndDrop } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, DragAndDrop);

let scheduleObj = new Schedule({
  height: '550px',
  quickInfoTemplates: {
    header: '#headerTemplate',
    content: '#contentTemplate',
    footer: '#footerTemplate'
  }
});

scheduleObj.appendTo('#root');
import {makeAutoObservable} from "mobx";

class CalendarTodosStore {
    daysTodos= {
        '8122024':[
            { type: 'warning', content: 'This is warning even 1111111111t' },
            { type: 'success', content: 'This is very long usual event......' },
            { type: 'error', content: 'This is error event 11111111.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
        ]
    }

    constructor() {
        makeAutoObservable(this);
    }

}

const calendarTodosStore = new CalendarTodosStore();
export default calendarTodosStore;

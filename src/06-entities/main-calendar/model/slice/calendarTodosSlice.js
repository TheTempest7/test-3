import {makeAutoObservable} from "mobx";

class CalendarTodosStore {
    daysTodos= {
        '08.12.2024':[
            { type: 'warning', content: 'This is warning even 1111111111t' , start: '8:00' , end: '10:00' },
            { type: 'success', content: 'This is very long usual event......', start: '9:00' , end: '11:00' },
            { type: 'error', content: 'This is error event 11111111.', start: '10:00' , end: '12:00' },
            { type: 'error', content: 'This is error event 2.' , start: '11:00' , end: '13:00'},
            { type: 'error', content: 'This is error event 3.', start: '12:00' , end: '14:00' },
            { type: 'error', content: 'This is error event 4.' , start: '13:00' , end: '15:00'},
        ]
    }

    constructor() {
        makeAutoObservable(this);
    }

    deleteOneDeal(dayId,dealIndex){
        this.daysTodos[dayId] = this.daysTodos[dayId].filter((_,index)=>index!==dealIndex)
    }

    createDeal(dayId,dealContent, {start, end}){
        if(this.daysTodos[dayId]) {
            this.daysTodos[dayId].push({type: 'warning', content:dealContent,start, end})
        } else {
            this.daysTodos[dayId]=[{type: 'warning', content:dealContent,start, end}]
        }
    }

    updateDeal(updatedDeal, dayId, index){
        this.daysTodos[dayId][index]=updatedDeal;
    }

}

const calendarTodosStore = new CalendarTodosStore();
export default calendarTodosStore;

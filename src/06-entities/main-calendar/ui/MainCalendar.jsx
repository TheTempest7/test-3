import {CalendarComponent} from "07-shared/ui/CalendarComponent/CalendarComponent.jsx";
import {observer} from "mobx-react";
import calendarTodosStore from "../model/slice/calendarTodosSlice.js";
import {toJS} from "mobx";
import {useCallback} from "react";

export const MainCalendar = observer( () => {
    const calendarData =  toJS(calendarTodosStore.daysTodos);

    const getListData = useCallback( (value) => {
        const dateKey = ''+ value.date()+(value.month() + 1)+value.year();
        return calendarData[dateKey] || [];
    },[calendarData])

    return <div>
        <CalendarComponent getListData={getListData}/>
    </div>
})
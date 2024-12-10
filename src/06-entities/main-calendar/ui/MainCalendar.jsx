import {CalendarComponent} from "07-shared/ui/CalendarComponent/CalendarComponent.jsx";
import {observer} from "mobx-react";
import calendarTodosStore from "../model/slice/calendarTodosSlice.js";
import {toJS} from "mobx";
import {useCallback} from "react";
import {useNavigate} from "react-router";

export const MainCalendar = observer( () => {
    const navigate = useNavigate();

    const calendarData =  toJS(calendarTodosStore.daysTodos);

    const getListData = useCallback( (value) => {
        const dateId = value.format('DD.MM.YYYY');
        return calendarData[dateId] || [];
    },[calendarData]);

    const onCellClick = useCallback((value, info) => {
        if(info?.source==='date') {
            const dateId = value.format('DD.MM.YYYY')
            navigate(`/${dateId}/day-deals`)
        }

    },[navigate]);

    return <div>
        <CalendarComponent getListData={getListData} onSelect={onCellClick}/>
    </div>
})
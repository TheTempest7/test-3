import {CalendarComponent} from "07-shared/ui/CalendarComponent/CalendarComponent.jsx";
import {observer} from "mobx-react";
import calendarTodosStore from "../model/slice/calendarTodosSlice.js";
import {toJS} from "mobx";
import {useCallback} from "react";
import {useNavigate} from "react-router";
import {getDateId} from "../lib/utils.js";

export const MainCalendar = observer( () => {
    const navigate = useNavigate();

    const calendarData =  toJS(calendarTodosStore.daysTodos);

    const getListData = useCallback( (value) => {
        const dateId = getDateId(value);
        return calendarData[dateId] || [];
    },[calendarData]);

    const onCellClick = useCallback((value) => {
        const dateId = getDateId(value);
        navigate(`/${dateId}/day-deals`)
    },[navigate]);

    return <div>
        <CalendarComponent getListData={getListData} onSelect={onCellClick}/>
    </div>
})
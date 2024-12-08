import {Badge, Calendar} from "antd";
import PropTypes from 'prop-types';
import {memo} from "react";

 const CustomCalendar = ({getListData, onSelect}) => {

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

        const monthCellRender = (value) => {
            const num = getMonthData(value);
            return num ? (
                <div className="notes-month">
                    <section>{num}</section>
                    <span>Backlog number</span>
                </div>
            ) : null;
        };

        const dateCellRender = (value) => {
            const listData = getListData(value);
            return (
                <ul className="events">
                    {listData.map((item) => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))}
                </ul>
            );
        };

        const cellRender= (current, info) => {
            if (info.type === 'date') return dateCellRender(current);
            if (info.type === 'month') return monthCellRender(current);
            return info.originNode;
        };


    return <Calendar  onSelect={onSelect} cellRender={cellRender}/>
}

CustomCalendar.propTypes = {
    /**
     * getListData - функция возвращающая данные отображаемые в ячейке дня
     *
     * принимает аргумент - объект с датой
     */
    getListData: PropTypes.func.isRequired,
    /**
     * onSelect - функция вызываемая при клике на ячейку дня
     *
     * принимает аргумент - объект с датой
     */
    onSelect: PropTypes.func
}

export const CalendarComponent = memo(CustomCalendar);
import {Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {TimePicker} from "antd/lib";
import dayjs from "dayjs";
import {useState} from "react";
import PropTypes from "prop-types";
import calendarTodosStore from "06-entities/main-calendar/index.js";
import {dealTimeInitialState} from "../lib/utils.js";

import s from './AddNewDeal.module.scss';

export const AddNewDeal = ({dayId, onClose}) => {

    const [currentDealTime, setCurrentDealTime] = useState(dealTimeInitialState);
    const [currentDeal, setCurrentDeal] = useState('');

    const onChange = (time, timeString, id) => {
        if(id==='TimePickerStart') {
            setCurrentDealTime(prev=>({...prev, start:timeString || '00:00'}))
        }
        if(id==='TimePickerEnd') {
            setCurrentDealTime(prev=>({...prev, end:timeString || '00:00' }))
        }
    };

    const onSubmitDealHandler = () => {
        if(currentDeal && currentDealTime!==dealTimeInitialState) {
            calendarTodosStore.createDeal(dayId,currentDeal,currentDealTime);
            setCurrentDeal('');
            setCurrentDealTime(dealTimeInitialState);
            onClose();
        }
    }


return <div className={s.wrapper}>
    <Input
        rootClassName={s.input}
        value={currentDeal}
        onChange={(e)=>{setCurrentDeal(e.target.value)}}
        placeholder="New deal"
        suffix={<PlusOutlined onClick={onSubmitDealHandler} />}
        maxLength={100}
    />
    <TimePicker
        rootClassName={s.timePicker}
        id={'TimePickerStart'}
        onChange={(time, timeString)=> onChange(time,timeString, 'TimePickerStart')}
        format={'HH:mm'}
        value={dayjs(currentDealTime.start,'HH:mm')}
    />
    <TimePicker
        rootClassName={s.timePicker}
        id={'TimePickerEnd'}
        onChange={(time, timeString)=> onChange(time,timeString, 'TimePickerEnd')}
        format={'HH:mm'}
        value={dayjs(currentDealTime.end,'HH:mm')}
    />
</div>
}

AddNewDeal.propTypes = {
    dayId: PropTypes.string.isRequired,
    onClose: PropTypes.func
}

import {Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {TimePicker} from "antd/lib";
import dayjs from "dayjs";
import { useEffect, useState} from "react";
import PropTypes from "prop-types";
import calendarTodosStore from "06-entities/main-calendar/index.js";

 export const EditDeal = ({deal, dayId, dealCurrentIndex, onClose}) => {

    const [currentDeal, setCurrentDeal] = useState(deal)

    const onChangeTimeDealHandler = (timeString, id) => {
        if(id==='EditTimePickerStart') {
            setCurrentDeal(prev=>({...prev, start:timeString || '00:00'}))
        }
        if(id==='EditTimePickerEnd') {
            setCurrentDeal(prev=>({...prev, end:timeString || '00:00'}))
        }
    };

    const onChangeDealContentHandler = (e) => {
        setCurrentDeal(prev=>({...prev,content: e.target.value}))
    }

    const onSubmitDealChangeHandler = () => {
        calendarTodosStore.updateDeal(currentDeal, dayId,dealCurrentIndex);
        onClose();
    }

    useEffect(()=>{
        setCurrentDeal(deal)
    },[deal])


    return <div>
        EditDeal
        <Input
            id={'EditDealContent'}
            value={currentDeal?.content}
            onChange = {onChangeDealContentHandler}
            placeholder="Basic usage"
            suffix={<PlusOutlined onClick={onSubmitDealChangeHandler} />}
        />
        <TimePicker
            id={'EditTimePickerStart'}
            onChange={(_, timeString)=>{onChangeTimeDealHandler( timeString,'EditTimePickerStart')}}
            format={'HH:mm'}
            value={dayjs(currentDeal?.start,'HH:mm')}
        />
        <TimePicker
            id={'EditTimePickerEnd'}
            onChange={(_, timeString)=>{onChangeTimeDealHandler( timeString,'EditTimePickerEnd')}}
            format={'HH:mm'}
            value={dayjs(currentDeal?.end,'HH:mm')} />
    </div>
}

EditDeal.propTypes = {
    deal: PropTypes.object.isRequired,
    dayId: PropTypes.string.isRequired,
    dealCurrentIndex: PropTypes.number.isRequired,
    onClose: PropTypes.func
}

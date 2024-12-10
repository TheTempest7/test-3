import {Button, Drawer} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useNavigate, useParams} from "react-router";
import {toJS} from "mobx";
import {observer} from "mobx-react";
import {AddNewDeal} from "05-features/add-deal";
import calendarTodosStore from "06-entities/main-calendar";
import {EditDeal} from "05-features/edit-deal";

import s from './DayDealsPage.module.scss';

export const DayDealsPage = observer(() => {
    const navigate = useNavigate();

    const {id} = useParams();

    const deals = toJS(calendarTodosStore.daysTodos[id]);

    const [open, setOpen] = useState(false);
    const [isNewDeal, setIsNewDeal] = useState(true);
    const [currentDealEditing, setCurrentDealEditing ] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const onClose = () => {
        setOpen(false);
    };

    const addNewDealHandler = () => {
        setOpen(true);
        setIsNewDeal(true);
    };

    const editDealHandler = ({content, start, end, type,index}) => {
        setOpen(true);
        setIsNewDeal(false);
        setCurrentIndex(index);
        setCurrentDealEditing({content, start, end, type});
    };

    const deleteDealHandler = (id,index) => {
        calendarTodosStore.deleteOneDeal(id,index);
    };

    const onNavigateButtonClick = () => {
        navigate('/');
    };

    return <div className={s.wrapper}>
         <Button onClick={onNavigateButtonClick}> Go Back To Calendar</Button>
         <Button onClick={addNewDealHandler} icon={<PlusOutlined />} type="primary">New account</Button>
        <ul className={s.dealsWrapper}>
            {deals?.map(({content, start, end, type}, index) => {
                return <li className={s.dealWrapper} key={index}>
                    <div className={s.info}>
                        <h5>{content}</h5>
                        {start && end && <p>{start} до {end} </p>}
                    </div>
                    <div className={s.actions}>
                        <Button  onClick={()=> editDealHandler({content, start, end, type, index})} type="text">
                            Редактировать
                        </Button>
                        <div className={s.bar}></div>
                        <Button onClick={()=> deleteDealHandler(id,index)} type="text">
                            Удалить
                        </Button>
                    </div>
                </li>
            })}
        </ul>
        <Drawer width={500} onClose={onClose} open={open}>
            {isNewDeal && <AddNewDeal dayId={id} onClose={onClose}/>}
            {!isNewDeal &&   <EditDeal deal={currentDealEditing} dayId={id} dealCurrentIndex={currentIndex} onClose={onClose} />}
        </Drawer>
    </div>
})

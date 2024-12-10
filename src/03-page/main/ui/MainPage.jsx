import {MainCalendar} from "06-entities/main-calendar";
import s from './MainPage.module.scss';

export const MainPage = () => {
    return <div className={s.wrapper}>
        <MainCalendar/>
    </div>
}

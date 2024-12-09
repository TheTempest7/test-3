import { Route, Routes} from 'react-router-dom';
import {MainPage} from "03-page/main";
import {DayDealsPage} from "03-page/day-deals";

export const AppRouter = () => {

    return (
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/:id/day-deals" element={<DayDealsPage/>}/>
            </Routes>
    );
};
